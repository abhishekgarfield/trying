import { useRoute } from "@react-navigation/native";
const { SafeAreaView  , Text , View} = require("react-native");

export default  AllStudent = () =>{
    const {user}= useRoute().params
    console.log(user)
    return (
        <SafeAreaView>
           <View>
            <Text>All students info</Text>
           </View>
        </SafeAreaView>
    );
}

// export default AllStudent;