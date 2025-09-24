function SmartObject(name) {
    this.name = name;
}

SmartObject.prototype.turnOn = function () {
    console.log(this.name + " is ON");
};

SmartObject.prototype.turnOff = function () {
    console.log(this.name + " is OFF");
};

function TV(name) {
    SmartObject.call(this, name);
    this.channel = 1;
}

TV.prototype = Object.create(SmartObject.prototype);

TV.prototype.changeChannel = function (newChannel) {
    this.channel = newChannel;
    console.log(this.name + " channel changed to " + newChannel);
};
TV.prototype.getChannel = function () {
    console.log(this.name + " current channel " + this.channel);
};


function Heating(name) {
    SmartObject.call(this, name);
    this.temperature = 20;
}

Heating.prototype = Object.create(SmartObject.prototype);

Heating.prototype.setTemperature = function (newTemp) {
    this.temperature = newTemp;
    console.log(this.name + " temperature set to " + newTemp + "°C");
};

Heating.prototype.getTemperature = function () {
    console.log(this.name + "Temperature " + this.temperature + "°C");
};

function MusicBox(name) {
    SmartObject.call(this, name);
    this.isPlaying = false;
}

MusicBox.prototype = Object.create(SmartObject.prototype);

MusicBox.prototype.play = function () {
    this.isPlaying = true;
    console.log(this.name + " is playing music");
};

MusicBox.prototype.stop = function () {
    this.isPlaying = false;
    console.log(this.name + " stopped playing music");
};
MusicBox.prototype.setMusicBoxState = function () {
    if(this.isPlaying == false){
        console.log(this.name + " is playing music");
    }
    else console.log(this.name + " isn't playing music");
};

function Curtains(name) {
    SmartObject.call(this, name);
    this.isOpen = false;
}

Curtains.prototype = Object.create(SmartObject.prototype);

Curtains.prototype.open = function () {
    this.isOpen = true;
    console.log(this.name + " is open");
};

Curtains.prototype.close = function () {
    this.isOpen = false;
    console.log(this.name + " is closed");
};

Curtains.prototype.getCurtainState = function () {
    if(this.isOpen == false){
        console.log(this.name + " is closed");
    }
    else console.log(this.name + " is open");
};

function Light(name) {
    SmartObject.call(this, name);
    this.isTurnedOn = false;
}

Light.prototype = Object.create(SmartObject.prototype);

Light.prototype.getLightState = function () {
    if(this.isTurnedOn == false){
        console.log(this.name + " is turned off");
    }
    else console.log(this.name + " is turned on");
};
function AirConditioner(name) {
    SmartObject.call(this, name);
    this.temperature = 25;
}

AirConditioner.prototype = Object.create(SmartObject.prototype);

AirConditioner.prototype.setTemperatureAC  = function (newTemp) {
    this.temperature = newTemp;
    console.log(this.name + " temperature set to " + newTemp + "°C");
};
AirConditioner.prototype.getTemperatureAC = function () {
    console.log(this.name + " temperature " + this.temperature + "°C");
};
function SmartHouse(name) {
    this.name = name;
    this.objects = [];

    this.addObject = function (object) {
        this.objects.push(object);
        console.log(object.name + " added to " + this.name);
    };

    this.run = function () {
        console.log("Running " + this.name);
        for (var i = 0; i < this.objects.length; i++) {
            var object = this.objects[i];
            if (object.turnOn) {
                object.turnOn();
            }
        }
    };
}

var myHouse = new SmartHouse("My Smart House");

var myTV = new TV("TV");
var myHeating = new Heating("Heating");
var myMusicBox = new MusicBox(" Box");
var myCurtains = new Curtains("Curtains");
var myLight = new Light("Light");
var myAC = new AirConditioner("Air Conditioner");

myHouse.addObject(myTV);
myHouse.addObject(myHeating);
myHouse.addObject(myMusicBox);
myHouse.addObject(myCurtains);
myHouse.addObject(myLight);
myHouse.addObject(myAC);
console.log();

myHouse.run();
console.log();

myTV.getChannel();
myHeating.getTemperature();
myMusicBox.setMusicBoxState();
myCurtains.getCurtainState();
myLight.getLightState();
myAC.getTemperatureAC();
console.log();

myTV.changeChannel(83);
myHeating.setTemperature(24);
myMusicBox.stop();
myCurtains.open();
myLight.turnOff();
myAC.setTemperatureAC(20);
console.log();
myTV.turnOff();
myHeating.turnOff();
myMusicBox.turnOff();
myCurtains.close();
myLight.turnOff();
myAC.turnOff();
