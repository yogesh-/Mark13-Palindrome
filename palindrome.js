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

// var date = {
//     day:5,
//     month:9,
//     year:1990
// }

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

function getNextPalindrome(date){ // 1 1 2020
    var abc = 0;
    var nextDate = getNextDate(date); // 2 1 2020

    while(1){
        abc++; // abc = 1
        var isPalindrome = palindromeValidator(date); // false
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [abc , nextDate];
}



var date = {
    day:15,
    month:9,
    year:2021
}

console.log(getNextPalindrome(date));

// 12 - 02 - 2020 is a palindrome date