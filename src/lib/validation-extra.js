


function validate(schema, values) {
    let result = [];
    function checkType(sc, vals, ii = '.') {
        const keys = Object.keys(sc);
        keys.forEach(item => {
            
            if(typeof sc[item] == "object") {

                checkType(sc[item], vals[item], ii+item+".")
            } else if (!sc[item](vals[item])) { 
                result.push(`$${ii}${item}`)
                return;
            }
        })
    }
    checkType(schema, values);
    return result
}


module.exports = {
    validate
} 