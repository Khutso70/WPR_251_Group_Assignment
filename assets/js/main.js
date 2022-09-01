// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
//***********************- */
var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            
		}
        else{
            updateRecord(formData);
		}
   
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["projectName"] = document.getElementById("projectName").value;
    formData["employee"] = document.getElementById("employee").value;
    formData["targetDate"] = document.getElementById("targetDate").value;
    formData["status"] = document.getElementById("status").value;
    formData["priority"] = document.getElementById("priority").value;
    formData["bugSummary"] = document.getElementById("bugSummary").value;
 
    

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.projectName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.employee;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.targetDate;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.status;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.priority;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.bugSummary;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  
    selectedRow = td.parentElement.parentElement;
    document.getElementById("projectName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("employee").value = selectedRow.cells[1].innerHTML;
    document.getElementById("targetDate").value = selectedRow.cells[2].innerHTML;
    document.getElementById("status").value = selectedRow.cells[3].innerHTML;
    document.getElementById("priority").value = selectedRow.cells[4].innerHTML;
    document.getElementById("bugSummary").value = selectedRow.cell[5].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.projectName;
    selectedRow.cells[1].innerHTML = formData.employee;
    selectedRow.cells[2].innerHTML = formData.targetDate;
    selectedRow.cells[3].innerHTML = formData.status;
    selectedRow.cells[4].innerHTML = formData.priority;
    selectedRow.cells[5].innerHTML = formData.bugSummary;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("projectName").value = '';
    document.getElementById("employee").value = '';
    document.getElementById("targetDate").value = '';
    document.getElementById("status").value = '';
    selectedRow = null;
}
// changing color
function changeColor(){
  if(selectedRow.cells[5].innerHTML=="Low"){
  document.getElementById('storeList').getElementsByClassName("Low").changeColor="red";
  }
}
//Update profile image or choose from the list
const imgDiv = document.querySelector('.user');
const img = document.querySelector('#thePFP');
const file = document.querySelector('#file');

file.addEventListener('change', function(){
  // this refers to the file
  const choosedFile = this.files[0];

if (choosedFile) {
  const reader = new FileReader();

  reader.addEventListener('load', function(){
    img.setAttribute('src', reader.result);
  });

  reader.readAsDataURL(choosedFile);
}

});

//Search function
function Search(item){
        var collection = document.getElementsByClassName("employee");
        for (i = 0; i < collection.length; i++)
        {
            if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                collection[i].style.display = "block";
            } 
            else{
                    collection[i].style.display = "none";
                }
            
        }
    }
    function Search(item){
        var collection = document.getElementsByClassName("projectName");
        for (i = 0;i < collection.length; i++){
            if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                collection[i].style.display = "block";
            } 
            else{
                    collection[i].style.display = "none";
                }
            
        }
    }
    function Search(item){
        var collection = document.getElementsByClassName("targetDate");
        for (i = 0;i < collection.length; i++){
            if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                collection[i].style.display = "block";
            } 
            else{
                    collection[i].style.display = "none";
                }
            
        }
    }
    function Search(item){
        var collection = document.getElementsByClassName("status");
        for (i = 0;i < collection.length; i++){
            if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                collection[i].style.display = "block";
            } 
            else{
                    collection[i].style.display = "none";
                }
            
        }
    }
    function Search(item){
        var collection = document.getElementsByClassName("priority");
        for (i = 0;i <collection.length; i++){
            if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                collection[i].style.display = "block";
            } 
            else{
                    collection[i].style.display = "none";
                }
            
        }
    }