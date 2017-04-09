// document.createElement('textarea')

// > > >

// > > > and a button that when clicked adds the textContent of the 
// textarea and a key to localStorage

// > > >

// > > > you could have an input field, use the date(new Date()) or
//  use the first few words of your text for the key. 


// > one for composing a note

// > one for reading notes (notes could be presented as a list 
// 	of titles that expand when clicked)

// > notes should be stored in indexedDB with something like pouchDB.


let newNotes = [];
let notesList = [];
let key = localStorage;

getStorage();

function addStorage() {
	storage.setItem('notes', JSON.stringify(notes));
}

function getStorage() {
	notes = JSON.parse(myLS.getItem('notes'));

}

let textContent = document.createElement('textarea'); 
createButton.addEventListener('click', (e) => {
	newDate();
	addStorage();
})

let saveItem = document.getElementById('save');
saveItem.addEventListener('click', (e) =>{
	saveNote();
	addStorage();
})

let deleteItem = document.getElementById('delete');
deleteItem.addEventListener('click', (e) =>{
	deleteNote();
	addStorage();
})

