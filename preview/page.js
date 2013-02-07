$(function() {
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  $('span').text(data.venueName)
  
  $('button').on('click', function() {
    BL.authorizeFoursquare();
  })
  
  if (!BL.foursquareAuthenticated(function() {
    $('button').hide();
    BL.previewReady(); 
    BL.foursquareCheckin(data.venueId, data.oncePerSession, function() {
      var text = 'You just checked in with foursquare at: ' + data.venueName;
      $('#checkin').show()
      BL.previewReady(); 
      alert(text);
    })
  })) {
    $('button').show();
    BL.previewReady();
  }
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})