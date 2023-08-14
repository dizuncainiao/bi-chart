import { initRequestInterceptors } from 'dz-bi-chart'
// 引入项目内的样式
import 'dz-bi-chart/style/index.css'
import {
  useToken,
  useCompanyId,
  useProfileId,
  useProfileName,
  useXWSSecurity
} from '@/hooks/user-info'

initRequestInterceptors(config => {
  const { xwsse, timestamp } = useXWSSecurity()
  config.baseURL = window.origin
  config.headers.Authorization = `Bearer ${useToken()}`
  config.headers.xwsse = xwsse
  config.headers.timestamp = timestamp
  config.params = {
    ...config.params,
    COMPANYID: useCompanyId()
  }
  const lowerMethod = config.method?.toLowerCase()
  if (lowerMethod === 'get') {
    config.params = {
      ...config.params,
      profileId: useProfileId(),
      profileName: useProfileName(),
      companyId: useCompanyId()
    }
  } else {
    config.data = {
      ...config.data,
      profileId: useProfileId(),
      profileName: useProfileName(),
      companyId: useCompanyId()
    }
  }
  return config
})
