let total;

function calculateTotal() {
  total = parseFloat(document.getElementById('grocery1').value);
  total += parseFloat(document.getElementById('grocery2').value);
  total += parseFloat(document.getElementById('grocery3').value);

  document.getElementById('result').innerText = `The total amount is: ${total}€`;
}
