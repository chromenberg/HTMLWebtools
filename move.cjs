var ismousedown = false
document.onmousedown = (e) => { ismousedown = true }
document.onmouseup = (e) => { ismousedown = false }

addEventListener("mousemove", (e) => {
  function move(id, offy, offx, id2) {
    if (ismousedown && document.getElementById(id2).matches(":hover")) {
      document.getElementById(id).style.top = e.clientY + offy + "px"
      document.getElementById(id).style.left = e.clientX + offx + "px"
    } 
  }
  move("gameisbad", -10, -50, "calctitle")
  move("Mem", -10, -40, "memtitle")
  move("thebiggestfunny", -20, -100, "thefunny120")
  move("textbox", -10, -33, "texttitle")
  move("emaildiv", -10, -80, "emailtitle")
  move("mspaintcracked", -10, -50, "mspaint")
  move("rondomnumber", -10, -100, "ti")
})
