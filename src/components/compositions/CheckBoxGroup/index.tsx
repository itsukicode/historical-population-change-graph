/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { Heading } from 'components/elements/Heading'
import { CheckBoxList, PrefectureData } from 'components/modules/CheckBoxList'
// Type
type CheckBoxGroupProps = {
  data: PrefectureData[]
}
// ______________________________________________________
// Styles
const wrap = css`
  @media (min-width: 1024px) {
    width: 30%;
  }
`
const space = css`
  height: 15px;
`
// ______________________________________________________
// Component
export const CheckBoxGroup: React.VFC<CheckBoxGroupProps> = ({ data }) => (
  <div css={wrap} data-testid="CHECKBOXGROUP">
    <Heading type="h2">都道府県</Heading>
    <div css={space} />
    <CheckBoxList data={data} />
  </div>
)
