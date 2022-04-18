import { LogBox } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Amplify } from 'aws-amplify'

import { AppNavigator } from './src/AppNavigator'
import { configureDesignSystem } from './src/utils/designSystem'
import { hydrateStores, StoresProvider } from './src/stores'
import { initServices, ServicesProvider } from './src/services'
import awsConfig from './src/aws-exports'

LogBox.ignoreLogs([
  'EventEmitter.removeListener',
  '`new NativeEventEmitter()`',
  '[react-native-gesture-handler] Seems like' // https://github.com/software-mansion/react-native-gesture-handler/issues/1831
])

Amplify.configure(awsConfig)

const App = (): JSX.Element => {
  const [ready, setReady] = useState(false)

  const startApp = useCallback(async () => {
    await hydrateStores()
    await initServices()
    configureDesignSystem()

    setReady(true)
  }, [])

  useEffect(() => {
    startApp()
  }, [startApp])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoresProvider>
        <ServicesProvider>{ready ? <AppNavigator /> : null}</ServicesProvider>
      </StoresProvider>
    </GestureHandlerRootView>
  )
}

export default App
