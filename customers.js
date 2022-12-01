//  Customer class new customers will inherit from this
class Customer {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

//  initializing new customers and saving in varaibales
var customerOne = new Customer('customerone', 1234);
var customerTwo = new Customer('customertwo', 8888);
var customerThree = new Customer('customerthree', 2222);
var customerFour = new Customer('JesulayomiFadahunsi', 9807);

// Storing customer in an array and exporting
let Customers = [customerOne, customerTwo, customerThree, customerFour]
export default Customers