var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 
  var txt = document.createElement("i");
  txt.classList.add("fa");
  txt.classList.add("fa-trash");
  
  console.log(txt)
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if (ev.target.getAttribute("flag") === "false") {
      
      ev.target.classList.add('checked');
    }

    const listItems = document.querySelectorAll("li");

    for (let i = 0; i < listItems.length; i++){
      listItems[i].classList.remove("edititem");
      listItems[i].setAttribute("flag", "false");
    }
    ev.target.classList.add("edititem");
    ev.target.setAttribute("flag", "true");
    ev.target.addEventListener("keypress", (g) => {
      if (g.key === "Enter") {
        ev.target.setAttribute("contenteditable", "false");
        ev.target.setAttribute("flag", "false");           

        ev.target.classList.add('checked');
        }
    })

  }

}, false);
function done(){
}
function myfun() {
  const li = document.getElementById("myUL");
  while (li.hasChildNodes()) {
      li.removeChild(li.firstChild)
  }

}

function del() {
  const listItems = document.querySelectorAll("li");

  for (let i = 0; i < listItems.length; i++){
      if(listItems[i].getAttribute("flag") === "true"){
        listItems[i].setAttribute("contenteditable", "true");
        listItems[i].classList.remove("checked")
     }
    }
} 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Fill in a task !");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");

  var txt = document.createElement("i");
  txt.classList.add("fa"); 
  txt.classList.add("fa-trash"); 
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}