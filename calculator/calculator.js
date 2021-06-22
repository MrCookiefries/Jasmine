window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 2,
    rate: 6
  };

  document.querySelector("#loan-amount").value = values.amount;
  document.querySelector("#loan-years").value = values.years;
  document.querySelector("#loan-rate").value = values.rate;

  update();
}

function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  const p = values.amount;
  return (
    (i * p) /
    (1 - Math.pow((1 + i), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  document.querySelector("#monthly-payment").innerText = `$${monthly}`;
}
