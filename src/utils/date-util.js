import dayjs from 'dayjs'

export const formatMonthDay = (date, fmt = "MM月DD日") => {
  return dayjs(date).format(fmt);
};

export const getDiffDays = (startDate, endDate) => {
  return dayjs(endDate).diff(startDate, "day")
}
