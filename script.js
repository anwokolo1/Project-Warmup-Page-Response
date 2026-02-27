const image = document.getElementById("image");
const caption = document.getElementById("caption");
const advanceBttn = document.getElementById("advance");
const hiddenMes = document.getElementById("myDiv");

var sceneNum = 1;

image.src = imgFiles[sceneNum - 1];
caption.innerHTML = imgCaptions[0];

advanceBttn.addEventListener("click", advanceScene);

function advanceScene() {
    if (sceneNum < imgCount) {
        image.src = imgFiles[++sceneNum - 1];
        caption.innerHTML = imgCaptions[sceneNum - 1];
    }
    else {
        hiddenMes.removeAttribute("hidden");
        advanceBttn.disabled = true;
    }
}