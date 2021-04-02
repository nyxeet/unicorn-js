/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */

function getInfo(...values) {

  return values.map((value, idx) => {
    return {
      "isFalsy": !!value == false,
      "type": typeof value,
      "StringLength": value.toString().length,
      "index": idx
    }
  });
}


module.exports = getInfo;

