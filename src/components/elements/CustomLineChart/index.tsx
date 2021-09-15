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
  height: 200px;
  @media (min-width: 1024px) {
    height: 300px;
  }
`
// ______________________________________________________
// Data
const lineColor = [
  '#42A5F5',
  '#FFCA28',
  '#7EC2C2',
  '#9C27B0',
  '#4DD0E1',
  '#4072B3',
  '#665990',
  '#AAA5D1',
  '#F7C9CE',
  '#009688',
  '#00897B',
  '#C5E99B',
  '#6088C6',
  '#AEC4E5',
  '#BA68C8',
  '#F6E5D7',
  '#73D0C2',
  '#E91E63',
  '#F06292',
  '#ED8D49',
  '#FFC530',
  '#978D86',
  '#EB8686',
  '#FFC93C',
  '#9DDCDC',
  '#FFF4E1',
  '#E67A7A',
  '#204495',
  '#6495ED',
  '#C0C0C0',
  '#77AF9C',
  '#657a66',
  '#383838',
  '#F08F00',
  '#CD853F',
  '#FBE9D6',
  '#757575',
  '#517D99',
  '#516C9D',
  '#7B9AD0',
  '#DEDEDE',
  '#6AC1B7',
  '#DFEFED',
  '#EF866B',
  '#F7B46B',
  '#F7D76B',
  '#BCB5B5',
]
// ______________________________________________________
// Component
export const CustomLineChart: React.VFC<CustomLineChartProps> = ({ data }) => (
  <div css={wrap} data-testid="LINECHART">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid fill="#FEFEFE" />
        <XAxis
          dataKey="year"
          type="number"
          domain={['1985', '2045']}
          allowDuplicatedCategory={false}
          interval={0}
          tickCount={4}
        >
          <Label value="年度" offset={0} position="insideBottom" fontWeight="bold" />
        </XAxis>
        <YAxis dataKey="value" type="number" domain={['dataMin-1000', 'dataMax+1000']}>
          <Label value="人口数" offset={5} position="insideLeft" fontWeight="bold" />
        </YAxis>
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="top"
          align="right"
          // wrapperStyle={{ right: -10 }}
        />
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
      prefecture: '東京', // Legend
      data: [
        // Year => X axis value, Value => Y axis value
        { year: 1985, value: 2817 },
        { year: 1990, value: 2707 },
        { year: 2015, value: 2571 },
        { year: 2045, value: 2199 },
      ],
    },
    {
      prefecture: '京都',
      data: [
        { year: 1985, value: 7610 },
        { year: 1990, value: 3431 },
        { year: 2015, value: 9431 },
        { year: 2045, value: 1010 },
      ],
    },
  ],
}
