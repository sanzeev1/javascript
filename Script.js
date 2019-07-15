
/*var firstName = 'mary';
console.log(firstName);
var lastName = 'smith'; 
console.log(lastName);

var age = 21;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job='nurse';
console.log(job);
var $3years=3;
*/
// type coercion//

var firstName = 'mary';
var age = 22;
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'Nurse';
isMarried = false;
console.log(firstName + ' is ' + age + ' years old ' + job + '. is she married? ' + isMarried);

// type mutation

age = 'twenty two';
job = 'Nurse';
alert(firstName + ' is ' + age + ' years old ' + job + '. is she married? ' + isMarried);
var firstName = prompt('What is her first name?');
var lastName = prompt('What is her last name?');

console.log(firstName + ' ' + lastName);


// Popup Alert
alert("Hello");

var FirstName = prompt('What is her first name?');
console.log(FirstName);

if (name == null || name == " ")
    {
        Text = "User cancelled the prompt";
    }

    else
        {
            text = "Hello" + name + "! How are you today ? ";
        }

    
   //Basic operation
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 12;
ageMark = 25;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

//Logical operator
var JohnOlder = ageJohn > ageMark;
console.log(JohnOlder);

//Types of operator
console.log(typeof JohnOlder);

//If-else-statement
var name = 'Sita';
var age = 22;
var ismarried = false;

if (ismarried)
  {      console.log(name + ' is married ');
    }
else
{
    console.log(name + ' will marry soon ');
}

//operator precedence
var fullage = 18;

// multiple operator
var isfullage = now + ageJohn <= fullage;
console.log(isfullage);
 
// grouping
var average = (ageJohn + ageMark)/2;
console.log(average);

//multiple assignment
var x , y;
x = y =(25+96)*9-5;
console.log(x, y);
x *= 2;
console.log(x);
x++;
console.log(x);
x--;


console.log(x);

//Lecture: Booleamn logic and switch
var age = 30;
if(age >= 30)
    {
        console.log(' He is a man. ');
        
    }
else if(age < 20  && age >15)
    {
        console.log(' He is a teen ');
        
    }
else
    {
        console.log( " He is a young");
    }

var job = 'PILOT';
switch(job)
    {
            case 'nurse':
    console.log('She cure the patient');
    break;
    case 'doctor':
    console.log('She is checks the patient');
    break;
    default:
    console.log('She is beautiful');
    
    }
