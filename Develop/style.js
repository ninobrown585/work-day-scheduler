$(document).ready(function(){
    $(".9am").val(localStorage.getItem("task9"));
    $(".10am").val(localStorage.getItem("task10"));
    $(".11am").val(localStorage.getItem("task11"));
    $(".12pm").val(localStorage.getItem("task12"));
    $(".1pm").val(localStorage.getItem("task1"));
    $(".2pm").val(localStorage.getItem("task2"));
    $(".3pm").val(localStorage.getItem("task3"));
    $(".4pm").val(localStorage.getItem("task4"));
    $(".5pm").val(localStorage.getItem("task5"));
})

// current day timestamp
var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

// sets the current hour equal to currentTime variable
var currentTime = moment().hour();

// Changing colors based on time of day
$(".time").each(function() {
    var currentElement = $(this).attr("id");
    if(currentTime > currentElement) {
        $(this).children().eq(1).addClass("past");
    } else if(currentTime == currentElement) {
        $(this).children().eq(1).addClass("present");
    } else {
        $(this).children().eq(1).addClass("future");
    }
})

// global variables
var task9 = $(".9am");
var task10 = $(".10am");
var task11 = $(".11am");
var task12 = $(".12pm");
var task1 = $(".1pm");
var task2 = $(".2pm");
var task3 = $(".3pm");
var task4 = $(".4pm");
var task5 = $(".5pm");

// Jquery click event save user input to local storage, then gets it out of storage and writes it to the text area
$("#save").click(function(){
        var input9 = task9.val().trim();
        localStorage.setItem("task9", input9);
        $(".9am").val(localStorage.getItem("task9"));

        var input10 = task10.val().trim();
        localStorage.setItem("task10", input10);
        $(".10am").val(localStorage.getItem("task10"));

        var input11 = task11.val().trim();
        localStorage.setItem("task11", input11);
        $(".11am").val(localStorage.getItem("task11"));

        var input12 = task12.val().trim();
        localStorage.setItem("task12", input12);
        $(".12pm").val(localStorage.getItem("task12"));

        var input1 = task1.val().trim();
        localStorage.setItem("task1", input1);
        $(".1pm").val(localStorage.getItem("task1"));

        var input2 = task2.val().trim();
        localStorage.setItem("task2", input2);
        $(".2pm").val(localStorage.getItem("task2"));

        var input3 = task3.val().trim();
        localStorage.setItem("task3", input3);
        $(".3pm").val(localStorage.getItem("task3"));

        var input4 = task4.val().trim();
        localStorage.setItem("task4", input4);
        $(".4pm").val(localStorage.getItem("task4"));

        var input5 = task5.val().trim();
        localStorage.setItem("task5", input5);
        $(".5pm").val(localStorage.getItem("task5"));
});