/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
type WelcomeProps = {
  history: {
    push: () => void,
  },
};
const Welcome = (props: WelcomeProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Well hello there</Text>
      <View style={styles.sectionItem}>
        <Text style={styles.itemTitle}>Welcome to detail page :D</Text>
      </View>
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => props.history.push("/")}
      >
        <Text style={styles.itemTitle}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 84,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 64,
    fontWeight: "700",
    marginBottom: 86,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "700",
    width: 240,
  },
  sectionItem: {
    height: 94,
    width: 282,
    borderRadius: 10,
    borderColor: "#eaeaea",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 24,
    padding: 24,
  },
});

export default Welcome;
