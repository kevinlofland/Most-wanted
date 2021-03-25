"use strict";
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      console.log(searchResults);
      break;
      case 'no':
       searchResults = searchByTraits(people);
      console.log(searchResults);
      break;
      default:
          app(people); 
        }
     
        // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
        mainMenu(searchResults, people);
      }
      
      // Menu function to call once you find who you are looking for
function mainMenu(person, people){
  
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  
  switch(displayOption){
    case "info":
      // TODO: get person's info
      break;
    case "family":
      // TODO: get person's family
      break;
    case "descendants":
      // TODO: get person's descendants
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
  // we ask the user waht they want to search by
  // "Gender"
  // let filteredPeople = searchByGender();
}
  
  let mybool = false;
  while(mybool == false){
    function searchByTraits(people){
     let myPrompt = prompt('Please enter trait you would like to filter by');
     switch(myPrompt)
     {
       case 'gender':
         console.log(genderFilterChoice);
          mybool = true;
         break;
     }
  
      
      
    }
   
  
  }
 
  
  
  function searchByGender(people){
    let genderFilterChoice = prompt("Please enter the gender you would like to filter by.");
    let filteredPeople = people.filter(function(person) {
      if(person.gender === genderFilterChoice){
        return true;
      }else{
        return false;
      }
    });
    return filteredPeople;
  }
  function searchByEyeColor(people){
    let eyeColorFilterChoice = prompt('Please enter the eye color you would like to filter by.');
    let filteredPeople = people.filter(function(person) {
      if(person.eyeColor === eyeColorFilterChoice){
        return true;
      }else{
        return false;
      }
    });
    return filteredPeople;
  }
  function searchByHeight(people){
    let heightFilterChoice = prompt('Please enter the height you would like to filter by');
    let filteredPeople = people.filter(function(person) {
      if(person.height === heightFilterChoice){
        return true;
      
      }else{
        return false;
      }
    
    });
    return filteredPeople;
  }
  function searchByWeight(people){
    let weightFilterChoice = prompt('Please enter the weight you would like to filter by');
    let filteredPeople = people.filter(function(person) {
      if(person.weight === weightFilterChoice){
        return true;
      
      }else{
        return false;
      }
    
    });
    return filteredPeople;
  }
  
  
  function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
Collapse




Angel Rivera  1:19 PM
did you happen to get the code from last night

Kevin Lofland  1:25 PM
No. I didn’t get it from Fab

Angel Rivera  1:49 PM
Untitled 
 let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'",yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      console.log(searchResults);
      break;
    case 'no':
     searchResults = searchByTraits(people);
     console.log(searchResults);
      break;
      default:
    app(people); // restart app
      break;
  }
  
    function searchByTraits(people){
      while(mySearch.length > 1)
    let mySearch;
     let myPrompt = prompt('Please enter trait you would like to filter by');
     switch(myPrompt)
     {
       case 'gender':
         mySearch = searchByGender(people);
         displayPeople(mySearch);
         break;
        case "height":
        mySearch = searchByHeight(people);
        displayPeople(mySearch);
        break;
        case "weight":
          mySearch = searchByWeight(people);
          displayPeople(mySearch);
          break;
        case "EyeColor":
          mySearch = searchByEyeColor(people);
          displayPeople (mySearch);
          break; 
     }
    } return
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}
function searchByGender(people){
  let genderFilterChoice = prompt("Please enter the gender you would like to filter by.");
  let filteredPeople = people.filter(function(person) {
    if(person.gender === genderFilterChoice){
      return true;
    }else{
      return false;
    }
  });
  return filteredPeople;
}
function searchByEyeColor(people){
  let eyeColorFilterChoice = prompt('Please enter the eye color you would like to filter by.');
  let filteredPeople = people.filter(function(person) {
    if(person.eyeColor === eyeColorFilterChoice){
      return true;
    }else{
      return false;
    }
  });
  return filteredPeople;
}
function searchByHeight(people){ 
  let heightFilterChoice = prompt('Please enter the height you would like to filter by');
  let filteredPeople = people.filter(function(person) {
    if(person.height == heightFilterChoice){
      return true;
    
    }else{
      return false;
    }
  
  });
  return filteredPeople;
}
function searchByWeight(people){
  let weightFilterChoice = prompt('Please enter the weight you would like to filter by');
  let filteredPeople = people.filter(function(person)  {
    if(person.weight == weightFilterChoice){
      return true;
    
    }else{
      return false;
    }
  
  });
  return filteredPeople;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
let findPerson  = filter.people === people.filter(function(person)
function findPerson (person){
      if (person < 10) {
          return foundPerson;
      } else {
          return findperson(person - 1);
      }
  }
    console.log()
  let displayPerson =
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
