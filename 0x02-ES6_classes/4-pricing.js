import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw TypeError('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (Number.isInteger(amount)) {
      this._amount = amount;
    } else {
      throw TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
