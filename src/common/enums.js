import Vue from 'vue'

/**
 * 模拟枚举的实现，使用方式：
 * 满足代码使用，描述唯一，通过描述取枚举值的详情，是为了可读性：
 * $baseEnums.枚举名称.detail.枚举值的描述 = { label: '枚举值的描述', value: '枚举值'}
 *
 * 满足回显使用，如通过接口返回的枚举值，可以获得枚举值的描述：
 * $baseEnums.枚举名称.label.枚举项值 = '枚举项描述'
 *
 * 支持for(let item of $baseEnums.枚举名称) { } 或 v-for="item in $baseEnums.枚举名称"
 */
class EnumLike {
  constructor(map) {
    const list = []
    this.detail = {}
    this.label = {}
    Object.keys(map).forEach((o) => {
      list.push({
        label: o,
        value: map[o],
      })
      Object.defineProperty(this.detail, o, {
        configurable: false,
        enumerable: false,
        get () {
          return {
            label: o,
            value: map[o],
          }
        },
      })
      Object.defineProperty(this.label, map[o], {
        configurable: false,
        enumerable: false,
        get () {
          return o
        },
      })
    })
    this[Symbol.iterator] = () => {
      let index = 0
      return {
        next () {
          return index <= list.length - 1 ? { done: false, value: list[index++] } : { done: true }
        },
      }
    }
  }
}
const newYear = new Date().getFullYear()
const obj = {
  /**
    * 信息类型
    */
  informationType: new EnumLike({
    公告: 'announcement',
    新闻: 'news',
    政策: 'policy',
  }),
  /**
    * 审批状态 供需发布数据分为待审核、已通过、已驳回三种状态
   */
  approveStatus: new EnumLike({
    草稿: '0',
    待审核: '1',
    已通过: '2',
    已驳回: '3',
    已下架: '4',
  }),
  approveStatusRadio: new EnumLike({
    全部: [0, 1, 2, 3, 4],
    待审核: [1],
    草稿: [0, 3, 4],
    已发布: [2],
  }),
  approveStatusRadioForP: new EnumLike({
    全部: [1, 2, 3],
    待审核: [1],
    已通过: [2],
    已驳回: [3],
  }),
  supplyDemandType: new EnumLike({
    供应: 0,
    需求: 1,
  }),
  /**
  * 年度
  */
  year: new EnumLike({
    [newYear]: newYear,
    [newYear - 1]: newYear - 1,
    [newYear - 2]: newYear - 2,
  }),
  /**
   * 月度
   */
  month: new EnumLike({
    '1月': 0,
    '2月': 1,
    '3月': 2,
    '4月': 3,
    '5月': 4,
    '6月': 5,
    '7月': 6,
    '8月': 7,
    '9月': 8,
    '10月': 9,
    '11月': 10,
    '12月': 11
  }),
  weekday: new EnumLike({
    周一: 1,
    周二: 2,
    周三: 3,
    周四: 4,
    周五: 5,
    周六: 6,
    周日: 7
  }),

  /**
   * 业务类型
   */
  timeUnit: new EnumLike({
    分钟: 'MINUTES',
    小时: 'HOURS',
    天: 'DAY',
  }),
  /**
   * 启用/停用
   */
  openStatus: new EnumLike({
    启用: true,
    停用: false,
  }),

  /**
   * 坐席数（1-6） 默认全部
   */
  maximumCapacity: new EnumLike({
    // 全部: '',
    '1-10': 1,
    '11-20': 2,
    '21-30': 3,
    '31-40': 4,
    '41-50': 5,
    '50以上': 6,
  }),

  /**
  * 订单状态
  */
  orderStatus: new EnumLike({
    全部: '',
    待支付: '-2',
    待使用: '0',
    已使用: '1',
    已取消: '-1',
	待审批: '-3',
  }),
  /**
  * 工位申请状态
  */
  stationOrderStatus: new EnumLike({
    全部: '',
    待支付: 1,
    待使用: 2,
    已评价: 3,
  }),
  /**
  * 支付方式
  */
  methodOfPayment: new EnumLike({
    微信支付: '微信支付',
    企业月结: '企业月结',
    银联支付: '银联支付',
  }),
  /**
  * 支付状态
  */
  paymentStatus: new EnumLike({
    未支付: 0,
    已支付: 1,
  }),
}

Vue.prototype.$baseEnums = obj
export default obj
