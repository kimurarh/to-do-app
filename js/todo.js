

$(document).ready(function(){

    function checkStatus() {
        $(".objBox").click(function() {
            $(this).addClass("completed");
        });
        $(".removeIcon").click(function() {
            $(this).parent().remove();
        })
    }

    /* Function to add new objective*/
    function AddNewObjective() {
        var newObjective = "<div class='objBox'>" + $("#newObjective").val() + "<img class='removeIcon' src='imgs/closeButton.png'></div>";

        var priority = $("#priorities").val();

        if ($("#newObjective").val() != "") {
            switch(priority) {
                case "low":
                    $("#lowBox").append(newObjective);
                    $("#lowBox").children('div').addClass("lowPriority");
                    break; 
                case "medium":
                    $("#mediumBox").append(newObjective);
                    $("#mediumBox").children('div').addClass("mediumPriority");
                    break; 
                case "high":
                    $("#highBox").append(newObjective);
                    $("#highBox").children('div').addClass("highPriority");
                    break;
            };
        } else {
            alert("Type a task");
        }
        $("#newObjective").val("");

        checkStatus();
    }

    /* Trigger function when 'Add' button is clicked */
    $("#addButton").click(function() {
        AddNewObjective();
    });

    /* Trigger the function when 'Enter' is pressed */
    $("#newObjective").keypress(function(event) {
        var keyPressed = event.which;
        if (keyPressed == 13) {
            AddNewObjective();
        }
    })


});

