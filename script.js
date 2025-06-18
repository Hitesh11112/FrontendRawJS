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


