// Open the modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal-content");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
  // Add onclick event listener to each image in the gallery
  var galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(function(img, index) {
    img.onclick = function() {
      document.getElementById('img01').src = this.src;
      openModal();
      currentSlide(index + 1);
    }
  });
  
  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
      closeModal();
    }
  }