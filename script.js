
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
var tempDay = 1;
var tempMonths = Months + 1;
var tempYear = year;
var currentCalMode = 0; // 0 is Month mode, 1 is week mode, 2 is day Mode
var textMonth = " "
var numberOfTotalWeeks = 5;




//-------------------------------Buttons-------------------------
var setUpDate = function () /// function on load
{ 
    monthTranslator();  
    //countingDays();
	monthSetup();
    hideDayButtons();
    hideWeekButtons();
	textMonths();
}

var textMonths = function(){

    switch (tempMonths) {
    case 1:
    textMonth = "January ";
    break;
    case 2:
    textMonth = "Feburary ";
    break;
    case 3:
    textMonth = "March ";
    break;
    case 4:
    textMonth = "April ";
    break;
    case 5:
    textMonth = "May ";
    break;
    case 6:
    textMonth = "June ";
    break;
    case 7:
    textMonth = "July ";
    break;
    case 8:
    textMonth = "August ";
    break;
    case 9:
    textMonth = "September ";
    break;
    case 10:
    textMonth = "October ";
    break;
    case 11:
    textMonth = "November ";
    break;
    case 12:
    textMonth = "December ";
        } 
}



var tempWeekDay = function()
{
   	
   if (weekNumber === 1){

	   document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber;
   } else if (weekNumber === 2){

       document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber;
   }else if (weekNumber === 3){

    	document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber;
   }else if (weekNumber === 4){

       document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber;
   }else if (weekNumber === 5){

       document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber; 
   }
   else if (weekNumber === 6){

       document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber; 
   }
}
   
//-------------------------------day layout-------------------------

var dayLayOut = function()
{
	
	if(currentCalMode !== 2){
	tempDay = 1;
    currentCalMode = 2;
    tempYear = year;
    dayHTMLchanger();
    dayButtons();
    hideMonthButtons();// hides month buttons and Table
    hideWeekButtons();// hides week buttons and Table
	}
	else{}
}
//-------------------------------month layout-------------------------

var MonthLayout = function()
{
	
	if(currentCalMode !== 0){
	tempDay = 1;
    currentCalMode = 0;
    year = tempYear
    dayHTMLchanger();
    ShowMonthButtons();
    hideDayButtons();// hides day buttons and Table
    hideWeekButtons();// hides week buttons and Table
    monthTranslator();
	}
	else{}

}

//-------------------------------week layout-------------------------
var weekLayout = function()
{ 

	if(currentCalMode !== 1){
	
	tempDay = 1;
	weekNumber = 1;
	textMonths();
    currentCalMode = 1;
    hideDayButtons();// hides day buttons and Table
    hideMonthButtons();// hides month buttons and Table
    // I need a Var that tells me what mode we are in is it week/Month/ or day
    showWeekButtons();
	document.getElementById("Months").innerHTML = textMonth + "Week " + weekNumber;
    //eraseHTML();
	}
	else{}
}



//-------------------------------- Full Day Layout--------------------


var dayHTMLchanger = function()
{
    var firstDay = 1;
    
           switch (tempMonths) {
    case 1:
    document.getElementById("Months").innerHTML = "January " + tempDay;
    break;
    case 2:
    document.getElementById("Months").innerHTML = "Feburary " + tempDay;
    break;
    case 3:
    document.getElementById("Months").innerHTML = "March " + tempDay;
    break;
    case 4:
    document.getElementById("Months").innerHTML = "April " + tempDay;
    break;
    case 5:
    document.getElementById("Months").innerHTML = "May " + tempDay;
    break;
    case 6:
    document.getElementById("Months").innerHTML = "June " + tempDay;
    break;
    case 7:
    document.getElementById("Months").innerHTML = "July " + tempDay;
    break;
    case 8:
    document.getElementById("Months").innerHTML = "August " + tempDay;
    break;
    case 9:
    document.getElementById("Months").innerHTML = "September " + tempDay;
    break;
    case 10:
    document.getElementById("Months").innerHTML = "October " + tempDay;
    break;
    case 11:
    document.getElementById("Months").innerHTML = "November " + tempDay;
    break;
    case 12:
    document.getElementById("Months").innerHTML = "December " + tempDay;
        } 
    
    
}


//----------------------------------------------- next day function ------------------------------
var nxtDay = function() 
{

     tempDay++;
    
    if ((tempMonths === 1 || tempMonths === 3 || tempMonths === 5 || tempMonths === 7 || tempMonths === 8 || tempMonths === 10|| tempMonths === 12) && tempDay < 31 )
        {
       dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
       dayHTMLchanger();
        }
    else if ((tempMonths === 1 || tempMonths === 3 || tempMonths === 5 || tempMonths === 8 || tempMonths === 10) && tempDay === 31 )
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
        tempDay = 0;
        tempMonths++;   
         } 
    else if (tempMonths === 7  && tempDay === 31 )
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
        tempDay = 0;
        tempMonths++;
        }
    else if((tempMonths === 4 || tempMonths === 6 || tempMonths === 9 || tempMonths === 11) && tempDay < 30)
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
        } 
    else if((tempMonths === 4 || tempMonths === 6 || tempMonths === 9 || tempMonths === 11) && tempDay === 30)
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
        tempDay = 0;
        tempMonths++;
        } 
    else if((tempMonths === 2 && (tempYear % 4)=== 0) &&  tempDay < 29) // Feb with 29 days every 4 years
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear) 
        dayHTMLchanger();
        }
    else if((tempMonths === 2 && (tempYear % 4)=== 0) &&  tempDay === 29) // Feb with 29 days every 4 years
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear) 
        dayHTMLchanger();
        tempDay = 0;
        tempMonths++;
        }
    else if((tempMonths === 2 && (tempYear % 4)> 0) &&  tempDay <28)// Feb with 28 days other years
        {   
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear) 
        dayHTMLchanger();
        }
    else if((tempMonths === 2 && (tempYear % 4)> 0) &&  tempDay === 28)// Feb with 28 days other years
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
        tempDay = 0;
        tempMonths++;
        } 
    else if (tempMonths === 12 &&  tempDay === 31)
        {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)
        dayHTMLchanger();
        tempDay = 0;
        tempMonths=1;
        tempYear++;
        }  
		
}


//----------------------------------------------- prv day function ------------------------------
var prvDay = function()
{

     tempDay--;
     // adding 30 days to a month  
    if (( tempMonths === 5 || tempMonths === 7 || tempMonths === 10 || tempMonths === 12) && tempDay < 1 )
    { // if month has 31 days and it is 1st day

        tempMonths--;
        tempDay = 30;
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
    }
  // adding 31 days to a month  
    else if((tempMonths === 2 || tempMonths === 4 || tempMonths === 6 || tempMonths === 8 || tempMonths === 9 || tempMonths === 11) && tempDay < 1)
    {
        tempMonths--;
        tempDay = 31;
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
    }
    // Feb month 28 and 29 days
    else if((tempMonths === 3 && (tempYear % 4)=== 0) &&  tempDay < 1) // Feb with 29 days every 4 years
    {
        tempMonths--;
        tempDay = 29;
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear) 
        dayHTMLchanger();
    }
    
    else if((tempMonths === 3 && (tempYear % 4)> 0) &&  tempDay < 1)// Feb with 28 days other years
    {
        tempMonths--;
        tempDay = 28;
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear) 
        dayHTMLchanger();
    }
    else if (tempMonths === 1 && tempDay < 1 )
         {
            tempDay = 31;
            tempMonths = 12;
            tempYear--;
            dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)
            dayHTMLchanger();

         }  
        else 
    {
        dateobj =  new Date(tempMonths  + " " + tempDay + " " + tempYear)  
        dayHTMLchanger();
    }
    
    
}


//-------------------------------next week-------------------------

var nxtWeek = function() // function that adds weeks and changes HTML
{
	
	if(weekNumber < numberOfTotalWeeks){
	weekNumber++;
	tempWeekDay();
	//console.log(weekNumber)
	}
	else
	{
		weekNumber = 1;
		textMonths();
		tempWeekDay();
	}
	
	
}

//-------------------------------prv week-------------------------

var prvWeek = function()
{

	if(weekNumber >1)
	{
	weekNumber--;
	tempWeekDay();
	}
	else
	{
		weekNumber = numberOfTotalWeeks ;
		textMonths();
		tempWeekDay();	
		
	}
	
	
	
	//alert("I do not work yett!")
	
}

//-------------------------------next month-------------------------


var nextMonth = function() // button next month
{
    eraseHTML();
	numberOfTotalWeeks = 5;
    if (Months < 11)// if Month is not December
    {
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
//-------------------------------last month-------------------------
var lastMonth = function()// button previouse month
{
	eraseHTML();
	numberOfTotalWeeks = 5;
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





// hide and show buttons



// months
var hideMonthButtons = function()
{
   document.getElementById('buttonNxtMonth').style.display = "none";// hides button next
   document.getElementById('buttonPrvMonth').style.display = "none";// hides button previouse
   document.getElementsByTagName('table')[0].style.display = "none";// hides whole table
    
}


var ShowMonthButtons = function()
{
    document.getElementById('buttonNxtMonth').style.display = "block";// hides button next
    document.getElementById('buttonPrvMonth').style.display = "block";// hides button previouse
    document.getElementsByTagName('table')[0].style.display = "block";// shows whole table
    Months = tempMonths -1;
    
}



// day buttons

var hideDayButtons = function()
{
    document.getElementById('buttonNxtDay').style.display = "none";// hides button next
    document.getElementById('buttonPrvDay').style.display = "none";// hides button previouse
    document.getElementsByTagName('table')[1].style.display = "none";// hides whole table
    
}

var dayButtons = function()
{
    document.getElementById('buttonNxtDay').style.display = "block";
    document.getElementById('buttonPrvDay').style.display = "block";
    document.getElementsByTagName('table')[1].style.display = "block";// hides whole table
    tempMonths = Months + 1;
}


var hideWeekButtons = function()
{
    document.getElementById('buttonNxtWeek').style.display = "none";// hides button next
    document.getElementById('buttonPrvWeek').style.display = "none";// hides button previouse
    document.getElementsByTagName('table')[2].style.display = "none";// hides whole table
    
}

var showWeekButtons = function()
{
    document.getElementById('buttonNxtWeek').style.display = "block";// hides button next
    document.getElementById('buttonPrvWeek').style.display = "block";// hides button previouse
    document.getElementsByTagName('table')[2].style.display = "block";// hides whole table
    
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

       var nextDays = daysOfTheweek;
       var tempWeekNumb= 1;

  
  var monthSetup = function()
  {
      
      year= dateobj.getFullYear();
      days= dateobj.getDate();
      currentMonths= dateobj.getMonth();
      daysOfTheweek= dateobj.getDay();
       if(daysOfTheweek ===5 && (tempMonths === 1 || tempMonths === 3 || tempMonths === 5 || tempMonths === 7 || tempMonths === 8 || tempMonths === 10|| tempMonths === 12 ))
	   {
		  numberOfTotalWeeks = 6
	   }   
	   
	   
      if(daysOfTheweek ===6)
          {
             numberOfTotalWeeks = 6; 
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
                            {}else if((currentMonths === 3 || currentMonths === 5 || currentMonths === 8 || currentMonths === 10) && days < 30)//  months with 30 days
                            {}else if((currentMonths === 3 || currentMonths === 5 || currentMonths === 8 || currentMonths === 10) && days === 30)//  months with 30 days
                            {
                                daysOfTheweek++;
                                    document.getElementById("tableTop"+ tempWeekNumb/*week*/+"-"+daysOfTheweek/*day*/).innerHTML = days;
                                    tempWeekNumb = 8;
                                    daysOfTheweek = 8;
                               
                                
                            }else if((currentMonths === 1 && (year % 4)=== 0) &&  days <=29) // Feb with 29 days every 4 years
                                 {}else if((currentMonths === 1 && (year % 4)> 0) &&  days <=28)// Feb with 28 days other years
                                     {}else if ((currentMonths === 1 && (year % 4)=== 0) &&  days === 30 && daysOfTheweek === 6)
									{
										daysOfTheweek=8; 
										tempWeekNumb = 8;
										break;
										}
                         else{break};
 
                         
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


