function addLead() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("status").value;

    let table = document.getElementById("leadTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = status;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
