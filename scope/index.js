const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
                    {A: 'Ben'},
                    {B: 'CardiB'},
                    {C: 'CardiB'},
                    {D: 'Paul'}
                    ];
    return result;

    // Annotation:
    // First, we declare 3 global variables - personA, personB, and personC and assign them values of 'Paul', 'Ben', and 'Tom'.
    // Next, we declare a function called `changePerson`, but because we haven't invoked it yet, we skip down to line 28.
    // On line 28, we inboke our 'changePerson' function which brings us back to line 3.
    // Within this function, first we declare another function called 'beautifyPerson', but it is not run yet, until it is invoked. 
    // Next, in the local execution phase, we run the if statement first. Since at this point in time personA does strictly equal 'Paul', we assign the variable person a value of 'CardiB'.
    // There is no person variable declared within the function, so the interpreter looks to the global scope.
    // In the global scope, it doesn't find the variable person either, so it creates a new var called var person assigned the value of 'CardiB' in global scope.
    // Then we invoke the 'beautifyPerson' function.
    // We console.log A: personB as 'CardiB' (because it is now defined in the global scope).
    // Then, the if statement runs on line 16. personB, 'Ben', does include B, so personB is now reassigned the value of person, which is 'CardiB'.
    // PersonC is reassigned the value of personB, which is 'CardiB'.
    // We console.log C: personC as CardiB. We exit out of the function 'beautifyPerson'.
    // Then, personC is reassigned to the value of personA, which is 'Paul'.
    // We exit out of the 'changePerson' function and finally, console.log personC which equals 'Paul'.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
                    {A: 75},
                    {B: 64},
                    {C: 64},
                    {D: 30}
                    ];
    return result;

    // Annotation:
    // First, we declare a global variable - number and assign it a value of 30.
    // Next, we declare a function called `numberFunction`, but because we haven't invoked it yet, we skip down to line 80.
    // On line 80, we inboke our 'numberFunction' function which brings us back to line 60.
    // Within this function, first we declare another variable called 'number', assigned the value of 75, but it is declared using 'let', so it is only functionally scoped and does not leak out of the function.
    // Next, the if statement is executed. At this point the variable number strictly equals 75, true, so number is assigned the value 28, only within this block scope.
    // We console.log A as 75 - referring to the functional scope of the variable.
    // On line 69, we declare a new function 'newNumber', but do not run it until it is invoked on line 75.
    // The 'newNumber' function is run. Number is not given the keyword var, let, or const, so it is reassigned within the numberFunction (line61) as now having the value of 64.
    // We console.log B as 64.
    // We pop 'newNumber' off the call stack and console.log C as also 64.
    // We pop 'numberFunction' off the call stack and now console.log D as 30 (line 58), because the other variables are functionally/block scoped, so we must refer to the globally scoped number variable.
    // 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
                    {A: 'Yo'},
                    {B: 'Hey'},
                    {C: 'Hey'},
                    {D: 'Hello'}
                    ];
    return result;

    // Annotation:
    // First, we declare the global variable 'greeting' on line 108. We assign it the value of 'Hello'.
    // Next, we declare the function 'greetingFunction', but do not run it until it is invoked on line 130.
    // We run the 'greetingFunction' function and assign the variable greeting in the functional scope as 'Yo'.
    // The if statement is run. The var greeting strictly equals 'Yo', so greeting is reassigned the value of 'Howdy', but only in the block scope, because it was declared using the keyword let.
    // We console.log A as 'Yo' referring to the functionally scoped var value (line 111).
    // Next, we declare the 'newPhrase' function. It is not run until it is invoked on line 125.
    // We go back up to line 120. Greeting is not declared using var, let, or const, so it reassigns the functionally scoped variable greeting as now 'Hey'.
    // We console.log B as 'Hey'.
    // We pop 'newPhrase' function off the call stack and console.log C, which has the value of 'Hey'.
    // We exit out of the 'greetingFunction' function and console.log D, which is 'Hello'.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
                    {A: 'hi'},
                    {B: 'welcome'},
                    {C: 'welcome'},
                    {D: 'howdy'}
                    ];
    return result;

    // Annotation:
    // First we declare the global variable greeting and assign it the value of 'howdy'.
    // We declare the function 'greetingGenerator', but do not run it until it is invoked on line 178.
    // Then, we go back up to line 158. The variable greeting is declared functionally scoped and assigned the value of 'hi'.
    // The if statement is run and the variable greeting strictly equals 'hi', so greeting (only) within this block scope is assigned the value of 'hello'.
    // We console.log A as 'hi'.
    // We then declare a new function 'newGreeting', but is is not run until it is invoked on line 173.
    // After it is invoked we look at like 167. On line 168 greeting is not declared using var, let, or const, so it reassigns the functionally scoped variable greeting to the value of 'welcome'.
    // We console.log B as 'welcome'.
    // We exit out of the 'newGreeting' function. We console.log C which is 'welcome', because greeting was previously reassigned functionally scoped.
    // We exit out of th 'greetingGenerator' function and console.log D, which is 'howdy'.
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
                    {C: 'Brittany'},
                    {A: 'Nathaniel'},
                    {B: 'Nathaniel'},
                    {D: 'Brittany'}
                    ];
    return result;

    // Annotation:
    // On line 204 we declare a global variable name assigned to the value of 'Brittany'.
    // On line 206 we declare a function 'sayName', but do not execute it until it is invoked on line 224.
    // Before invoking the function 'sayName', we console.log D which is 'Brittany'.
    // We go back up to line 206. The variable name is declared using let, so it will only be functionally scoped. It is assigned the value of 'Pam'.
    // The first if statement is evaluated. The variable name strictly equals 'Pam', so name is assigned the value of 'Nathaniel'. It was not declared using one of the key words,
    // so it reassigns the functionally scoped variable name (line 207) from 'Pam' to 'Nathaniel'.
    // We run the second if statement on line 212. The value name.length is longer than 0, so we declare the variable name in this block scope as 'Brittany'.
    // We console.log A as 'Nathaniel'. We then console.log B as 'Nathaniel' because of the functionally scoped variable name value.
    // Finally, we exit out of the 'sayName' function and console.log C as 'Brittany'.
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
                    {A: 'Spot'},
                    {B: 'Spot'},
                    {C: 'Biscuit'},
                    {D: 'Biscuit'},
                    {E: 'Biscuit'}
                    ];
    return result;

    // Annotation:
    // We declare a global variable dog and assign it the value of 'Spot'.
    // We declare a function 'petDog', but do not run it until it is invoked on line 272.
    // We go back up to line 251.
    // We console.log A as 'Spot'. There is not variable spot declared functionally, so the interpreter looks globally and finds that the variable dog equals 'Spot'.
    // We run the if statement on line 254. The variable dog does strictly equals 'Spot', so the block scoped variable dog is assigned the value of 'Fluffy'.
    // Next, the function 'rollOver' is defined, but not run until line 267. 
    // Then, after running the function, we console.log B on line 259 as 'Spot'. Spot is not defined in the 'rollOver' function, so the interpreter looks globally.
    // On line 261, dog is declared, but doesn't use a keyword, so it reassigns the value of the variable dog globally to 'Biscuit'.
    // We exit out of the 'rollOver' function and console.log D which is 'Biscuit'.
    // We exit out of the 'petDog' function and console.log E which is 'Biscuit' (because the dog variable wasn't defined in the 'petDog' function).
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
                    {A: "reference error"},
                    {B: 'mango'},
                    {C: 'mango'},
                    {D: 'apple'}
                    ];    
                    return result;

    // Annotation:
    // We globally declare the variable fruit and assign it the value of 'apple'.
    // We declare the function 'eatFruit', but do not run it until it is invoked on line 317.
    // After the function has been invoked, we look at the if statement. The variable fruit is not defined functionally, so the interpreter looks globally and sees that the variable fruit has the value of 'apple'.
    // The condition is true, 'apple' does not strictly equal 'kiwi', so the variable fruit is assigned to 'mango'. For variables declared with var, it can possibly "leak out" to the next level.
    // In the function scope, fruit is now defined with the value of 'mango'. We run the second conditional. The variable fruit exists. The conditional equates to true,
    // and we console.log A. In the block scope fruit was declared using const, after we did the console.log. So, console.log A will return "reference error".
    // We console.log B as 'mango'. We console.log C as also 'mango'.
    // We exit out of the function 'eatFruit' and console.log D as 'apple' (because of the global scope variable fruit).
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = [
                    {A: 4},
                    {D: 9},
                    {E: 10},
                    {B: 9},
                    {C: 4}
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable num and assign it the value of 4.
    // Next, we declare the function 'fn1', but don't run it untli it is invoked on line 371.
    // We also decare the function 'fn2', but don't run it until it is invoked within the 'fn1' function.
    // // After the 'fn1' function is invoked, we execute the code starting on line 343.
    // We declare a functionally scoped variable num and assign it the value of 4.
    // After that, we console.log A as 4.
    // We declare a block scoped variable using the keyword const. The variable num is assigned the value of 9.
    // We evaluate the conditional. The variable num is 4, which is less than 5, and equates to true, so we call the 'fn2' function passing in the parameter of num.
    // Then we look at line 364 and console.log D which is 9.
    // The variable num is now 9, so on line 366, we add 1, which equals 10.
    // After console.logging E, we get 10.
    // We exit out of the 'fn2' function and go back to the 'fn1' function on line 353.
    // A new variable newNum is declared without a keyword, so it is declared functionally scoped as num which equals 4.
    // Therefore, console.log C equals 4.
    // Finally, we exit out of the 'fn1' function.
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
                    {A: 75},
                    {B: 0},
                    {C: 75},
                    {D: 80},
                    {A: 55},
                    {B: 0},
                    {C: 55},
                    {E: 55},
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable hunger and assign it the value of 100.
    // Then we decare the function 'eatSnack', but it is not executed until called on line 416.
    // We then go back up to line 403.
    // On line 405, hunger is defined without a keyword, so it looks at the global variable hunger which is 100.
    // Then hunger = hunger - 25 => hunger = 100 - 25 = 75.
    // We console.log A which is 75.
    // Then we call the function 'gorgeYourself'. It starts running on line 409.
    // Then hunger is declared using the keyword const, so it only applies to the function scope. It is assigned the value of 0.
    // We console.log B which is 0.
    // After we exit out of the function 'gorgeYourself', we console.log C which is 75.
    // We exit out of the 'eatSnack' function and are back in the global scope.
    // Hunger is declared but not using a keyword so it looks up and finds the variable hunger has the value of 75.
    // Then hunger = hunger + 5 => hunger = 75 + 5 = 80.
    // We console.log D which is now 80.
    // We then invoke the 'eatSnack' function again.
    // Hunger will now be 80 - 25 = 55.
    // We console.log A as 55.
    // The function 'gorgeYourself' is invoked for the second time. 
    // The variable within this block scope is 0.
    // We console.log B as 0.
    // We exit out of the 'gorgeYourself' function and console.log C as 55.
    // We exit out of the 'eatSnack' function for the second time and finally console.log E which is 55 (because hunger was not declared using the keyword in the function eatSnack on line 404)
    },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
                    {A: 'ketchup sandwich'},
                    {D: 'gouda'},
                    {B: void 0},
                    {C: 'not a mediocre sandwich'},
                    {E: 'not a mediocre sandwich'},
                    {F: 'National Treasure'}
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable sandwich and assign it the value of 'ketchup sandwich'.
    // We console.log A which is 'ketchup sandwich'.
    // Then we declare the 'addChipotle' function, which is not run until it is invoked on line 491.
    // Then we declare the 'addCheese' function, which is not run until it is invoked on line 489.
    // The variable cheeseTopping is declared, but not using a keyword, so is declared as a global variable with the value of 'kraft'.
    // First, the 'addCheese' function is invoked.
    // We go to line 477 and start executing the function (which will be run before the 'addChipotle' function).
    // We declare a locally scoped variable cheeseTopping which is assigned the value 'gouda'.
    // We console.log D which is 'gouda'.
    // We declare a function expression called 'shesTheManReference'. It is not run until it is invoked on line 485.
    // After it is invoked, we declare a variable amandaBynes which is not defined using a keyword, so it goes outwards to the functional and then global scope.
    // We exit out of the 'shesTheManReference' function and the 'addCheese' function.
    // Then we invoked the 'addChipotle' function and go up to line 466.
    // We console.log B, but toppings is declared afterwards using the keyword var, so at this point console.log B equals void 0.
    // On line 470, the if statement is run. The variable toppings strictly equals 'chipotle sandwich', so we declare a new variable sandwich without a keyword.
    // This then goes all the way outwards to the global scope. We console.log C as 'not a mediocre sandwich'.
    // We exit out of the 'addChipotle' function and console.log E which is 'not a mediocre sandwich'.
    // Lastly, we console.log F which is 'National Treasure'.
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [
                    {A: 7},
                    {B: 7},
                    ]; 
    return result;

    // Annotation:
    // First, we declare a global variable num and assign it the value of 10.
    // Then we declare the function 'foo', but don't execute it until it is called on line 536.
    // After it is called, we evaluate the if statement. 
    // The variable num is not defined within the function, so the interpreter looks globally and sees that num equals 10.
    // 10 is greater than 5, so we assign the variable num to 7 and this applies globally as well.
    // We console.log A as 7.
    // We exit out of the 'foo' function and console.log B which is also 7 (because we changed the value globally as well).
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
                    {A: 95},
                    {B: 90},
                    {C: 90},
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable grade and assign it the value of 100.
    // Then we declare the function 'losePoints', but do not execute it until it is invoked on line 577.
    // Once 'losePoints' is invoked, we assign the variable grade to the value of 90. Because it was declared not using a keyword, it will reassign the global variable grade to 90.
    // Then we declare the function 'addPoints', but do not execute it until it is invoked on line 572.
    // After that, we look at the if statement. Since the variable grade is strictly equals to 95, we declare the variable grade and assign it a value of 97 within the block scope.
    // Next, we console.log A which is 95.
    // We exit out of the 'addPoints' function and console.log B which is 90.
    // We exit out of the 'losePoints' function and console.log C which is still 90.
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
                    {A: 5},
                    {B: 6},
                    {C: "reference error"},
                    {D: 6}
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable num and assign it the value of 5.
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
                    {E: 'Pam'},
                    {A: 'Pam'},
                    {B: 'Pam'},
                    {C: 'Louisa'},
                    {D: 'Louisa'},
                    {F: 'Louisa'}
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable instructor and assign it the value of 'Pam'.
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
                    {B: 'flipflop'},
                    {A: 'undefined'},
                    {C: 'flipflop'}
                    ]; 
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [
                    {B: 'soup'},
                    {C: 'soup'}
                    ]; 
    return result;

    // Annotation:
    // We declare a global variable lunch, but don't assign it any value as this point.
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
                    {A: 'Pandora'},
                    {B: ['Antigone', 'Pandora']},
                    {C: 'Mandy'},
                    {D: 'Antigone'},
                    {E: 'Pandora'}
                    ]; 
    return result;

    // Annotation:
    // We declare 2 global variables myKid and wildKids and assign them values respectively 'Pandora' and ['Antigone'].
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = [
                    {A: 'Rody'},
                    {B: 'RodyToy'},
                    {C: 'Tesla'},
                    {D: 'RodyToyDaniels'}
                    ];
    return result;

    // Annotation:
    // We declare a global variable myName and assign it the value of 'Rody'.
  }
};

module.exports = scope;