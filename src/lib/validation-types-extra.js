



module.exports =  {
    string(value) {
        return (typeof value == 'string')
    }, 
    number(value) {
        return (typeof value == 'number')
    }, 
    any(value) {
        return true;
    },
    shape(obj) {
        if(typeof obj == "object") {
            return obj
        }
    }
}