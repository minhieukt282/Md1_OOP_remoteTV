class Television {
    constructor(status) {
        this.statusTV = status;
    }

    setStatusTV(value) {
        this.statusTV = value;
    }

    getChannelTv(remote) {
        return remote.channel;
    }

    getVolumeTv(remote) {
        return remote.vol;
    }

    getStatusTv() {
        if (this.statusTV === true) {
            return "Channel: " + this.getChannelTv(remote) + " - Volume: " + this.getVolumeTv(remote);
        } else document.getElementById("display").innerHTML = "TV Dang tat"
    }

    isNextChannelTv(remote) {
        if (remote.channel >= MAX_CHANNEL) remote.channel = MIN_CHANNEL;
        else remote.channel++;
    }

    isBackChannelTv(remote) {
        if (remote.channel <= MIN_CHANNEL) remote.channel = MAX_CHANNEL;
        else remote.channel--;
    }

}