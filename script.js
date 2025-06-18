// Wait until the user stops triggering the event for a specific time, and then run the function once.
let timeout;
const debouncing = () =>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        clicked();
    },1000);
};

//Throttling : Limit the function execution to once every X milliseconds, even if the event keeps firing.
    

async function clicked() {
    try {
        const firstNum = document.querySelector(".input1").value;
        const secondNum = document.querySelector(".input2").value;
        const output = document.querySelector(".output");

        const response = await fetch("http://localhost:3000/users?a=" + firstNum + "&b=" + secondNum);
        const ans = await response.text();
        console.log(ans);
        output.innerHTML = ans;
    } catch (e) {
        console.log("Error: "+ e);
    }
};


