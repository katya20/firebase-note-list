console.log("script.js is running");

var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    getNotesForName(nameInput.val());
    console.log(nameInput.val());
    $("#note-list").append(note);
    // we have a new name! Now what?
  }	
})

function getNotesForName(name) {  
  onNewListItem(nameInput.val() + "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(nameInput.val() + "/notes", noteInput.val())
    console.log("noteInput keydown is working");
    $("#note-list").append(noteInput.val());
  }
})


