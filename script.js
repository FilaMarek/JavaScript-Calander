
// UI calander



// Variables

var currentMonths = new Date().getMonth();// what month it is
var Months = currentMonths;
var year =  new Date().getFullYear();
var days = new Date().getDate();//day of the month ex 11
var daysOfTheweek = new Date().getDay(); // days of the week ex 6 === sat
var weekNumber = 0;
var tempMonths = Months +1;
var dateobj =  new Date(tempMonths  +" " + 1 + " " + year)





//-------------------------------Buttons-------------------------


var setUpDate = function () /// function on load
{ 
    monthTranslator();  
    countingDays();
	monthSetup();
    hideDayButtons();
    
    
    
}
var nextMonth = function() // button next month
{
    eraseHTML();
    if (Months < 11)// if Month is not December
    {
		//tempMonths++;
		Months++;
		tempMonths++;
		dateobj =  new Date(tempMonths  +" " + 1 + " " + year)
        monthTranslator();
// function that will add months and re assign the date obj
        monthSetup(); 
    }
    else if (Months === 11) {
        Months = 0;
		tempMonths=1;
        year++;
        monthTranslator();
		dateobj =  new Date(tempMonths  +" " + 1 + " " + year);
		monthSetup(); 
    }
	return {dateobj};
};

var lastMonth = function()// button previouse month
{
	eraseHTML();
    if (Months > 0)// if Month is not Jan.
    {
		Months = Months - 1;
		tempMonths--;
        monthTranslator();
		dateobj =  new Date(tempMonths  +" " + 1 + " " + year);
		monthSetup(); 
    }
    else if(Months === 0) {
        Months = 11;
		tempMonths = 12;
        year = year - 1;
        dateobj =  new Date(tempMonths  +" " + 1 + " " + year);
        monthTranslator();
        monthSetup(); 
    }
};



var dayLayOut = function()
{
    dayHTMLchanger();
    dayButtons();
    hideMonthButtons();

}


var MonthLayout = function()
{
    dayHTMLchanger();
    ShowMonthButtons();
    hideDayButtons();
    monthTranslator();

}




//-------------------------------- Full Day Layout--------------------


var dayHTMLchanger = function()
{
    var firstDay = 1;
    
           switch (Months) {
    case 0:
    document.getElementById("Months").innerHTML = "January " + firstDay;
    break;
    case 1:
    document.getElementById("Months").innerHTML = "Feburary " + firstDay;
    break;
    case 2:
    document.getElementById("Months").innerHTML = "March " + firstDay;
    break;
    case 3:
    document.getElementById("Months").innerHTML = "April " + firstDay;
    break;
    case 4:
    document.getElementById("Months").innerHTML = "May " + firstDay;
    break;
    case 5:
    document.getElementById("Months").innerHTML = "June " + firstDay;
    break;
    case 6:
    document.getElementById("Months").innerHTML = "July " + firstDay;
    break;
    case 7:
    document.getElementById("Months").innerHTML = "August " + firstDay;
    break;
    case 8:
    document.getElementById("Months").innerHTML = "September " + firstDay;
    break;
    case 9:
    document.getElementById("Months").innerHTML = "October " + firstDay;
    break;
    case 10:
    document.getElementById("Months").innerHTML = "November " + firstDay;
    break;
    case 11:
    document.getElementById("Months").innerHTML = "December " + firstDay;
        } 
    
    
}




// hide and show buttons




// months
var hideMonthButtons = function()
{
   document.getElementById('buttonNxtMonth').style.display = "none";
   document.getElementById('buttonPrvMonth').style.display = "none";
    
}


var ShowMonthButtons = function()
{
   document.getElementById('buttonNxtMonth').style.display = "block";
   document.getElementById('buttonPrvMonth').style.display = "block";
    
}



// day buttons

var hideDayButtons = function()
{
   document.getElementById('buttonNxtDay').style.display = "none";
   document.getElementById('buttonPrvDay').style.display = "none";
    
}

var dayButtons = function()
{
   document.getElementById('buttonNxtDay').style.display = "block";
   document.getElementById('buttonPrvDay').style.display = "block";
}


// ----------------------------------------------------------FULL MONTH PREVIEW---------------------------------

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
      
      year= dateobj.getFullYear();
      days= dateobj.getDate();
      currentMonths= dateobj.getMonth();
      daysOfTheweek= dateobj.getDay();
      
      if(daysOfTheweek ===6)
          {
              
             document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days; 
              
              tempWeekNumb++;
              days++;
              for(tempWeekNumb;tempWeekNumb<7;tempWeekNumb++){
              for(daysOfTheweek=0;daysOfTheweek<=6;daysOfTheweek++)
                  {
                       document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days;  
                       days++;

                      if((currentMonths === 0 || currentMonths === 2 || currentMonths === 4 || currentMonths === 6 || currentMonths === 7 || currentMonths === 9 || currentMonths === 11) && days <= 31)
                        {}else if((currentMonths === 3 || currentMonths === 5 || currentMonths === 8 || currentMonths === 10) && days <= 30)
                          {}else if(((currentMonths === 1 && (year % 4)=== 0) &&  days <=29) && daysOfTheweek != 6) // Feb with 29 days every 4 years
                            {}else if((currentMonths === 1 && (year % 4)> 0) &&  days <=28)// Feb with 28 days other years
								{}else if ((currentMonths === 1 && (year % 4)=== 0) &&  days === 30 && daysOfTheweek === 6)
									{
										daysOfTheweek=8; 
										tempWeekNumb = 8;
										break;
										}
								else {break;}
                  }// for days
              }  // for weeks
          }// if first dayy of the month is a saturday
            else if(daysOfTheweek < 6)
                {
                   for(tempWeekNumb;tempWeekNumb<6;tempWeekNumb++){
                     for(daysOfTheweek;daysOfTheweek<=6;daysOfTheweek++){
                         
                        document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days;  
                        days++;
                         
                         // check if days of the week is 6 and if las day is 30th
                         
                                                  
                            if(daysOfTheweek === 6 && days === 31)
                                {
                                    daysOfTheweek = 0;
                                    tempWeekNumb++;
                                    document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days; 
                                    tempWeekNumb = 8;
                                    daysOfTheweek = 8;
                                }
                         
                            if(daysOfTheweek === 6)
                                {
                                    daysOfTheweek = 0;
                                    break;
                                }
                         
                         if((currentMonths === 0 || currentMonths === 2 || currentMonths === 4 || currentMonths === 6 || currentMonths === 7 || currentMonths === 9 || currentMonths === 11) && days <= 31)// all months with 31 days
                            {}else if((currentMonths === 3 || currentMonths === 5 || currentMonths === 8 || currentMonths === 10) && days <= 30)// alse months with 30 days
                              {}else if((currentMonths === 1 && (year % 4)=== 0) &&  days <=29) // Feb with 29 days every 4 years
                                 {}else if((currentMonths === 1 && (year % 4)> 0) &&  days <=28)// Feb with 28 days other years
                                     {}else if ((currentMonths === 1 && (year % 4)=== 0) &&  days === 30 && daysOfTheweek === 6)
									{
										daysOfTheweek=8; 
										tempWeekNumb = 8;
										break;
										}
									 else {break;} 
                         
                     }  // for days of week

                   } // for temp week
                    
                }//end of else if
  };// end of function calander




var eraseHTML = function()
{
    var tempVar = tempWeekNumb =1;
    var tempVar2 = daysOfTheweek=0;
    
                  for(tempVar;tempVar<7;tempVar++){
              for(tempVar2=0;tempVar2<=6;tempVar2++)
                  {
                  
                    document.getElementById("tableTop"+ tempVar/*week*/+"-"+tempVar2/*day*/).innerHTML = " ";   
                  }// for days
              }  // for weeks
}


// ----------------------------------------------------------END OF FULL MONTH PREVIEW


