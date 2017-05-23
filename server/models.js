const os = require('os');

function envOrElse(name, defaultValue) {
  return process.env[name] !== undefined 
      ? process.env[name]
      : defaultValue
}

const user = envOrElse('PG_USER', os.userInfo().username)
const password = envOrElse('PG_PASSWORD', '')
const dbname = envOrElse('PG_DBNAME', 'postgres')
const host = envOrElse('PG_HOST', 'localhost')


const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : host,
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
