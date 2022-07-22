import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const TouchableWithoutFeedbackExample = () => {
  let inButton = false;
  const [count, setCount] = useState(0);
  const onHover = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <View onMouseEnter={onHover}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableWithoutFeedbackExample;