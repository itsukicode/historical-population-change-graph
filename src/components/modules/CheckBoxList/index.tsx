/** @jsxImportSource @emotion/react */
/* eslint-disable import/first */
import { css } from '@emotion/react'
import { CheckBox } from 'components/elements/CheckBox'
import { useMainContext } from 'hooks/useMainContext'
import { PrefectureData } from 'types/PrefecturesTypes'
// ______________________________________________________
// Styles
const styles = css`
  display: flex;
  flex-wrap: wrap;
`
// ______________________________________________________
// Component
export const CheckBoxList: React.VFC = () => {
  // ______________________________________________________
  // Use Functions
  const { areaData } = useMainContext()
  // ______________________________________________________
  // UI
  return (
    <ul css={styles} data-testid="CHECKBOXLIST">
      {areaData?.map((d: PrefectureData) => (
        <CheckBox key={d.prefCode} id={d.prefCode} prefecture={d.prefName} checked={d.checked} />
      ))}
    </ul>
  )
}
