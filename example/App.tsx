import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RNMultiSelect, { IMultiSelectDataTypes } from "@freakycoder/react-native-multiple-select";

const staticData: Array<IMultiSelectDataTypes> = [
  {
    id: 0,
    value: "Euismod Justo",
    isChecked: false,
    // imageSource: require("./assets/money.png"),
  },
  {
    id: 1,
    value: "Risus Venenatis",
    isChecked: false,
    // imageSource: require("./assets/beer.png"),
  },
  {
    id: 2,
    value: "Vestibulum Ullamcorper",
    isChecked: false,
    // imageSource: require("./assets/party.png"),
  },
  {
    id: 3,
    value: "Lorem Nibh",
    isChecked: false,
    // imageSource: require("./assets/food-and-restaurant.png"),
  },
  {
    id: 4,
    value: "Ligula Amet",
    isChecked: false,
  },
];

const App = () => {
  const [dynamicData, setDynamicData] = React.useState<
    Array<IMultiSelectDataTypes>
  >([]);

  React.useEffect(() => {
    setTimeout(() => {
      setDynamicData(staticData);
    }, 2000);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <RNMultiSelect
            disableAbsolute
            fillColor="red"
            data={dynamicData}
            onSelect={(selectedItems) =>
              console.log("SelectedItems: ", selectedItems)
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
