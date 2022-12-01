// Class for accounts unique to customers though username
class Account {
    constructor( username, balance, interestRate ) {
        this.username = username
        this.balance = balance
        this.interestRate = interestRate
    }
}

// Initialised new accounts and updated their balance and interest rate
var AccountOne = new Account('customerone', 25000, 25);
var AccountTwo = new Account('customertwo', 18000, 15);
var AccountThree = new Account('customerthree', 23000, 13);
var AccountFour = new Account('JesulayomiFadahunsi', 30000, 30);

// Store accounts in an array and exporting
let Accounts = [AccountOne, AccountTwo, AccountThree, AccountFour]
export default Accounts