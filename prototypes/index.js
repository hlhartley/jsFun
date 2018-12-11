const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitty) => {
        return kitty.color === 'orange';
        }).map((orangeKitty) => {
        return orangeKitty.name;
    })
    return result;
    // Annotation:
    // We are given an array, and we want to get the orange kitties out of the array,
    // so we will use the `filter` method.
    // We filter through each kitty object and use `map` to create a new array with just the names of the orange kitties via the orangeKitty.name property.
    // Finally, we return the new array with just the orange kitty names.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {
        return b.age - a.age; 
    });
    return result;
},
    // Annotation:
    // We are given an array, and want to sort the kitties in order by age,
    // so we will use the `sort` method.
    // 'a' and 'b' are passed in as parameters in our callback function. 
    // 'a' represents the first element in the array that we are comparing. 
    // 'b' is the next element in the array that we are comparing. 
    // Using `sort`, we will iterate through all the elements in the array until all of the elements are in order from smallest to largest 
    // (*Note: our return statment is a.age - b.age => smallest to largest. b.age - a.age => largest to smallest). 
    // Finally, we return the array with the kitties in order by age.

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitty) => {
        kitty.age += 2;
        return kitty;
    });
    return result;

    // Annotation: 
    // We are given an array, and want to return an array of the same number of objects and properties, 
    // so we will use the `map` method.
    // Using `map` we will iterate over the entire array of kitties and increment their age by 2 each time.
    // Each iteration, we reassign their age to the new value (+2).
    // Finally, we return a new array of kitty objects.
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, currentClub) => {
        currentClub.members.forEach((member) => {
            if(!acc[member]) {
                acc[member] = [currentClub.club];
            } else {
                acc[member].push(currentClub.club); 
            }
        })
        return acc;
    }, {});
    return result;

    // Annotation:
    // We are given an array, and want to return one object, so we will use the `reduce` array prototype method.
    // In the `reduce` method, we will use `forEach` to iterate over each club's member array. 
    // If our accumulator doesn't include a key of member, we create a key of member with the value of an array of currentClub. 
    // If the accumulator already has the key of the member created, we push the current club into the member's array.
    // Finally, we return a single object with the member as key and their clubs in an array as their value.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {

    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((mod) => {
        let studentsPerInstructor = mod.students / mod.instructors;
        return { mod: mod.mod, 
                studentsPerInstructor: studentsPerInstructor };
    });
    return result;

    // Annotation:
    // We are given an array, and want to return an array with the same number of objects within the array,
    // so we will use `map`.
    // Using `map` we iterate over each mod.
    // During each mod iteration, we want to find the number of students per instructor, so we create a variable studentsPerInstructor.
    // We assign that variable to mod.students divided by mod.instructors.
    // Finally, we return a new object using curly bracket notation. 
    // Mod and studentsPerInstructor are the keys while mod.mod and studentsPerInstructor are the values.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
        return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // We are given an array, and want to return an array of objects that has the same number of objects as original array,
    // so we will use `map`. 
    // While mapping over the cakes array, we only want to return objects with the flavor and in stock properties. 
    // To make this new object, we set the key flavor to the value cake.cakeFlavor and the key inStock to the value cake.inStock.
    // As we iterate through the cakes array, we grab those properties from each cake.
    // Finally, we return the newly created object.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
        return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // We are given an array, and want to return an array of objects of only the cakes that are in stock.
    // This number of objects will be different than the original array, so we will use `filter`.
    // We iterate through each cake object in the cakes array and only return the cakes that have the property of inStock > 0.
    // Finally, we return this new array.
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, currentCake) => {
        sum += currentCake.inStock;
        return sum;
    }, 0);
    return result;

    // Annotation:
    // We are given an array, and want to return a single value - the total amount (#) of cakes in stock,
    // so we will use `reduce`.
    // Passing in parameters, sum is the object we are returning and currentCake represents each cake object we are iterating through in the array.
    // We set the initial value of the sum in `reduce` equal to 0, since we want to add on to this after each iteration.
    // Then, sum is reassigned each time to sum + the value of currentCake.inStock.
    // Each time the updated sum is returned. 
    // Upon final iteration, the sum is returned and ends up equaling 59.

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, currentCake) => {
        currentCake.toppings.forEach((topping) => {
            if(!acc.includes(topping)) {
                acc.push(topping);
            }
        });
        return acc;
    }, []);
    return result;

    // Annotation:
    // We are given an array and want to return an array of all unique toppings needed to bake every cake in the dataset.
    // We don't want repeats of toppings, and want to return an array with all these values, so we will use `reduce`.
    // The accumulator object (acc) will be the object returned and currentCake is passed in as a parameter. It represents each cake that we will iterate through.
    // To reduce topping repetitions, we need to use `forEach` and an if/else conditional.
    // We iterate over each topping, and if the acc object doesn't include the topping, it will be pushed into the new blank array.
    // Finally, the new acc object is returned with all of the toppings, no repeats.
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, currentCake) => {
        currentCake.toppings.forEach((topping) => {
            if(!acc[topping]) {
                acc[topping] = 0;
            }
            acc[topping]++
        });
        return acc
    }, {});
    return result;

    // Annotation:
    // We are given an array, and want to return a single object, so we want to use `reduce`.
    // First, we iterate through the cakes array and look at each cake, represented by currentCake in our `reduce` method parameters.
    // To ensure that there are no topping repeats in the new object, we need to use `forEach` for each topping of each object.
    // If it's not a current key in the acc object, that we are creating, the key will be the acc object's topping and the value will be set to 0 initially.
    // After that, in each iteration, the number will increase by a count of 1 every time it finds that particular topping.
    // Finally, when we return the new object, our keys will be each topping with a numerical value (based on how many times it was counted total in the `forEach` loop).
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((room) => {
        return room.program === 'FE'
        });
    return result;

    // Annotation:
    // We are given an array, and want to return an array with a different number of objects than in the original array,
    // so we will use `filter`. 
    // First, we iterate through the classrooms object.
    // For each room, we want to return the rooms that have a property of program strictly equals to 'FE'.
    // `Filter` will return a new array with only objects that room.program === 'FE'.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, room) => {
        if (room.program === 'FE') {
            acc.feCapacity += room.capacity;
        } else if (room.program === 'BE') {
            acc.beCapacity += room.capacity;
        }
        return acc
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // We are given an array, and want to produce one object looking like {feCapacity: #, beCapacity: #}, 
    // so we will need to use the array prototype method `reduce`.
    // Initially, we set up the initial values for our acc object as {feCapacity: 0, beCapacity: 0}.
    // Next, we iterate through each classroom, and if the room.program is strictly equals to 'FE', then we will
    // add the room.capacity number each time to the acc object's feCapacity value(#).
    // Otherwise, if the room.program is strictly equals to 'BE', the room.capacity number will be added
    // each time to the beCapacity value (#), in the initial object that we created. 
    // Finally, the new acc object is returned.
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
        return a.capacity - b.capacity
    });
    return result;

    // Annotation:
    // We are given an array, and want to return an array of the same length, but sorted by capacity (least to greatest).
    // Therefore, we will use `sort`. 
    // Passed in as parameters are "a" and "b".
    // "a" represents the first item we are comparing and "b" represents the second item we are comparing.
    // After it iterates through the entire array, it will return the list of objects from least to greatest capacity.
    // On the other hand, if we returned b.capacity - a.capacity, it would return the list of objects from greatest to least capacity.
    }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((sum, currentBrewery) => {
    sum += currentBrewery.beers.length;
        return sum;
    }, 0);
    return result;

    // Annotation:
    // We are given an array, and want to only return 1 number, which is the total beer count of all beers for every brewery.
    // Hence, we will use `reduce`.
    // The initial value of sum starts at 0 and each time we iterate through each brewery object,
    // we want to increase the sum value by the number of beers (which is represented by currentBrewery.beers.length).
    // Finally, when we return the sum, it will return a value of 40.
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((brewery) => {
        return {name: brewery.name, beerCount: brewery.beers.length}
    });
    return result;

    // Annotation:
    // We are given an array, and want to return an array of the same length,
    // so we will use `map`.
    // `Map` returns an array of the same length, so for each iteration, we will return a new object.
    // The object will have 2 keys, name and beerCount. 
    // The corresponding values are the brewery's name(brewery.name) and the brewery's beer count(brewery.beers.length).
    // Finally, we will return the new array.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      acc = acc.concat(brewery.beers)
      return acc;
    }, []).sort((a, b) => {
      return b.abv - a.abv;
    });
    return result.shift();

    // Annotation:
    // We are given an array, and want to return just 1 beer that has the highest ABV of all the beers,
    // so we will use `reduce`.
    // The data is a bit difficult to work with because in the breweries class, the beers property of each brewery class is also an array of objects.
    // Therefore, we need to get all of the beers of all of the breweries in one single array first.
    // In our new blank array that we set as our initial value in our `reduce` method, we will assign it to have all of the beer objects within in by using `concat` and returning that object.
    // After we get that new array from `reduce`, we need to sort the beers to get the one with the highet abv.
    // By passing in "a" and "b" and then returning b.abv - a.abv, we get a list with the beer with the highest abv on top.
    // Finally, in our result, we can use the `shift` method to target and return the beer with the highest abv.

    // *Note: we can make a mapByAttribute expression declaration to use in future calculations. Ex:
    // const allBeers = breweries.reduce((acc, brewery) => {
    //   acc = acc.concat(brewery.beers);
    //   return acc;
    // }, []);

    // const mapByAttribute = (collection, attribute) => {
    //   return collection.map(item => {
    //     return item[attribute];
    //   })
    // }

    // let beerAbv = mapByAttribute(allBeers, 'abv');
    // let beerIbu = mapByAttribute(allBeers, 'ibu');

    // *Note: to get the highest number:
    // Math.max.apply(null, beerAbv);
    // OR Math.max(...beerAbv);
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map((instructor) => {
    let matchingCohort = cohorts.find((cohort) => {
      return cohort.module === instructor.module;
    });
    let numberStudents = matchingCohort.studentCount;
    return { name: instructor.name, studentCount: numberStudents }
  });
    return result;

    // Annotation:
    // We are given 2 arrays, and want to return 1 array with the same number of objects,
    // so we will use `map`. 
    // Since there are 2 array datasets that we are working with, we need to find a property that they have in common.
    // The module property in both the cohorts and instructors array share a commonality, so we can link the two arrays (represented by the matchingCohort var).
    // Next, we need to find the number of students for each teacher based on the module the instructor teaches.
    // Finally, we make and return an object literal with name and studentCount as the keys and instructor.name and numberStudents as the values.
  },


  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((ratioObj, currentCohort) => {
    let matchingInstructors = instructors.filter((instructor) => {
    return instructor.module === currentCohort.module;
    });
    ratioObj[`cohort${currentCohort.cohort}`] = currentCohort.studentCount / matchingInstructors.length;
    return ratioObj;
    }, {});
    return result;

    // Annotation:
    // We are given 2 arrays, and want to return 1 object, so we will use `reduce`.
    // We want the cohort year number (cohorts.cohort) as the key and the studentCount divided by the number of teachers per cohort as the value.
    // In our `reduce ` method, we create an initial empty object and pass in the acc and currentCohort as parameters.
    // currentCohort represents each cohort object in the cohorts array.
    // As we iterate over each currentCohort, we declare a new variable matchingInstructors and assign it to the value we return from our `filter`.
    // For each instructor, we want to `filter` through and get all modules from the instructors array that match up with the cohorts array.
    // Finally, we create and return a new object represented by ratioObj with a template literal which is the key of [`cohort${currentCohort.cohort}`], and numerical value calculated by currentCohort.studentCount / matchingInstructors.length.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce((obj, instructor) => {
        obj[instructor.name] = [];
        instructor.teaches.forEach((subject) => {
            cohorts.forEach((cohort) => {
                if(cohort.curriculum.includes(subject) && !obj[instructor.name].includes(cohort.module)) {
                    obj[instructor.name].push(cohort.module);
                }
            })
        })
        return obj;
    }, {});
    
    return result;

    // Annotation:
    // We are working with 2 arrays, and want to return 1 object, so we will use `reduce`.
    // First, we set up our object with the key (obj[instructor.name] and assign it to a blank array).
    // The next step is, we need to iterate over the instructors array and grab each one's name and set it as the key in our new object.
    // After that, we need to have a forEach, to check each subject that each instructor teaches.
    // We need to check that the cohort's curriculum is the same, then push the mod # into the array.
    // Our if conditional checks for if the cohort's curriculum already includes the subject AND the instructor name key hasn't been created yet.   
    // Finally, we return a new object with the instructor's name as the keys and the modules taught as the values, without repeats.
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((obj, currentCohort) => {
      currentCohort.curriculum.forEach(subject => {
      obj[subject] = [];
        instructors.forEach(instructor => {
          if(instructor.teaches.includes(subject)) {
            obj[subject].push(instructor.name);
          }
        })
      })
      return obj
    }, {});
    return result;

    // Annotation:
    // We are given 2 arrays, and want to return 1 object, so we will use `reduce`.
    // This time each cirriculum value from the curriculum property array in the cohorts array will be used as key names in our new object.
    // We need to use 2 `forEach` methods because we need to have access to both array properties (instructors.teaches and cohorts.curriculum), but the problem is that they are also both arrays of values.
    // If instructors.teaches also includes the subject from currentCohort.curriculum, then we will push the instructor name into our new object.
    // Finally, we will return the new object we created.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = Object.keys(bosses).reduce((array, currentBoss) => {
      let name = bosses[currentBoss].name;
      let loyaltySum = sidekicks.filter(sidekick => {
        return sidekick.boss === name;
      }).reduce((sum, sidekick) => {
        return sum += sidekick.loyaltyToBoss;
      }, 0);
      array.push({ bossName: name, sidekickLoyalty: loyaltySum });
      return array;
    }, []);
    return result;

    // Annotation:
    // We are given 1 bosses object and 1 sidekicks array, and want to return just 1 array.
    // The tricky part here is working with the bosses object. We cannot use array prototypes directly on it, because it is not an array.
    // Therefore, we need to use Object.keys to get each key from the bosses object.
    // Then, we perform `reduce` on it to create the new array.

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    let constellationsList = (Object.keys(constellations)).reduce((constellationsArr, currentConstellation) => {
      return constellationsArr.concat(constellations[currentConstellation].stars);
    }, []);

    const result = stars.reduce((acc, currentStar) => {
      constellationsList.forEach((starName) => {
        if(starName === currentStar.name) {
          acc.push(currentStar);
        }
      })
      return acc;
    }, []);
    return result;

    // Annotation:
    // Given 1 object of objects, 1 array
    // => 1 array
    // Use reduce or filter
    // Common: star names

    // Start with stars dataset (because we will be iterating over the objects)
    // Use reduce, set up blank Array
    // For each currentStar, see if star name is in constellations dataset
    // If it is, push the star into the Array
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, currentStar) => {
        if(!acc[currentStar.color]) {
            acc[currentStar.color] = [];
        }
        acc[currentStar.color].push(currentStar);
        return acc;
        }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = stars.map((star) => {
        return star.constellation;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    let allWeaponsArray = characters.reduce((acc, currentCharacter) => {
      acc = acc.concat(currentCharacter.weapons);
      return acc;
    }, []);
    //  allWeaponsArray;

    let result = allWeaponsArray.reduce((sum, currentWeapon) => {
      return sum += weapons[currentWeapon].damage
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    let result = characters.map((currentCharacter) => {
      let charDmg = currentCharacter.weapons.reduce((sum, currentWeapon) => {
        sum += weapons[currentWeapon].damage;
        return sum;
      }, 0);
      let rangeDmg = currentCharacter.weapons.reduce((sum, currentWeapon) => {
        sum += weapons[currentWeapon].range;
        return sum;
      }, 0);
      return { 
        [currentCharacter.name]: { damage: charDmg, range: rangeDmg } 
      };
    });
    return result;
    

    // Annotation:
    // Write your annotation here as a comment

    // BETTER REFACTOR:
    // let charactersByTotal = characters.map((currentCharacter) => {
    //     let weaponStats = currentCharacter.weapons.reduce((sum, currentWeapon) => {
    //         sum.damage += weapons[currentWeapon].damage;
    //         sum.range += weapons[currentWeapon].range;
    //         return sum;
    //     }, { damage: 0, range: 0});

    //     return { 
    //         [currentCharacter.name]: weaponStats,
    //     };
    // });

    // BEST REFACTOR(SRP): 

    // const weaponStats = (character) => {
    //     return character.weapons.reduce((sum, currentWeapon) => {
    //           sum.damage += weapons[currentWeapon].damage;
    //           sum.range += weapons[currentWeapon].range;
    //           return sum;
    //     }, { damage: 0, range: 0});
    // }

    // const charactersByTotal = characters.map((currentCharacter) => {
    //     return { 
    //       [currentCharacter.name]: weaponStats(currentCharacter),
    //     };
    // });

    
  },
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};