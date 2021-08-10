const pass = `<div class="label">Yay!! Your birthday is a palindrome number!</div>`
const fail = `<div class="label">Oops!! Your birthday is not a palindrome number!</div>`
const error = `<div class="label">Enter birthdate in appropriate format !</div>`


const dateInput = document.querySelector(".input-date");
const outputDiv = document.querySelector(".output");
const checkBtn = document.querySelector(".check-btn")



function reverseStr(str){
    var listOfChars = str.split("");
    var reverseListOfChars = listOfChars.reverse();

    var reversedStr = reverseListOfChars.join();

    return reversedStr;

}

function isPalindrome(str){
    var reverse = reverseStr(str);

    if(str===reverse){
        return true;
    }
    return false;
}


function convertDateToStr(date){
    var dateStr = { day: ' ', month: ' ', year:' '};
    if(date.day<10){
        dateStr.day = '0' + date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(dateStr.month<10){
        dateStr.month = '0' + dateStr.month;
    }
    else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    return dateStr;
}

function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ ddmmyyy , mmddyyy, yyyymmdd ,ddmmyy ,mmddyy,yymmdd ];

}

function checkPalindromeForAllDateFormats(date){
    var listOfDates = getAllDateFormats(date);
    var flag = false;
    for(var i = 0; i<listOfDates.length; i++){
        if(isPalindrome(listOfDates[i])){
            flag = true;
            break;
        }
    }
    return flag;
}


function isLeapYear(year){
    if(year%400 ===0){
        return true;
    }
    if(year%100 ===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
}



function getNextDate(date){
    var day = date.day+1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month===2){
        if(isLeapYear(year)){
            if(day>29){
                day = 1;
                month++;
            }
        }
        else{
            if(day>28){
                day = 1;
                month ++;
            }
        }
    }
    else{
        if(day>daysInMonth[month-1]){
            day = 1;
            month++;
        }
        if(month>12){
            month = 1;
            year++;
        }
    }
    return { 
        day: day ,
        month: month ,
        year: year
    };
    
}

function getNextPalindromeDate(date){
    var n = 0;
    var nextDate = getNextDate(date);
    while(true){
        n++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [n,nextDate];

}


function gePreviousDate(date){
    var day = date.day-1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month===3){
        if(isLeapYear(year)){
            if(day<1){
                day = 29;
                month--;
            }
        }
        else{
            if(day<1){
                day = 28;
                month--;
            }
        }
    }
    else{
        if(day<daysInMonth[month-1]){
            day = daysInMonth[month-2];
            month--;
        }
        if(month<1){
            month = 12;
            year--;
        }
    }
    return { 
        day: day ,
        month: month ,
        year: year
    };
    
}

function getPreviousPalindromeDate(date){
    var p = 0;
    var previousDate = getPreviousDate(date);
    while(true){
        p++;
        var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
        if(isPalindrome){
            break;
        }
        previousDate = getPrevioustDate(previousDate);
    }
    return [p,previousDate];

}

checkBtn.addEventListener('click', clickHandler());

function clickHandler(){
    var bdayStr = dateInput.value;
    if(bdayStr!==""){
        var listOfDate = bday.Str.split("-");
        var date = {
            day : Number(listOfDate[2]),
            month : Number(listOfdate[1]),
            year : Number(listOfDate[0])
        };
    }
    else{

    }

    var isPalindrome = checkPalindromeForAllDateFormats(date);

    if(isPalindrome){
        outputDiv.innerText = "Yay! Your birthday is Palindrome :)"
    }
    else{
        var [n,nextDate] = getNextPalindromeDate(date);
        outputDiv.innerText= ` The next date is  $(nextDate.day) - $(nextDate.month) - $(nextDate.year), you missed by $(n) days! `

        var [p,previousDate] = getPreviousPalindromeDate(date);
        outputDiv.innerText= ` The previous date was  $(previousDate.day) - $(previousDateDate.month) - $(previousDate.year), you missed by $(p) days! `

    }


}
