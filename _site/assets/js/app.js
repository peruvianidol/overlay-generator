function selectGradient() {
  let select = document.querySelector("#sceneBackground");
  let scene = document.querySelector("#scene");
  
  scene.classList.add("og-gradient-" + select.value);
}