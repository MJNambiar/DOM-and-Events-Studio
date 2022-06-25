function init () {
    
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById ("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    let currentMiles = 10000;
    console.log('ShuttleHeight Type' + typeof(shuttleHeight));
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById ("missionAbort");
    const upButton = document.getElementById ("up");
    const downButton = document.getElementById ("down");
    const rightButton = document.getElementById ("right");
    const leftButton = document.getElementById ("left");
    let rocket = document.getElementById ("rocket");

    takeOffButton.addEventListener("click", () => {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        console.log("Result: " + result);
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = currentMiles;
        }
    });

    landButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Langing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = Number(0);
        console.log(typeof(shuttleHeight));
    });

    abortButton.addEventListener("click", () => {
        let result2 = window.confirm("Confirm that you want to abort the mission.");
        if (result2) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = Number(0);
        }
    });
    shuttleHeight.innerHTML = Number(0);
    upButton.addEventListener("click", () => {
        currentMiles += 10000;
        shuttleHeight.innerHTML = currentMiles;
        
    });

    downButton.addEventListener("click", () => {
        currentMiles -= 10000;
        shuttleHeight.innerHTML = currentMiles;
    });

    rightButton.addEventListener("click", () => {
        if (rocket.style.left === '') {
            console.log("inside the if statement");
            rocket.style.left = "10px";
        }
        rocket.style.left = `${parseInt(rocket.style.left) + 10}px`;
    });

    leftButton.addEventListener("click", () => {
        if (rocket.style.right === '') {
            console.log("inside the if statement");
            rocket.style.right = "10px";
        }
        rocket.style.right = `${parseInt(rocket.style.right) + 10}px`;
    });

}

window.addEventListener("load", init);
