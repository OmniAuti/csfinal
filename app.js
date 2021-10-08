const diceRollFour = document.getElementById("dice-btn-four")
const diceRollSix = document.getElementById("dice-btn-six")
const diceRollEight = document.getElementById("dice-btn-eight")
const diceRollTen = document.getElementById("dice-btn-ten")
const diceRollTwelve = document.getElementById("dice-btn-twelve")
const diceRollTwenty = document.getElementById("dice-btn-twenty")

const diceShow= document.getElementById("dice-display")

const numDiceInput = document.getElementById('num-dice-input')
const plusInput = document.getElementById('plus-input') 
const minusInput = document.getElementById('minus-input') 
let numModInput = document.getElementById('mod-num')
const adDisSelect = document.getElementById('ad-dis-input')


function diceMod(sum) {


    let numModNum = parseInt(numModInput.value)

    // DICE ROLL PLUS MINUS MOD
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
    console.log(numModNum)
    sumMod = sum + numModNum
    console.log(sumMod, 'after')
    return sumMod
}

// 4,6,8,10,12,20
diceRollFour.addEventListener("click", () => {
    rollArr = [];
    const numDiceNum = parseInt(numDiceInput.value)
    for (let i = 0; i < numDiceNum; i++) {
    const roll = Math.ceil(Math.random() * 4)
    //DICE INPUT
    rollArr.push(roll)
    console.log(rollArr)
    }
    let sumDice = rollArr.reduce((a , b) => a + b)
    console.log(sumDice)
    diceMod(sumDice)
    console.log(sumMod, "mod")
})

diceRollSix.addEventListener("click", () => {
    const roll = Math.ceil(Math.random() * 6)

    diceShow.innerText = roll
})

diceRollEight.addEventListener("click", () => {
    const roll = Math.ceil(Math.random() * 8)

    diceShow.innerText = roll
})
diceRollTen.addEventListener("click", () => {
    const roll = Math.ceil(Math.random() * 10)

    diceShow.innerText = roll
})

diceRollTwelve.addEventListener("click", () => {
    const roll = Math.ceil(Math.random() * 12)

    diceShow.innerText = roll
})

diceRollTwenty.addEventListener("click", () => {
    const roll = Math.ceil(Math.random() * 20)

    diceShow.innerText = roll
})

