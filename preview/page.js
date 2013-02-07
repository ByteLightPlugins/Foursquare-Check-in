$(function() {
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  $('span').text(data.venueName)
  
  $('button').on('click', function() {
    BL.authorizeFoursquare();
  })
  
  if (BL.foursquareAuthenticated()) {
    $('#checkin').show()
    BL.foursquareCheckin(data.venueId, data.oncePerSession, function() {
      $('#checkin').text('You just checked in with foursquare at: ' + data.venueName);
    })
  }
  else {
    $('button').show()
  }
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})