
function addContent() {
  var url = "https://source.unsplash.com/random/1920x1080";
  const contents = document.getElementById("content");
  contents.parentNode.removeChild(contents);
  document.body.insertAdjacentHTML('afterbegin', '<div id="content"><img src="' + url + '" /></div>');  
}

addContent();