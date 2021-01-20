# 🍔 Eat Da Burger!!

## Description
Eat Da Burger is a Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!<br>
Key words : Servers, Express.js, MySQL , API routes, Handeblars, Object-relational mapping, Model-View-Controller, Template engines.

## Table of Contents 
* [Installation](#Installation)
* [Functionality](#Functionality)
* [Technologies_Used](#Technologies_Used)
* [MVC_design_pattern](#MVC_design_pattern)
* [Code_Snippet](#Code_Snippet)
* [Final_Result](#Final_Result)
* [Video_Demo](#Video_Demo)
* [ResourceReferred](#ResourceReferred)
* [Github_Link](#Github_Link)



## Installation
There are a few things that are required for this application. You will need to intsall the following: npm, inquirer, and node. Once these are installed in your CLI you will run the application by entering node app.js . Follow the prompts until all questions have been answered or you would no longer like to add anymore team members, then open the team.html file that is generated in the output directory.

## Functionality
Using an home-grown ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.<br>
UPDATE a selected burger by clicking "Devour It", which... * hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)<br>
CREATE a new burger using the "Place Order" form, which... * hits a /burger/create route in Express to insert a new burger into the MySQL database * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)


## Programming/Scripting Languages
### Front-end
HTML, <br>CSS (Bootstrap)<br>
Javascript (JQuery)<br>
### Back-end
JavaScript (Node.js, v8.11.2)<br>
npm (v6.4.0) packages: routing (body-parser, express, path)<br>
templating engine: handlebars<br>
database: SQL


## Technologies_Used
Node.js - Used for package managment and to execute JavaScript code outside of a browser to build command line tool for server-side scripting.
Jest - Used to test and build Javascript classes and methods.
Inquirer - npm package installed by node used to promt user for employee info.
Javascript - Used to base functionality of functions and prompts within the application.
ES6 - Used to build prompts, functions, methods, and classes.
HTML - Used to generate HTML to be displayed in the browser.
CSS - Used to style html elements.
Git - Version control system to track changes to source code
GitHub - Hosts repository that can be deployed to GitHub Pages


## MVC_design_pattern
This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

View object: A view object is an object in the application that is visible (in the user interface) to the end user of the application. The view displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user enters a burger name in a text field. The view communicates the user input via the controller to the model.

Controller object: A controller object controls the flow of data between the view and the model (that is, the controller is an intermediary between the two). The controller interprets any user changes made in the view and communicates the changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the updated data in the user interface.

Model object: A model object manages the data. When data is created or changed by the user in the view (for example, a user devours or throws away a burger), that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view, and the view displays the updated data to the user.


## Code_Snippet
Using classes as well as our templates again allows for greater modularity. Each piece can be built upon in the future and simply referenced elsewhere in the code or in other files by requiring the file that it lives on. In this way we are setting the base of our application to be more scalable.
```
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
        
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
```


```
function addEngineer() {
  inquirer
    .prompt(questions.engineerQuestions)
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);      //creating engineer object
      teamMembers.push(engineer);
      // console.log(teamMembers);
      if (answers.addmore === "Engineer") {
        addEngineer();     //recursive function
      } else if (answers.addmore === "Intern") {
        addIntern();
      } else {
        console.log("No-one else to add!");
        renderTeam();
      }


    })
    .catch(error => {
      console.log(error);

    });

}
```

```

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your manager's name?",
    validate: answer => {
      const containsNumsSpecial = /[^a-zA-Z]/g; // Only allow letters
      const temp = answer.match(containsNumsSpecial);   //using regex

      // return false if user input is empty
      if (answer.length === 0) {
        return "Name should be a string and cannot be empty";

      };

      // return false if name contains any special characters or numbers
      if (temp !== null) {
        return "Name should not contain special characters or numbers";
      }

      return true;
    }
  },
  ```

## Final_Result
Testing 
![](Assets/screenshotTest.png)
![](Assets/screenshotBrowser.png)

## Video_Demo
[Click to Watch the Video](https://drive.google.com/file/d/14Q8pHlC8-h4D6Bux6fXQvUejTbpiKrjg/view)

## ResourceReferred
[For inquirer](https://www.npmjs.com/package/inquirer) <br>
[Constructors](https://www.w3schools.com/js/js_object_constructors.asp)<br>


## Github_Link
[**URL of My Github Repository**](https://github.com/guptaria/TeamDashboard)<br>











