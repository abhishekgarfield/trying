import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default CustomModal = ({selectedStudent,setSelectedStudent}) => {
    const {student} = selectedStudent
    console.log(student,"0000000")
  return (
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          backgroundColor: '#FFFFFF50',
          justifyContent:"center",
        }}>
        <View style={{padding:10,opacity:1}}>
            <View style={{backgroundColor:"yellow",paddingVertical:10,flexDirection:"row",borderTopRightRadius:10,borderTopLeftRadius:10,paddingHorizontal:15,opacity:1}}>
                <TouchableOpacity  onPress={()=>{
            setSelectedStudent({show:false,student:null})
        }}><Text>{"<="}</Text></TouchableOpacity>
                <Text style={{color:"red" ,textAlign:"center", fontSize:20,fontWeight:"600"}}>
                    Student info
                </Text>
            </View>
            <View style={{backgroundColor:"green",opacity:1,padding:10 ,borderBottomRightRadius:5,borderBottomLeftRadius:5}}>
                <View style={{flexDirection:"row",backgroundColor:"pink",padding:10}}>
                    <Text style={{flex:1}}>First name</Text>
                    <Text style={{flex:3}}>{student?.first_name}</Text>
                </View>
                <View style={{flexDirection:"row",backgroundColor:"pink",padding:10}}>
                <Text style={{flex:1}}>Last name</Text>
                    <Text style={{flex:3}}>{student?.last_name}</Text>
                </View>
                <View style={{flexDirection:"row",backgroundColor:"pink",padding:10}}>
                <Text style={{flex:1}}>Age</Text>
                    <Text style={{flex:3}}>{student?.age}</Text>
                </View>
                <View style={{flexDirection:"row",backgroundColor:"pink",padding:10}}>
                <Text style={{flex:1}}>Dob</Text>
                    <Text style={{flex:3}}>{student?.dob}</Text>
                </View>
                <View style={{flexDirection:"row",backgroundColor:"pink",padding:10}}>
                <Text style={{flex:1}}>City</Text>
                    <Text style={{flex:3}}>{student?.city}</Text>
                </View>
            </View>
        </View>
        </View>
  );
};
const styles = StyleSheet.create({

})
