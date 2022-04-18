export type Tabs = 'Main' | 'WIP' | 'Settings'
export type Screen = 'Main' | 'Example' | 'Settings' | 'CreateBudget' | 'SignIn'
export type Modal = 'CreateBudget'

export type ModalProps = {
  CreateBudget: undefined
}

export type ScreenProps = {
  Main: undefined
  Example: ExampleScreenProps
  Settings: undefined
} & ModalProps
