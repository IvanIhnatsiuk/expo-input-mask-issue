import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaskedTextInput } from "react-native-advanced-input-mask";

export default function App() {
  const [value, setValue] = useState({ extracted: "10", formatted: "$10" });

  return (
    <View style={styles.container}>
      <Text>Testing</Text>
      <MaskedTextInput
        allowedKeys="0123456789,."
        autocomplete={false}
        keyboardType="numeric"
        mask="$[09999]{.}[09]"
        onChangeText={(formatted, extracted) => {
          setValue({
            formatted,
            extracted,
          });
        }}
        placeholder="$5"
        value={value.formatted}
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
            onPress={() =>
              setValue({
                extracted: x.toString(),
                formatted: `$${x}`,
              })
            }
            style={{
              borderRadius: 99,
              alignItems: "center",
              width: 40,
              padding: 8,
              backgroundColor:
                x.toString() === value.extracted ? "#73D4FF" : "#DFF1FE",
            }}
          >
            <Text>{x}</Text>
          </Pressable>
        ))}
      </View>

      <Text>Value should update as above: {value.extracted}</Text>
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
