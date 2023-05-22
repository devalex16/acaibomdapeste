function scrollPos() {
  const pos = document.scrollingElement.scrollTop;
  const zap = document.querySelector(".float")
  if (pos.toFixed() > 2700) {
    zap.style.setProperty("visibility","hidden")
  } else {
    zap.style.setProperty("visibility", "")
  }
  
  const scrollBottom = document.querySelector(".build").addEventListener("click", (e) => {
    window.scroll(0, 4000)
  })
}


