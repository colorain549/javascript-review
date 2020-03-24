// 创建并访问对象
var battery = {}
battery.name = 'Brand';
battery.full = 100;
battery.used = 78;
battery.estimated = function () {
    return this.full - this.used;
}

var batteryEstimated = document.getElementById('batteryEstimatedID5')
batteryEstimated.textContent = battery.estimated();
