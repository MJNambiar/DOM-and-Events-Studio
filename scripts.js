function init () {
    
    const takeOffButton = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById ("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", () => {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result = true) {
            paragraph.setAttribute ("flightStatus", "Shuttle in flight.");
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight = 10000

        }

    })
}

window.addEventListener("load", init);
