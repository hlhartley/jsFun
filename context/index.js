const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    ship.fly();
    const result = 'global window object';
    return result;

    // Annotation:
    // When we create a new instance of the SpaceProbe class, this.fly = fly refers to the function fly above it. 
    // The fly arrow function is declared in the global scope, so its `this` refers to the window object.
      },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object'; 
    return result;

    // Annotation:
    // The function fn is invoked in the global scope, so `this` is refering to the global window object.
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);
    
    el.addEventListener('click', function() {
      console.log(this)
    });

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // When the event listener el is clicked, car.getInfo is invoked in the scope of the element. 
    // Because it was defined using ES5 syntax, its `this` refers to the scope of who called it, which is el.
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        console.log(this) // this should be the dog object

        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // The getBreed and innerFunction functions both use ES5 syntax and the getBreed function is invoked in the global scope.
    // Therefore, `this` refers to the global window object.
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
   // The fn function is declared in the scope of the global window. Therefore, wherever we call it, `this` will refer to the global window object.
   // Even if we used ES5 syntax and called it in the window scope, `this` would also refer to the global window object.
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // A new instance of Hero is created, therefore when we attach the identifyHero method
    // to the object, `this` refers to the instance of Hero.
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // The setTimeout callback function is using ES5, so `this` refers back to the scope in which it was invoked. 
    // Then when we call monopoly.restart() from the global scope, `this` refers to the window object.
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        // at this point this refers to the obj (because we are a method...)
        this.arrowFunction = () => { // this.arrowFunction gets defined within method's scope (this == obj), so arrowFunction's this becomes obj
          return this;
        };
      }
    };

    obj.method(); // this ends up setting obj.arrowFunction with the arrowFunction, whose this refers to obj.

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // `This` has access to the obj object because it is using an arrow function, which refers to the point of declaration. 
    // Therefore, `this` is referring to obj.
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // Each iteration in this map loop has access to the poets array because of the second declaration(thisArg). Therefore, `this` refers to the poets array.
    // This would return the window object as this:
    // poets.map(function(poet) {
    //   return this;
    // });
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // `This` is bound to el when the button is clicked.
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Using the ES6 arrow function, `this` is declared in the element, so it is still referring to the event el.
  }

};

module.exports = context;