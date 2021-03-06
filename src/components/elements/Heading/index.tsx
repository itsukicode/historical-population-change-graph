/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
// ______________________________________________________
// Type
type Element = 'h1' | 'h2' | undefined
// ______________________________________________________
// Props Type
export type HeadingProps = {
  /**
   * The default element type
   * @default 'h1'
   */
  type?: Element
  children: string
}
// ______________________________________________________
// Styles
const H1Style = css`
  background-color: var(--bg-gray);
  color: var(--text-black);
  font-size: var(--font-md);
  font-weight: bold;
  padding: 20px 0;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: var(--font-xxlg);
  }
`
const H2Style = css`
  color: var(--text-black);
  font-size: var(--font-md);
  border-bottom: 1px solid var(--border-gray);
  padding-bottom: 8px;
  @media (min-width: 1024px) {
    font-size: var(--font-xlg);
    border-bottom: 2px solid var(--border-gray);
  }
`
// ______________________________________________________
// Component
export const Heading: React.VFC<HeadingProps> = ({ type, children }) => {
  switch (type) {
    case 'h1': {
      return <h1 css={H1Style}>{children}</h1>
    }
    case 'h2': {
      return <h2 css={H2Style}>{children}</h2>
    }
    default: {
      return <></>
    }
  }
}
// ______________________________________________________
// 初期値
Heading.defaultProps = {
  type: 'h1',
}
