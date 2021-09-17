import { Prefectures } from './PrefecturesTypes'

export type PopulationDataByPrefecture = {
  prefecture: Prefectures | 'X県'
  data: {
    year: number
    value: number
  }[]
}
