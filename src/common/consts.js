import Vue from 'vue'

import $baseEnums from './enums'
// import $spui  from './spui'
/**
 * 全局常量
 */
Vue.prototype.$baseConsts = {
  /**
   * 表格列宽度（时间）
   */
  // tableLabelTimeWidth: $baseTools.tableColWidth(10),
  /**
   * 表格列宽度（备注）
   */
  // tableLabelDesWidth: $baseTools.tableColWidth(10),
  /**
   * 表格列宽度（手机号）
   */
  tableLabelMobileWidth: 120,
  /**
   * 输入框最大长度宽度（备注）
   */
  inputMaxlengthRemark: 50,
  /**
   * 输入框最大长度宽度（名称）
   */
  inputMaxlengthName: 30,
  /**
   * 输入框最大长度宽度（URL）
   */
  inputMaxlengthURL: 200,
  /**
   * 输入框最大长度宽度（验证码）
   */
  inputMaxlengthCaptcha: 4,
  /**
   * 输入框最大长度宽度（手机号）
   */
  inputMaxlengthMobile: 11,
  /**
   * 输入框最大长度宽度（手机号、座机）
   */
  inputMaxlengthPhone: 13,
  /**
   * 通用内间距
   */
  commonPadding: 24,

  approveStatusTag: {
    [$baseEnums.approveStatus.detail.草稿.value]: 'info',
    [$baseEnums.approveStatus.detail.待审核.value]: 'warning',
    [$baseEnums.approveStatus.detail.已通过.value]: 'success',
    [$baseEnums.approveStatus.detail.已失效.value]: 'disabled',
    [$baseEnums.approveStatus.detail.已驳回.value]: 'danger',
    [$baseEnums.approveStatus.detail.已下架.value]: 'disabled',
  },
  orderStatusTag: {
    [$baseEnums.orderStatus.detail.待支付.value]: 'primary',
    [$baseEnums.orderStatus.detail.待使用.value]: 'warning',
    [$baseEnums.orderStatus.detail.已使用.value]: 'info',
    [$baseEnums.orderStatus.detail.已取消.value]: 'info',
  },
  orderStatusTagClass: {
    [$baseEnums.orderStatus.detail.待支付.value]: 'red',
    [$baseEnums.orderStatus.detail.待使用.value]: 'green',
    [$baseEnums.orderStatus.detail.已使用.value]: 'info',
    [$baseEnums.orderStatus.detail.已取消.value]: 'info',
  },

  openStatusTag: {
    [$baseEnums.openStatus.detail.启用.value]: 'success',
    [$baseEnums.openStatus.detail.停用.value]: 'danger',
  },
  openStatusAPI: {
    [$baseEnums.openStatus.detail.启用.value]: 'enable',
    [$baseEnums.openStatus.detail.停用.value]: 'disable',
  },
  yes_no: {
    是: 1,
    否: 0
  },
 

}
