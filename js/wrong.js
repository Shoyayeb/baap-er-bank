
function getInputValue(inpuId) {
    const inputGot = document.getElementById(inpuId);
    const amountText = inputGot.value;
    const amount = parseFloat(amountText);
    inputGot.value = '';
    return amount;
};
// 
// 
// 
function updateWeb(totalId, depositAmount) {
    const inputGot = document.getElementById(totalId);
    const amountText = inputGot.innerText;
    const amount = parseFloat(amountText);
    const newDepositTotal = amount + depositAmount;
    inputGot.innerText = newDepositTotal;
};
// 
// 
// 
function updateBalance(depositAmount, isAdd) {
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + depositAmount;
        balanceTotal.innerText = newBalanceTotal;
    } else {
        const newBalanceTotal = previousBalanceTotal - depositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
};
// 
// 
// 
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// 
// 
// 

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateWeb('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    } else {
        alert("please enter valid amount")
    }

});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateWeb("withdraw-total", newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    } else {
        alert("please enter valid amount")
    }
})
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});