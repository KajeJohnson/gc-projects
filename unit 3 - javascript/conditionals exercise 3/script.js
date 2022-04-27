
// Set a variable trafficLight to the string green. If the color of the light is green console log “GO”. If the light is yellow console log “Slow down” if the light is red console log “Stop”


// let trafficLight = "red";

// if (trafficLight === "green") {
//     console.log("GO");
// }
// else if (trafficLight === "yellow") {
//     console.log("Slow Down");
// }
// else if (trafficLight === "red") {
//     console.log("Stop!");
// }

//OR! ---Same as above!!! two if statements instead of if then statements 


// if (trafficLight === "green") {
//     console.log("go!");
// }
// if (trafficLight == "yellow") {
//     console.log("slow down");
// }

//Switch

let trafficLight = "yellow";

switch (trafficLight) {
    case "green":
        console.log("go!");
        break;
    case "yellow":
        console.log("slow down");
        break;         
    case "red":
        console.log("stop!");
        break;
       
    default:
        console.log("check your spelling")    
}
