

function validate(schema, values) {
    let result = [];
    const keys = Object.keys(schema);
    keys.forEach(item => {
        if (!schema[item](values[item])) { result.push(item)}
    })
    return result
}


module.exports = {
    validate
} 