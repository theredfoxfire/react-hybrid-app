/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
type HomeProps = {
  history: {
    push: () => void,
  },
};
const Home = (props: HomeProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Well hello there</Text>
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => props.history.push("/welcome")}
      >
        <Text style={styles.itemTitle}>Greeting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => props.history.push("/welcome")}
      >
        <Text style={styles.itemTitle}>Salut</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => props.history.push("/welcome")}
      >
        <Text style={styles.itemTitle}>Hilsen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sectionItem}
        onPress={() => props.history.push("/welcome")}
      >
        <Text style={styles.itemTitle}>Grüße</Text>
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
    fontSize: 24,
    fontWeight: "700",
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

export default Home;
