import http from '../../../_plugins/axios-http'

export const mineCallTaskStatistics = (params: any) =>
  http.postJson(
    '/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics',
    params,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzU0NDkzMn0.c2s0j7wF5RZTvZaIdkvyZc6AbRdDs8R_Mw3uhYk7hgtwO-nGKcrmRgk5bPtD_aZ8VjJ6Zu3DWju-Lnna9YijCQ'
      }
    }
  )

export function getData() {
  return mineCallTaskStatistics({
    token:
      'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzU0NDkzMn0.c2s0j7wF5RZTvZaIdkvyZc6AbRdDs8R_Mw3uhYk7hgtwO-nGKcrmRgk5bPtD_aZ8VjJ6Zu3DWju-Lnna9YijCQ',
    COMPANYID: '3263',
    companyId: '3263',
    endTime: '',
    profileId: '67098',
    startTime: '',
    type: '0',
    pageNo: 0,
    pageSize: 0
  })
}
