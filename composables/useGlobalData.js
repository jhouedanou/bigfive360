import { useAsyncData } from '#app'

export const useGlobalData = () => {
  return useAsyncData('globalData', () => import('../data.json').then(m => m.default))
}
