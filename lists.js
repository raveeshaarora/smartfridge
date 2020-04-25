function openFirstForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("enterForm").style.display = "none";
  }
  
  function closeFirstForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("enterForm").style.display = "block";
  }

  function closeSecondForm() {
    document.getElementById("enterForm").style.display = "none";

    var table = document.getElementById("lists");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "Asparagus";

cell2.innerHTML = '<button class="addminus" onclick="subtract_item(this)"><img src="icons/minus.png" width="  20" height="20" class="d-inline-block align-center" alt=""></button>  '  + 4 +  '  <button class="addminus" onclick="add_item(this)"><img src="icons/plus.png" width="20" height="20" class="d-inline-block align-center" alt=""></button>'
    

  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function subtract_item($this) {
    var cell = $this.parentElement;
    var innertext = cell.innerText - 1;
    if (parseInt(innertext) < 0) {
      cell.innerHTML = '<button class="addminus" onclick="subtract_item(this)"><img src="icons/minus.png" width="  20" height="20" class="d-inline-block align-center" alt=""></button>  '  + String(0) +  '  <button class="addminus" onclick="add_item(this)"><img src="icons/plus.png" width="20" height="20" class="d-inline-block align-center" alt=""></button>'
       
    } else {
      cell.innerHTML = '<button class="addminus" onclick="subtract_item(this)"><img src="icons/minus.png" width="  20" height="20" class="d-inline-block align-center" alt=""></button>  '  + innertext +  '  <button class="addminus" onclick="add_item(this)"><img src="icons/plus.png" width="20" height="20" class="d-inline-block align-center" alt=""></button>'
    } 
  }

  function add_item($this) {
    var cell = $this.parentElement;
    var temp = parseInt(cell.innerText, 10);
    var inttext = temp + 1;
    var innertext = inttext.toString();
    cell.innerHTML = '<button class="addminus" onclick="subtract_item(this)"><img src="icons/minus.png" width="  20" height="20" class="d-inline-block align-center" alt=""></button>  '  + innertext +  '  <button class="addminus" onclick="add_item(this)"><img src="icons/plus.png" width="20" height="20" class="d-inline-block align-center" alt=""></button>'
    
  }