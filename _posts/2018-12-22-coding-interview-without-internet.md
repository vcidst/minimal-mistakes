---
title: "Coding Interviews Cannot Happen Without Internet Access"
categories:
  - opinion
tags:
  - programming
  - interview
---

I just got out of a coding interview. These have been happening a lot lately but I would mention this in particular because I failed miserably in this one. Only because of one condition - searching the internet during the coding interview is not allowed.

Here were the questions, what I answered and the actual answers. These question were asked on a phonecall while both of us have a shared notepad(collabedit) open in browser. The phonecall went for 20 minutes and I guess the coding interview lasted for some 10 minutes.

## 1
```js
// find the first non-repeating letter in a string
var a = 'tagtaste';
```

I don't remember the comment character in javascript. I just guessed and checked the code highlighter for validation. This was like javascript rapid fire,

#### My answer
```js
foreach letter in a:
    search letter in a:
        counter++;
    if (counter == 1):
        print "first unique letter found in the word!"
```

This isn't javascript. I don't know what would compile this but while lacking the actual syntax I was only trying to put forward the solution. It would be to
1. iterate through every letter of the word
2. search this letter in the word with a counter variable incrementing on each step   
3. if the letter would be non-repeating, then its counter would be 1 after the loop   
4. We check the counter if it is 1 and publish our findings if that is the case.   

#### Actual answer
```js
// find the first non-repeating letter in a string
var a = 'tagtaste';

// searched 'iterate through a word in javascript'
// okay so js only has standard for-loops
for(var i=0; i < a.length - 1; i++) {
	
	// searched 'substring in javascript' -- found substring() method
	// searched 'check if a letter in a string javascript' -- found includes() method
	// because of includes() we do not need to substring it anymore
	if(a.includes(a[i],i+1) === false) {
		console.log(a[i] + " is the first non-repeating letter in " + a);
		break;
	}	
}
```

This solution is much better than the past one because it took 10 extra minutes and allowed me to lookup small details specific to the language.


## 2
```
// create an object in javascript
```

I don't know the syntax so I tried. An object is only an instance of the class. Thus creating an object would first require creating a class and then creating an instance of it.

#### My answer:
```js
// create an object        
class myclass() {
    // member variable
    var a;
    
    // constructor
    myclass() {
        a = 0;
    }
};

var myobject = new myclass();
```

This is obviously incorrect syntax. A curosry google search reveals that the correct way to do it is,

#### Actual Answer
```js
var car = {type:'sedan', make:'tesla', color:'fuschia'};
``` 

## 3
```
// what is the difference between == and ===?
```

I answered that `===` is safe comparison and `==` is unsafe comparison. `===` probably checks for the equality of both type and value while `==` does not do that. Usage of `==` sometimes allows non-intuitive answers which is why `===` is prefrerred over `==`.

#### Actual answer:
A quick google search confirms my answer.

## 4
```
// in databases, what is sharding?
```

I told him that I am not aware of this term.

#### Actual answer:
So, sharding seems to be breaking up a table into smaller tables. You can do that either horizontally -- store all columns but only limited rows in each quanta. Or, you can break the table vertically, store all rows but only limited columns. One can of course also mix the two ways.

## 5
```js
// print the last letter of a string
var x = 'collabedit';
```

I was too fixated on the idea of slicing that I did not consider using a for-loop. I answered that if slicing is possible in JS then `x[x.length()-1]` might be a possible solution.

#### Actual answer:
```js
// print the last letter of a string
var x = 'collabedit';

// #1
x[x.length-1]

// #2
for(var i=0;i<x.length;i++) {
	if(i === x.length-1) console.log(x[i]);

}
```

## 6
```js
// what does the following code print?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```

This is an anonymous function initialized and also called. I do not know what setTimeout() does.

#### Actual answer:
```js
// intuitive answer
// search setTimeout() -- it evaluates a function after n milliseconds
1
3
4
2

// actual result of the code
1 
4 
undefined
3 
2

// discussion on the specifics of the above result is outside the scope of current discussion
```

---
# Banning Internet Access during an Interview is a silly idea
This seems like a rather silly and pointless condition to me for a few reasons

1. This does not simulate actual working environment. It would be stupid to turn off internet for people writing your production code.

2. I juggle between languages as a part of my current job. That implies although I am familiar with ideas and processes in certain languages I still need a refresh everytime I switch. Quick Google searches are exactly for this! Things I look up are syntax for while-loops, or how to write a class-constructor in X.

3. Ideas are more important than processes. The same holds true for magic words, umbrella terms and industry specific words for more general ideas.