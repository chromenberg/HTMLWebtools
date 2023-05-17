var ismousedown = false
document.onmousedown = (e) => { ismousedown = true }
document.onmouseup = (e) => { ismousedown = false }

function enabletab(id) {
    var el = document.getElementById(id);
    el.onkeydown = function(e) {
        if (e.keyCode === 9) {
            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;
            this.value = val.substring(0, start) + "    " + val.substring(end);
            this.selectionStart = this.selectionEnd = start + 4;
            return false;
	}
    };
}
enabletab("textinput")

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
  move("textbox", -10, -35, "texttitle")
  move("emaildiv", -10, -80, "emailtitle")
})
function download(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-16, ' + encodeURIComponent(document.getElementById("textinput").value));
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
var modearray = ["Decimal to binary:", "Binary to decimal:", "Hexadecimal to decimal:", "Decimal to Hexadecimal:", "Octal to decimal:", "Decimal to octal:", "Base64 Encoder", "Base64 Decoder"]
//#region Thefunny
function thefunny() {
  var funny5 = document.getElementById("funny"), funny7 = document.getElementById("funny50"), Mode = document.getElementById("mode"), decimal = funny2.value;
  let binary = (Number(decimal).toString(2));
  const hexjoin = "0x" + decimal;
  // make into an independent function for optimisation
  if (Mode.innerHTML === modearray[0]) {
    funny5.innerHTML = binary;
    funny7.innerHTML = binary;
  } else if (Mode.innerHTML === modearray[1]) {
    funny5.innerHTML = parseInt(decimal, 2);
    funny7.innerHTML = parseInt(decimal, 2);
  } else if (Mode.innerHTML === modearray[2]) {
    funny5.innerHTML = "0x" + parseInt(hexjoin);
    funny7.innerHTML = "0x" + parseInt(hexjoin);
  } else if (Mode.innerHTML === modearray[3]) {
    funny5.innerHTML = (Number(decimal).toString(16));
    funny7.innerHTML = (Number(decimal).toString(16));
  } else if (Mode.innerHTML === modearray[4]) {
    funny5.innerHTML = parseInt(decimal, 8);
    funny7.innerHTML = parseInt(decimal, 8);
  } else if (Mode.innerHTML === modearray[5]) {
    funny5.innerHTML = (Number(decimal).toString(8));
    funny7.innerHTML = (Number(decimal).toString(8));
  } else if (Mode.innerHTML === modearray[6]) {
    funny5.innerHTML = btoa(decimal);
    funny7.innerHTML = btoa(decimal);
  } else {
    funny5.innerHTML = atob(decimal);
    funny7.innerHTML = atob(decimal);
  }
}
function changeMode() {
  var Mode = document.getElementById("mode");
  if (Mode.innerHTML === modearray[0]) {
    Mode.innerHTML = modearray[1]
  } else if (Mode.innerHTML === modearray[1]) {
    Mode.innerHTML = modearray[2]
  } else if (Mode.innerHTML === modearray[2]) {
    Mode.innerHTML = modearray[3];
  } else if (Mode.innerHTML === modearray[3]) {
    Mode.innerHTML = modearray[4];
  } else if (Mode.innerHTML === modearray[4]) {
    Mode.innerHTML = modearray[5];
  } else if (Mode.innerHTML === modearray[5]) {
    Mode.innerHTML = modearray[6];
  } else if (Mode.innerHTML === modearray[6]) {
    Mode.innerHTML = modearray[7];
  } else {
    Mode.innerHTML = modearray[0];
  }
}
//#endregion
//#region
function test4(abc) {
  var test5 = abc;
  var convout = funny50.value;
  var calcout = result.value;
  var loc = readfrom.checked;
  var out1 = document.getElementById(test5);
  if (loc == 0) {
    out1.innerHTML = convout;
  } else if (loc == 1) {
    out1.innerHTML = calcout;
  }
}
function writefunc(writeaddr) {
  var addr = writeaddr;
  var convout = document.getElementById("funny2");
  var calcout = document.getElementById("result");
  var loc = readfrom.checked;
  var inp = document.getElementById(addr).innerHTML;
  if (loc == 0) {
    convout.value = inp;
  } else if (loc == 1) {
    calcout.value = inp;
  }
}
//#endregion
function dis(val) {
  document.getElementById("result").value += val
}
function myFunction(event) {
  if (event.key == '0' || event.key == '1'
    || event.key == '2' || event.key == '3'
    || event.key == '4' || event.key == '5'
    || event.key == '6' || event.key == '7'
    || event.key == '8' || event.key == '9'
    || event.key == '+' || event.key == '-'
    || event.key == '*' || event.key == '/')
    document.getElementById("result").value += event.key;
}
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value
    console.log(x);
    solve();
  }
}
function solve() {
  let x = document.getElementById("result").value
  let y = math.evaluate(x)
  document.getElementById("result").value = y
}
function clr() {
  document.getElementById("result").value = ""
}
function test1() {
  var filenames = document.getElementById("filenames").value
  download(filenames)
}
function hidefunc(elemname) {
  var x = document.getElementById(elemname);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function sendmail() {
  var addr = document.getElementById("mail").value
  var bodyinfo = "&body=" + document.getElementById("textinput").value
  var bodyinfo1 = bodyinfo.replace(/" "/g, "%20")
  var sub = "&subject=" + document.getElementById("subject").value
  var mail = "mailto:"
  window.open(mail + addr + bodyinfo1 + sub)
}
