const input=document.querySelector('input');
const button=document.querySelector('button');
const list=document.querySelector('list');

button.addEventListener('click', function()) {
 let scriptreference= input.value;
 input.value="";
 if (scriptreference !="") {

const scripture=document.createElement('li');
const text =document.createElement('span');
const buttonList=document.createElement('button');

scripture.appendChild(text);
text.textContent=scriptreference;
scripture.appendChild(buttonList)
buttonList.textContent= "\u274C";
list.appendChild(scripture);
buttonList.onclick=function(e){
    list.removeChild(scripture);
}

input.focus();}
else {
    window.alert("Reference field cannot be left blank, please enter a reference.")
}}