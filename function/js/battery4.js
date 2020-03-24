function Battery(name, full, used) {
    this.name = name;
    this.full = full;
    this.used = used;
    this.estimated = function () {
        return this.full - this.used;
    }
}
var thirdBattery = new Battery('ThirdBattery', 100, 68);
var fourthBattery = new Battery('FourthBattery', 100, 38);

var details1 = thirdBattery.estimated();
var thirdEstimated = document.getElementById('batteryEstimatedID3');
thirdEstimated.textContent = details1;

var details2 = fourthBattery.estimated();
var thirdEstimated = document.getElementById('batteryEstimatedID4');
thirdEstimated.textContent = details2;