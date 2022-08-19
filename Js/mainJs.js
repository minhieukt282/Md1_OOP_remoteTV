var remote = new Remote(DEFAUL_CHANNEL, DEFAUL_VOLUME);
var tv = new Television(false)

function onOffScreen() {
    let currentvalue = document.getElementById("onOff").value;
    if (currentvalue === "Off") {
        tv.setStatusTV(false);
        tv.getStatusTv();
        document.getElementById("onOff").value = "On";
    } else {
        tv.setStatusTV(true);
        tv.getStatusTv();
        document.getElementById("onOff").value = "Off";
    }
}

function display() {
    document.getElementById("display").innerHTML = tv.getStatusTv(remote);
}

function upVolume() {
    remote.isUpVolume();
    display()
}

function downVolume() {
    remote.isDownVolume();
    display()
}

function nextChannel() {
    remote.isNextChannel();
    display()
}

function backChannel() {
    remote.isBackChannel();
    display()
}

function getChannel() {
    let idChannel = document.getElementById("channel").value;
    remote.setChannel(idChannel);
    document.getElementById("channel").value = "";
    display()
}

function nextChannelTV() {
    tv.isNextChannelTv(remote);
    display();
}

function backChannelTV() {
    tv.isBackChannelTv(remote);
    display();
}