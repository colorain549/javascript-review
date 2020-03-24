// 创建并访问对象
var battery = new Object()
battery.name = 'Second Brand'
battery.full = 100,
battery.used = 32,
battery.estimated = function(){
    return this.full - this.used
}

var batteryEstimated = document.getElementById('batteryEstimatedID2')
batteryEstimated.textContent = battery.estimated();
