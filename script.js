const shareIcon = document.querySelector(".share-icon");
const shareIconMobile = document.querySelector(".share-icon-mobile");

const shareMessage = document.querySelector(".hover-message");
const shareMessageMobile = document.querySelector(".hover-message-mobile");

shareIcon.addEventListener("click", () => {
  if (shareMessage.classList.contains("hide")) {
    shareMessage.classList.remove("hide");
    shareMessage.classList.add("show");
  } else {
    shareMessage.classList.remove("show");
    shareMessage.classList.add("hide");
  }
});

shareIconMobile.addEventListener("click", () => {
  if (shareMessageMobile.classList.contains("hide")) {
    shareMessageMobile.classList.remove("hide");
    shareMessageMobile.classList.add("show");
  } else {
    shareMessageMobile.classList.remove("show");
    shareMessageMobile.classList.add("hide");
  }
});
