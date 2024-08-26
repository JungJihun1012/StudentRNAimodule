import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Generate from "./src/components/Generate";
import { StyleSheet } from "react-native";

const App: React.FC = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Generate />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
export default App;