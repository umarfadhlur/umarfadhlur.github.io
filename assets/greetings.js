var today = new Date();
var curHr = today.getHours();
var name = prompt("Siapa nama anda?");

if (curHr < 12) {
    document.getElementById("greetings").innerText = "Hai, selamat pagi " + name + "!";
} else if (curHr < 18) {
    document.getElementById("greetings").innerText = "Hai, selamat siang " + name + "!";
} else {
    document.getElementById("greetings").innerText = "Hai, selamat malam " + name + "!";
}