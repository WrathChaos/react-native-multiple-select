import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import RNMultiSelect from "./lib/RNMultiSelect";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RNMultiSelect />
      </SafeAreaView>
    </>
  );
};

export default App;
