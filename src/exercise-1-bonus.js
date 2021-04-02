

/*
fill the function that executes each value with a function that has the same name as the typeof value
these functions are passed as the first parameter in the object like this:
{
string: function(value) { ... },
default: function(value) { ... }
}
the second parameter is an array of values to be processed
if there is no corresponding function, use the default one
these function could throw an error, so you have to handle them
  - each error has status and code
  - if the error status (e.status) is over 500, rethrow the error, if not, console log the e.code
store the result of each function call
filter results out of null and undefined
return following structure in the array for each input value:
{
input: "...",
output: "..."
}
*/

function process(functions = {}, values = []) {
  let result = [];
  values.forEach((value) => {
    try {
      if(typeof value in functions) {
        if(functions[typeof value](value) != null || functions[typeof value](value) != undefined) {
        result.push({
          input: value,
          output: functions[typeof value](value)
        })}
      } else {
        result.push({
          input: value,
          output: functions['default']()
        })
      }
    } catch (err) {
      if(err.status >= 500) {
        throw err;
      }
      console.log(err.code);
    }
    
  });
  return result
}


module.exports = process;


