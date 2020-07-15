window.vkms = {track:"Connecting...."}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    if(message[0] === "vkms_msg"){
        window.vkms.track = message[1];
        window.vkms.paused = message[2];
        sendResponse("ok: "+message[1]+"|"+message[2]);
    }else if(message[0] === "vkms_btncl"){
        if(message[1] === "true"){
            intr = setInterval(function(){
                if (window.vkms.paused){
                    Status.unset();
                }else{
                    Status.set(window.vkms.track);
                }
            }, 5000);
            sendResponse("ok");
        }else if(message[1] === "false"){
            clearInterval(intr);
            Status.unset();
            sendResponse("ok");
        }
    }else if(message[0] === "vkms_updtoken"){
        localStorage['vkms_dtoken'] = message[1];
    }
});

var Status = {
    request: () => {
        let req = new XMLHttpRequest();
        req.open("PATCH", "https://discordapp.com/api/v6/users/@me/settings", true);
        req.setRequestHeader("authorization", localStorage['vkms_dtoken']);
        req.setRequestHeader("content-type", "application/json");
        return req;
    },
    set: (status) => {
        Status.request().send('{"custom_status":{"text":"' + status + '", "emoji_name": "🎵"}}');
    },
    unset: () => {
        Status.request().send('{"custom_status":null}');
    }
};

var intr = setInterval(function(){
    if (window.vkms.paused){
        Status.unset();
    }else{
        Status.set(window.vkms.track);
    }
}, 5000);