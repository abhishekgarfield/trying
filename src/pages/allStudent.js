import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Studentlist from '../components/allstudent_Components/Studentlist';
import Header from '../components/Constants/Header';
const {SafeAreaView, Text, View, StyleSheet} = require('react-native');

export default AllStudent = () => {
   // const studentList = [{first_name:"abhiek",last_name:"sharma",age:"34",dob:"23/43/4",city:"sujanpur"},{first_name:"garfield",last_name:"sharma",age:"34",dob:"23/43/4",city:"sujanpur"}]
  const navigation = useNavigation();
  const {user,func,test} = useRoute().params;
  console.log('----------------sds',test)
  console.log("assadasd----------",test)
  const [students,setStudents]=useState([])
  const [selectedStudent ,setSelectedStudent] = useState({show:false,student:null})
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    AsyncStorage.getAllKeys((error,result)=>{
        keys = result;
        AsyncStorage.multiGet(keys,(error,result)=>{
           filtered = result.map((value) => JSON.parse(value.filter((value,index)=> index==1 )))
             setStudents(filtered)
        })
    })
    setTimeout(()=>{
      console.log("000000000")
        func("jean")
    },5000)
  },[]);
  return (
    <SafeAreaView style={styles.top_container}>
                <Header/>
            <ScrollView style={{flex:1}}>
               {students?.map((student,index)=>{
                return <Studentlist student={student} key={index} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent}/>
               })}
            </ScrollView>
            { selectedStudent.show && 
            <CustomModal selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} />
        }
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
    top_container:{
        flex:1, 
        flexDirection:"column"
    },
    nested__header_div_1:{
        justifyContent:"space-around",
        backgroundColor:"red",
        flexDirection:"row",
        padding:20
    }
})


// export default AllStudent;
