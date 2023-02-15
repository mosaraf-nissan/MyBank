// step 1 get deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 get the input of deposit 
    const depositAmount = document.getElementById('deposit-input');
    const getDepositValueString = depositAmount.value ;
    const getDepositValue = parseFloat(getDepositValueString);
    depositAmount.value = '';
    // step 3 get the deposit money
    const getTotalDeposit= document.getElementById('deposit-total');
    const getTotalDepositMoneyString = getTotalDeposit.innerText ;
    const getTotalDepositMoney = parseFloat(getTotalDepositMoneyString);
    console.log(getTotalDepositMoney);
    // step 4 update the deposit value into the total deposit 
    const currentDeposit =getDepositValue + getTotalDepositMoney;
    getTotalDeposit.innerText = currentDeposit ;

    const myTotalBalance = document.getElementById('balance-total');
    const previousBalanceString = myTotalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const depositAndTotalBalance = previousBalance + getDepositValue;
    myTotalBalance.innerText = depositAndTotalBalance; 
})