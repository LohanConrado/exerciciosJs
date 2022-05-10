let family = {
    incomes: [100,300,30,35,45,95,1000],
    expenses: [100,200,20,30,40,50,500]
}

function sum(array){
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total

}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let balanceText = "negative"

    if (total >= 0) {
        balanceText = "positive"
    }
        console.log(`Your balance is ${balanceText}! R$${total.toFixed(2)}`)

}

calculateBalance()