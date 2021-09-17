import { Prefectures } from 'types/PrefecturesTypes'

// API詳細仕様
// APIへアクセスするには、APIキーをリクエストヘッダーX-API-KEYを設定する必要
const API_KEY = process.env.REACT_APP_POPULATION_API || ''
const OPTIONS = {
  headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${API_KEY}` },
}

// 都道府県一覧
// https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
// Ex.
// {
//   "message": null,
//   "result": [{
//                 "prefCode": 1,
//                 "prefName": "北海道"
//              }....]
//  }
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

// 人口構成
// https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
// Ex.
// {
//   "message": null,
//   "result": {
//       "boundaryYear": 2015,
//       "data": [{
//           "label": "総人口",
//           "data": [{
//               "year": 1980,
//               "value": 12817
//           }, {
//               "year": 1985,
//               "value": 12707
//           },]
//         }]
//     }, ...
// }
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
