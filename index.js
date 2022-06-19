function add(a, b) {
    return a + b
  }

  function isEven(a) {
    if (a % 2 == 0) return true;
    else return false;
  }
  
  function greet(name) {
    return `Hello there ${name}`
  }
  
  function isAnAdult(age) {
    if (age >= 18) return true
    else return false 
  }
  
  function yearsToAdulthood(age) {
   let yearsLeft = 18 - age;
   if(yearsLeft <= 0 ){
    return `You are already an adult, fam`
   }
   else {
   if(yearsLeft === 1)
   return `${yearsLeft} year`
   else return `${yearsLeft} years`
  }
  }
  
  function admit(person) {
    if (isAnAdult(person.age)) console.log(`Welcome ${person.name}`) 
    else console.log(`Come back in ${yearsToAdulthood(person.age)} when you are old enough!`)
  }
  let amer = {name: "Amer", age: 18};
  admit(amer);