import React from 'react'
import { MainAppContextType } from 'types/MainAppContextType'
import { MainAppContext } from 'components/compositions/MainApp'

export const useMainContext = (): MainAppContextType => {
  const context = React.useContext(MainAppContext)
  if (context === undefined) {
    throw new Error('MainAppProvider is undefined')
  }
  return context
}
