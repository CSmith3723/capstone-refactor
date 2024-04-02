const neighborhoodMenu = document.getElementById("areas");
const areaButton = document.getElementById("areaBtn");
const hourlyWage = document.getElementById("hourly-wage");
const monthlyExpenses = document.getElementById("monthly-expense");
const hoursWorkedWeekly = document.getElementById("hours-worked");
const monthlyWageOutput = document.getElementById("monthlyWageOutput");
const monthlyExpensesOutput = document.getElementById("monthlyExpensesOutput");
const netIncomeOutput = document.getElementById("netIncomeOutput");
const neighborhoodOutput = document.getElementById("neighborhoodOutput");

const neighborhoods = [
  (apolloBeach = {
    name: "Apollo Beach",
    oneBrPrice: 1525,
    twoBrPrice: 1895,
    housePrice: 450000,
  }),
  {
    name: "Brandon",
    oneBrPrice: 1605,
    twoBrPrice: 1800,
    housePrice: 350000,
  },
  {
    name: "Carrollwood",
    oneBrPrice: 1638,
    twoBrPrice: 1960,
    housePrice: 365000,
  },
  {
    name: "Citrus Park",
    oneBrPrice: 1314,
    twoBrPrice: 1900,
    housePrice: 385000,
  },
  {
    name: "Lutz",
    oneBrPrice: 1673,
    twoBrPrice: 1982,
    housePrice: 485000,
  },
  {
    name: "Northdale",
    oneBrPrice: 1815,
    twoBrPrice: 2040,
    housePrice: 425000,
  },
  {
    name: "South Tampa",
    oneBrPrice: 1700,
    twoBrPrice: 2200,
    housePrice: 630000,
  },
  {
    name: "Temple Terrace",
    oneBrPrice: 1500,
    twoBrPrice: 1675,
    housePrice: 300000,
  },
  {
    name: "Westchase",
    oneBrPrice: 1856,
    twoBrPrice: 2337,
    housePrice: 455000,
  },
  {
    name: "Wesley Chapel",
    oneBrPrice: 1650,
    twoBrPrice: 1885,
    housePrice: 385000,
  },
];

function getNeighborhood() {
  let area = neighborhoodMenu.value;
  // console.log(area);
}

function monthlyWage() {
  let total = hourlyWage.value * hoursWorkedWeekly.value * 4;
  // console.log(total);
  return total;
}

function netIncome() {
  let income = monthlyWage() - monthlyExpenses.value;
  // console.log(income);
  return income;
}

function getPrices() {
  const filteredItems = neighborhoods.filter(
    (item) => item.name === `${neighborhoodMenu.value}`
  );
}

areaButton.addEventListener("click", function () {
  getPrices();
  netIncomeOutput.innerText = `$${netIncome()}/ month`;
  monthlyWage();
  getNeighborhood();
});
