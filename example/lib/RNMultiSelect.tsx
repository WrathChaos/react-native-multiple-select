import * as React from "react";
import {
  Text,
  View,
  Image,
  Easing,
  Animated,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  LayoutAnimation,
} from "react-native";
/**
 * ? Local Imports
 */
import Icon from "./components/Icon/Icon";
import styles, {
  _placeholderTextStyle,
  _menuItemContainer,
  _menuBarContainer,
  _menuButtonContainer,
  _imageStyle,
  _menuItemTextStyle,
} from "./RNMultiSelect.style";

import { ThemeColors, DARK, LIGHT } from "./theme";

export interface IMultiSelectDataTypes {
  id: number;
  value: string;
  data?: any;
}

export interface IMultiSelectProps {
  height?: number;
  width?: number;
  darkMode?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  TextComponent?: any;
  ImageComponent?: any;
  placeholder?: string;
  arrowImageStyle?: any;
  disableAbsolute: boolean;
  menuItemTextStyle?: any;
  buttonContainerStyle?: any;
  menuBarContainerStyle?: any;
  menuBarContainerWidth?: number;
  menuBarContainerHeight?: number;
  disableFilterAnimation?: boolean;
  data: Array<IMultiSelectDataTypes>;
  onSelect: (selectedItems: Array<IMultiSelectDataTypes>) => void;
}

const RNMultiSelect = (props: IMultiSelectProps) => {
  const {
    data,
    width,
    height,
    darkMode,
    onSelect,
    imageWidth,
    imageHeight,
    placeholder,
    TextComponent,
    ImageComponent,
    disableAbsolute,
    arrowImageStyle,
    menuItemTextStyle,
    buttonContainerStyle,
    menuBarContainerStyle,
    menuBarContainerWidth,
    disableFilterAnimation,
    menuBarContainerHeight,
  } = props;
  let iconRef: any = undefined;

  const [theme, setTheme] = React.useState(LIGHT);
  const [menuToggled, setMenuToggled] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState(
    Array<IMultiSelectDataTypes>(),
  );
  // ? Local Data Manipulation for Filtering
  const [dataBackup, setDataBackup] = React.useState<
    Array<IMultiSelectDataTypes> | undefined
  >(props.data);
  const [dataSource, setDataSource] = React.useState<
    Array<IMultiSelectDataTypes> | undefined
  >(props.data);
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

  const handleOnSelectItem = (item: IMultiSelectDataTypes) => {
    handleOnFilter("");
    var joined = selectedItems.concat(item);
    console.log("Joined: ", joined);
    setSelectedItems(joined);
    // handleOnToggleMenuBar();
    onSelect && onSelect(selectedItems);
  };

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

  const handleOnFilter = (text: string) => {
    let newData = dataBackup;
    newData = dataBackup?.filter((item) => {
      const itemData = item.value.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    !disableFilterAnimation && triggerFilterAnimation();
    setDataSource(newData);
  };

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
              onChangeText={(text: string) => {
                if (text.length === 0) handleOnFilter("");
                else handleOnFilter(text);
              }}
            >
              <TextComponent>{selectedItems.length}</TextComponent>
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

  const renderMenuItem = (menuItem: any) => {
    const { index } = menuItem;
    const { id, value, imageSource } = menuItem.item;
    return (
      <TouchableHighlight
        key={id}
        style={_menuItemContainer(index, data)}
        onPress={() => {
          handleOnSelectItem(menuItem.item);
        }}
      >
        <View style={styles.menuBarItemContainerGlue}>
          {imageSource && (
            <ImageComponent
              resizeMode="contain"
              source={imageSource}
              style={_imageStyle(imageHeight, imageWidth)}
            />
          )}
          {renderCheckbox()}
          <TextComponent style={[_menuItemTextStyle(theme), menuItemTextStyle]}>
            {value}
          </TextComponent>
        </View>
      </TouchableHighlight>
    );
  };

  const renderMenuBar = () => {
    const rotate = menuBarOpenCloseAnimation.interpolate({
      inputRange: [0, 25, 50, 75, 100],
      outputRange: [0, 0.5, 0.75, 0.9, 1],
    });
    return (
      <Animated.View
        style={[
          _menuBarContainer(
            theme,
            menuBarContainerHeight,
            menuBarContainerWidth,
          ),
          {
            transform: [{ scaleY: rotate }],
            display: disableAbsolute ? "flex" : menuToggled ? "flex" : "none",
          },
          menuBarContainerStyle,
        ]}
      >
        <FlatList data={dataSource} renderItem={renderMenuItem} />
      </Animated.View>
    );
  };

  return (
    <View>
      {renderMainButton()}
      {renderMenuBar()}
    </View>
  );
};

RNMultiSelect.defaultProps = {
  darkMode: false,
  TextComponent: Text,
  ImageComponent: Image,
  disableAbsolute: false,
  menuBarContainerHeight: 150,
  data: Array<IMultiSelectDataTypes>(),
};

export default RNMultiSelect;
