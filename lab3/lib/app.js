"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(this.title); // HINT🤩 this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote)); // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      console.log("Add");
      var notes = document.querySelector("#taskList").appendChild(this.element);
      notes.innerHTML = this.title; // HINT🤩
      // this function should append the note to the screen somehow
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      if (localStorage.getItem('noteArray') != null) {
        var nArray = JSON.parse(localStorage.getItem('noteArray'));
        nArray.push(this.title);
        localStorage.setItem('noteArray', JSON.stringify(nArray));
      } else {
        localStorage.setItem('noteArray', JSON.stringify([this.title]));
        console.log(localStorage.getItem('noteArray'));
      } // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

    }
  }, {
    key: "remove",
    value: function remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage(); // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {// HINT🤩
      // load all notes from storage here and add them to the screen
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      if (e.key === "Enter") {
        console.log("Enter works");
        var textVal = this.txtTodo.value;
        var newNote = new Note(textVal);
        newNote.add();
        newNote.saveToStorage();
        this.reset();
        e.preventDefault();
      } // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")

    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
    }
  }]);

  return App;
}();

var app = new App();