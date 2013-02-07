$(function() {
  
  $('button').on('click', function() {
    errors = BL.validateInput($('#venueId'))
    errors = BL.validateInput($('#venueName')) || errors
    if (errors) {
      return;
    }
      
    json = {
      venueId: $('#venueId').val(),
      venueName: $('#venueName').val(),
      oncePerSession: $('#oncePerSession').is(':checked')
    }
    
    BL.createContent(JSON.stringify(json))
  })
  
})