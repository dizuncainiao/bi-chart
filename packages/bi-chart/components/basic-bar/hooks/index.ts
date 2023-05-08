import http from '../../../_plugins/axios-http/index.ts'

export const getMineCallTaskTimesStatistics = (params: any) =>
  http.postJson(
    '/bdcloud-call-analytic/call/callPhoneReport/getMineCallTaskTimesStatistics',
    params,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzU0NDkzMn0.c2s0j7wF5RZTvZaIdkvyZc6AbRdDs8R_Mw3uhYk7hgtwO-nGKcrmRgk5bPtD_aZ8VjJ6Zu3DWju-Lnna9YijCQ'
      }
    }
  )

export function getData() {
  return getMineCallTaskTimesStatistics({
    token:
      'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzU0NDkzMn0.c2s0j7wF5RZTvZaIdkvyZc6AbRdDs8R_Mw3uhYk7hgtwO-nGKcrmRgk5bPtD_aZ8VjJ6Zu3DWju-Lnna9YijCQ',
    COMPANYID: '2',
    companyId: '2',
    endTime: '2023-05-07',
    profileId: '67098',
    startTime: '2023-04-08',
    type: '0',
    pageNo: 0,
    pageSize: 0
  })
}
