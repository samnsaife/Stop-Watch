// Variables to track stopwatch state and time
var isStop = true;  // Flag to check if the stopwatch is stopped
var s = 0; // Seconds
var min = 0; // Minutes
var hr = 0; // Hours

// Function to start the stopwatch
function start(){
    if(isStop == true){
        isStop = false;
        timer();
    }
}
// Function to update the stopwatch time
function timer(){
    if(isStop == false) {
        // Convert time variables to integers
        s = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr);
        s++;
        if(s==60){
            s=0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++
        }
        // Format single-digit seconds, minutes, and hours with leading zeros
        if(s<10){
            s = "0" + s;
        }
        if(min<10){
            min = "0" + min
        }
        if(hr<10){
            hr = "0" + hr
        }
        // Update the stopwatch display
        stopwatch.innerHTML = hr + " : " + min + " : " + s;
        // Call the timer function again after 1000 milliseconds (1 second
        setTimeout("timer()", 1000);
    }
}
// Function to stop the stopwatch
function stop(){
    isStop = true;
}
// Function to reset the stopwatch to zero
function reset(){
    isStop = true;
    s = 0;
    min= 0;
    hr = 0;
    // Update the stopwatch display to "00 : 00 : 00"
    stopwatch.innerHTML = "00 : 00 : 00";
}
