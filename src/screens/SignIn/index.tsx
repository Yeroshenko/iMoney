import React, { FC } from 'react'
import { Button, TextField } from 'react-native-ui-lib'

import { ScreenWrapper } from '../components/ScreenWrapper'

export const SignIn: FC = () => (
  <ScreenWrapper>
    <TextField floatingPlaceholder placeholder='Email' />
    <TextField floatingPlaceholder placeholder='Password' />
    <Button br40 label={'Войти'} marginT-s4 />
  </ScreenWrapper>
)
