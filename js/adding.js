const number1 = document.querySelector('#num1')
const number2 = document.querySelector('#num2')
const number3 = document.querySelector('#num3')
const number4 = document.querySelector('#num4')
const number5 = document.querySelector('#num5')

let num1, num2, num3, num4, num5

number1.addEventListener('input', function(event){
    num1 = number1.value
})
number2.addEventListener('input', function(event){
    num2 = number2.value
})
number3.addEventListener('input', function(event){
    num3 = number3.value
})
number4.addEventListener('input', function(event){
    num4 = number4.value
})
number5.addEventListener('input', function(event){
    num5 = number5.value
})


let add = function(num1=0, num2=0, num3=0, num4=0, num5=0){
    return +num1 + +num2 + +num3 + +num4 + +num5
}
let sum


let oddOrEven = function(num){
    if(num%2 === 0){
        return 'Even'
    }else if(num === 0){
        return '0, neither Odd nor Even'
    }else if(num === undefined){
        return 'opps! you have not entered a number'
    }else{
        return 'Odd'
    }
}


let max = function(num1=0, num2=0, num3=0, num4=0, num5=0){
    let numArr = [+num1, +num2, +num3, +num4, +num5]
    let val = 0
    for(let num = 0; num < numArr.length; num++){
        if(val<numArr[num]){
            val=numArr[num]
            continue
        }
    }
    return val
}
let maxNum


let min = function(num1=0, num2=0, num3=0, num4=0, num5=0){
    let numArr = [+num1, +num2, +num3, +num4, +num5]
    let val = numArr[0]
    for(let num = 0; num < numArr.length; num++){
        if(val>numArr[num]){
            val=numArr[num]
            continue
        }
    }
    return val
}
let minNum


document.querySelector('#mathForm').addEventListener('submit', function(event){
    event.preventDefault()
    document.querySelector('#output-box').removeAttribute('hidden')
    sum = add(num1,num2,num3,num4,num5)
    maxNum = max(num1,num2,num3,num4,num5)
    minNum = min(num1,num2,num3,num4,num5)

    document.querySelector('#output1').innerText = `The sum of the above five numbers is ${sum}.` //easier method

    document.querySelector('#output2').innerText = `The first number is ${oddOrEven(num1)}.`

    // document.querySelector('#output2').appendChild(document.createTextNode(`The first number is ${oddOrEven(num1)}.`)) // this also can be used, how ever there is a catch. When using this way : the value of the targeted elemnt doe not nullify/dissolve. It stays i.e the browser remembers the old-values and the new values are simply appended to the old values.

    document.querySelector('#output3').innerText = `The second number is ${oddOrEven(num2)}.`

    document.querySelector('#output4').innerText = `The third number is ${oddOrEven(num3)}.`

    document.querySelector('#output5').innerText = `The fourth number is ${oddOrEven(num4)}.`

    document.querySelector('#output6').innerText = `The fifth number is ${oddOrEven(num5)}.`

    document.querySelector('#output7').innerText = `The smallest number entered is ${minNum}.`

    document.querySelector('#output8').innerText = `The largest number entered is ${maxNum}.`
})

document.querySelector('#resetButton').addEventListener( 'click', function(event){
    event.preventDefault()
    document.querySelector('#mathForm').reset()
    document.querySelector('#output-box').setAttribute('hidden','True')

})
