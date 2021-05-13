---
Layout:
Title:	"Programming Paradigms"
Date:	2021-05-13
Categories:

---

# Introduction
In this blogPost I'll be talking about Programming Paradigms and will be going deep in them.

# Body

### What is programming paradigm

Programming paradigm doesn't refer to a specific programming language, therefore it is defined as a method of used to solve a problem using tools and techniques that are available to a programmer following certain approachs.

- Programming paradigms are essential since they describe and define a programming language and how it works.
- There are two important catergories that a language will fall into :
   1. Declarative programming paradigm.
   2. Imperative programmng paradigm.

let's look at Imperative programming paradigm first.

  > Imperative 

* it is based on Von Nuemann architecture.
* it changes the program state through assignment statements.
* This paradigm consist of several statements and after execution of all the results is stored.

   Advantages:
  - It's easy to implement.
  - contains loops, varaible and so on.

   Disadvantages:
  - Complex issues can not be solved.
  - Parallel Programming is not supported.

       Code example:
                     (using php)

    $participantlist = [1 => 'Peter', 2 => 'Henry', 3 => 'Sarah'];
$firstnames= [];
foreach ($participantlist as $id => $name) {
    $firstnames[] = $name;
}

> Procedural programming paradigm 

* this programming paradigm allows the program to be organised as a set of functions.
* this programming paradigm is a derivative of Imperative programming paradigm.
* There is no difference in between procedural and imperative approach.

    Advantages:
    - It is able to reuse the code and it was boon at that time when it was in use because of its reusability.
    - they much easier to learn as first programming languages for total beginners.
    
    Disadvantages:
   - it is nearly impossible to represent the real world objects realistically in the procedural programming.
   - it is hard to protect data from inadvertant changes since most data is generally globally leading to the problem of spaghetti code.

             Code Example:
             // this is a global variable
$globalVar = 1;

function addNumber($a, $b) {
    // this is a local variable
    $randomNumber = rand();

    return $globalVar + $randomNumber + $a + $b;
}

> Object oriented programming 

* this programming paradigm relies on classes and objects.
* it organizes software design around data or objects rather than functions and logics.
* it focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. 

   Advantages:
   - Higher Data security
   - Code is able to be  reused.
   - it is Flexible and also cotains abstraction.

  Disadvantages:
   - Larger program size: Object-oriented programs typically involve more lines of code
     than procedural programs. 
   - The thought process involved in object-oriented programming
     may not be natural for some people, and it can take time to get used to it.

                 Code Example:

                 import java.io.*;

class GFG {
	public static void main(String[] args)
	{
		System.out.println("GfG!");
		Signup s1 = new Signup();
		s1.create(22, "riya", "riya2@gmail.com", 'F', 89002);
	}
}

class Signup {
	int userid;
	String name;
	String emailid;
	char sex;
	long mob;

	public void create(int userid, String name,
						String emailid, char sex, long mob)
	{
		System.out.println("Welcome to
				GeeksforGeeks\nLets create your account\n");
		this.userid = 132;
		this.name = "Radha";
		this.emailid = "radha.89@gmail.com";
		this.sex = 'F';
		this.mob = 900558981;
		System.out.println("your account has been created");
	}
}

> Parallel processing approach 

* In this method two or more processors are ran to handle 2 seperate parts.
* this reduces processing time.

   Advantage:

   - the speed is up
   - the costs are better for every perfomance in the long run.

   Disadvantages
   - Power consumption is high by the multi core architectures.
   - better cooling technologies are required in case of clusters.
 
             Code example:
             var p = new Parallel(_.range(50));
                                function add(d) { return d[0] + d[1]; }
                                function factorial(n) { return n < 2 ? 1 : n * factorial(n - 1); }
                                function log() { console.log(arguments); }
                                p.require(factorial)
                                p.map(function (n) { return Math.pow(10, n) / factorial(n); }).reduce(add).then(log);


> Declarative programming paradigm:

* it is divided into three parts which is, Logic, Functional and Database.
* it manly considers programs as theories of some logic.
* the programs involved in this programming paridigm usually declares what must be done.
* it can be defined as a style of building programs that express logic of computation without considering its control flow.

  Advantages:
  - the code is short and in order.
  - possible maintenance, independant of application development.

 Disadvantages:
 - external people find it hard to understand.
 - the conceptual model is unfarmiliar for most people.
 
         Code example:
         let n = [-9, 87, 72, 452, 32, -9]
for(let i = 0; i < n.length; i++) {
    console.log(n[i])
}

> Logic programming paradigms:

* in this method program statements express facts and rules about problems within a system of formal logic.
* Logic programming can be used to show knowledge in a way that does not depend on the implementation.

        Advantages:
        - programs are more flexible, compressable and easier to understand.
        - It enables knowledge to be separated from use.

       disadvantes:
       - due to insufficient investment in complimentary technologies, users were poorly served.
       - There is no adequate way of representing computational concepts found in built-in mechanisms of state variables .

         Code Example:
         sum of two number in prolog:

  predicates
  sumoftwonumber(integer, integer)
clauses

  sum(0, 0).
   sum(n, r):-
        n1=n-1,
        sum(n1, r1),
        r=r1+n 


> Functional programming paradigms :

 * Functional langauges emphasizies on expressions and declarations other than execution of statements.
 * It can be defined as a way of thinking about software construction by creating pure functions.

   Advantages: 
   - it gives you possibilities of to avoid confusing and errors in your code.
   - it's easier to test and execute Unit testing and debugg functional programming code.

  Disavantages:
  - Since there's no state and no update of variables allowed loss of performance will take place.

        Code Example:

        let heightRequirement = 46;

// Impure because it relies on a mutable (reassignable) variable.
function canRide(height) {
  return height >= heightRequirement;
}

// Impure because it causes a side-effect by logging to the console.
function multiply(a, b) {
  console.log('Arguments: ', a, b);
  return a * b;
}

> Database/Data driven programming approach :

*  the program statements describe the data to be matched and the processing required rather than defining a sequence of steps to be taken.
* this method is based on data and its movement.

    Advantages:
    - you can hide thne complex data from basic users.
    - several users can access the database concurrently.

   Disadvantages:
   - high-speed processor and a large memory size is required.
   - expensive hardware is needed.

    code example:

    CREATE DATABASE databaseAddress;
CREATE TABLE Addr (
    PersonID int,
    LastName varchar(200),
    FirstName varchar(200),
    Address varchar(200),
    City varchar(200),
    State varchar(200)
); 

# Conclusion

therefore Paradigms are important because they define a programming language and how it works.
Although these different approaches can be better in some cases, and worse in others.