import { Injectable } from "@angular/core";

@Injectable()
export class AccountsDataService {
  public accountsData = [];
  constructor() {}

  addAccountsData(account) {
    this.accountsData.push(account);
  }

  getAccountsData() {
    return this.accountsData;
  }

  clearAccountsData() {
    this.accountsData = [];
    return this.accountsData;
  }
}
