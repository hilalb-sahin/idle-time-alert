
let idleTime = 0; //initialize the idle time as 0 
idleTime = setInterval(timerIncrement, 10000); //every 10 seconds call the function timerIncrement

//an event handler function to handle submit
function handleSubmit(){
    idleTime=0;
    //reset the idle time if you have submitted the form;
}


//increment the idleTime var and set limit
function timerIncrement() {

    idleTime = idleTime + 1;
    
    if (idleTime>6) { // 60 seconds
        alert("you haven't submitted any form in last minute, idle time.")
    }
    console.log(idleTime);
}
