setInterval(function(){
	var mele = document.getElementsByClassName("top_audio_player_title")[0];
	var ele = mele.childNodes[mele.childElementCount];
    var state = document.getElementsByClassName("blind_label _top_audio_player_play_blind_label")[0].textContent
    if(state === "Приостановить" || state === "Pause"){
        chrome.runtime.sendMessage(["vkms_msg", ele.nodeValue, false], function (response) {
        });
    }else{
        chrome.runtime.sendMessage(["vkms_msg", ele.nodeValue, true], function (response) {
        });
    }
}, 5000);