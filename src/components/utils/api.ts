import { Prefectures } from 'components/elements/CheckBox'

const API_KEY = process.env.REACT_APP_POPULATION_API || ''
const OPTIONS = {
  headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${API_KEY}` },
}
export type AreaData = {
  result: {
    prefCode: number
    prefName: Prefectures
  }[]
}

export async function fetchAreaData(): Promise<AreaData> {
  const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', OPTIONS)
  if (!res.ok) {
    throw new Error('データの取得に失敗しました。')
  }
  const data: AreaData = (await res.json()) as AreaData
  return data
}

export type PopulationData = {
  result: {
    data: {
      data: {
        year: number
        value: number
      }[]
    }[]
  }
}

export async function fetchPopulationData(prefCode: number): Promise<PopulationData> {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    OPTIONS
  )
  if (!res.ok) {
    throw new Error('データの取得に失敗しました。')
  }
  const data: PopulationData = (await res.json()) as PopulationData
  return data
}
