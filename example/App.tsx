import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import RNMultiSelect, { IMultiSelectDataTypes } from "./lib/RNMultiSelect";

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
    imageSource: {
      uri:
        "https://images.unsplash.com/photo-1600207203812-6143fa75be0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
];

const App = () => {
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
            data={staticData}
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
