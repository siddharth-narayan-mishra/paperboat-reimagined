function textSplitter(component, className) {
  const textArray = component.innerText.split("")
  let inject = ""
  textArray.forEach((element, idx) => {
    if (idx == textArray.length - 1 && className=='split-text') {
      inject += `<div class='inline-block ${className}' id="last-split-text">${element}</div>`
    } else {
      inject += `<div class='inline-block ${className}'>${element}</div>`
    }
  })
  component.innerHTML = inject
}

export default textSplitter
