const one = document.querySelector(".one")
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator_keys")
const display = calculator.querySelector(".calculator_display")
 


keys.addEventListener("click", event => {
    if (!event.target.closest("button")) return
    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const {type} = key.dataset
    const {previousKeyType } = calculator.dataset;
    
    //is this a number key?

    if (type === "number") {
        if (displayValue === "0" || previousKeyType === "operator" ) {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    // is this a operator key? 

    if ( type === "operator") {
        //perform operation
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => el.dataset.state = '')
        key.dataset.state = "selected"
        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
   }

   // is this an equal key? 

   if (type === "equal") {
       //perform calculation
       const firstNumber = calculator.dataset.firstNumber
       const operator = calculator.dataset.operator
       const secondNumber = displayValue
       if (operator) display.textContent = calculate(firstNumber,operator,secondNumber)
   }

   if (type === "clear") {
    const clear = keys.querySelector("[data-type='clear']") 
    
    clear.addEventListener("click", function() {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => el.dataset.state = '')
        calculator.dataset.firstNumber = '0'
        calculator.dataset.secondNumber = '0'
        calculator.dataset.operator = ''
        display.textContent = 0
    })
}
   calculator.dataset.previousKeyType = type

})



//calculate function 

function calculate (firstNumber,operator, secondNumber) {
    let result = ''
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    if (operator === "plus") return firstNumber + secondNumber
    if (operator === "minus") return firstNumber - secondNumber
    if (operator === "divide") return  firstNumber / secondNumber
    if (operator === "times") return firstNumber * secondNumber
    return result
}

