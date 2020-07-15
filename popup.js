window.onload = function() {
   if(localStorage['req_send'] === "true"){
		document.body.getElementsByClassName("center")[0].children[0].checked = true;
	}else{
		document.body.getElementsByClassName("center")[0].children[0].checked = false;
	}
	document.body.getElementsByClassName("center")[0].children[0].onclick = pognaliNahoy
};

function pognaliNahoy(){
	if(localStorage['req_send'] === "true"){
		localStorage['req_send'] = "false";
	}else{
		localStorage['req_send'] = "true";
	}
	chrome.runtime.sendMessage(["vkms_btncl", localStorage['req_send']], function (response) {
   		console.log(response);
    });
    if(localStorage['req_send'] === "true"){
		document.body.getElementsByClassName("center")[0].children[0].checked = true;
	}else{
		document.body.getElementsByClassName("center")[0].children[0].checked = false;
	}
}