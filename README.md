<img alt="React Native Multi Select" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-multiple-select)

[![React Native Multi Select](https://img.shields.io/badge/-Customizable%20%26%20Animated%2C%20Easy%20to%20Use%20Multiple%20Select%20Library%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-multiple-select)

[![npm version](https://img.shields.io/npm/v/react-native-multiple-select.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multiple-select)
[![npm](https://img.shields.io/npm/dt/react-native-multiple-select.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-multiple-select)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Multi Select"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-multiple-select
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-bouncy-checkbox": ">= 1.0.7",
"@freakycoder/react-native-bounceable": ">= 0.1.0",
```

# Usage

## Import

```jsx
import RNMultiSelect, {
  IMultiSelectDataTypes,
} from "react-native-multiple-select";
```

## Fundamental Usage

```jsx
<RNMultiSelect
  disableAbsolute
  data={staticData}
  onSelect={(selectedItems) =>
    console.log("SelectedItems: ", selectedItems)
  }
/>
```

## Data Format

You MUST use this format to generate menu items




# Configuration - Props

| Property |  Type   | Default | Description                                             |
| -------- | :-----: | :-----: | ------------------------------------------------------- |
| outline  | boolean |  true   | make the button outline                                 |
| solid    | boolean |  false  | make the button with a solid background and a shadow    |
| gradient | boolean |  false  | make the button with a gradient background and a shadow |
| width    | number  |   150   | change the button's width                               |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Multi Select is available under the MIT license. See the LICENSE file for more info.
