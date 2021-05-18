export class BooksFormConfig {
  public author;
  public bookName;

  constructor() {
    this.author = ['', []];
    this.bookName = [{ value: '', disabled: true }, []];
  }
}
