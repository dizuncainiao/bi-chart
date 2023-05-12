import dayjs from 'dayjs'

export const optionDate = {
  '0': dayjs(new Date()).format('YYYY-MM-DD'),
  '1': dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
  '2': dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
  '3': dayjs().startOf('week').format('YYYY-MM-DD'),
  '4': dayjs().subtract(30, 'day').format('YYYY-MM-DD'),
  '5': dayjs().startOf('month').format('YYYY-MM-DD')
}

export type OptionDataKeys = keyof typeof optionDate
