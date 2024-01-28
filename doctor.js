function signup() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var emailEl = document.getElementById("email").value;
    var passEl = document.getElementById("pass").value;
    var blood = document.getElementById("blood").value;
    var depart = document.getElementById("depart").value;

    localStorage.setItem("blood1", blood);
    localStorage.setItem("depart1", depart);
    localStorage.setItem("name1", name);
    localStorage.setItem("age1", age);
    localStorage.setItem("add1", address);
    localStorage.setItem("email1", emailEl);
    localStorage.setItem("contactNumber", passEl);
}