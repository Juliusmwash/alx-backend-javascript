function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

class Budget {
  constructor(income, gdp, capita) {
    this[`income-${getCurrentYear()}`] = income;
    this[`gdp-${getCurrentYear()}`] = gdp;
    this[`capita-${getCurrentYear()}`] = capita;
  }
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return new Budget(income, gdp, capita);
}
