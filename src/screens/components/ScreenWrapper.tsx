import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native-ui-lib'

type ScreenWrapperProps = {
  scrollEnabled?: boolean
}

export const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  scrollEnabled = true
}) => (
  <View flex bg-bgColor>
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      scrollEnabled={scrollEnabled}
    >
      <View padding-s4 flexG>
        {children}
      </View>
    </ScrollView>
  </View>
)
