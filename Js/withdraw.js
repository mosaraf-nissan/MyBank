document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawValue = document.getElementById('withdraw-input');
    const withdrawValueString = withdrawValue.value;
    const getWithdrawValue = parseFloat(withdrawValueString);
    console.log(getWithdrawValue);

    const withdraw = document.getElementById('Withdraw-total');
    const withdrawString = withdraw.innerText;
    const previousWithdraw = parseFloat(withdrawString);
    const totalWithdraw = getWithdrawValue + previousWithdraw;
    withdraw.innerText = totalWithdraw;
    withdrawValue.value = '';

    const previousTotalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousBalance = parseFloat(previousTotalBalanceString);

    const deductionTotalMoney = previousBalance - getWithdrawValue;
    previousTotalBalance.innerText = deductionTotalMoney;

})