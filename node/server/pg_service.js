import { Book, Library, bookshelf } from './models'

export const search = (params) => {
  const BookCollection = bookshelf.Collection.extend({
    model: Book
  })
  return new BookCollection().query(function(qb) {
    qb.innerJoin('library_books', 'books.id', 'library_books.book_id');
    qb.whereRaw(`tsv @@ plainto_tsquery('${params.search}')`)
    qb.whereIn('library_books.library_id', params.libraries)
    qb.limit(params.limit)
    qb.offset(params.offset)
  }).fetch({
    debug: true,
    withRelated: ['libraries', 'libraryBooks', 'formats']
  }).then(function(books) {
    return books.map(function(book) {
      const out = book.toJSON();
      const libraries = {};
      book.related("libraries").toJSON().map(l => {
        libraries[l.id] = l
      });
      out.locations = book.related("libraryBooks").toJSON().map(l => {
        const lib = libraries[l.library_id];
        delete l.response
        return Object.assign(l, {
          library_token: lib.collection_token,
          library_name: lib.name,
        })
      })
      out.formats = book.related("formats").toJSON()
      delete out.libraries
      delete out.libraryBooks
      return out
    })
  }).catch(function(err) {
    console.error(err);
  });
}

export const libraries = () => {
  return Library.fetchAll().then((libraries) => {
    return libraries.map(l => l.toJSON());
  })
}
