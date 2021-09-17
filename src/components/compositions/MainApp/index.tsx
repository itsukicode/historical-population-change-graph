/* eslint-disable no-console */
/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { FlexBox } from 'components/layout/FlexBox'
import { CustomLineChart, PopulationDataByPrefecture } from 'components/elements/CustomLineChart'
import { fetchAreaData, fetchPopulationData } from 'components/utils/api'
import { PrefectureData } from 'components/modules/CheckBoxList'
import { Prefectures } from 'components/elements/CheckBox'
import { Toaster } from 'react-hot-toast'
import { Heading } from 'components/elements/Heading'
import { CheckBoxGroup } from '../CheckBoxGroup'

// ______________________________________________________
// Type
export type MainAppContextType = {
  populationData: PopulationDataByPrefecture[]
  handleCheckedCheckBox: (prefCode: number, prefecture: Prefectures) => void
  handleUncheckedCheckBox: (prefecture: Prefectures) => void
}
// ______________________________________________________
// Context
export const MainAppContext = React.createContext<MainAppContextType | undefined>(undefined)
export const useMainContext = (): MainAppContextType => {
  const context = React.useContext(MainAppContext)
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainAppProvider')
  }
  return context
}
// ______________________________________________________
// Styles
const spacing = css`
  height: 30px;
  @media (min-width: 768px) {
    width: 30px;
  }
  @media (min-width: 1024px) {
    width: 50px;
  }
`
const wrap = css`
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`

// ______________________________________________________
// Data
const defaultPopulationData: PopulationDataByPrefecture[] = [
  {
    prefecture: 'X県', // Legend
    data: [
      // year => X axis value, value => Y axis value
      { year: 0, value: 0 },
    ],
  },
]
// ______________________________________________________
// Component
export const MainApp: React.VFC = () => {
  const [areaData, setAreaData] = useState<PrefectureData[] | null>(null)
  const [populationData, setPopulationData] =
    useState<PopulationDataByPrefecture[]>(defaultPopulationData)
  useEffect(() => {
    fetchAreaData()
      .then((data) => {
        const filteredAreaData = data.result.reduce((accum, val) => {
          accum.push({ ...val, checked: false })
          return accum
        }, [] as PrefectureData[])
        setAreaData(filteredAreaData)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleCheckedCheckBox = (prefCode: number, prefecture: Prefectures) => {
    fetchPopulationData(prefCode)
      .then((data) => {
        const newPref = {
          prefecture,
          data: data.result.data[0].data,
        }
        setPopulationData((prevPopulationData) => {
          if (prevPopulationData[0].prefecture !== 'X県') return [...prevPopulationData, newPref]
          return [newPref]
        })
      })
      .catch((err) => console.error(err))
  }

  const handleUncheckedCheckBox = (prefecture: Prefectures) => {
    const newPopulationData = populationData.filter((p) => p.prefecture !== prefecture)
    if (newPopulationData.length === 0) setPopulationData(defaultPopulationData)
    else setPopulationData(newPopulationData)
  }

  const mainAppContextValue: MainAppContextType = {
    populationData,
    handleCheckedCheckBox,
    handleUncheckedCheckBox,
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      {areaData && (
        <div css={wrap}>
          <Heading type="h1">都道府県別の総人口推移グラフ</Heading>
          <MainAppContext.Provider value={mainAppContextValue}>
            <FlexBox>
              <CheckBoxGroup data={areaData} />
              <div css={spacing} />
              <CustomLineChart />
            </FlexBox>
          </MainAppContext.Provider>
        </div>
      )}
    </>
  )
}
