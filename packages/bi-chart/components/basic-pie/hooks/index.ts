import http from '../../../_plugins/axios-http'

export const mineCallTaskStatistics = (params: any) =>
  http.postJson(
    '/bdcloud-call-analytic/call/callPhoneReport/mineCallTaskStatistics',
    params,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzY1MTUwNX0.NurdUnvFq3iqJsDl4lFVedJcs0lZcCCEc1EKqLAicsgMWBZTIgLmvM9RJw4r-N2h8W4nwt3CjRsfZ4t2mfD7HQ'
      }
    }
  )

export function getData() {
  return mineCallTaskStatistics({
    token:
      'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MzY1MTUwNX0.NurdUnvFq3iqJsDl4lFVedJcs0lZcCCEc1EKqLAicsgMWBZTIgLmvM9RJw4r-N2h8W4nwt3CjRsfZ4t2mfD7HQ',
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
