import request from '@/utils/request'

export const getCityAll = () => {
  return request({
    url: "/city/all",
    method: "get",
  })
}
