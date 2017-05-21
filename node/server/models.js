const os = require('os');

const user = process.env.PG_USER !== undefined 
    ? process.env.PG_USER
    : os.userInfo().username 

const password = process.env.PG_PASSWORD !== undefined
    ? process.env.PG_PASSWORD
    : ''

const dbname = process.env.PG_DBNAME !== undefined
    ? process.env.PG_DBNAME
    : 'postgres'

console.log(user, password, dbname);

const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : user,
    password : password,
    database : dbname,
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Book = bookshelf.Model.extend({
  tableName: 'books',
  libraries: function() {
    return this.hasMany(Library).through(LibraryBook, 'id', 'book_id', 'library_id');
  },
  libraryBooks: function() {
    return this.hasMany(LibraryBook);
  },
  formats: function() {
    return this.hasMany(Format).through(BookFormat, 'id', 'book_id', 'format_id');
  }
});

const LibraryBook = bookshelf.Model.extend({
  tableName: 'library_books'
});

const Library = bookshelf.Model.extend({
  tableName: 'libraries',
});

const BookFormat = bookshelf.Model.extend({
  tableName: 'book_formats',
});

const Format = bookshelf.Model.extend({
  tableName: 'formats',
});

export {
  Book,
  Library,
  bookshelf
}
