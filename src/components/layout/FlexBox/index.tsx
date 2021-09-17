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
  padding: 30px 25px;
  background-color: var(--bg-white);
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
    padding: 40px 30px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 60px 50px;
    max-width: 1000px;
  }
`
// ______________________________________________________
// Component
export const FlexBox: React.VFC<FlexBoxProps> = ({ children }) => (
  <div css={wrap} data-testid="FLEXBOX">
    {children}
  </div>
)
