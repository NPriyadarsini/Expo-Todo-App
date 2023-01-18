import { useState } from "react";
import updateContext from '@laufire/resist';
import context from './src/core/context';
import { View, Text } from "react-native";

export default function App() {
  const [state, setState] = useState(context.seed);
  updateContext(context, { state, setState });
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}
