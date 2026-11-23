var bendovi = [
    "Slipknot",
    "Korn",
    "Linkin Park",
    "Deftones",
    "System Of A Down"
];

function prikaziBendove(niz) {

    var tekst = "";

    for (var i = 0; i < niz.length; i++) {
        tekst += niz[i] + "<br>";
    }

    return tekst;
}

function proveriAlbum(ocena) {

    if (ocena >= 8) {
        return "Odličan album!";
    }
    else {
        return "Album je prosečan.";
    }
}

function ucitajBendove() {

    var rezultat = document.getElementById("rezultat");

    rezultat.innerHTML = prikaziBendove(bendovi);

    rezultat.style.color = "lightgreen";
}

function oceniAlbum() {

    var ocena = document.getElementById("ocena").value;

    var poruka = proveriAlbum(ocena);

    document.getElementById("albumRezultat").innerHTML = poruka;
}

function posaljiFormu() {

    var ime = document.getElementById("ime").value;
    var omiljeniBend = document.getElementById("bend").value;
    var komentar = document.getElementById("komentar").value;

    var velikoIme = ime.toUpperCase();
    var duzinaKomentara = komentar.length;

    var ispis = "Fan: " + velikoIme + "<br>";
    ispis += "Omiljeni bend: " + omiljeniBend + "<br>";
    ispis += "Broj karaktera komentara: " + duzinaKomentara;

    document.getElementById("ispisForme").innerHTML = ispis;

    return false;
}

function dodajAlbum() {

    var noviAlbum = document.getElementById("noviAlbum").value;

    var albumi = [
        "Hybrid Theory",
        "Iowa",
        "Follow The Leader"
    ];

    albumi.push(noviAlbum);

    albumi.sort();

    var tekst = "";

    for (var i = 0; i < albumi.length; i++) {
        tekst += "<li>" + albumi[i] + "</li>";
    }

    document.getElementById("lista").innerHTML = tekst;
}

function promeniTemu() {

    document.body.classList.toggle("tamnaTema");
}
