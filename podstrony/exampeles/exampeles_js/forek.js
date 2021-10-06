function wypisz() {
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";
    for (i = liczba1; i <= liczba2; i++) {
        napis = napis + i + " ";
    }
    document.getElementById("for").innerHTML = napis;
}