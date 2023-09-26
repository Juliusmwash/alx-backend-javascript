function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

class budget {
  constructor(income, gdp, capita) {
    this.`income-${getCurrentYear()}` = income;
    this.`gdp-${getCurrentYear()}` = gdp;
    this.`capita-${getCurrentYear()}` = capita;
  }
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  class budget {
    constructor(income, gdp, capita) {
      this.`income-${getCurrentYear()}` = income;
      this.`gdp-${getCurrentYear()}` = gdp;
      this.`capita-${getCurrentYear()}` = capita;
    }
  }
  return budget(income, gdp, capita);
}
