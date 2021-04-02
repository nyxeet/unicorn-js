

module.exports =  {
    string(value) {
        return (typeof value == 'string')
    }, 
    number(value) {
        return (typeof value == 'number')
    }, 
    any(value) {
        return true;
    }
}

