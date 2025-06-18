const input1Elem = document.querySelector(".input1");
const input2Elem = document.querySelector(".input2");
const outputElem = document.querySelector(".output");


const checkBtn = document.querySelector(".check").addEventListener('click',()=>{
    outputElem.value = parseInt(input1Elem.value) + parseInt(input2Elem.value);
});


