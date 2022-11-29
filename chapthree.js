/* Given two arrays, create an associative array (map) containing keys of the first, and values of the second. */

function keyVal(key, value){
    var object={};
    for(var i = 0; i<key.length; i++){
        object[key[i]] = value[i];
    }
    return object;
}
console.log(keyVal(['a','b','c'], ['1','2','3']));

function hash(hash){
    var newHash={}
    for(key in hash){
         newHash[key]=hash[key];
    }
    return newHash;
}
console.log(hash({ah:1, be:2, ce:3}));

//Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
function invertHash(key, value){
    var obj={};
    for(var i = 0; i<key.length; i++){
        obj[value[i]] = key[i];
    }
    return obj;
}
console.log(invertHash(['a', 'b', 'c'], ['1', '2', '3']));

function reverseHash(hash){         // using for.. in allows you access for each property and value w/o knowing the specifics. 
    var newHash = {};
     for(key in hash){
         newHash[hash[key]]=key;
     }
    return newHash;
}
console.log(reverseHash({D:1, E:2, F:3}));

//Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed.

function reverseString(str){
    var newString = " ";
    for(var i = str.length-1; i>= 0; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//recursion 

function recursiveReverse(str){
    if(str===""){
        return "";

    }
    else
        return recursiveReverse(str.substr(1)) + str.charAt(0);
    }
    console.log(recursiveReverse("hope"));


//Create a function that, given a string, returns the string, without blanks.

function removeAllSpace(str){
    var newString = str; // javascript always takes in a string, a number is interpreted as a string "x".
    for(var i =0; i<str.length; i++){
        newString = newString.replace(" ", "");
    }    
    return newString;
}
console.log(removeAllSpace("  a    b        c  "));

function removeBlanks(str){
    var newStr = "";
    for(var i=0; i<str.length; i++){
        if(str[i]=== " "){
            continue; // continue and ignore the whitespace.
        } else {      // if it is not a whitespace add str[i] to the new string. 
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
console.log(removeBlanks("   al  dkfff"));

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// isNaN() is a function that determine if a value is 'not a number'.adding ! returns a number.

function extractNum(str){
var number = '';
for(var i = 0; i<str.length; i++){
    if(!isNaN(str[i]) ){  //if NaN(a string) is not(!) a String, which is a number  
        number = number +str[i];
    }
}
return number;
}
console.log(extractNum('0abc123gjht5d0fksj7'));

function extractStr(str){
    var string = '';
    for(var i = 0; i<str.length; i++){
        if(isNaN(str[i])){
            string = string +str[i]
        }
    }
    return string;
} 
console.log(extractStr('A12 str3ing wi5th no num8bers'));

function join(arr){
    var str = "";
    for(var i=0; i<arr.length; i++){
        str += arr[i];
    }
    return str;
}
console.log(join(['1234', '56', '78', '910']));

function split(str){
    var arr = [];
    for(var i=0; i<str.length; i++){
        arr.push(str[i]);
    }
    return arr;
}
console.log(split('AAAAAAA'));

//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized)

function acronyms(str){
    var newStr = "";
    if(!str.length){
        return null; //a check to make sure that an empty string returns null.
    }
    str = str.toUpperCase(); //converts the entire string to UpperCase.
    var arr = str.split(" "); // splitting string ["FALSE" "EVIDENCE"...]
    for(var i = 0; i<arr.length; i++){
            newStr = newStr + arr[i][0]; //adds the index value of the split string, as it iterates through. 
        }
    return newStr;
}
console.log(acronyms("False evidence appearing real"));
console.log(acronyms("cascading style sheet"));

//Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. 
//Given input ​"y(3(p)p(3)r)s"​, return true. Given ​"n(0(p)3"​, return ​false​. Given ​"n)0(t(0)k"​, return ​false​
function parensValid(str){
    var arr = [];
    for(var i=0; i<str.length; i++){
        switch(str[i]) { //evaluating str[i]
        case "(": //comparing '(' to the values of arr[i] does it contain '('
            arr.push(str[i]);
            break;
        case ")":
            if (arr[arr.length-1] === "("){
                arr.pop();
            } else {
                return false;
            }
            break;
        default:
            continue;
            
        }
    }
    return true;
}
console.log("Switch Case");
console.log(parensValid("y(3(p)p(3)r)s"));

//Given a string, returns whether the sequence of various parentheses, 
//braces and brackets within it are valid.

function bracesValid(str){
    var arr = [];
    obj = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(var i=0; i<str.length; i++){
        switch(str[i]) {
            case "(": 
            case "{": 
            case "[":
                arr.push(str[i]);   
                break;
            case ")": 
            case "}": 
            case "]":
                if(obj[str[i]] === arr[arr.length-1]){
                    arr.pop();
                } else {
                    return false;
                }
                break;
            default:
                continue;
        }
    }
    if (arr.length) return false; 
    return true;
}
console.log("Braces Valid");
console.log(bracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"));
console.log(bracesValid("d(i{a}l[t]o)n{e"));
