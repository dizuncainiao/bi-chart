import http from '../../../_plugins/axios-http'

export const mineCallTaskStatistics = (params: any) =>
  http.postJson(
    '/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics',
    params,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzczMjY4N30.6lCwxodyJIRGArFZeIfP-v-6DrCX7XPJFmX113Vr6E9Px0S-xPb0TpWeZivff5HlqMHhXAWo4KxIfjg8WyK7BQ'
      }
    }
  )

export function getData() {
  return mineCallTaskStatistics({
    token:
      'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzczMjY4N30.6lCwxodyJIRGArFZeIfP-v-6DrCX7XPJFmX113Vr6E9Px0S-xPb0TpWeZivff5HlqMHhXAWo4KxIfjg8WyK7BQ',
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
