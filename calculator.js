// let one = document.querySelector("#one");
// let two = document.querySelector("#two");
// let three = document.querySelector("#three");
// let four = document.querySelector("#four");
// let five = document.querySelector("#five");
// let six = document.querySelector("#six");
// let seven = document.querySelector("#seven");
// let eight = document.querySelector("#eight");
// let nine = document.querySelector("#nine");
// let zero = document.querySelector("#zero");
// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let multiply = document.querySelector("#multiply");
// let divide = document.querySelector("#divide");
// let point = document.querySelector("#point");
// let isEqualTo = document.querySelector("#isEqualTo");

let string = "";
let buttons = document.querySelectorAll('.button1');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})