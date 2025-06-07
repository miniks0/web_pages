function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
  console.log("Image focused or hovered: ", previewPic.alt);
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
  console.log("Image unfocused or unhovered.");
}

function initGallery() {
  const previews = document.querySelectorAll(".preview");
  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
    console.log("Tabindex added to image", i);
  }
  console.log("Gallery initialized");
}