/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

const hoge = css`
  color: green;
`
// ______________________________________________________
// Component
export const App: React.VFC = () => (
  <div>
    {/* Normalize css */}
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
        }
      `}
    />
    <h1 css={hoge}>Enjoy this Project!</h1>
  </div>
)
