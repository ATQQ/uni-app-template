const EARTH_RADIUS = 6378.137// 地球半径
function rad (d) {
  return d * Math.PI / 180.0
}
/**
 * 计算两个Gcj02坐标的距离
 * @returns (m)
 */
export default function getDistance (o1, o2) {
  const rad1 = rad(o1.latitude)
  const rad2 = rad(o2.latitude)
  const a = rad1 - rad2
  const b = rad(o1.longitude) - rad(o2.longitude)
  const s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))
  return s * EARTH_RADIUS * 1000
}
