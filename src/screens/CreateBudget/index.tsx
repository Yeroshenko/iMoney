import React, { FC } from 'react'
import { TextField, Text, Button } from 'react-native-ui-lib'

import { styles } from './styles'
import { ScreenWrapper } from '../components/ScreenWrapper'

export const CreateBudget: FC = () => (
  <ScreenWrapper scrollEnabled={false}>
    <Text text30BO center marginB-s5>
      Имя бюджета
    </Text>
    <Text center grey30>
      Дайте имя своему бюджету.
    </Text>
    <Text center grey30 marginB-s8>
      Вы также можете использовать Эмодзи
    </Text>
    <TextField floatingPlaceholder placeholder={'Имя вашего бюджета'} />

    <Button label='Далее' br40 style={styles.submitButton} />
  </ScreenWrapper>
)
