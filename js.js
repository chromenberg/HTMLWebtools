var ismousedown = false
document.onmousedown = (e) => {ismousedown = true}
document.onmouseup = (e) => {ismousedown = false}

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
}) 
function download(filename) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-16, ' + encodeURIComponent(document.getElementById("textinput").value));
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
var modearray = ["Decimal to binary:" , "Binary to decimal:" , "Hexadecimal to decimal:" , "Decimal to Hexadecimal:" , "Octal to decimal:" , "Decimal to octal:" ,"Base64 Encoder" , "Base64 Decoder"]
//#region Thefunny
    function thefunny() {
        var funny5 = document.getElementById("funny"), funny7 = document.getElementById("funny50"), Mode = document.getElementById("mode"), decimal = funny2.value;
        let binary = (Number(decimal).toString(2));
        const hexjoin = "0x" + decimal;
       
        if (Mode.innerHTML === modearray[0]) {
            funny5.innerHTML = binary;
            funny7.innerHTML = binary;
        }   else if (Mode.innerHTML === modearray[1]) {
            funny5.innerHTML = parseInt(decimal, 2);
            funny7.innerHTML = parseInt(decimal, 2);
        }   else if (Mode.innerHTML === modearray[2]) {
            funny5.innerHTML = "0x" + parseInt(hexjoin, );
            funny7.innerHTML = "0x" + parseInt(hexjoin, );
        }   else if (Mode.innerHTML === modearray[3]) {
            funny5.innerHTML = (Number(decimal).toString(16));
            funny7.innerHTML = (Number(decimal).toString(16));
        }   else if (Mode.innerHTML === modearray[4]) {
            funny5.innerHTML = parseInt(decimal, 8);
            funny7.innerHTML = parseInt(decimal, 8);
        }   else if (Mode.innerHTML === modearray[5]) {
            funny5.innerHTML = (Number(decimal).toString(8));
            funny7.innerHTML = (Number(decimal).toString(8));
        }   else if (Mode.innerHTML === modearray[6]) {
            funny5.innerHTML = btoa(decimal);
            funny7.innerHTML = btoa(decimal);
        }   else {
            funny5.innerHTML = atob(decimal);
            funny7.innerHTML = atob(decimal);
        }
    }
	function changemode(modeval1, modeval2) {
		var Mode = document.getElementById("mode");
		if (Mode.innerHTML === modeval1) {
			Mode.innerHTML = modeval2
		}
	}
    function changeMode() {
        changemode("modearray[0]", "modearray[1]")
        changemode("modearray[1]", "modearray[2]")
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
    function memory1() {
	test4("mem1");
    }
    function memory2() {
	test4("mem2");
    }
    function memory3() {
	test4("mem3");
    }
    function memory4() {
	test4("mem4");
    }
    function memory5() {
	test4("mem5");
    }
    function memory6() {
	test4("mem6");
    }
    function memory7() {
	test4("mem7");
    }
    function memory8() {
	test4("mem8");
    }
    function write1() {
	writefunc("mem1");
    }
    function write2() {
	writefunc("mem2");
    }
    function write3() {
	writefunc("mem3");
    }
    function write4() {
	writefunc("mem4");
    }
    function write5() {
	writefunc("mem5");
    }
    function write6() {
	writefunc("mem6");
    }
    function write7() {
	writefunc("mem7");
    }
    function write8() {
	writefunc("mem8");
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
    var filenames  = document.getElementById("filenames").value
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
function hideconv() {
  hidefunc("thebiggestfunny")
}
function hidecalc() {
  hidefunc("gameisbad")
}
function hidemem() {
  hidefunc("Mem")
}
function hidetext() {
  hidefunc("textbox")
}
