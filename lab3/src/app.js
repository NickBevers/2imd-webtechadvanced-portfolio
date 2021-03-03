class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(this.title)
    // HINT🤩 this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement("li");
    newNote.addEventListener('click', this.remove.bind(newNote));
    

    // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    console.log("Add");
    let notes = document.querySelector("#taskList").appendChild(this.element);
    notes.innerHTML = this.title;
    // HINT🤩
    // this function should append the note to the screen somehow
  }

  saveToStorage() {
    if(localStorage.getItem('noteArray') != null){
      let nArray = JSON.parse(localStorage.getItem('noteArray'));
      nArray.push(this.title);
      localStorage.setItem('noteArray', JSON.stringify(nArray));
    }
    else{
      localStorage.setItem('noteArray', JSON.stringify([this.title]));
      console.log(localStorage.getItem('noteArray'));
    }
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }

  remove() {
    //get index of clicked li-item in ul
    let unordenedList = document.querySelector("#taskList");
    const index = [...unordenedList.childNodes].indexOf(this);

    //remove item from local storage using index found earlier
    let nArray = JSON.parse(localStorage.getItem('noteArray'));
    nArray.splice(index, 1);
    localStorage.setItem('noteArray', JSON.stringify(nArray));

    document.querySelector("#taskList").removeChild(this);  
    
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    // .removeChild(this)
    // remove the item from screen and from localstorage
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));

    this.loadNotesFromStorage();

    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();

    
  }

  loadNotesFromStorage() {
    if (localStorage.getItem('noteArray') != null){
      let cardsArray = JSON.parse(localStorage.getItem('noteArray'));

      cardsArray.forEach(j => {
        let stickyNote = new Note(j);
        console.log(j);
        stickyNote.add();
      })

      // for (let i = 0; i < cardsArray.length; i++) {
      //   let stickyNote = new Note(cardsArray[i]);
      //   stickyNote.add();
      // }
    }
    
    // HINT🤩
    // load all notes from storage here and add them to the screen
  }

  createNote(e) {
    if (e.key === "Enter"){
      console.log("Enter works");
      let textVal = this.txtTodo.value;

      let newNote = new Note(textVal);
      newNote.add();
      newNote.saveToStorage();

      this.reset();
      e.preventDefault();
    }
    // this function should create a new note by using the Note() class
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class
    // if (e.key === "Enter")
  }

  reset() {
    // this function should reset the form / clear the text field
    this.txtTodo.value = "";

  }
}

let app = new App();
