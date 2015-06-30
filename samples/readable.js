// readable.js -- adds list items with a click-for-details functionality

// Create a list item with an id, details, and user input
function liTemplate(id, input, details){
  return '<li class="language" data-details="' +
  details +
  '">' +
  input +
  '<span data-id="' + id + '"> &times;</span></li>';
}

// create a div with the details as content
function detailsTemplate(details){
  return'<div class="details">' +
  details +
  '</div>';
}
// add a new li to the page, based on an item
function appendToUl(ul, item) {
    ul.append(liTemplate(item.id, item.name, item.details));
}

$(document).ready(function() {
  // languages = [{"name":"ruby","details":"the language of ballers","id":1},
  // {"name":"python","details":"a snaky language","id":2},
  // {"name":"javascript","details":"JUNK!","id":3},
  // {"name":"haskell","details":"check out my neckbeard","id":4}]
  $languages = $(".languages");
  // get items from url, add them to the page
  $.getJSON("http://localhost:3000/givemedata", function(languages) {
    languages.forEach(function(item) {
      appendToUl($languages, item);
    })
  })

  // add details about a language when the user clicks
  $('.languages').on('click', '.language', function(event) {
    if ($(this).find('.details').length === 0) {
      var $li = $(this);
      var details = $li.data('details');
      $li.append(detailsTemplate(details));
    } else {
      $(this).find('.details').remove();
    }
  })
});
