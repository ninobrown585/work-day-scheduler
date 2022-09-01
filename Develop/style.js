$(document).ready(function(){
    $("#9am").val(localStorage.getItem("task9"));
    $("#10am").val(localStorage.getItem("task10"));
    $("#11am").val(localStorage.getItem("task11"));
    $("#12am").val(localStorage.getItem("task12"));
    $("#1pm").val(localStorage.getItem("task1"));
    $("#2pm").val(localStorage.getItem("task2"));
    $("#3pm").val(localStorage.getItem("task3"));
    $("#4pm").val(localStorage.getItem("task4"));
    $("#5pm").val(localStorage.getItem("task5"));
})

// current day timestamp
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);

// sets the current hour equal to currentTime variable
var currentTime = moment().hour();

// Changing colors based on time of day
$("#time").each(function() {
    var currentElement = $(this).attr("id");
    if(currentTime > currentElement) {
        $(this).children().eq(1).addClass("past");
    } else if(currentTime == currentElement) {
        $(this).children().eq(1).addClass("present");
    } else {
        $(this).children().eq(1).addClass("future");
    }
})
