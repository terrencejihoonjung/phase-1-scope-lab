var customerName = 'bob';

function upperCaseCustomerName(name) {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'max';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not max';
}