import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaskedTextInput } from "react-native-advanced-input-mask";

export default function App() {
  const [value, setValue] = useState(10);

  return (
    <View style={styles.container}>
      <Text>Testing</Text>
      <MaskedTextInput
        allowedKeys="0123456789,."
        autocomplete={false}
        keyboardType="numeric"
        mask="$[09999]{.}[09]"
        multiline
        onChangeText={(_, extractedValue) => {
          setValue(+extractedValue);
        }}
        placeholder="$5"
        value={`${value}`}
        style={{
          borderWidth: 1,
          width: 120,
          borderColor: "black",
          fontWeight: "bold",
          padding: 12,
          textAlign: "center",
        }}
      />

      <View style={{ flexDirection: "row", gap: 12 }}>
        {[10, 20, 30, 40, 50].map((x) => (
          <Pressable
            key={x}
            onPress={()=>setValue(x)}
            style={{
              borderRadius: 99,
              alignItems: "center",
              width: 40,
              padding: 8,
              backgroundColor: x === value? "#73D4FF": '#DFF1FE',
            }}
          >
            <Text>{x}</Text>
          </Pressable>
        ))}
      </View>

      <Text>Value should update as above: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    gap: 24,
    justifyContent: "center",
  },
});
