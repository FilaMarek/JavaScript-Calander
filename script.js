
// UI calander

var currentMonths = new Date().getMonth();
var Months = currentMonths;



var setUpDate = function ()
{ 
    monthTranslator();  
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
        monthTranslator();
    }
    

    
}

var lastMonth = function()// button previouse month
{
    if (Months > 0)// if Month is not Jan.
    {
    Months = Months - 1;
        monthTranslator();
    }
    else {
        Months = 11;
        monthTranslator();
    }
    
}




var monthTranslator = function()
{
   
    switch (Months) {
    case 0:
    document.getElementById("Months").innerHTML = "January";
    break;
    case 1:
    document.getElementById("Months").innerHTML = "Feburary";
    break;
    case 2:
    document.getElementById("Months").innerHTML = "March";
    break;
    case 3:
    document.getElementById("Months").innerHTML = "April";
    break;
    case 4:
    document.getElementById("Months").innerHTML = "May";
    break;
    case 5:
    document.getElementById("Months").innerHTML = "June";
    break;
    case 6:
    document.getElementById("Months").innerHTML = "July";
    break;
    case 7:
    document.getElementById("Months").innerHTML = "August";
    break;
    case 8:
    document.getElementById("Months").innerHTML = "September";
    break;
    case 9:
    document.getElementById("Months").innerHTML = "October";
    break;
    case 10:
    document.getElementById("Months").innerHTML = "November";
    break;
    case 11:
    document.getElementById("Months").innerHTML = "December";
}
    
}



