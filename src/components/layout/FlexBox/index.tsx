/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
// ______________________________________________________
// Type
type FlexBoxProps = {
  /**
   * The type to use for the this component
   * @default None
   */
  children: React.ReactNode
}
// ______________________________________________________
// Styles
const wrap = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
// ______________________________________________________
// Component
export const FlexBox: React.VFC<FlexBoxProps> = ({ children }) => <div css={wrap}>{children}</div>
