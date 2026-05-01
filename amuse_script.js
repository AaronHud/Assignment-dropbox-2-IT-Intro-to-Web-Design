/*
===========================================
            Hudson: Assign 4
            amuse_script.js
              Due: May. 4
===========================================
*/


function rideInfo(rideID, rideName)
{
    alert(
        "You clicked on the ride with the ID of: "
        + rideID
        + " and name of: "
        + rideName
    );
}



function showRides()
{
    let rideNames =
    [
        "The Incredible Hulk Coaster",
        "KrustyLand",
        "VelociCoaster",
        "Transformers Ride",
        "Rip Ride Rockit"
    ];


    let rideDescriptions =
    [
        "The Incredible Hulk Coaster is a gamma radiation themed coaster famously known for shooting riders from 0 to 40 mph in 2 seconds uphill into a zero-g roll. It reaches speeds of 67 mph.",

        "KrustyLand is a themed area centered around motion simulation. Experience the Simpson family through chaotic attractions in 4D.",

        "The VelociCoaster is a high-speed intense ride reaching speeds of 70 mph in 2.4 seconds. It is the tallest and fastest launch coaster in Florida.",

        "The Transformers come to life in this 4D motion simulator that puts you inside a battle between Autobots and Decepticons.",

        "This is a 167-foot tall, music-themed steel coaster reaching 65 mph. It also features a unique 90-degree lift hill and onboard audio."
    ];


    let rideImages =
    [
        "universal-entrance.jpg",
        "universal-ride-view.jpg",
        "velocicoaster.jpg",
        "transformers-ride.jpg",
        "rip-ride-rockit.jpg"
    ];


    let rideIDs =
    [
        "HULK",
        "KRUSTY",
        "VELOCI",
        "TRANS",
        "RIP"
    ];


    let output = "";


    for(let i = 0; i < rideNames.length; i++)
    {
        output += `
        
        <hr>

        <div class="ride-block">

            <img
                src="${rideImages[i]}"
                alt="${rideNames[i]}"
                class="ride-img"
            >

            <h3 onclick="rideInfo('${rideIDs[i]}','${rideNames[i]}')">

                ${rideNames[i]}

            </h3>

            <p>

                ${rideDescriptions[i]}

            </p>

        </div>

        `;
    }


    document.getElementById("rideOutput").innerHTML = output;
}



function orderTics()
{
    alert("Your total price is: $35");
}
