If you have any troubles running the app with `yarn ios` or `yarn android`, open XCode or Android Studio and run the project from there.

Design: https://excalidraw.com/#room=6bc07c036306ae9f5713,SQ9jKKWHdXgSggQaXUDzcA

## What's inside

- [React Navigation (v6)](https://github.com/react-navigation/react-navigation) - routing and navigation for React Native apps. If you'd like to use [React Native Navigation](https://github.com/wix/react-native-navigation) by Wix, check out [rnn-starter](https://github.com/kanzitelli/rnn-starter).
- [Expo Modules](https://github.com/expo/expo) - libraries and modules from [Expo](https://expo.dev) ecosystem.
- [RN UI lib](https://github.com/wix/react-native-ui-lib) - amazing Design System, UI toolset & components library for React Native. Dark Mode is implemented using this library.
- [Reanimated 2](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented.
- [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management, with [mobx-persist-store](https://github.com/quarrant/mobx-persist-store) for persisting your stores.
- ~~AsyncStorage~~ [MMKV](https://github.com/mrousavy/react-native-mmkv) - efficient, small mobile key-value storage framework developed by WeChat. [~30x faster](https://github.com/mrousavy/react-native-mmkv#benchmark) than _AsyncStorage_!

#### Extra helpful libraries

- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native.
- [Hermes Engine](https://reactnative.dev/docs/hermes) - a JavaScript engine optimized for running React Native apps.
- [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier) - keep your code neat and structured.
- [Patch Package](https://github.com/ds300/patch-package) - useful for fixing node modules instantly.
- [Release It](https://github.com/release-it/release-it) - automate versioning and publishing of your app.
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript.

#### Useful services/methods

- `navigation` - a service where all navigation configuration takes place in. It simplifies and abstracts the process of registering screens, layouts, etc.
- `translate` - a service that brings an easy integration of localization for an app by using [i18n-js](https://github.com/fnando/i18n-js) and [expo-localization](https://github.com/expo/expo/tree/master/packages/expo-localization). You can see an example of `en` and `ru` localizations in `Example` screen.
- `onStart` - a service where you can write your own logic when app is launched. For example, you can increment number of `appLaunches` there.
- `configureDesignSystem()` - a method where all settings for an app's design system is taking place. You can customize there colors, schemes, typegraphy, spacings, etc.

https://user-images.githubusercontent.com/4402166/148631148-7f6e88aa-7516-4343-a812-bebc64d24102.MP4


## Advantages

#### Describe app screens in one place

All setup for your screens takes place in one file `src/screens/index.ts`:

```
type Screen = 'Main' | 'Example' | 'Settings';
type Tabs = 'Main' | 'WIP' | 'Settings';

const screens: ScreenLayouts = {
  Main: {
    name: 'Main',
    component: Main,
    options: () => ({
      title: 'Home',
    }),
  },
  // ...
}

const tabs: TabScreenLayouts = {
  Main: {
    name: 'MainNavigator',
    component: HomeStack,
    options: () => ({
      title: 'Home',
    }),
  },
  // ...
}
```

#### Build layouts with ease

Stack Navigator:

```
const HomeStack = () =>
  genStackNavigator([
    screens.Main,
    screens.Example,
  ]);
```

Tab Navigator:

```
const TabNavigator = () =>
  genTabNavigator([
    tabs.Main,
    tabs.WIP,
    tabs.Settings,
  ]);
```

#### Navigate to other screens with predictability

```
const Screen = ({componentId}) => {
  const {nav} = useServices();

  return (
    <View>
      <Button
        label="Open Settings"
        onPress={() => nav.push('Settings')}
      />
    </View>
  )
}
```

