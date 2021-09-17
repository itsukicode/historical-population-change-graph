/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { useMainContext } from 'hooks/useMainContext'
import { toast } from 'react-hot-toast'
import { Prefectures } from 'types/PrefecturesTypes'
// ______________________________________________________
// Props Type
type CheckBoxProps = {
  /**
   * Unique ID for each checkbox
   */
  id: number
  /**
   * The text next to the checkbox
   */
  prefecture: Prefectures
  /**
   *  Whether the checkbox is checked or not
   */
  checked: boolean
}
// ______________________________________________________
// Styles
const checkbox = css`
  display: flex;
  margin-right: 5px;
  margin-bottom: 5px;
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
      top: 5px;
      left: 8px;
      display: block;
      width: 5px;
      height: 10px;
      border-right: 3px solid var(--border-white);
      border-bottom: 3px solid var(--border-white);
      transform: rotate(45deg);
      @media (min-width: 1024px) {
        top: 6px;
        left: 9px;
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
  // ______________________________________________________
  // Use Functions
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { populationData, handleCheckedCheckBox, handleUncheckedCheckBox } = useMainContext()
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])
  // ______________________________________________________
  // Handle Functions
  const handleCheckBoxChange = () => {
    if (isChecked) {
      setTimeout(() => {
        handleUncheckedCheckBox(prefecture)
        setIsChecked((prevChecked) => !prevChecked)
      }, 300)
    } else if (populationData.length < 10) {
      setTimeout(() => {
        handleCheckedCheckBox(id, prefecture)
        setIsChecked((prevChecked) => !prevChecked)
      }, 300)
    } else {
      toast.error('10県まで選択できます', {
        position: 'top-right',
      })
    }
  }
  // ______________________________________________________
  // UI
  return (
    <li css={checkbox}>
      <label css={label} htmlFor={`checkbox-${id}`}>
        <input
          id={`checkbox-${id}`}
          data-testid={`checkbox-${id}`}
          type="checkbox"
          css={input}
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <span css={checkmark(isChecked)} />
        <span css={text(prefecture)}>{prefecture}</span>
      </label>
    </li>
  )
}
