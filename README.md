<img alt="React Native Multi Select" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-multiple-select)

[![React Native Multi Select](https://img.shields.io/badge/-Customizable%20%26%20Animated%2C%20Easy%20to%20Use%20Multiple%20Select%20Library%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-multiple-select)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-multiple-select.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-multiple-select)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-multiple-select.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-multiple-select)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Multi Select"
        src="assets/Screenshots/React-Native-Multiple-Select.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-native-multiple-select
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.1.0",
"react-native-animated-spinkit": ">= 1.5.2",
"react-native-bouncy-checkbox": ">= 1.0.7"
```

# Usage

## Import

```jsx
import RNMultiSelect, {
  IMultiSelectDataTypes,
} from "@freakycoder/react-native-multiple-select";
```

## Fundamental Usage

```jsx
<RNMultiSelect
  disableAbsolute
  data={staticData}
  onSelect={(selectedItems) => console.log("SelectedItems: ", selectedItems)}
/>
```

## Data Format

You MUST use this format to generate menu items

```js
import RNMultiSelect, {
  IMultiSelectDataTypes,
} from "@freakycoder/react-native-multiple-select";

const staticData: Array<IMultiSelectDataTypes> = [
  {
    id: 0,
    value: "Euismod Justo",
    isChecked: false,
  },
  {
    id: 1,
    value: "Risus Venenatis",
    isChecked: false,
  },
  {
    id: 2,
    value: "Vestibulum Ullamcorper",
    isChecked: false,
  },
  {
    id: 3,
    value: "Lorem Nibh",
    isChecked: false,
  },
  {
    id: 4,
    value: "Ligula Amet",
    isChecked: false,
  },
];
```

# Configuration - Props

| Property               |             Type             |  Default  | Description                                                                                                     |
| ---------------------- | :--------------------------: | :-------: | --------------------------------------------------------------------------------------------------------------- |
| onSelect               |           function           | undefined | set the selection function when a menu item is selected                                                         |
| data                   | Array<IMultiSelectDataTypes> | undefined | set the menu item data array for generating menu bar items                                                      |
| width                  |            number            |    250    | change the width of the component                                                                               |
| height                 |            number            |    50     | change the height of the main single select button                                                              |
| darkMode               |           boolean            |   false   | change the theme of the component to `dark theme`                                                               |
| placeholder            |            string            | "Select"  | change the placeholder of the single select component                                                           |
| imageHeight            |            number            |    25     | change the image source's menu item's image height                                                              |
| imageWidth             |            number            |    25     | change the image source's menu item's image width                                                               |
| ImageComponent         |          component           |   Image   | set your own custom Image component instead of default `Image` one                                              |
| TextComponent          |          component           |   Text    | set your own custom Text component instead of default `Text` one                                                |
| buttonContainerStyle   |          ViewStyle           |  default  | change/override the top of the single select button (the main one)                                              |
| menuBarContainerStyle  |          ViewStyle           |  default  | change/override the top of the single select bottom menu bar                                                    |
| arrowImageStyle        |          ImageStyle          |  default  | change/override the top of the arrow image's style                                                              |
| menuItemTextStyle      |          TextStyle           |  default  | change/override the top of the each menu bar's item text style                                                  |
| disableAbsolute        |           boolean            |   false   | if you do not want to use the library without absolute to fix bottom menubar's `overlaps` simply make it `true` |
| menuBarContainerWidth  |            number            |    250    | change the bottom menu bar's width                                                                              |
| menuBarContainerHeight |            number            |    150    | change the bottom menu bar's height                                                                             |
| disableFilterAnimation |           boolean            |   false   | disable the filter animation for huge lists (especially on Android)                                             |
| onDoneButtonPress      |           function           | undefined | handle the onDoneButtonPress function                                                                           |
| doneButtonTextStyle    |            style             |  default  | change the done button's text style                                                                             |
| doneButtonShadowColor  |            style             |  default  | change the done button's shadow style                                                                           |
| multiSelectionText     |            string            |  default  | change the 3 or more items are selected's text part                                                             |
| placeholderTextStyle   |            style             |  default  | extends or override the default placeholder's text style                                                        |
| Spinner                |      spinner component       |   Chase   | change the spinner type                                                                                         |
| spinnerSize            |            number            |    30     | change the spinner size                                                                                         |
| spinnerColor           |            color             |  default  | change the spinner color                                                                                        |

## List of available types for Spinner

- `<Plane />`
- `<Chase />`
- `<Bounce />`
- `<Wave />`
- `<Pulse />`
- `<Flow />`
- `<Swing />`
- `<Circle />`
- `<CircleFade />`
- `<Grid />`
- `<Fold />`
- `<Wander />`

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript Challenge!~~
- [x] ~~Dark Mode (Coming Soon!)~~
- [ ] Write an article about the lib on Medium

## Credits

Heavily Inspired by [Manuel Rovira's Work](https://dribbble.com/shots/9395928/attachments/1420569?mode=media)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Multi Select is available under the MIT license. See the LICENSE file for more info.
