// 创建并访问对象
var battery = {
    name: 'First Brand',
    full: 100,
    used: 28,
    estimated: function(){
        return this.full - this.used
    }
}

var batteryEstimated = document.getElementById('batteryEstimatedID')
batteryEstimated.textContent = battery.estimated();
