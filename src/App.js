/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import Welcome from "./Welcome";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route
                path="/welcome"
                render={(props) => <Welcome {...props} />}
              />
            </Switch>
          </Router>
        </ScrollView>
        <View style={styles.footer} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 100,
    width: "100%",
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default App;
