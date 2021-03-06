/*
Create Factory class which will be able to produce instances of Human and Uuee
save all created instances into Factory
max amount of stored instances is 5, if the limit is reached: remove the oldest instance
- try to optimize this process

methods:
  static createInstance(className, [params])
  - first parameter is className: "Human" or "Uuee"
  - second parameter is array of params for or the appropriate class
      -> for example: [name, age, state, uid] or [owner, state, uid]

  static getInstance(uid)
  - return instance with passed uid if the instance exist otherwise throw exception

  static getListListOfInstances()
  - return array of stored instances
*/

const Human = require("./lib/human");
const Uuee = require("./lib/uuee");


class Factory { 
  static createInstance(className, params) {

    if(Factory.list.length >= 5) {
      Factory.list.shift()
      return crI();
    } else {
      return crI();
    }
    
    function crI() {
      let instance;
      if(className == "Human") {
        instance = new Human(...params);
      } 
      if(className == "Uuee") {
        instance = new Uuee(...params)
      }
      Factory.list.push(instance)
        return instance
    }
  }

  static getInstance(uid) {
    let result;
    Factory.list.forEach(item => {
      if (item.uid == uid) {
        result = item;
      }
    })
    return result;
  }

  static getListListOfInstances() {
    return Factory.list;
  }

}
Factory.list = []


module.exports = Factory;



