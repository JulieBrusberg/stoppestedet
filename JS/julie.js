// ALERT
alert("OBS: HUSK AT LÆSE OM DE NYE COVID-19 RETNINGSLINJER!")
// SCROLL FUNKTION
function scrollomos() {
    document.getElementById("omos").scrollIntoView();
}
function scrollperso() {
    document.getElementById("perso").scrollIntoView();
}
// TO MÅDER
function scrollfri() {
    var elem = document.getElementById("fri");
    elem.scrollIntoView();
}
function scrollblivfri() {
    var elem = document.getElementById("blivfri");
    elem.scrollIntoView();
}
//Hide and show ved klik
function BlivFrivilligKlik() {
    var x = document.getElementById("containerfrivillig");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none"
    }
    // DROPDOWN
    var frivillige = Array("CAFEFRIVLLIG", "AKTIVITETSFRIVILLIG", "TELEFONRÅDGIVNING", "ÅENTSIND UNGEGRUPPE", "PEER TO PEER", "SKIBHUSKABYSSEN"),
        selectEl = document.getElementById('frivillige');

    for (var i = 0; i < frivillige.length; i++) {
        selectEl.options.add(new Option(frivillige[i], frivillige[i]));
    }
}

//Object
var StoppestedetsBesøgende = { Type: "Unge Besøgende", AgeGroup: "18-35", Illness: "Mentally ill" };