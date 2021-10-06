function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", +element.classList.contains("dark-mode"));
}
localStorage.getItem("dark-mode") != 0
  ? document.body.classList.add("dark-mode")
  : document.body.classList.remove("dark-mode");

//document.querySelector("darkmodebbutton").style.display = "none";