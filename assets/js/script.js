// Displays current day and date
var currentDay = $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

// Saves event to local storage on clicking save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event);
    })

    // Determines current time and color codes timeblocks to past, present and future
    function determineTime() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var eventTime = parseInt($(this).attr("id").split("hour")[1]);

            if (eventTime < currentTime) {
                $(eventTime).addClass("past");
                $(eventTime).removeClass("present");
                $(eventTime).removeClass("future");
            }
            else if (eventTime === currentTime) {
                $(eventTime).addClass("present");
                $(eventTime).removeClass("past");
                $(eventTime).removeClass("future");
            }
            else {
                $(eventTime).addClass("future");
                $(eventTime).removeClass("past");
                $(eventTime).removeClass("present");
            }
        })
    }

        // Gets the event from local storage
        $("#7hours .description").val(localStorage.getItem("7hours"));
        $("#8hours .description").val(localStorage.getItem("8hours"));
        $("#9hours .description").val(localStorage.getItem("9hours"));
        $("#10hours .description").val(localStorage.getItem("10hours"));
        $("#11hours .description").val(localStorage.getItem("11hours"));
        $("#12hours .description").val(localStorage.getItem("12hours"));
        $("#13hours .description").val(localStorage.getItem("13hours"));
        $("#14hours .description").val(localStorage.getItem("14hours"));
        $("#15hours .description").val(localStorage.getItem("15hours"));
        $("#16hours .description").val(localStorage.getItem("16hours"));
        $("#17hours .description").val(localStorage.getItem("17hours"));
        $("#18hours .description").val(localStorage.getItem("18hours"));
        $("#19hours .description").val(localStorage.getItem("19hours"));

        determineTime();
    })