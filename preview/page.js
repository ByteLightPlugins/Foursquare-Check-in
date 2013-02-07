$(function() {
  data = JSON.parse(BL.getContentForPreview().content[0].data);
  $('span').text(data.venueName)
  if (BL.foursquareAuthenticated()) {
    BL.foursquareCheckin(data.venueId, data.oncePerSession, function() {
      $('#checkin').text('You just checked in with foursquare at: ' + data.venueName);
    })
  }
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})