function hidefunc(elemname) {
  var x = document.getElementById(elemname);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// code editor

function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}
compile();

// memory

function addresschange() {
  const a = address.value
  const b = (Number(a).toString(2))
  var c = document.getElementById("bit1")
  c.innerHTML = b.padStart(5, 0).slice(0, 5)
}
function selecttext() {
  const c = address.value
  const a = document.getElementById(c)
  a.focus()
  a.select()
}
function storeto(abc) {
  var test5 = address.value
  var convout = funny50.value
  var calcout = result.value
  var loc = readfrom.checked
  var out1 = document.getElementById(test5)
  if (loc == 0) {
    out1.value = convout
  } else if (loc == 1) {
    out1.value = calcout
  }
}
function writeto(writeaddr) {
  var addr = address.value
  var convout = document.getElementById("funny2")
  var calcout = document.getElementById("result")
  var loc = readfrom.checked
  var inp = document.getElementById(addr).innerHTML
  if (loc == 0) {
    convout.value = inp
  } else if (loc == 1) {
    calcout.value = inp
  }
}

// tab function 
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

// move tabs



// download items

function download(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-16, ' + encodeURIComponent(document.getElementById("textinput").value));
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function downloadimg(filename){
  var link = document.createElement('a');
  link.download = filename;
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
  document.body.removeChild(link);
}
function down() {
  var filenames = document.getElementById("filenames").value
  downloadimg(filenames)
}

// converter

var modearray = ["Decimal to binary:", "Binary to decimal:", "Hexadecimal to decimal:", "Decimal to Hexadecimal:", "Octal to decimal:", "Decimal to octal:", "Base64 Encoder", "Base64 Decoder"]
//#region Thefunny
function thefunny() {
  var funny5 = document.getElementById("funny"), funny7 = document.getElementById("funny50"), Mode = document.getElementById("mode"), decimal = funny2.value;
  let binary = (Number(decimal).toString(2));
  const hexjoin = "0x" + decimal;
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

// calculator

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
function sendmail() {
  var addr = document.getElementById("mail").value
  var bodyinfo = "&body=" + document.getElementById("textinput").value
  var bodyinfo1 = bodyinfo.replace(/" "/g, "%20")
  var sub = "&subject=" + document.getElementById("subject").value
  var mail = "mailto:"
  window.open(mail + addr + bodyinfo1 + sub)
}
let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  if (document.getElementById("erase").checked == false) {
    context.strokeStyle = document.getElementById('selColor').value;
  } else {
    context.strokeStyle = "#aaaaaa";
  }
  context.lineWidth = document.getElementById('selWidth').value;
  context.lineJoin = "round";
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
}

function clearArea() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
function init() {
  context.fillStyle = "#aaaaaa", context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}


function openNav() {
  document.getElementById("sidebar").style.width = "50%";
  document.getElementById("sidebar1").style.width = "50%";
}
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("sidebar1").style.width = "0";
}
function classtest() {
    var a = document.getElementById("plonker")
    var b = document.getElementById("1a")
    var c = document.getElementById("2a")
    var e = document.getElementById("3a")
    var d = new generatenumber(b.value, c.value)
    var f = new generatenumber()
    if (e.value == "") {
    a.innerHTML = d.randomnumber
    } else {
    a.innerHTML = d.coinflip
    }
}
class utils {
  constructor(keytype1, keytype2, keytype3, action) {
    this.key1 = keytype1
    this.key2 = keytype2
    this.key3 = keytype3
    this.action = action
  }
  get keyevent() {
    return keyevents;
  }
  keyevents() {
    return console.log("invalid")
  }
}
class generatenumber {
  constructor(range, range1) {
    this.range = range
    this.range1 = range1
  }
  get randomnumber() {
    return this.returnrandomnumber()
  }
  returnrandomnumber() {
    const min = Math.ceil(this.range)
    const max = Math.floor(this.range1) 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  get coinflip() {
    return this.headsortails()
  }
  headsortails() { // yes ik its completely pointless
    const heads = "heads"
    const tails = "tails"
    const hort = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(1) + 1) + Math.ceil(1))
    if (hort === 1) {
      return heads;
    } else if(hort === 2) {
      return tails;
    }
  }
}

document.addEventListener("keydown", (event) => {
  const a = document.getElementById("thebiggestfunny")
  let b = event.key === "a"
  let c = event.metaKey
  if (b && c) {
    hidefunc(a)
  }
})
