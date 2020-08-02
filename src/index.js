import UI from "./UI";
import Book from "./Book";
import LocalStorage from "./LocalStorage";
import "./styles/main.scss";

// Event: Display books
document.addEventListener("DOMContentLoaded", UI.displayBooks());

// Event: Add books
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);

    LocalStorage.addBook(book);

    UI.showAlert("Book added successfully", "success");

    UI.clearFields();
  }
});

// Event: Remove books
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.removeBook(e.target);

  LocalStorage.removeBook(
    e.target.parentElement.previousElementSibling.textContent
  );

  UI.showAlert("Book removed", "info");
});
