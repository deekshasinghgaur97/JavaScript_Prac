function trafficAction(color) {
    if (color === "red") {
        return "Stop";
    } else if (color === "yellow") {
        return "Slow down";
    } else if (color === "green") {
        return "Go";
    } else {
        return "Invalid color";
    }
}

// Test cases
console.log(trafficAction("red"));     // Output: Stop
// console.log(trafficAction("yellow"));  // Output: Slow down
// console.log(trafficAction("green"));   // Output: Go
// console.log(trafficAction("blue"));    // Output: Invalid color
// console.log(trafficAction("RED"));     // Output: Invalid color (case-sensitive)