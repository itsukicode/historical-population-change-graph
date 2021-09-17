import { PrefectureData, Prefectures } from 'types/PrefecturesTypes'
import { PopulationDataByPrefecture } from 'types/PopulationTypes'

export type MainAppContextType = {
  areaData: PrefectureData[] | null
  populationData: PopulationDataByPrefecture[]
  handleCheckedCheckBox: (prefCode: number, prefecture: Prefectures) => void
  handleUncheckedCheckBox: (prefecture: Prefectures) => void
}
