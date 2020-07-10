
$(function() {

    function addNewTask() {
        var taskInput = document.getElementById("new-task");
        var taskBox = document.getElementById("task-box");

        if (taskInput.value != "") {
            taskBox.innerHTML += "<div class='task'>" + taskInput.value + "<div class='close-icon'><span class='tooltip-text'>close</span></div></div>"
        }
        taskInput.value = "";

        function checkTask() {
            $(".close-icon").click(function() {
                $(this).parent().remove();
            });

            $(".task").click(function() {
                $(this).toggleClass("done");
            })
        }

        checkTask();
    }

    // Add text when button is clicked
    $("#new-task-button").click(() => addNewTask());

    // Trigger add button when 'Enter' is pressed 
    $("#new-task").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#new-task-button").click();
        }
    })
})