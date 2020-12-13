// Alert //
alert("OBS: HUSK AT LÆSE OM DE NYE COVID-19 RETNINGSLIJNER!")


// Function - Scroll //
function scrollVoresTilbud() {
    document.getElementById("voresTilbud").scrollIntoView();
}

function scrollVoresKalender() {
    document.getElementById("voresKalender").scrollIntoView();
}

// Array & Loop - Dropdown //
var tilbudStoppestedet = Array("STOPPESTEDET", "ÅBENT SIND UNGEGRUPPE", "PEER TO PEER", "SAMVÆRSVEN", "PÅRØRENDE GRUPPER", "SKIBHUS KABYSSEN", "TELEFONRÅDGIVNING", "BISIDDER"),
    selectEl = document.getElementById('tilbudStoppestedet');

for (var i = 0; i < tilbudStoppestedet.length; i++) {
    selectEl.options.add(new Option(tilbudStoppestedet[i], tilbudStoppestedet[i]));
}

// Event - Hide & show //

function klikStoppestedet() {
    var x = document.getElementById("klikStoppestedet");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none"
    }
}

function klikStoppestedet2() {
    var u = document.getElementById("klikAbentsind"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet3() {
    var u = document.getElementById("klikPeer"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet4() {
    var u = document.getElementById("klikSam"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet5() {
    var u = document.getElementById("klikPG"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet6() {
    var u = document.getElementById("klikSK"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet7() {
    var u = document.getElementById("klikTlfR"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

function klikStoppestedet8() {
    var u = document.getElementById("klikBS"); {
        if (u.style.display === "none") {
            u.style.display = "block";
        }
        else {
            u.style.display = "none"
        }
    }
}

//Objekt//

var kalender = { Dag: "Tirsdage", Aktivitet: "Walk n´ Talk", Tid: "Kl. 13.00", Lokation: "Afarten ved Munkemose" };