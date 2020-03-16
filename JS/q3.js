
// date ...............
var d = new Date();
document.getElementById('date').innerHTML = d;

//  output list .........

// document.querySelector('form');


var output = document.getElementById('outPut');
var uList = document.createElement('il');
output.appendChild(uList);
var iList = document.createElement('li');
uList.appendChild(iList);

// the constraucter...........................

var form = document.getElementById("doList1");

var inputE1 = document.getElementById('input1');
localStorage.setItem('name', inputE1.value);
var inputE2 = document.getElementById('input2');
localStorage.setItem('date',inputE2.value);

function FormInput() {
    this.name = inputE1;
    this.date = inputE2;

}


function renderli (){

}
renderli();

// saved to local storage 



var newNote = new FormInput();

function creatNewNote(){
    newNote.name = dolist.name;
    newNote.date = dolist.Date;
}
FormInput();
console.log(inputE1)
