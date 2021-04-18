/**
 * 复制内容到剪贴板
 * @param {String} str 待复制内容
 */
export function setClipboardStr (str) {
  uni.setClipboardData({
    data: str,
    success: function () {
      uni.showToast({
        title: '复制成功'
      })
    }
  })
}
