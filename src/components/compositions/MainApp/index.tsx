/* eslint-disable no-console */
/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { FlexBox } from 'components/layout/FlexBox'
import { CustomLineChart } from 'components/elements/CustomLineChart'
import { fetchAreaData, fetchPopulationData } from 'components/utils/api'
import { PrefectureData, Prefectures } from 'types/PrefecturesTypes'
import { PopulationDataByPrefecture } from 'types/PopulationTypes'
import { Toaster } from 'react-hot-toast'
import { Heading } from 'components/elements/Heading'
import { MainAppContextType } from 'types/MainAppContextType'
import { CheckBoxGroup } from '../CheckBoxGroup'
// ______________________________________________________
// Context
export const MainAppContext = React.createContext<MainAppContextType | undefined>(undefined)
// ______________________________________________________
// Styles
const wrap = css`
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`
const spacing = css`
  height: 30px;
  @media (min-width: 768px) {
    width: 30px;
  }
  @media (min-width: 1024px) {
    width: 50px;
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
  // ______________________________________________________
  // Use Functions
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
  // ______________________________________________________
  // Handle Functions
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
  // ______________________________________________________
  // Contex Values
  const mainAppContextValue: MainAppContextType = {
    areaData,
    populationData,
    handleCheckedCheckBox,
    handleUncheckedCheckBox,
  }
  // ______________________________________________________
  // UI
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
              <CheckBoxGroup />
              <div css={spacing} />
              <CustomLineChart />
            </FlexBox>
          </MainAppContext.Provider>
        </div>
      )}
    </>
  )
}
