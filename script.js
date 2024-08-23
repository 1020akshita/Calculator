// const display = document.getElementById('display');

// function clearDisplay() {
//   display.value = '';
// }

// function clicked(value) {
//   display.value += value;
// }

// function backspace() {
//   display.value = display.value.slice(0, -1);
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = 'Error';
//   }
// }



// const display = document.getElementById("display");

// function clearDisplay() {
//   display.value = "";
// }

// function clicked(val) {
//   display.value += val;
// }

// function backspace() {
//   display.value = display.value.slice(0, -1);
// }

// function calculate() {
//   try {
//     display.value = eval(display.value)
//   } catch(error) {
//     display.value = 'Error'
//   }
// }

const display = document.getElementById('display')

function clearDisplay (){
    display.value = "";
}

function clicked(val){
    display.value += val;
}

function backspace(){
    display.value = display.value.slice(0,-1)
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
        
    }
    
}