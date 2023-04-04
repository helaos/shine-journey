export const getAssetURL = asset => {
  // param 1: 相对路径
  // param 2: 当前路径的URL
  return new URL(`../assets/${asset}`, import.meta.url).href
}
