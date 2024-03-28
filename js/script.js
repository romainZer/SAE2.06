// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour animer l'élément lorsqu'il est visible
function revealOnScroll() {
  var titleElement = document.getElementById("title-container");
  var descriptionElement = document.getElementById("description-container");
  var imageElement = document.getElementById("homepage-image");

  if (isElementInViewport(titleElement)) {
    titleElement.classList.add("revealed");
  }

  if (isElementInViewport(descriptionElement)) {
    descriptionElement.classList.add("revealed");
  }

  if (isElementInViewport(imageElement)) {
    imageElement.classList.add("revealed");
  }
}

// Événement de défilement de la fenêtre
window.addEventListener("scroll", revealOnScroll);

// Appeler la fonction au chargement initial de la page pour vérifier si les éléments sont déjà visibles
revealOnScroll();
