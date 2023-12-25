//Api Calling from JAVASCRIPT
//1. XMLHttpRequest : http://universities.hipolabs.com/search?country=United+States
//Var is globally and Let is local or block scope. Hoaisting a flag.

var id_for_update;
var jsondata;
var request = new XMLHttpRequest();
//request.open("GET","http://universities.hipolabs.com/search?country=United+States");
request.open("GET","http://127.0.0.1:8000/students/");
request.send();

// request.onload = function(){
// };

request.onload=() => {
    //console.log(request);
    jsondata = JSON.parse(request.response);
    console.log(jsondata);
    loadTable(jsondata);
    
    // for (var i = 0 ; i< jsondata["length"]; ++i){
       
    //     console.log(jsondata[i]["name"]);
    //     console.log(jsondata[i]["web_pages"][0]);
    // }
};

function loadTable(jsondata){
    var contentDiv = document.getElementById("content");
    var tableData = "<table> <tr><th>Name</th><th>Age</th><th>Class</th><th>Address</th></tr>";
    for (var i = 0 ; i < jsondata["length"];++i){
        var id = jsondata[i]["id"] 
        tableData = tableData+`
        <tr>
        <td id = "studentName_${id}">${jsondata[i]["studentName"]}</td>
        <td id = "studentAge_${id}">${jsondata[i]["studentAge"]}</td>
        <td id = "studentClass_${id}">${jsondata[i]["studentClass"]}</td>
        <td id = "studentAddress_${id}">${jsondata[i]["studentAddress"]}</td>
        <td><button id = "update_${id}" onclick = "updateData(this.id)">Update</button></td>
        <td><button id = "delete_${id}" onclick = "deleteData(this.id)">Delete</button></td>
        </tr>
        `
    }
    tableData= tableData + `</table>`;

    contentDiv.innerHTML= tableData;

};

function insertData(){
    
    var data = {
        "studentName": document.getElementById("studentName").value,
        "studentAge": Number(document.getElementById("studentAge").value),
        "studentClass": Number(document.getElementById("studentClass").value),
        "studentAddress":document.getElementById("studentAddress").value
    }

    console.log(data);
    //var newjsondata = {"studentName": "Hari Prasad", "studentClass": 9, "studentAge": 15, "studentAddress": "Ratnapark"};
    request.open("POST","http://127.0.0.1:8000/students/");
    request.setRequestHeader("Content-Type","application/json");
   // request.send(JSON.stringify(newjsondata));
    request.send(JSON.stringify(data));
    request.onload =() => {
        console.log(request.response);
     };

};

function updateData(update_id){
    document.getElementById("addStudent").style.display = "none";
    document.getElementById("updateStudent").style.display = "block";
    console.log("Console Log Print: " + typeof(update_id));
    var array = update_id.split("_");
    var id = Number(array[1]);
    id_for_update = id;

    var studentName = document.getElementById("studentName_"+id).textContent;
    var studentAge = document.getElementById("studentAge_"+id).innerText;
    var studentClass = document.getElementById("studentClass_"+id).textContent;
    var studentAddress = document.getElementById("studentAddress_"+id).innerText;
    console.log(studentName);


    document.getElementById("studentName").value = studentName;
    document.getElementById("studentAge").value = studentAge;
    document.getElementById("studentClass").value = studentClass;
    document.getElementById("studentAddress").value = studentAddress;
        

    //console.log(id);

};

function confirmUpdate(id){
    var data = {
        "id":id_for_update,
        "studentName": document.getElementById("studentName").value,
        "studentAge": Number(document.getElementById("studentAge").value),
        "studentClass": Number(document.getElementById("studentClass").value),
        "studentAddress":document.getElementById("studentAddress").value
    }
    request.open("PUT","http://127.0.0.1:8000/students/");
    request.setRequestHeader("Content-Type","application/json");
   // request.send(JSON.stringify(newjsondata));
    request.send(JSON.stringify(data));
    request.onload =() => {
        console.log(request.response);
     };
};

function deleteData(delete_id){
    var array = delete_id.split("_");
    var id = Number(array[1]);
    data = {
        "id": id
    };
    request.open("DELETE","http://127.0.0.1:8000/students/");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(data));
    request.onload =() => {
        console.log(request.response);
     };

};


