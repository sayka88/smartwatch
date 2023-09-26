document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement1 = document.getElementById("smart_thumbnail_1");
  var thumbnailElement2 = document.getElementById("smart_thumbnail_2");
  var thumbnailElement3 = document.getElementById("smart_thumbnail_3");

  thumbnailElement1.addEventListener("click", function() {
    toggleImageSize(thumbnailElement1);
  });

  thumbnailElement2.addEventListener("click", function() {
    toggleImageSize(thumbnailElement2);
  });

  thumbnailElement3.addEventListener("click", function() {
    toggleImageSize(thumbnailElement3);
  });

  function toggleImageSize(thumbnailElement) {
    var currentClass = thumbnailElement.className;

    if (currentClass === "small") {
      thumbnailElement.style.width = "570px"; // Устанавливаем ширину для большого изображения
      thumbnailElement.className = "large";
    } else {
      thumbnailElement.style.width = "200px"; // Устанавливаем ширину для маленького изображения
      thumbnailElement.className = "small";
    }
  }
});
