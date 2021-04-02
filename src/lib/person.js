class Person {

    constructor(state = "active", uid = "0-0") {
      this.state = state;
      this.uid = uid;
      
      Person.count += 1;
    }
  
    getState() {
      return this.state;
    }
  
    setState(newValue) {
        if(newValue == 'active' || newValue == 'inactive') {
            this.state = newValue;
        } else {
            throw new Error ();
        }
      
    }
  
    getUid() {
      return this.uid;
    }
  
    static getCountOfPersons() {
      return Person.count
    }
  }
  Person.count = 0;
  module.exports = Person