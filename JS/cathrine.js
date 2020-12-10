// Alert //
alert("OBS: HUSK AT LÆSE OM DE NYE COVID-19 RETNINGSLIJNER!")

// Scroll function //
function scrollVoresTilbud() {
    document.getElementById("voresTilbud").scrollIntoView();
}

function scrollVoresKalender() {
    document.getElementById("voresKalender").scrollIntoView();
}

function klikStoppestedet() {
    document.getElementById("klikStoppestedet").innerHTML = "";
}
// Hide & show event //
function klikStoppestedet() {
    var x = document.getElementById("klikStoppestedet");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else { x.style.display = "none"; }
}