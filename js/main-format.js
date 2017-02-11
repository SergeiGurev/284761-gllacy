var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var closePopup = popup.querySelector(".modal-close-btn");
      
var form = popup.querySelector("form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var feedback = popup.querySelector("[name=feedback-text]");
      
link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("overlay-show");
});
      
closePopup.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});
      
overlay.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});
      
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
      
form.addEventListener("submit", function(event){
  if (!username.value || !email.value || !feedback.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
      
      
var caption = document.querySelectorAll(".caption-top-input");

for(var i = 0; i < caption.length; i++){
  caption[i].addEventListener("blur", function() {
    if(this.value != ""){
      this.classList.add("caption-show")
    } 
    else {
      this.classList.remove("caption-show")
    }
  }, true);
};