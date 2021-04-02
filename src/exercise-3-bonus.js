/*
use function "addGettersAndSetters" to add getters and setters for each key of the object in the array
add extra method getCountOfModification to each object which will
return count of used setters for that specific object

name ->  users[0].getName()
name -> users[0].setName(newValue)
*/


let users = [{
  name: "Peter",
  age: 32,
},
  {
    name: "John",
    age: 15,
    random: 12345
  },
  {
    name: "Jim",
    age: 16,
    id: 15
  }
];

function addGettersAndSetters(obj) {
  for (const item in obj) {
    obj.countOfModification = 0;
    obj[`get${item[0].toUpperCase()}${item.slice(1)}`] = function() {
      return obj[item]
    }
    obj[`set${item[0].toUpperCase()}${item.slice(1)}`] = function(newValue) {
      obj[item] = newValue;
      obj.countOfModification +=1
    }
    obj[`getCountOfModification`] = function() {
      return obj.countOfModification
    }
  }

}

users.forEach(user => {
  addGettersAndSetters(user)
})

module.exports = addGettersAndSetters;

