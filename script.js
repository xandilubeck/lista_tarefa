
  $(document).ready(function() {
    $('#addTask').click(function() {
        var taskText = $('#taskInput').val();
        if(taskText !== '') {
            $('#taskList').append('<li>' + taskText + '<span class="delete"> <i class="fa-regular fa-circle-xmark"></i></span></li>');
            $('#taskInput').val('');
        }
    });

    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });
});