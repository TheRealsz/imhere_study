import { Text, View } from "react-native";
import { styles } from "./style";

export default function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.mainText}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
