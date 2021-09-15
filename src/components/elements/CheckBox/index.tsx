/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
// ______________________________________________________
// Type
export type Prefectures =
  | '北海道'
  | '青森県'
  | '岩手県'
  | '宮城県'
  | '秋田県'
  | '山形県'
  | '福島県'
  | '茨城県'
  | '栃木県'
  | '群馬県'
  | '埼玉県'
  | '千葉県'
  | '東京都'
  | '神奈川県'
  | '新潟県'
  | '富山県'
  | '石川県'
  | '福井県'
  | '山梨県'
  | '長野県'
  | '岐阜県'
  | '静岡県'
  | '愛知県'
  | '三重県'
  | '滋賀県'
  | '京都府'
  | '大阪府'
  | '兵庫県'
  | '奈良県'
  | '和歌山県'
  | '鳥取県'
  | '島根県'
  | '岡山県'
  | '広島県'
  | '山口県'
  | '徳島県'
  | '香川県'
  | '愛媛県'
  | '高知県'
  | '福岡県'
  | '佐賀県'
  | '長崎県'
  | '熊本県'
  | '大分県'
  | '宮崎県'
  | '鹿児島県'
  | '沖縄県'

type CheckBoxProps = {
  /**
   * Unique ID for each checkbox
   * @default 1
   */
  id: number
  /**
   * The text next to the checkbox
   * @default '東京'
   */
  prefecture: Prefectures
  /**
   *  Whether the checkbox is checked or not
   * @default false
   */
  checked: boolean
}
// ______________________________________________________
// Styles
const checkbox = css`
  display: flex;
  margin-right: 5px;
  margin-bottom: 5px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    &:nth-of-type(3n) {
      margin-right: 5px;
    }
  }
`
const label = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const input = css`
  width: 0;
  margin: 0;
  opacity: 0;
`
const checkmark = (isChecked: boolean) => css`
  display: block;
  position: relative;
  box-sizing: border-box;
  min-width: 22px;
  height: 22px;
  border: 2px solid var(--border-light-gray);
  border-radius: 4px;
  @media (min-width: 1024px) {
    min-width: 24px;
    height: 24px;
    border: 3px solid var(--border-light-gray);
  }
  ${isChecked &&
  `
    background-color: var(--bg-primary);
    border: none;
    @media (min-width: 1024px) {
      border: none;
    }
    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 7px;;
      display: block;
      width: 5px;
      height: 10px;
      border-right: 3px solid var(--border-white);
      border-bottom: 3px solid var(--border-white);
      transform: rotate(45deg);
      @media (min-width: 1024px) {
        top: 4px;
        left: 8px;
      }
    }
  `}
`
const text = (prefecture: Prefectures) => css`
  display: block;
  margin-left: 4px;
  color: var(--text-black);
  font-size: var(--font-xsm);
  @media (min-width: 1024px) {
    font-size: var(--font-sm);
  }
  ${prefecture.length >= 4 &&
  `
    font-size: var(--font-xxxsm);
    @media (min-width: 1024px) {
      font-size: var(--font-xxsm);
    }
  `}
`
// ______________________________________________________
// Component
export const CheckBox: React.VFC<CheckBoxProps> = ({ id, prefecture, checked }) => {
  const [isChecked, setIsChecked] = useState(false)
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <li css={checkbox}>
      <label css={label} htmlFor={`checkbox-${id}`}>
        <input
          id={`checkbox-${id}`}
          data-testid={`checkbox-${id}`}
          type="checkbox"
          css={input}
          checked={isChecked}
          onChange={handleChange}
        />
        <span css={checkmark(isChecked)} />
        <span css={text(prefecture)}>{prefecture}</span>
      </label>
    </li>
  )
}

CheckBox.defaultProps = {
  id: 1,
  prefecture: '東京都',
  checked: false,
}
