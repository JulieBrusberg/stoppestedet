alert("HUSK AT LÆS OM DE NYE CORONA RETNINGSLINJER")



function scrollomos() {
    var elem = document.getElementById("omos");
    elem.scrollIntoView();
}
function scrollperso() {
    var elem = document.getElementById("perso");
    elem.scrollIntoView();
}
function scrollfri() {
    var elem = document.getElementById("fri");
    elem.scrollIntoView();
}
var frivillige = Array("CAFEFRIVLLIG", "AKTIVITETSFRIVILLIG", "TELEFONRÅDGIVNING", "ÅENTSIND UNGEGRUPPE", "PEER TO PEER", "SKIBHUSKABYSSEN"),
    selectEl = document.getElementById('frivillige');

for (var i = 0; i < frivillige.length; i++) {
    selectEl.options.add(new Option(frivillige[i], frivillige[i]));
}