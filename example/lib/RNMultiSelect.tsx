import * as React from "react";
import {
  Text,
  View,
  Easing,
  Animated,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
/**
 * ? Local Imports
 */
import Icon from "./components/Icon";
import styles, {
  _placeholderTextStyle,
  _menuItemContainer,
  _menuBarContainer,
  _menuButtonContainer,
  _imageStyle,
  _menuItemTextStyle,
} from "./RNMultiSelect.style";

import { ThemeColors, DARK, LIGHT } from "./theme";

export interface IMultiSelectProps {
  height?: number;
  width?: number;
  darkMode?: boolean;
  placeholder: string;
  TextComponent: any;
  arrowImageStyle: any;
  buttonContainerStyle: any;
}

const RNMultiSelect = (props: IMultiSelectProps) => {
  const {
    width,
    height,
    darkMode,
    placeholder,
    TextComponent,
    arrowImageStyle,
    buttonContainerStyle,
  } = props;
  let iconRef: any = undefined;

  const [theme, setTheme] = React.useState(LIGHT);
  const [menuToggled, setMenuToggled] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState(null);

  // ? Animation States
  const [borderRadiusAnimation, setBorderRadiusAnimation] = React.useState(
    new Animated.Value(16),
  );
  const [
    menuBarOpenCloseAnimation,
    setMenuBarOpenCloseAnimation,
  ] = React.useState(new Animated.Value(0));

  // ? Lifecycle: componentDidMount
  React.useEffect(() => {
    setCurrentTheme();
  }, []);

  const setCurrentTheme = () => {
    if (darkMode) setTheme(DARK);
    else setTheme(LIGHT);
  };

  const animateBorderRadius = () => {
    Animated.timing(borderRadiusAnimation, {
      toValue: menuToggled ? 16 : 0,
      duration: 1250,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const animateSelectionBar = () => {
    Animated.timing(menuBarOpenCloseAnimation, {
      toValue: menuToggled ? 0 : 100,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleOnToggleMenuBar = (isMenuToggled?: boolean) => {
    iconRef?.onPressAnimation();
    animateBorderRadius();
    animateSelectionBar();
    setMenuToggled(isMenuToggled ? isMenuToggled : !menuToggled);
  };

  //   const handleOnSelectItem = (item: ISingleSelectDataType) => {
  //     handleOnFilter("");
  //     setSelectedItem(item);
  //     handleOnToggleMenuBar();
  //     props.onSelect && props.onSelect(item);
  //   };

  const triggerFilterAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 1000,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 1,
      },
      delete: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 1,
      },
    });
  };

  //   const handleOnFilter = (text: string) => {
  //     let newData = dataBackup;
  //     newData = dataBackup?.filter((item) => {
  //       const itemData = item.value.toLowerCase();
  //       const textData = text.toLowerCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     !disableFilterAnimation && triggerFilterAnimation();
  //     setDataSource(newData);
  //     setSelectedItem({ value: text });
  //     setDataSource(newData);
  //   };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderMainButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleOnToggleMenuBar();
        }}
        {...props}
      >
        <Animated.View
          style={[
            _menuButtonContainer(theme, height, width),
            {
              borderRadius: borderRadiusAnimation,
            },
            buttonContainerStyle,
          ]}
        >
          <View style={styles.buttonContainerGlue}>
            <TextInput
              placeholderTextColor={
                selectedItems
                  ? ThemeColors[theme].textColor
                  : ThemeColors[theme].placeholderColor
              }
              style={_placeholderTextStyle(theme, selectedItems)}
              placeholder={placeholder || "Select"}
              onFocus={() => handleOnToggleMenuBar(false)}
              //   onChangeText={(text: string) => {
              //     if (text.length === 0) handleOnFilter("");
              //     else handleOnFilter(text);
              //   }}
            >
              <TextComponent>{selectedItems}</TextComponent>
            </TextInput>
            <Icon
              theme={theme}
              ref={(ref: Icon) => (iconRef = ref)}
              style={[styles.arrowImageStyle, arrowImageStyle]}
            />
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{}}>
      <Text>{}</Text>
    </View>
  );
};

RNMultiSelect.defaultProps = {
  darkMode: LIGHT,
};

export default RNMultiSelect;
