/* 
1. Creating a manifest file, Adding the key pieces to the manifest (with JSON), Creating the main JavaScript file, Inserting our DOM manipulation code in the JavaScript file, Running the unpackaged extension in Chrome
1. Creating a manifest file
2. Adding the key pieces to the manifest (with JSON)
3. Creating the main JavaScript file
4. Inserting our DOM manipulation code in the JavaScript file
5. Running the unpackaged extension in Chrome
6. Dependencies: Adding jQuery into manifest
7. Using jQuery to append an image to the DOM and add our custom text: "Get back to achieving your coding dreams"
8. Adding a CSS class to the element (using a CSS style file)
9. Using Unsplash API to return a random image each time we load youtube.com
*/

/* 
create chrome extension code for block youtube and return random image from unplash
*/

$(function() {
  var url = "https://source.unsplash.com/random/1920x1080";
  $('body').prepend('<div id="overlay"><h1>Get back to achieving your coding dreams</h1></div>');
  $('#overlay').css({
      'background-image': 'url(' + url + ')',
      'height': '100%',
      'width': '100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': '9999',
      'text-align': 'center'
  });
  $('#overlay h1').css({
      'color': '#fff',
      'text-shadow': '2px 2px 4px #000000',
      'position': 'relative',
      'top': '50%',
      'transform': 'translateY(-50%)'
  });
});


const contents = document.getElementById("content")
contents.parentNode.removeChild(contents);


$('div').click(function() {
  alert('A div was clicked!');
});