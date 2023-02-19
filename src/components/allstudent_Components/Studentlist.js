import { View ,Text, StyleSheet, TouchableOpacity} from "react-native";
import CustomModal from "./CustomModal";

export default Sudentlist = ({student,selectedStudent,setSelectedStudent}) =>{
    console.log("-------",student)
    return (
        <TouchableOpacity style={styles.tab_style} onPress={()=>{
            setSelectedStudent({show:true,student:student})
        }}>
            <View style={{flex:1}}><Text>{student?.first_name}</Text></View>
            <View style={{flex:1}}><Text>{student?.last_name}</Text></View>
            <View style={{flex:1}}><Text>{student?.age}</Text></View>
            <View style={{flex:1}}><Text>{student?.dob}</Text></View>
            <View style={{flex:1}}><Text>{student?.city}</Text></View>
        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    tab_style : {
        padding:15,
        backgroundColor:"lightblue",
        marginTop:4,
        marginHorizontal:5,
        borderRadius:4,
        flexDirection:"row",justifyContent:"space-between",
        shadowOffset:{height:6,width:3},
        shadowColor:"#c5c5c5",
        shadowOpacity:30
        
    }
})