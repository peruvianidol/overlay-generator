function selectGradient() {
  let select = document.querySelector("#sceneBackground");
  let scene = document.querySelector("#scene");
  
  scene.setAttribute("data-gradient", select.value);
}