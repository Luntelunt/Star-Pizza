function klikKob(){
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else
{
    sessionStorage.clickcount = 1;
}
document.getElementById("kurvAntal").innerHTML = sessionStorage.clickcount;
document.getElementById("endePris").innerHTML = sessionStorage.clickcount * 120;
}

function fjernKob(){
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) - 1;
    } else
    {
        sessionStorage.clickcount = 1;
    }
    document.getElementById("kurvAntal").innerHTML = sessionStorage.clickcount;
    document.getElementById("endePris").innerHTML = sessionStorage.clickcount * 120;
    }
