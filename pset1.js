/******************
PROBLEM 1:

What are the types of the following expressions and what do they evaluate to, and why?

-> 17
numbers 17 because it is a numerical value
-> 1 + 2 * 3 + 4
Arithmetic, 11 because it is simply adding in PEMDAS format
-> 800 / 80 / 8
Operator 1.25 divison from left to right
-> 400 > 200
Comparision Operator, true because in this specific problem 400 is indeed greater than 200
-> 1 !== 1
Comparsion Operator, false because !== is checking for inequality, however, both statements are equals therefore for inequality it is false
-> true || false
Or Operator, true because in an OR statement only one side needs to be true
-> true && false
AND Operator, false because in an AND statment both side must be true
-> 20 % 6
Modulo, 2 this remainder operation looks for what is the value leftover, 6 can only go into 20 3 times with a remainder of 2
-> 'a' + 'b'
Arithmetic, ab because we are adding two strings together

******************/



/******************
PROBLEM 2:

What will the following return? Why?

-> typeof 4
Number because we are looking of what type of value 4 is and it is of numerical value
-> typeof 'hello'
String because hello is a string within the quotation marks
-> typeof true
Boolean because true is a statement result of a Boolean which is looking at truth or false statements
-> 2 === 1 || 3 === 4
false because both values are false and in an OR statement one of the values must be true to equate the statement true

******************/


/******************
PROBLEM 3:

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B| 
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

|   A   |   B   | A || B| 
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 
The reason for the results in the table are because in an OR statement on one side of the statement has to be true, which is true in the case of most
However, it is false for if both statements are false
******************/



/******************
PROBLEM 4:

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A &&!B| 
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   A   |   !A  |   B   |   !B   |!A && !B| 
|  true | false | true  | false  |  false |
| false | true  | true  | false  |  false |
|  true | false | false |  true  |  false |
| false | true  | false |  true  |  true  | 
The reason for the results in the table are because in an && statement both statements MUST be true in order for the entire result to be true, the ! is doing the opposite results of A or B statements
******************/



/******************
PROBLEM 5:

Write a step-by-step evaluation for the following expression (remember order of operations): 2 + 3 * 2 + 1. 

For reference, here is a exp of a step-by-step evaluation:
1 + 2 + 3 + 4
    3 + 3 + 4
        6 + 4
           10

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9
PEMDAS order, multiplication comes before addition
******************/



/******************
PROBLEM 6:

Write a step-by-step evaluation for the following expression (remember order of operations): 4 / 2 + 8 / 4.
2 + 8 / 4
    2 + 2
        4
Following PEMDAS the divisions must come first, so it would be seen as (4/2)+(8/4), then addition
******************/



/******************
PROBLEM 7:

Write a step-by-step evaluation for the following expression: 'ca' + 'ter' + 'pi' + 'llar'.
'cater' + 'pi' + 'llar'
     'caterpi' + 'llar'
          'caterpillar'
Adding the strings together from left to right to create the word caterpillar by adding 4 strings
******************/


/******************
PROBLEM 8:

Write a step-by-step evaluation for the following expression: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                               true && true
                                       true
The && operator is strictly comparing the statements on either side, so those equations/comparisions must be completed first before continuing
******************/