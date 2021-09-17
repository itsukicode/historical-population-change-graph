/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { useMainContext } from 'components/compositions/MainApp'
import { Prefectures } from 'components/elements/CheckBox'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
// ______________________________________________________
// Type
export type PopulationDataByPrefecture = {
  prefecture: Prefectures | 'X県'
  data: {
    year: number
    value: number
  }[]
}
// ______________________________________________________
// Styles
const wrap = css`
  width: 100%;
  height: 230px;
  @media (min-width: 768px) {
    height: 320px;
  }
  @media (min-width: 1024px) {
    width: 70%;
    height: 400px;
  }
`
// ______________________________________________________
// Data
const lineColor = [
  '#FF9800',
  '#235180',
  '#60CAAD',
  '#42A5F5',
  '#FFCA28',
  '#009688',
  '#9C27B0',
  '#E91E63',
  '#4072B3',
  '#665990',
]
// ______________________________________________________
// Component
export const CustomLineChart: React.VFC = () => {
  const { populationData } = useMainContext()
  return (
    <div css={wrap} data-testid="LINECHART">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart>
          <CartesianGrid fill="#FEFEFE" />
          <XAxis
            dataKey="year"
            type="number"
            domain={['dataMin', 'dataMax']}
            allowDuplicatedCategory={false}
            interval={0}
            tickCount={20}
          >
            <Label value="人口数 / 年度" offset={0} position="insideBottom" fontWeight="bold" />
          </XAxis>
          <YAxis
            dataKey="value"
            type="number"
            domain={['dataMin-1000', 'dataMax+1000']}
            width={40}
          />
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ right: 0 }} />

          {populationData &&
            populationData.map((p, i) => (
              <Line
                dataKey="value"
                data={p.data}
                name={p.prefecture}
                key={p.prefecture}
                stroke={lineColor[i]}
                legendType="plainline"
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
