var customer = {
    firstName: 'Bob',
    lastName: 'Smith',
    cityProperty: 'Houston',
    getFullName: function () {
        return customer['firstName'] + ' ' + customer['lastName'];
    }
};
function dumpAll(customer) {
    customer.fullName = customer.getFullName();
    for (var key in customer) {
        if (!jQuery.isFunction(customer[key])) {
            $('#display').append('<p>' + key + ': = ' + customer[key] + '</p>');
        }
    }
}
