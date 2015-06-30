function li(x, y, z){return '<li class="language" data-details="' +
  z +'">'+y +'<span data-x="' + x + '"> &times;</span></li>';}
function zTemplate(z){return'<div class="details">' + z +'</div>';}
function appendToUl(ul, item) {ul.append(li(item.x, item.name, item.z));}
$(document).ready(function() {$languages = $(".languages");
  $.getJSON("http://localhost:3000/givemedata", function(languages) {languages.forEach(function(item) {appendToUl($languages, item);})})
$('.languages').on('click', '.language', function(event) {if ($(this).find('.details').length === 0) {var $li = $(this);
var z = $li.data('details'); $li.append(zTemplate(z));} else { $(this).find('.details').remove();}})});
