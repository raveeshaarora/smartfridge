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

    var table = document.getElementById("inventory");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

// Add some text to the new cells:
cell1.innerHTML = "Asparagus";
cell2.innerHTML = "4";
cell3.innerHTML = "90";
cell4.innerHTML = "";
cell5.innerHTML = "7 days"
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }