/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
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

// Type
type Population = {
  year: number
  value: number
}

export type PopulationDataByPrefecture = {
  prefecture: Prefectures
  data: Population[]
}

type CustomLineChartProps = {
  /**
   * The type to use for the this component
   * @default '[{prefecture: "東京" ...}, {prefecture: "京都" ...}]' => Test
   * @default '[{}]' => Production
   */
  data?: PopulationDataByPrefecture[] | null
}
// ______________________________________________________
// Styles
const wrap = css`
  width: 100%;
  height: 230px;
  @media (min-width: 768px) {
    width: 50%;
    height: 300px;
  }
  @media (min-width: 1024px) {
    width: 60%;
    height: 300px;
  }
`
// ______________________________________________________
// Data
// 47都道府県のそれぞれの色
const lineColor = ['#42A5F5', '#FFCA28', '#009688', '#9C27B0', '#E91E63', '#4072B3', '#665990']
// ______________________________________________________
// Component
export const CustomLineChart: React.VFC<CustomLineChartProps> = ({ data }) => (
  <div css={wrap} data-testid="LINECHART">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart>
        <CartesianGrid fill="#FEFEFE" />
        <XAxis
          dataKey="year"
          type="number"
          domain={['1985', '2045']}
          allowDuplicatedCategory={false}
          interval={0}
          tickCount={4}
        >
          <Label value="人口数 / 年度" offset={0} position="insideBottom" fontWeight="bold" />
        </XAxis>
        <YAxis dataKey="value" type="number" domain={['dataMin-1000', 'dataMax+1000']} width={30} />
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="top" wrapperStyle={{ right: 0 }} />

        {data &&
          data.map((d, i) => (
            <Line
              dataKey="value"
              data={d.data}
              name={d.prefecture}
              key={d.prefecture}
              stroke={lineColor[i]}
              legendType="plainline"
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
)

CustomLineChart.defaultProps = {
  data: [
    {
      prefecture: '東京都', // Legend
      data: [
        // Year => X axis value, Value => Y axis value
        { year: 1985, value: 2817 },
        { year: 1990, value: 2707 },
        { year: 2015, value: 2571 },
        { year: 2045, value: 2199 },
      ],
    },
    {
      prefecture: '京都府',
      data: [
        { year: 1985, value: 7610 },
        { year: 1990, value: 3431 },
        { year: 2015, value: 9431 },
        { year: 2045, value: 1010 },
      ],
    },
  ],
}
