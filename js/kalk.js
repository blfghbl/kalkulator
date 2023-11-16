let buttonsum = document.getElementById("convertsum");
let buttonmin = document.getElementById("convertmin");
let buttonumn = document.getElementById("convertumn");
let buttondel = document.getElementById("convertdel");
let inputone = document.getElementById("numberone");
let inputtwo = document.getElementById("numbertwo");
let output = document.getElementById("result");

function printsum() {
    let inputone = Number(inputone.value); 
    let inputtwo = Number(inputtwo.value);
    let result = inputone + inputtwo ;
    output.value = result;
    }
    function printmin() {
        let inputone = Number(inputone.value); 
        let inputtwo = Number(inputtwo.value);
        let result = inputone - inputtwo ;
        output.value = result;
        }
        function printumn() {
            let inputone = Number(inputone.value); 
            let inputtwo = Number(inputtwo.value);
            let result = inputone * inputtwo ;
            output.value = result;
            }
            function printdel() {
                let inputone = Number(inputone.value); 
                let inputtwo = Number(inputtwo.value);
                let result = inputone / inputtwo ;
                output.value = result;
                }

    buttonsum.addEventListener("click", printsum);
    buttonsum.addEventListener("click", printmin);
    buttonsum.addEventListener("click", printumn);
    buttonsum.addEventListener("click", printdel);
