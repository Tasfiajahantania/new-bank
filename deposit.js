document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountString);
    const currentDepositTotal = depositAmount + depositTotalAmount;
    depositTotal.innerText = currentDepositTotal;
    depositField.value = '';

    const totalBlance = document.getElementById('blance-total');
    const previousBlanceString = totalBlance.innerText;
    const previousBlance = parseFloat(previousBlanceString);
    const currentBlance = previousBlance + depositAmount;
    totalBlance.innerText = currentBlance;
})