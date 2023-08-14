import md5 from 'md5'

export function useToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiIyNzk3IiwiZXhwIjoxNjkyMDEyMTg2fQ.9u8NgV9Kv22xT5frqdBcFeCL1kOkIceHdoRx5aScA2-rOZKTnSfkOlAdbm5JSlDqGx9_-ECPINA6KLlT64GWhg'
}

export function useCompanyId() {
  return 222
}

export function useProfileId() {
  return 333
}

export function useProfileName() {
  return '张三'
}

// X-WS-Security
export function useXWSSecurity() {
  const token = useToken()
  // const timestamp = useServerTimeMs() || new Date().getTime()
  const timestamp = new Date().getTime()

  return {
    xwsse: md5(`token${token}timestamp${timestamp}`),
    timestamp
  }
}
