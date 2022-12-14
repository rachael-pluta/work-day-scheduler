// Displays current day and date
var currentDay = $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

// Saves event to local storage on clicking save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event);
    });

    // Determines current time and color codes timeblocks to past, present and future
    function determineTime() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var eventTime = parseInt($(this).attr("id").split("hour")[1]);

            if (eventTime < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (eventTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };

        // Gets the event from local storage
        $("#hour7 .description").val(localStorage.getItem("hour7"));
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
        $("#hour18 .description").val(localStorage.getItem("hour18"));
        $("#hour19 .description").val(localStorage.getItem("hour19"));

        // Executes for loop based on current time
        determineTime();
    })  