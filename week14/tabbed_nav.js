// Create a function to "switch" tabs

function openSeason(event, season_name) {
    let i;
    let tablinks = document.getElementsByClassName("tablinks");
    let season = document.getElementsByClassName("season");

    // hide all the seasons (the text div)
    for ( i = 0; i < season.length; i++ ) {
        season[i].style.display = "none";
    }

    // iterate through tablinks and remove "current"
    for ( i = 0; i < tablinks.length; i++ ) {
        tablinks[i].className = tablinks[i].className.replace("current","");
    }

    // show the selected season
    document.getElementById(season_name).style.display = "block";

    // Make the selected tab item current
    event.currentTarget.classList.toggle("current");

}