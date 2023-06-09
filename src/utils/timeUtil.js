// time1  1593790157203  TO>>>  刚刚 || 3分钟前 || 1小时前 || 1天前 || 1周前 || 2月前 || 2019年11月11日
// time2  1593790157203  TO>>>  上午12:01 || 昨天 || 星期日 || 2019-11-11
// time3  1593790157203  TO>>>  2019-11-11 12:01
// time4  2019/11/11 || 2019/11/11 12:03 TO>>> 1593790157203
// time5  (1593790157203,1593790157205) （开始与结束时间戳）  TO>>> 00:40 || 01:25 || 01:20:11 （时长）

const time1 = (timer) => {
	var arrTimestamp = (timer + '').split('');
	for (var start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	timer = arrTimestamp.join('') * 1;

	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - timer;

	// 如果本地时间反而小于变量时间
	if (diffValue < 0) {
		return '不久前';
	}

	// 计算差异时间的量级
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;

	// 数值补0方法
	var zero = function(value) {
		if (value < 10) {
			return '0' + value;
		}
		return value;
	};

	// 使用
	if (monthC > 12) {
		// 超过1年，直接显示年月日
		return (function() {
			var date = new Date(timer);
			return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
		})();
	} else if (monthC >= 1) {
		return parseInt(monthC) + "月前";
	} else if (weekC >= 1) {
		return parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		return parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		return parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		return parseInt(minC) + "分钟前";
	}
	return '刚刚';
}
const time2 = (timer) => {
	var arrTimestamp = (timer + '').split('');
	for (var start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	var Etime = arrTimestamp.join('') * 1; //参数时间
	var Etimer = new Date(Etime)

	var Ntime = new Date().getTime() //现在时间
	var Ntimer = new Date()

	var Eyear = Etimer.getFullYear(); //取得4位数的年份
	var Emonth = Etimer.getMonth() + 1 < 10 ? '0' + (Etimer.getMonth() + 1) : Etimer.getMonth() +
		1; //取得日期中的月份，其中0表示1月，11表示12月
	var Edate = Etimer.getDate() < 10 ? '0' + Etimer.getDate() : Etimer.getDate(); //返回日期月份中的天数（1到31）
	var Eweek = Etimer.getDay() //返回日期月份中的周
	var Ehour = Etimer.getHours() < 10 ? '0' + Etimer.getHours() : Etimer.getHours(); //返回日期中的小时数（0到23）
	var Eminute = Etimer.getMinutes() < 10 ? '0' + Etimer.getMinutes() : Etimer.getMinutes(); //返回日期中的分钟数（0到59）

	var today = new Date(new Date().setHours(0, 0, 0, 0)) / 1000 * 1000 //今天0点时间戳
	var yesterday = today - 24 * 60 * 60 * 1000 //昨天0点时间戳
	var beforeWeek = today - 7 * 24 * 60 * 60 * 1000 //一周前0点时间戳

	// 今天的时间
	if (today < Etime) {

		if (Ehour < 12) {
			return '上午' + Ehour + ':' + Eminute
		} else {
			return '下午' + Ehour + ':' + Eminute
		}
	}
	// 昨天的时间
	if (yesterday < Etime && Etime < today) {
		return '昨天'
	}
	// 一周内的时间
	if (beforeWeek < Etime) {
		if (Eweek == 0) {
			return "星期日"
		} else if (Eweek == 1) {
			return "星期一"
		} else if (Eweek == 2) {
			return "星期二"
		} else if (Eweek == 3) {
			return "星期三"
		} else if (Eweek == 4) {
			return "星期四"
		} else if (Eweek == 5) {
			return "星期五"
		} else if (Eweek == 6) {
			return "星期六"
		}
	}
	// 更早的时间
	return Eyear + '-' + Emonth + '-' + Edate
}
const time3 = (timer) => {
	var arrTimestamp = (timer + '').split('');
	for (var start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	var Etime = arrTimestamp.join('') * 1; //参数时间
	var Etimer = new Date(Etime)

	var Eyear = Etimer.getFullYear(); //取得4位数的年份
	var Emonth = Etimer.getMonth() + 1 < 10 ? '0' + (Etimer.getMonth() + 1) : Etimer.getMonth() +
		1; //取得日期中的月份，其中0表示1月，11表示12月
	var Edate = Etimer.getDate() < 10 ? '0' + Etimer.getDate() : Etimer.getDate(); //返回日期月份中的天数（1到31）
	var Ehour = Etimer.getHours() < 10 ? '0' + Etimer.getHours() : Etimer.getHours(); //返回日期中的小时数（0到23）
	var Eminute = Etimer.getMinutes() < 10 ? '0' + Etimer.getMinutes() : Etimer.getMinutes(); //返回日期中的分钟数（0到59）
	var ESeconds = Etimer.getSeconds() < 10 ? '0' + Etimer.getSeconds() : Etimer.getSeconds(); //返回日期中的秒钟数（0到59）

	return Eyear + "-" + Emonth + "-" + Edate +
		" " + Ehour + ":" + Eminute + ":" + ESeconds
}
const time4 = (timer) => {
	var date = timer.replace(/\//g, '-')
	date = timer.replace(/：/g, ':')
	var Etimer = new Date(date)
	var Etime = Etimer.getTime()

	return Etime
}
const time5 = (sTime, eTime) => {

	if (sTime.length == 13) sTime = (sTime - 0) / 1000
	if (eTime.length == 13) eTime = (eTime - 0) / 1000

	var lang = 0

	var interval = Math.ceil((eTime - sTime) / 1000)

	// 一分钟以内
	if (interval < 60) {

		if (interval < 10) {
			lang = '0' + interval
		} else {
			lang = interval
		}
		return '00:' + lang
	}

	// 一小时以内
	if (60 < interval && interval < 3600) {
		var langM = Math.floor(interval / 60)
		var langS = Math.floor(interval - (langM * 60))

		if (langM < 10) langM = '0' + langM
		if (langS < 10) langS = '0' + langS

		return langM + ':' + langS
	}

	// 一小时以上
	if (3600 < interval) {
		var langH = Math.floor(interval / 3600)
		var langM = Math.floor((interval / 60) - (langH * 60))
		var langS = Math.floor(interval - (langH * 3600) - (langM * 60))

		if (langH < 10) langH = '0' + langH
		if (langM < 10) langM = '0' + langM
		if (langS < 10) langS = '0' + langS

		return langH + ':' + langM + ':' + langS
	}

}

//2020-08-17T16:00:00.000+0000
const time6 = datetime => {
	if (datetime.length < 19) {
		return []
	}
	let dateStr = datetime.substr(0, 19)
	return dateStr.split("T");
}

const time7 = time => {
	let timeH = time.substr(0, 2)
	if (timeH < 12) {
		return "上班"
	} else if (timeH >= 12 && timeH < 19) {
		return "下班"
	} else {
		return "加班"
	}
}

//当前时间
const time8 = () => {
	let date = new Date()
	let h = date.getHours()
	let m = date.getMinutes()
	let s = date.getSeconds()
	return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
}

//1593790157203  TO>>>  2019-11-11
const time9 = (timer) => {
	if (timer === null || timer === '') {
		return timer
	}
	var arrTimestamp = (timer + '').split('');
	for (var start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	var Etime = arrTimestamp.join('') * 1; //参数时间
	var Etimer = new Date(Etime)

	var Eyear = Etimer.getFullYear(); //取得4位数的年份
	var Emonth = Etimer.getMonth() + 1 < 10 ? '0' + (Etimer.getMonth() + 1) : Etimer.getMonth() +
		1; //取得日期中的月份，其中0表示1月，11表示12月
	var Edate = Etimer.getDate() < 10 ? '0' + Etimer.getDate() : Etimer.getDate(); //返回日期月份中的天数（1到31）
	return Eyear + "-" + Emonth + "-" + Edate
}

//2020-08-17T16:00:00.000+0000 TO>>> 2020-08-17 16:00:00
const time10 = datetime => {
	if (!datetime || datetime.length < 19 || datetime.indexOf("T") < 0) {
		return datetime
	}
	let dateStr = datetime.substr(0, 19)
	return dateStr.replace("T", " ");
}

//2020-08-17T16:00:00.000+0000 TO>>> 2020-08-17
const time11 = datetime => {
	if (!datetime || datetime.length < 11) {
		return datetime
	}
	return datetime.substr(0, 10);
}

// 时间格式化
const parseTime = (time, pattern) => {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}"
	let date
	if (typeof time === "object") {
		date = time
	} else {
		if (typeof time === "string" && /^[0-9]+$/.test(time)) {
			time = parseInt(time)
		}
		if (typeof time === "number" && time.toString().length === 10) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === "a") {
			return ["日", "一", "二", "三", "四", "五", "六"][value]
		}
		if (result.length > 0 && value < 10) {
			value = "0" + value
		}
		return value || 0
	})
	return timeStr
}

const formatDateTime = (time, type = 'time') => {
	if(!time) return ''
	// ios13不支持new Date("2022-03-30 13:59:00")，要改成new Date("2022/03/30 13:59:00")
	const formatTime = time.replace(/T/g, ' ').split('.')[0]
	const date = new Date(formatTime.replace(/-/g, '/'))
	const year = date.getFullYear()
	const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

	return type === 'date' ? `${year}-${month}-${day}` : `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

module.exports = {
	time1,
	time2,
	time3,
	time4,
	time5,
	time6,
	time7,
	time8,
	time9,
	time10,
	time11,
	parseTime,
	formatDateTime
}
