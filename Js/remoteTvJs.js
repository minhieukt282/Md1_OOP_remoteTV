const DEFAUL_CHANNEL = 3;
const MAX_CHANNEL = 20;
const MIN_CHANNEL = 1;
const DEFAUL_VOLUME = 2;
const MAX_VOLUME = 10;
const MIN_VOLUME = 0;

class Remote {
    constructor(channel, volume) {
        this.channel = channel;
        this.vol = volume;
    }

    setChannel(value) {
        if (value >= MAX_CHANNEL) this.channel = MAX_CHANNEL;
        else if (value <= MIN_CHANNEL) this.channel = MIN_CHANNEL;
        else this.channel = value;
    }

    getChannel() {
        return this.channel;
    }

    getVolume() {
        return this.vol;
    }

    getStatus() {
        return "Channel: " + this.channel + " - Volume: " + this.vol;
    }

    isUpVolume() {
        if (this.vol >= MAX_VOLUME) this.vol = MAX_VOLUME;
        else this.vol++;
    }

    isDownVolume() {
        if (this.vol <= MIN_VOLUME) this.vol = MIN_VOLUME;
        else this.vol--;
    }

    isNextChannel() {
        if (this.channel >= MAX_CHANNEL) this.channel = MIN_CHANNEL;
        else this.channel++;
    }

    isBackChannel() {
        if (this.channel <= MIN_CHANNEL) this.channel = MAX_CHANNEL;
        else this.channel--;
    }
}











