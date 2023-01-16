
function addContent() {
  var url = "https://source.unsplash.com/random/1920x1080";
  
  var guideContent = document.getElementById("guide-content");
  guideContent.parentNode.removeChild(guideContent);

  var elementHeader = document.getElementById("header");
  // fix error messages : Uncaught TypeError: Cannot read properties of null (reading 'parentNode')
  if (elementHeader != null) {
    elementHeader.parentNode.removeChild(elementHeader);
  }
  
  var elementContent = document.getElementById("page-manager");
  elementContent.parentElement.removeChild(elementContent);

  // remove div with id="home-container-skeleton"
  var elementHomeContainer = document.getElementById("home-page-skeleton");
  if ( elementHomeContainer != null){
    elementHomeContainer.parentNode.removeChild(elementHomeContainer);
  }

  // remove div with id="guide-wrapper"
  var elementGuideWrapper = document.getElementById("guide-wrapper");
  elementGuideWrapper.parentNode.removeChild(elementGuideWrapper);

  // remove div with id="contentContainer"
  var elementContentContainer = document.getElementById("contentContainer");
  elementContentContainer.parentNode.removeChild(elementContentContainer);

  var elementApp = document.getElementsByTagName("ytd-app")[0];
  elementApp.style.backgroundImage = "url(" + url + ")";

  // add text above image
  var elementText = document.createElement("div");
  elementText.style.position = "absolute";
  elementText.style.top = "50%";
  elementText.style.left = "50%";
  elementText.style.transform = "translate(-50%, -50%)";
  elementText.style.color = "white";
  elementText.style.fontSize = "50px";
  elementText.style.fontWeight = "bold";
  elementText.style.textAlign = "center";
  elementText.style.background = "rgba(0, 0, 0, 0.5)";
  elementText.style.padding = "40px";
  elementText.style.borderRadius = "25px";
  elementText.style.width = "50%";
  elementText.style.height = "25%";
  elementText.innerHTML = "Go back to build your dreams";
  elementApp.appendChild(elementText);

}

addContent();