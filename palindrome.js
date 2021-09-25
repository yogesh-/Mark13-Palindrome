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
        if(isPalindrome(listOfPalindrome[i])){
            flag = true;
            break;
        }
    }
    return flag;
}


var date = {
    day:5,
    month:9,
    year:1990
}

console.log(palindromeValidator(date));
