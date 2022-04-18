import {
  ModalScreenLayouts,
  ScreenLayouts,
  TabScreenLayouts
} from '../services/navigation/types'

import { Main } from '../screens/main'
import { Settings } from '../screens/settings'
import { Example } from '../screens/screen-sample'
import {
  genRootNavigator,
  genStackNavigator,
  genTabNavigator
} from '../services/navigation/helpers'
import { CreateBudget } from '../screens/CreateBudget'
import { SignIn } from '../screens/SignIn'

// Screens
const screens: ScreenLayouts = {
  Main: {
    name: 'Main',
    component: Main,
    options: () => ({ title: 'Крипта' })
  },
  Example: {
    name: 'Example',
    component: Example,
    options: () => ({ title: 'Example' })
  },
  Settings: {
    name: 'Settings',
    component: Settings,
    options: () => ({ title: 'Settings' })
  },
  CreateBudget: {
    name: 'CreateBudget',
    component: CreateBudget,
    options: () => ({ title: 'Создание бюджета', headerLargeTitle: false })
  },
  SignIn: {
    name: 'SignIn',
    component: SignIn,
    options: () => ({ title: 'Авторизация' })
  }
}

const HomeStack = () => genStackNavigator([screens.Main, screens.Example])
const ExampleStack = () => genStackNavigator([screens.Example])
const SettingsStack = () => genStackNavigator([screens.Settings])
const CreateBudgetModalStack = () => genStackNavigator([screens.CreateBudget])
const AuthStack = () => genStackNavigator([screens.SignIn])

// Tabs
const tabs: TabScreenLayouts = {
  Main: {
    name: 'MainNavigator',
    component: HomeStack,
    options: () => ({ title: 'Crypto' })
  },
  WIP: {
    name: 'ExampleNavigator',
    component: ExampleStack,
    options: () => ({ title: 'Wallet' })
  },
  Settings: {
    name: 'SettingsNavigator',
    component: SettingsStack,
    options: () => ({ title: 'Fiat' })
  }
}

const TabNavigator = () => genTabNavigator([tabs.Main, tabs.WIP, tabs.Settings])

// Modals
const modals: ModalScreenLayouts = {
  CreateBudget: {
    name: 'CreateBudget',
    component: CreateBudgetModalStack,
    options: () => ({ title: 'Создание бюджета' })
  }
}

// Root Navigator
export const RootNavigator = (): JSX.Element => {
  const isAuth = true

  if (!isAuth) {
    return genRootNavigator(AuthStack, [])
  }

  return genRootNavigator(TabNavigator, [modals.CreateBudget])
}
