
// UI calander

var currentMonths = new Date().getMonth();// what month it is
var Months = currentMonths;
var year = new Date().getFullYear();
var days = new Date().getDate();//day of the month ex 11
var daysOfTheweek = new Date().getDay(); // days of the week ex 6 === sat
var weekNumber = 0;

var January = 31;//0
var February = 28;
var February2 = 29;
var March = 31;//2
var April = 30;
var May = 31;//4
var June = 30;
var July = 31;//6
var August = 31;//7
var September =30;
var October = 31;//9
var November = 30;
var December = 31;//11







var setUpDate = function () /// function on load
{ 
    monthTranslator();  
    countingDays();
}

var nextMonth = function() // button next month
{
    if (Months < 11)// if Month is not December
    {
    Months = Months + 1;
        monthTranslator();
    }
    else {
        Months = 0;
        year = year + 1;
        monthTranslator();
    }
    

    
};

var lastMonth = function()// button previouse month
{
    if (Months > 0)// if Month is not Jan.
    {
    Months = Months - 1;
        monthTranslator();
    }
    else {
        Months = 11;
        year = year - 1;
        monthTranslator();
    }
    
};





// translates month number to word and puts it in the calander
var monthTranslator = function()
{
   
    switch (Months) {
    case 0:
    document.getElementById("Months").innerHTML = "January " + year;
    break;
    case 1:
    document.getElementById("Months").innerHTML = "Feburary " + year;
    break;
    case 2:
    document.getElementById("Months").innerHTML = "March " + year;
    break;
    case 3:
    document.getElementById("Months").innerHTML = "April " + year;
    break;
    case 4:
    document.getElementById("Months").innerHTML = "May " + year;
    break;
    case 5:
    document.getElementById("Months").innerHTML = "June " + year;
    break;
    case 6:
    document.getElementById("Months").innerHTML = "July " + year;
    break;
    case 7:
    document.getElementById("Months").innerHTML = "August " + year;
    break;
    case 8:
    document.getElementById("Months").innerHTML = "September " + year;
    break;
    case 9:
    document.getElementById("Months").innerHTML = "October " + year;
    break;
    case 10:
    document.getElementById("Months").innerHTML = "November " + year;
    break;
    case 11:
    document.getElementById("Months").innerHTML = "December " + year;
    }
    
};


var countingDays = function()
{

   if (days <= 7){
       weekNumber = 1
   } else if (days >7 && days <= 14){
       weekNumber =2
       
   }else if (days >14 && days <= 21){
       weekNumber = 3;
    
   }else if (days >21 && days <= 28){
    
       weekNumber = 4;
       
   }else if (days >28 && days <= 31){
    
       weekNumber = 5;
       
   }
    
};


  
  
       var nextDays = daysOfTheweek;
       var tempWeekNumb= 1;

  
  var monthSetup = function()
  {
      
      dateobj = new Date('Jan 1, 2000 ');
      year= dateobj.getFullYear();
      days= dateobj.getDate();
      currentMonths= dateobj.getMonth();
      daysOfTheweek= dateobj.getDay();
      console.log(year);
      console.log("day of the month"+days);// what day of the month ex 29th
      console.log("current month number"+currentMonths);// 0 to January 11 to December
      console.log("what days of  week"+daysOfTheweek);// first day of 2000 is na 1st Saturday
     
      if(daysOfTheweek === 6)
          {
              
             document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days; 
              
              tempWeekNumb = 2;
              days = 2;
              for(tempWeekNumb;tempWeekNumb<7;tempWeekNumb++){
              for(daysOfTheweek=0;daysOfTheweek<=6;daysOfTheweek++)
                  {
                  
                    document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days;  
                     days++; 
                      if((currentMonths === 0 || currentMonths === 2 || currentMonths === 4 || currentMonths === 6 || currentMonths === 7 || currentMonths === 9 || currentMonths === 11) && days <= 31)
                            {

                            }
                      else if((currentMonths === 3 || currentMonths === 5 || currentMonths === 8 || currentMonths === 10) && days <= 30)
                      {  
                          
                      }else {break;}
                      
                      
                      
                  }
              } 
              
          }

  };

  /*
var February = 28;//1
var February2 = 29;//1(2)

var April = 30;//3

var June = 30;//5

var September =30;//8

var November = 30;//10

  */