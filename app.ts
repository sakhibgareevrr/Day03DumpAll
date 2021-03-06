let customer = {
    firstName:      'Bob',
    lastName:       'Smith',
    cityProperty:   'Houston',
    getFullName: function() {
        return customer['firstName']+' '+customer['lastName'];
    }
}

function dumpAll(customer) {
    customer.fullName = customer.getFullName();
    for (let key in customer) {
        if (!jQuery.isFunction(customer[key])) {
            $('#display').append('<p>'+key+': = '+customer[key]+'</p>');
        }
    }
}

$(document).ready(function() {
    dumpAll(customer);
});
