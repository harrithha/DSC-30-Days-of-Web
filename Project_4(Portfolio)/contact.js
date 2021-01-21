var count = 0
document.getElementById("submit-btn").addEventListener('click', () => {
  var flag = 0;
  var flag2 = 0;



  let fname = document.getElementById('fname').value;
  let age = document.getElementById('age').value;
  let email = document.getElementById('email').value;
  let msg = document.getElementById('msg').value;
  var table = document.getElementById("details");
  var k = table.rows.length;


  if (fname == "" && age == "" && email == "" && msg == "") {
    flag2=1
  
    alert("Please enter something in the input fields!")

  }

  else {
    for (var i = 0; i < k; i++) {
      if (table.rows[i].cells[0].innerHTML == fname && table.rows[i].cells[1].innerHTML == age && table.rows[i].cells[2].innerHTML == email
        && table.rows[i].cells[3].innerHTML == msg) {
        flag = 1;
        
        alert('Duplicate Values!')
        break;
      }
      
 
     
    }
    if (flag!=1 && flag2!=1) {
      count++
      // if(count<=0){
      //   alert("Count is less")

      // }
      // else{
      var row = table.insertRow(count); 
      //}
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = fname;
      cell2.innerHTML = age;
      cell3.innerHTML = email;
      cell4.innerHTML = msg;
    }
  }
})

function clear1() {
  document.getElementById('fname').value = "";
  document.getElementById('age').value = "";
  document.getElementById('email').value = "";
  document.getElementById('msg').value = "";
}


