import React, { useCallback } from 'react'
import { ScrollView, Alert, ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import { View, Text, Button } from 'react-native-ui-lib'
import { observer } from 'mobx-react'
import { If } from '@kanzitelli/if-component'
import Constants from 'expo-constants'
import * as Application from 'expo-application'

import { useServices } from '../services'
import { useStores } from '../stores'

import { Section } from '../components/section'
import { Reanimated2 } from '../components/reanimated2'
import { randomNum } from '../utils/help'
import { BButton } from '../components/button'

export const Main: React.FC = observer(({}) => {
  const { nav, t, api } = useServices()
  const { counter, ui } = useStores()

  const start = useCallback(async () => {
    try {
      await api.counter.get()
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(')
    }
  }, [api.counter])

  useFocusEffect(
    useCallback(() => {
      start()
    }, [start])
  )

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View padding-s4>
          <Button
            br40
            label={'Создать бюджет'}
            onPress={() => nav.show('CreateBudget')}
          />
        </View>
      </ScrollView>
    </View>
  )
})
