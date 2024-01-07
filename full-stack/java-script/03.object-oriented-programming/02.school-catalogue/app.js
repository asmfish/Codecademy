//Base class School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if(typeof value === 'number'){
        this._numberOfStudents = value;
      }
      else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randIndx = Math.floor(Math.random() * substituteTeachers.length);
  
      return substituteTeachers[randIndx];
    }
  
  }
  
  //Child class PrimarySchool
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  //Child class Middle
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
       super(name, 'middle', numberOfStudents);
    }
  }
  
  //Child class HighSchool
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      this._sportsTeams.forEach((team) => {
        console.log(team);
      });
    }
  }
  
  //SchoolCatalog Class
  class SchoolCatalog {
    constructor() {
      this._schools = [];
    }
  
    get schools() {
      return this._schools;
    }
  
    addSchool(value) {
      this._schools.push(value);
    }
  }
  
  //Create PrimarySchool object
  console.log('===========Primary School============');
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  lorraineHansbury.quickFacts();
  
  const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  //Call static method with class name, not by using instance
  console.log(School.pickSubstituteTeacher(substituteTeachers))
  
  //Create HighSchool object
  console.log('=============High School=============');
  const alSmith = new HighSchool(
    'Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  );
  alSmith.quickFacts();
  console.log('Sport Teams:');
  alSmith.sportsTeams;
  
  //Create MiddleSchool object
  console.log('============Middle School============');
  const dendenSchool = new MiddleSchool(
    'Asmara Denden',
    200
  );
  dendenSchool.quickFacts();
  //dendenSchool.numberOfStudents = 'abc';//Error not number
  
  console.log('=============School Catalog==========');
  const schoolCatalog = new SchoolCatalog();
  schoolCatalog.addSchool(lorraineHansbury);
  schoolCatalog.addSchool(alSmith);
  schoolCatalog.addSchool(dendenSchool);
  console.log(`Total Schools: ${schoolCatalog.schools.length}`)
  schoolCatalog.schools.forEach((school) =>{
    school.quickFacts();
    console.log('-------------------------------------');
  })
  