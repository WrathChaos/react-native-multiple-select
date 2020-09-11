import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import RNMultiSelect, { IMultiSelectDataTypes } from "./lib/RNMultiSelect";

const staticData: Array<IMultiSelectDataTypes> = [
  {
    id: 0,
    value: "Euismod Justo",
    // imageSource: require("./assets/money.png"),
  },
  {
    id: 1,
    value: "Risus Venenatis",
    // imageSource: require("./assets/beer.png"),
  },
  {
    id: 2,
    value: "Vestibulum Ullamcorper",
    // imageSource: require("./assets/party.png"),
  },
  {
    id: 3,
    value: "Lorem Nibh",
    // imageSource: require("./assets/food-and-restaurant.png"),
  },
  {
    id: 4,
    value: "Ligula Amet",
    // imageSource: require("./assets/guitar.png"),
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
          <RNMultiSelect data={staticData} onSelect={() => {}} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
