import { SafeAreaView ,Text ,View} from "react-native";

export default Header = () =>{
    const hr = false
    return (
        <SafeAreaView>
            <View>
                <Text>Icon</Text>
            </View>
            <View>
                <Text>
                    { hr &&  "sdsf"}
                </Text>
            </View>
        </SafeAreaView>
    );
}