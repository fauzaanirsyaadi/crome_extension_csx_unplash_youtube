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


// const contents = document.getElementById("content")
// contents.parentNode.removeChild(contents);


// $('div').click(function() {
//   alert('A div was clicked!');
// });