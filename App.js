import { useState } from "react";
import updateContext from '@laufire/resist';
import context from './src/core/context';
import { View,Text} from "react-native";
import HomeScreen from "./src/components/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App=()=> {
  const [state, setState] = useState(context.seed);
  updateContext(context, { state, setState });
  
  return (
    <SafeAreaProvider>
        <HomeScreen {...context}/>
    </SafeAreaProvider>
  );
}
 
export default App;

