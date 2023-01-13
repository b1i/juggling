module.exports = {
  jiggle: function jiggle(word) {
    var letters = word.split("")
    const assemble = document.createElement("div")
    assemble.classList.add("jiggle-word")

    for (let i = 0; i < letters.length; i++) {
      var el = document.createElement("span")
      el.classList.add(letters[i])
      el.innerHTML = letters[i]
      assemble.appendChild(el)
    }
    document.body.appendChild(assemble)
  },
}
