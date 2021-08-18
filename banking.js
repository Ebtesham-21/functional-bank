document.getElementById('Deposit-button').addEventListener('click', function() {
    // console.log('deposit button clicked');
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear input field
    depositInput.value = '';
});

// handle withdraw
document.getElementById('Withdraw-button').addEventListener('click', function() {
    // console.log('withdraw clicked');
    const withdrawinput = document.getElementById('Withdraw-input');
    const withdrawamounttext = withdrawinput.value;
    const withdrawamount = parseFloat(withdrawamounttext);
    // console.log(withdrawamounttext);

    // update withdraw total
    const withdrawtotal = document.getElementById('withdraw-total');
    const previouswithdrawtotaltext = withdrawtotal.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotaltext);
    withdrawtotal.innerText = previouswithdrawtotal + withdrawamount;

    // update balance after withdraw
    const balancetotal = document.getElementById('balance-total');
    const balancetotaltext = balancetotal.innerText;
    const previousBalanceTotal = parseFloat(balancetotaltext);

    balancetotal.innerText = previousBalanceTotal - withdrawamount;

    // clear withdrow input field
    withdrawinput.value = '';
});