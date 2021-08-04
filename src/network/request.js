import axios from 'axios'

// axios框架的基本使用
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  return instance(config);
}
