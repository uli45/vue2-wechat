/**
 * 工具类
 * author 
 */
import {
	BASE_URL,
	SERVICE_URL
} from '@/api/config.js'
import Map from "@/utils/map/openMap";
import dayjs from 'dayjs'
import Vue from 'vue'
//构建url
export const buildUrl = (data) => {
	const {
		url = '', params = {}, otherService = false
	} = data
	let searchParams = ''
	Object.keys(params).forEach((item, index) => {
		if (index === 0) {
			searchParams += `${item}=${params[item]}`
		} else {
			searchParams += `&${item}=${params[item]}`
		}
	})
	if (url.startsWith('http')) {
		return `${url}${searchParams === '' ? '' : '?'}${searchParams}`
	} else {
		return `${otherService ? '' : SERVICE_URL}${url}${searchParams === '' ? '' : '?'}${searchParams}`
	}
}

/**
 * 获取富文本中的图片地址，返回数组
 * @param richtext
 * @returns {*[]}
 */
export const getImgSrcInRichtext = (richtext = '') => {
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
		imgList.push(capture);
	});
	return imgList;
}

/**
 * 获取富文本中的文字
 * @param richtext
 */
export const getTextInRichtext = (richtext = '') => {
	const text = richtext.replace(/(\n)/g, "").replace(/(\t)/g, "").replace(/(\r)/g, "").replace(/<\/?[^>]*>/g, "")
		.replace(/\s*/g, "").replace(/&nbsp;/ig, "");
	return text
}

/**
 * 处理图片
 * 将string转成array
 * 将http替换成https
 */
export const dealImageStringToList = (imageStr = '') => {
	const image_url_temp = imageStr.replace('http://', 'https://')
	const imageUrlList = image_url_temp.split(',')
	return imageUrlList
}

// 日期格式转为日期标准字符串，new Date() => YYYY-MM-DD
export const dealDaterTansformString = (date) => {
	const y = date.getFullYear()
	let m = date.getMonth() + 1
	m = m < 10 ? '0' + m : m
	let d = date.getDate()
	d = d < 10 ? '0' + d : d
	return `${y}-${m}-${d}`
}

// 计算底部安全距离
export const calculationBottomSafeDistance = () => {
	const systemInfo = uni.getSystemInfoSync()
	const {
		screenHeight,
		safeArea: {
			bottom
		}
	} = systemInfo
	return `${screenHeight - bottom}rpx`
}

// 处理富文本中图片溢出问题
/**
 * 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.修改所有style里的width属性为max-width:100%
 * 3.img标签添加style属性：max-width:100%;height:auto
 * 4.去掉<br/>标签
 * @param html
 * @return string
 */
export const formatRichText = (html) => {
	// 去掉img标签里的style、width、height属性
	let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
		match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
		match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
		match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
		return match;
	});
	// 修改所有style里的width属性为max-width:100%
	newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
		match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,
			'max-width:100%;');
		return match;
	});
	// 去掉<br/>标签
	newContent = newContent.replace(/<br[^>]*\/>/gi, '');
	// img标签添加style属性：max-width:100%;height:auto
	newContent = newContent.replace(/\<img/gi,
		'<img style="max-width:100%;height:auto;display:block;margin:0px auto;"');
	return newContent;
}

// 数据回显
export const selectDictLabel = (datas, value, defaultProps) => {
	if (!datas) {
		return
	}
	const actions = []
	let dictValue = 'dictValue'
	let dictLabel = 'dictLabel'
	if (defaultProps) {
		defaultProps.value ? (dictValue = defaultProps.value) : ''
		defaultProps.label ? (dictLabel = defaultProps.label) : ''
	}
	Object.keys(datas).map(key => {
		if (datas[key][dictValue] == value) {
			actions.push(datas[key][dictLabel])
			return false
		}
	})
	return actions.join('')
}

//地图导航
export const openMap = (item) => {
	const address = item.location||item.address;
	let latlng = item.latitudeAndLongitude.split(",");
	const latitude = Number(latlng[1]);
	const longitude = Number(latlng[0]);
	Map.openMap(latitude, longitude, address);
}

/**
 * 将数值四舍五入后格式化.
 *
 * @param num 数值(Number或者String)
 * @param cent 要保留的小数位(Number)
 * @param isThousand 是否需要千分位 false:不需要,true:需要(Boolean);
 * @return 格式的字符串,如'1,234,567.45'
 * @type String
 * 例: formatNumber(10000, 2, true)
 */
 export const formatNumber = (num, cent, isThousand) => {
	if(!num && num != 0){
		return '0.00'
	}
	num = num.toString().replace(/\$|\,/g, '');

	// 默认保留2位
	cent = cent == undefined ? 2 : cent

	// 检查传入数值为数值类型
	if (isNaN(num))
		num = "0";

	// 获取符号(正/负数)
	let sign = (num == (num = Math.abs(num)));

	num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
	let cents = num % Math.pow(10, cent); // 求出小数位数值
	num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
	cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度

	// 补足小数位到指定的位数
	while (cents.length < cent)
		cents = "0" + cents;

	if (isThousand) {
		// 对整数部分进行千分位格式化.
		for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
			num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
	}

	if (cent > 0)
		return (((sign) ? '' : '-') + num + '.' + cents);
	else
		return (((sign) ? '' : '-') + num);
}

/**
 * 数组按一定的长度分割
 * @param
 */
export const arryChunk = (array, size) => {
  const length = array.length;
  if (!length || !size || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;

  let result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export const obj = {
	timeFormat(time, format){
		if (!time) {
			return
		}
		if (!format) {
			format = 'YYYY-MM-DD'
		}else{
		   format = format.toUpperCase()
		}
		return dayjs(time).format(format)
	},
	date(time, format){
		if (!time) {
			return
		}
		if (!format) {
			format = 'YYYY-MM-DD'
		}else{
		   format = format.toUpperCase()
		}
		return dayjs(time).format(format)
	},
}
Vue.prototype.$Uui = obj
