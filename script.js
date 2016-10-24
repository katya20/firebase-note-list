console.log("script.js is running");

var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    getNotesForName(nameInput.val());
    console.log(nameInput.val());
    $("#note-list").html("");
  }	
})

function getNotesForName(name) {  
  onNewListItem(nameInput.val() + "/notes", function(note) {
    $("#note-list").append("<div>" + note + "</div>")
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(nameInput.val() + "/notes", noteInput.val())
    console.log("noteInput keydown is working");
  }
})


