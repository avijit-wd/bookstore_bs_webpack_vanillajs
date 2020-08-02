import LocalStorage from "./LocalStorage";

class UI {
  static displayBooks() {
    const books = LocalStorage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.querySelector("#book-list");
    const bookRow = document.createElement("tr");
    bookRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
        `;
    bookList.appendChild(bookRow);
  }
  static removeBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const cardBody = document.querySelector(".card-body");
    const form = document.querySelector("#book-form");
    cardBody.insertBefore(div, form);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

export default UI;
