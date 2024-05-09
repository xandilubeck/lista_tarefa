$(document).ready(function(){
    // Adiciona uma tarefa
    $('#addTaskBtn').click(function(){
      var taskName = $('#taskInput').val();
      if(taskName !== ''){
        $('#taskList').append('<li>' + taskName +  '<span class="delete"> <i class="fa-regular fa-circle-xmark"></i></span></li>');
        $('#taskInput').val('');
      }
    });
  
    // Riscar uma tarefa quando clicada
    $(document).on('click', 'li', function(){
      $(this).toggleClass('completed');
    });
    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });
  });