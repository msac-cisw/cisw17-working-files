// tabbed nav js
// Create an openSoda function to show/hide content

function openSoda(event, sodaType) {
    // console.log("it's working", sodaType);   // test code
    // Create variables: tablinks, sodas
    let tablinks = document.getElementsByClassName("tablinks");
    let sodas = document.getElementsByClassName("soda");

    // hide all the sodas using a loop
    for ( let i=0; i<sodas.length; i++) {
        sodas[i].style.display = "none";
    }
    // remove "current" from all the tabs
    for ( let i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
    }
    // show the selected soda
    document.getElementById(sodaType).style.display ="block";

    // add current to the selected soda
    event.currentTarget.classList.toggle("current");
}