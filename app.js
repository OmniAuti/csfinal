const diceRollFour = document.getElementById("dice-btn-four")
const diceRollSix = document.getElementById("dice-btn-six")
const diceRollEight = document.getElementById("dice-btn-eight")
const diceRollTen = document.getElementById("dice-btn-ten")
const diceRollTwelve = document.getElementById("dice-btn-twelve")
const diceRollTwenty = document.getElementById("dice-btn-twenty")

const diceShow = document.getElementById("dice-display")
const diceArrShow = document.getElementById("rolls-arr-output")
const modShow = document.getElementById("mod-output")

const numDiceInput = document.getElementById('num-dice-input')
const plusInput = document.getElementById('plus-input') 
const minusInput = document.getElementById('minus-input') 
let numModInput = document.getElementById('mod-num')
const adDisSelect = document.getElementById('ad-dis-input')
// CHECK FOR AND LIMIT DICE TO 2 ROLL
adDisSelect.addEventListener('change', () => {
 
    numDiceInput.disabled = false

    if (adDisSelect.value == "advantage") 
    {
        numDiceInput.disabled = true;
        numDiceInput.value = 2;
    }
    else if (adDisSelect.value == "disadvantage") 
    {
        numDiceInput.disabled = true;
        numDiceInput.value = 2;
    }
    else if (adDisSelect.value == "none")
    {
        numDiceInput.disabled = false;
        numDiceInput.value = 1;
    }
})

// 4,6,8,10,12,20
diceRollFour.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 4)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 4)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 4)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})
diceRollSix.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 6)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 6)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 6)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})
diceRollEight.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 8)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 8)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 8)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})
diceRollTen.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 10)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 10)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 10)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})
diceRollTwelve.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 12)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 12)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 12)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})
diceRollTwenty.addEventListener("click", () => {
    rollArr = [];

    if (adDisSelect.value == "advantage") 
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 20)
            rollArr.push(roll)
        }

            let max = Math.max(...rollArr)
            diceMod(max)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else if (adDisSelect.value == "disadvantage")
    {
        for (let i = 0; i < 2; i++)
        {
            const roll = Math.ceil(Math.random() * 20)
            rollArr.push(roll)
        }

            let min = Math.min(...rollArr)
            diceMod(min)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")

             if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
    else 
    {
        const numDiceNum = parseInt(numDiceInput.value)

            for (let i = 0; i < numDiceNum; i++) {
            const roll = Math.ceil(Math.random() * 20)
            rollArr.push(roll)
            }

            let sumDice = rollArr.reduce((a , b) => a + b)
            diceMod(sumDice)
            diceShow.innerText = sumMod
            diceArrShow.innerText = rollArr.join(", ")
            
            if (plusInput.checked == true)
            {
                modShow.innerText = `+ ${numModInput.value}`
            }
            else if (minusInput.checked == true)
            {
                modShow.innerText = `- ${numModInput.value}`
            }
            else
            {
                modShow.innerText = 0
            }
    }
})


function diceMod(sum) {
    
    let numModNum = parseInt(numModInput.value)
    // DICE ROLL PLUS MINUS MOD
    if (numModNum != 0)
    {
        if (plusInput.checked == true)
        {
            numModNum = numModNum * 1;
        }
        else if (minusInput.checked == true)
        {
            numModNum = numModNum * -1;
        }
        else 
        {
            numModNum = numModNum
        }
        sumMod = sum + numModNum
        if (sumMod < 0) 
        {
            sumMod = 0
        }
    }
    else 
    {
        sumMod = sum
    }
   
    
    return sumMod
}