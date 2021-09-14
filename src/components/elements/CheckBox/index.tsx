/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
// ______________________________________________________
// Type
export type Prefectures =
  | '北海道'
  | '青森'
  | '岩手'
  | '宮城'
  | '秋田'
  | '山形'
  | '福島'
  | '茨城'
  | '栃木'
  | '群馬'
  | '埼玉'
  | '千葉'
  | '東京'
  | '神奈川'
  | '新潟'
  | '富山'
  | '石川'
  | '福井'
  | '山梨'
  | '長野'
  | '岐阜'
  | '静岡'
  | '愛知'
  | '三重'
  | '滋賀'
  | '京都'
  | '大阪'
  | '兵庫'
  | '奈良'
  | '和歌山'
  | '鳥取'
  | '島根'
  | '岡山'
  | '広島'
  | '山口'
  | '徳島'
  | '香川'
  | '愛媛'
  | '高知'
  | '福岡'
  | '佐賀'
  | '長崎'
  | '熊本'
  | '大分'
  | '宮崎'
  | '鹿児島'
  | '沖縄'

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
const text = css`
  display: block;
  margin-left: 4px;
  font-size: var(--font-xsm);
  color: var(--text-black);
  @media (min-width: 1024px) {
    font-size: var(--font-sm);
  }
`
// ______________________________________________________
// Component
export const CheckBox: React.VFC<CheckBoxProps> = ({
  id,
  prefecture,
  checked,
}) => {
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
        <span css={text}>{prefecture}</span>
      </label>
    </li>
  )
}

CheckBox.defaultProps = {
  id: 1,
  prefecture: '東京',
  checked: false,
}
