/*
You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name
Job title
Salary
Status
First, you will create an empty array named employees

Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

You will then:

**DONE  1.  Instantiate three employees
**DONE  2.  Override the status attribute of one of them to either "Part Time" or "Contract"
**DONE  3.  Call the printEmployeeForm method for each employee
**DONE  4.  Put the generated employees into the employees array using whichever method you prefer.

Here's a refresher for the constructor syntax:

function Car (year, make, model) {
    // use the "this" keyword to reference each object
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myTacoma = new Car(2015, "Toyota", "Tacoma");

*/

var employees = [];


function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

var minnie = new Employee("Minnie Mouse", "Director", 50000, "full-time")
var elena = new Employee("Elena of Avalor", "Supervisor", 30000, "full-time")
var harry = new Employee("Harry Potter", "Wand Master", 1000000, "part-time")



Employee.prototype.printEmployeeForm = function () {
    console.log(this.name, this.jobTitle, this.salary, this.status)
}

Employee.prototype.groupThem = function () {
    employees.push(this.name, this.jobTitle, this.salary, this.status)
}


minnie.printEmployeeForm();
elena.printEmployeeForm();
harry.printEmployeeForm();

harry.status = "contract";

minnie.groupThem();
elena.groupThem();
harry.groupThem();

console.log(employees)






