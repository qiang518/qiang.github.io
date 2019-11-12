function getQueryToObj() {
	var queryStr = window.location.search.substr(1)
	var queryArr = queryStr.split('&')
	var queryObj = {}
	queryArr.forEach(function(arr) {
		var key = arr.split('=')[0];
		var value = arr.split('=')[1];
		queryObj[key] = value
	})
	return queryObj;
}

// function getCityWeather(json) {
// 	alert("会计师")
// 	var weatherData = JSON.parse(json)
// 	$("#city").html(weatherData.city)
// 	$("#temperature").html(weatherData.temperature)
// 	$("#weather").html(weatherData.wea)
// 	$("#weatherIcon").src('./img/weather/'+ weatherData.weaImg + '.png')
// }

// function getCity() {
// 	alert('无参的方法')
// }

$(document).ready(function() {
	var queryObj = getQueryToObj();
	// 通过参数sno获取是否有新的推送信息
	var direction = 'toLeft'
	
	var snoConfig = {
		logoIcon: '',
		mainTitle: '出入境智能语言服务系统',
		subTitle: 'Frontier Inspection Intelligent Language Service System',
		pageBgColor: '',
		pageBgImage: '',
		modules: [
			{
				moduleName: '检查询问',
				moduleName_en: 'Inspection Inquiry',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
			{
				moduleName: '对话翻译',
				moduleName_en: 'Dialogue Translation',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
			{
				moduleName: '广告视频',
				moduleName_en: 'Advertising Video',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
			{
				moduleName: '图片轮播',
				moduleName_en: 'Picture Rotation',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
			{
				moduleName: '设置',
				moduleName_en: 'Setting Up',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
			{
				moduleName: '天气',
				moduleName_en: '',
				moduleIconUrl: '',
				moduleAction: '',
				moduleBgColor: '',
				moduleBgUrl: ''
			},
		]
	}
	$("body").on("touchstart", function(e) {
	  // e.preventDefault();
	　startX = e.originalEvent.changedTouches[0].pageX,
	　startY = e.originalEvent.changedTouches[0].pageY;
	});
	
	$("body").on("touchmove", function(e) {
	// 　e.preventDefault();
	　moveEndX = e.originalEvent.changedTouches[0].pageX,
	　moveEndY = e.originalEvent.changedTouches[0].pageY,
	　X = moveEndX - startX,
	　Y = moveEndY - startY;
		var scrollLeft = 0;
		
	　if ( X > 0 ) {
			direction = 'toRight'
			$(".feature-container").css('left', 0)
	　} else if ( X < 0 ) {
			direction = 'toLeft'
			$(".feature-container").css('left', '-100%')
	　} else{
	　　console.log("just touch");
	　}
	});
})