import * as React from "react";
import {
  Text,
  View,
  Image,
  Easing,
  Animated,
  FlatList,
  TextInput,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
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
  _doneButtonStyle,
} from "./RNMultiSelect.style";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { ThemeColors, DARK, LIGHT } from "./theme";

export interface IMultiSelectDataTypes {
  id: number;
  value: string;
  isChecked: boolean;
  data?: any;
}

export interface IMultiSelectProps {
  height?: number;
  width?: number;
  darkMode?: boolean;
  imageWidth?: number;
  TextComponent?: any;
  imageHeight?: number;
  ImageComponent?: any;
  placeholder?: string;
  arrowImageStyle?: any;
  doneButtonText?: string;
  menuItemTextStyle?: any;
  disableAbsolute?: boolean;
  doneButtonTextStyle?: any;
  buttonContainerStyle?: any;
  menuBarContainerStyle?: any;
  multiSelectionText?: string;
  doneButtonShadowColor?: string;
  menuBarContainerWidth?: number;
  menuBarContainerHeight?: number;
  disableFilterAnimation?: boolean;
  doneButtonBackgroundColor?: string;
  data: Array<IMultiSelectDataTypes>;
  onSelect: (selectedItems: Array<IMultiSelectDataTypes>) => void;
  onDoneButtonPress?: () => void;
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
    doneButtonText,
    disableAbsolute,
    arrowImageStyle,
    menuItemTextStyle,
    onDoneButtonPress,
    multiSelectionText,
    doneButtonTextStyle,
    buttonContainerStyle,
    menuBarContainerStyle,
    menuBarContainerWidth,
    doneButtonShadowColor,
    disableFilterAnimation,
    menuBarContainerHeight,
    doneButtonBackgroundColor,
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

  React.useEffect(() => {
    onSelect && onSelect(selectedItems);
  }, [selectedItems.length]);

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

  const handleOnSelectItem = (
    item: IMultiSelectDataTypes,
    checked: boolean,
  ) => {
    handleOnFilter("");
    item.isChecked = checked;
    if (checked) {
      const joined = selectedItems.concat(item);
      setSelectedItems(joined);
    } else {
      const index = selectedItems.findIndex((_item) => _item.id === item.id);
      if (index !== -1) {
        // Splice(Delete) the matched ID
        selectedItems.splice(index, 1);
        setSelectedItems(selectedItems);
      }
    }
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

  const renderSelectedText = () => {
    let _text = "";
    if (selectedItems.length === 0) {
      _text = placeholder || "Select";
    } else if (selectedItems.length > 2) {
      _text = `${selectedItems.length.toString()} ${
        multiSelectionText || "items are selected"
      }`;
    } else {
      selectedItems.map((item) => {
        _text = _text + `${item.value}, `;
      });
    }
    return <TextComponent>{_text}</TextComponent>;
  };

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
              style={_placeholderTextStyle(theme, selectedItems)}
              placeholder={placeholder || "Select"}
              onFocus={() => handleOnToggleMenuBar(false)}
              placeholderTextColor={
                selectedItems
                  ? ThemeColors[theme].textColor
                  : ThemeColors[theme].placeholderColor
              }
              onChangeText={(text: string) => {
                if (text.length === 0) handleOnFilter("");
                else handleOnFilter(text);
              }}
            >
              {renderSelectedText()}
            </TextInput>
            <View style={styles.arrowImageContainer}>
              <Icon
                theme={theme}
                ref={(ref: Icon) => (iconRef = ref)}
                style={[styles.arrowImageStyle, arrowImageStyle]}
              />
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderMenuItem = (menuItem: any) => {
    const { index } = menuItem;
    const { value, isChecked, imageSource } = menuItem.item;
    return (
      <View style={_menuItemContainer(index, data)}>
        <View style={styles.menuBarItemContainerGlue}>
          <BouncyCheckbox
            text={value}
            fontSize={14}
            color="#a9aeb9"
            borderRadius={8}
            fillColor="#164aff"
            borderColor="#eaeef1"
            unfillColor="#eaeef1"
            textDecoration="none"
            textStyle={menuItemTextStyle}
            {...props}
            isChecked={isChecked}
            style={styles.checkboxContainerStyle}
            onPress={(checked) => {
              handleOnSelectItem(menuItem.item, checked);
            }}
          />
          {imageSource && (
            <ImageComponent
              resizeMode="contain"
              source={imageSource}
              style={_imageStyle(imageHeight, imageWidth)}
            />
          )}
        </View>
      </View>
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
        <FlatList
          data={dataSource}
          renderItem={renderMenuItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <RNBounceable
          onPress={() => {
            handleOnToggleMenuBar();
            onDoneButtonPress && onDoneButtonPress();
          }}
        >
          <View
            style={_doneButtonStyle(
              doneButtonBackgroundColor,
              doneButtonShadowColor,
            )}
          >
            <TextComponent
              style={[styles.doneButtonTextStyle, doneButtonTextStyle]}
            >
              {doneButtonText || "Done"}
            </TextComponent>
          </View>
        </RNBounceable>
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
  data: Array<IMultiSelectDataTypes>(),
};

export default RNMultiSelect;
