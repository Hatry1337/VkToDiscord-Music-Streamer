window.onload = function() {
   if(localStorage['req_send'] === "true"){
		document.getElementById("statesw").checked = true;
	}else{
		document.getElementById("statesw").checked = false;
	}
	document.getElementById("statesw").onclick = pognaliNahoy;
	document.getElementById("updtoken").onclick = updateToken;
};

function pognaliNahoy(){
	if(localStorage['req_send'] === "true"){
		localStorage['req_send'] = "false";
	}else{
		localStorage['req_send'] = "true";
	}
	chrome.runtime.sendMessage(["vkms_btncl", localStorage['req_send']], function (response) {
    });
    if(localStorage['req_send'] === "true"){
		document.getElementById("statesw").checked = true;
	}else{
		document.getElementById("statesw").checked = false;
	}
}
function updateToken() {
	var token = document.getElementById("IToken").value;
	chrome.runtime.sendMessage(["vkms_updtoken", token], function (response) {
    });
}