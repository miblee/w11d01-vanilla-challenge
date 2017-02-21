var count = 0
$('#countBtn').on('click', function(evt){
  $('#countBtn').text(count++)
})


$('#colorInput').on('keypress', function(evt){
  if(evt.keyCode===13){
    $('body').css('background-color', $('#colorInput').val())
    $('#colorList').append(`<li>${$('#colorInput').val()}</li>`)
  }
})
