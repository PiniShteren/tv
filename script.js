"use sctirct";
var numKeys = [];
let channels = ["12", "13", "20"];
let timeA = "";

window.onkeyup = ({ key }) => {
	if (key >= 0 && key <= 9) {
		numKeys.push(key);
		document.getElementById("key").innerText += key;
		if (numKeys.length === 1) {
			timeA = new Date().getSeconds();
		}
		checkKey();
	}
};

function checkKey() {
	let timeB = new Date().getSeconds() - timeA;
      console.log(timeB);
	if (timeB >= 1 || timeA < 0 || numKeys.length > 1) {
		setTimeout(() => {
			let channel = "";
			let flag = false;
			numKeys.forEach((e) => {
				channel += e;
			});
			channels.forEach((e) => {
				if (channel == e) {
					flag = true;
				}
			});
			if (flag) {
				showChannel(channel);
			} else {
				document.getElementById("source").removeAttribute("src");
				document.querySelector('#video').load();
				document.getElementById("none").style.visibility = "visible";
				document.getElementById("key").innerText = "";
				numKeys = [];
                        timeA = "";
			}
		},1000);
	}
}

function showChannel(channel) {
	document.getElementById("none").style.visibility = "hidden";
	document.getElementById("source").removeAttribute("src");
      document.querySelector("#video").load();
	document
		.getElementById("source")
		.setAttribute("src", `./videos/${channel}.mp4`);
	document.querySelector("#video").play();
	document.getElementById("key").innerText = "";
	numKeys = [];
      timeA = "";
}
