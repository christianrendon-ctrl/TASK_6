const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const dif = document.getElementById("difference")
const pro = document.getElementById("product")
const qu = document.getElementById("quo")

let sum = 0;
let difference = 0;
let product = 0;
let quo = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;

        difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        dif.innerHTML = difference;

        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        pro.innerHTML = product;

        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        qu.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    dif.innerHTML = "";
    pro.innerHTML = "";
    qu.innerHTML = "";
    
    sum = 0;
    difference = 0;
    product = 0;
    quo = 0;

}

