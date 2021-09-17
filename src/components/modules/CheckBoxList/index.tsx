/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { Prefectures, CheckBox } from 'components/elements/CheckBox'
// ______________________________________________________
// Type
export type PrefectureData = {
  prefCode: number
  prefName: Prefectures
  checked: boolean
}

type CheckBoxListProps = {
  /**
   * The type to use for the this component
   */
  data: PrefectureData[]
}
// ______________________________________________________
// Styles

const styles = css`
  display: flex;
  flex-wrap: wrap;
`
// ______________________________________________________
// Component
export const CheckBoxList: React.VFC<CheckBoxListProps> = ({ data }) => (
  <ul css={styles} data-testid="CHECKBOXLIST">
    {data.map((d) => (
      <CheckBox key={d.prefCode} id={d.prefCode} prefecture={d.prefName} checked={d.checked} />
    ))}
  </ul>
)
