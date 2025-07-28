const boxImageOldText = "Hover over an image below to display here.";

function upDate(previewPic){
    const boxImage = document.getElementById('image');
    boxImage.innerHTML = previewPic.alt;
    boxImage.style.background = "#f3f3f3 url("+previewPic.src+") no-repeat center";
}

function unDo(){
    document.getElementById('image').style.background = "#8e68ff url("+''+") no-repeat center";
    document.getElementById('image').innerHTML = boxImageOldText;
}