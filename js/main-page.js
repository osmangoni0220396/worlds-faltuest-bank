document.getElementById("deposit-button").addEventListener("click", function(){
    const depositAmount = getInputNumber("deposit-amount");
    
    if (isNaN(depositAmount)){
        window.alert("Please input a Number")
    }
    else{
        const totalDeposit =  getTextNumber ("total-deposit");
        const newDeposit = depositAmount + totalDeposit;
        const deposit = document.getElementById("total-deposit");
        deposit.innerText = newDeposit;
        const totalAmount = getTextNumber("total-amount");
        const newTotal = depositAmount + totalAmount;
        const amount = document.getElementById("total-amount");
        amount.innerText = newTotal;
    }
})

document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawAmount = getInputNumber("withdraw-amount");
    if(isNaN(withdrawAmount)){
        window.alert("Please Input A Number")
    }
    else{
        
        const totalAmount = getTextNumber("total-amount");
        if(withdrawAmount>totalAmount){
            window.alert("Vai Taka gase Dhore Na")
        }
        else{
            const totalwithdraw =  getTextNumber ("total-withdraw");
            const newWithdraw = withdrawAmount + totalwithdraw;
            const withdraw = document.getElementById("total-withdraw");
            withdraw.innerText = newWithdraw;
            const newTotal = totalAmount - withdrawAmount;
            const amount = document.getElementById("total-amount");
            amount.innerText = newTotal;
        }
    }
})


