
// UI calander

var currentMonths = new Date().getMonth();
var Months = currentMonths;
var year = new Date().getFullYear();



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
        year = year + 1;
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
        year = year - 1;
        monthTranslator();
    }
    
}


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
    
}



