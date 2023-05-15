import dayjs from 'dayjs'

const YMD = 'YYYY-MM-DD'

export const today = dayjs().format(YMD)

export const yesterday = dayjs().subtract(1, 'day').format(YMD)

export const optionDate = {
  '0': today,
  '1': yesterday,
  '2': dayjs().subtract(7, 'day').format(YMD),
  '3': dayjs().startOf('week').format(YMD),
  '4': dayjs().subtract(30, 'day').format(YMD),
  '5': dayjs().startOf('month').format(YMD)
}

export type OptionDataKeys = keyof typeof optionDate

// 获取时间文本
export function getDateText(params: Record<string, unknown>) {
  if (params.startDate && params.endDate) {
    return `${params.startDate}~${params.endDate}`
  } else {
    return today
  }
}
