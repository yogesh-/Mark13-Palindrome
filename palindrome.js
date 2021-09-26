var userInput = document.querySelector("#input");
var btnClick = document.querySelector("button");
var result = document.querySelector("#output");


// btnClick.addEventListener("click",clickHandler);

// function clickHandler(){
//     var bdayStr = userInput.value;

//     if (bdayStr!==""){
//         var userDate = bdayStr.split("-");
//         var date = {
//             day : userDate[2],
//             month : userDate[1],
//             year : userDate[0]
//         };
//     }

//     var isPalindrome = palindromeValidator(date);

//     if(isPalindrome){
//         result.innerText = "Your Birthday is a Palindrome";
//     }else {
//         var [ctr,nextDate] = getNextPalindrome(date);
//         result.innerText = "The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed it by ${ctr} days";
//     }
// }



function reverseStr(str){
     var listOfchars = str.split('');
     var revStr = listOfchars.reverse();
     var revJoin = revStr.join('');
     return revJoin;

     //return str.split('').reverse().join('');
}

function palindrome(str){
    var reverse = reverseStr(str);
    if(str === reverse){
        return true;
    }else{
        return false;
    }
}



function convertDatetoStr(date){
    var dateStr = {day:'',month:'',year:''};
    if(date.day<10){
        dateStr.day = "0"+date.day;
    }else{
        dateStr.day = date.day.toString();
    }

    if(date.month<10){
        dateStr.month = "0"+date.month;
    }else{
        dateStr.month = date.month.toString();
    }
    
    dateStr.year = date.year.toString();
    return dateStr;
}

function getAllformats(date){
    var dateStr = convertDatetoStr(date);
    var ddmmyyyy = dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy = dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd = dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy = dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy = dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) +dateStr.month+dateStr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function palindromeValidator(date){
    var listOfPalindrome = getAllformats(date);

    var flag  = false;
    var i = 0;
    for(i=0;i<listOfPalindrome.length;i++){
        if(palindrome(listOfPalindrome[i])){
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
    return false;
}



function getNextDate(date){
    var day = date.day+1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 2){
        if(isLeapYear(year)){
            if(day>29){
                day = 1;
                month++;
            }
        }else{
            if(day>28){
                day = 1;
                month++;
            }
        }
    }else {
        if(day > daysInMonth[month-1]){
            day = 1;
            month++;
        }
    }
    if(month>12){
        month = 1;
        year++;
    }
    return {
        day : day,
        month : month,
        year : year
    }
}

function getNextPalindrome(date){
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1){
        ctr++;
        var isPalindrome = palindromeValidator(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [ctr,nextDate];
}


btnClick.addEventListener("click",clickHandler);

function clickHandler(e){
    var bdayStr = userInput.value;

    if (bdayStr!==""){
        var userDate = bdayStr.split("-");
        var date = {
            day : Number(userDate[2]),
            month : Number(userDate[1]),
            year : Number(userDate[0])
        };
    }

    var isPalindrome = palindromeValidator(date);

    if(isPalindrome){
        result.innerText = "Your Birthday is a Palindrome";
        console.log("palindrome is working");
    }else {
       var [ctr,nextDate] = getNextPalindrome(date);
    result.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed it by ${ctr} days`;
    console.log("not working");
    }
}