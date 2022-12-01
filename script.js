// importing the customers array from the external js file
import Customers from "./customers.js";
import Accounts from "./accounts.js";

// A function that returns an object from the dom
let qs = (e) => document.querySelector(e);

// All variables for DOM 
let passwordBtn = qs('#passwordBtn');
let passwordInput = qs('#passwordInput');
let usernameInput = qs('#usernameInput');
let usernameDisplay = qs('#usernamedisplay');
let withdrawPageBtn = qs('.withdrawPageBtn');
let withdrawBtn = qs('#withdrawBtn');
let withdrawInput = qs('#withdrawInput');
let balancePageBtn = qs('.balancePageBtn');
let balanceDisplay = qs('#balanceDisplay');
let goHome = qs('.gohome')
let depositPageBtn = qs('.depositPageBtn');
let depositBtn = qs('#depositBtn');

// Variables for saving logged in customer and accounts
let currentCustomer;
let currentAccount;

// Eventlistener to call functions
withdrawPageBtn.addEventListener('click', withdrawPage);
depositPageBtn.addEventListener('click', depositPage);
balancePageBtn.addEventListener('click', balancePage);
passwordBtn.addEventListener('click', checkPassword);
withdrawBtn.addEventListener('click', withdraw);
depositBtn.addEventListener('click', deposit);
goHome.addEventListener('click', homePage);

// Function to validate user and password
function checkPassword() {
    let password = passwordInput.value;
    let username = usernameInput.value;

    // Testing values from the dom
    if (password.length != 4 ) return alert('Input your Password');
    if (username.length == 0 ) return alert('Input your Username');
    
    // Arrays to store all usernames and passwords
    let usernames = [];
    let passwords = [];

    // A function to loop over customer array
    for (let i = 0; i < Customers.length; i++) {
        const element = Customers[i];

        // addding usernames and passwords to the appropiate arrays 
        usernames.push(element.username);
        passwords.push(element.password);
    }

    // Acount details validity
    if (usernames.includes(username)) {
        for (let i = 0; i < Customers.length; i++) {
            const element = Customers[i]
            if (element.username == username) {
                if (element.password == password) {
                    currentCustomer = element;
                    return homePage();
                }
                return alert('Password not correct');
            } 
        }
    } else {
        return alert('Username doesn\'t exist');
    }
}

// A function to control active pages
function controlDisplay(page) {
    qs('.active').classList.remove('active');
    qs(page).classList.add('active');
}

// function to run when homepage is active
function homePage() {
    controlDisplay('#home__page')
    usernameDisplay.innerText = currentCustomer.username

    for (let index = 0; index < Accounts.length; index++) {
        const element = Accounts[index];
        if (element.username == currentCustomer.username) {
            currentAccount = element;
        }
    }
}

// function to run withdraw page
function withdrawPage() {
    controlDisplay('#withdraw__page')
}

//  withdraw function this tests for eligibility and update user balance
function withdraw() {
    let amount = withdrawInput.value;
    let maxamount = currentAccount.balance;

    if (amount < 1 ) return alert('Amount must be $1 or more');

    if (maxamount < amount ) return alert('Insufficient funds')

    if (amount <= maxamount) {
        currentAccount.balance -= amount;
        alert(`You have successfully withdrawed $${amount}, your new account balance is $${currentAccount.balance}`);
        return homePage()
    }
}

//  function to run when balance is requested
function balancePage() {
    controlDisplay('#balance__page');
    balancedisplay.innerText = currentAccount.balance;
}

//  function to run deposit page when about to deposit
function depositPage() {
    controlDisplay('#deposit__page');
}


// deposit function gets amount and increments user account balance
function deposit() {
    let amount = depositInput.value;
    let balance = currentAccount.balance;

    if (balance <= 0 ) return 

    currentAccount.balance += amount;
    alert(`You have successfully deposited $${amount}, your new account balance is $${currentAccount.balance}`);
    return homePage()
}