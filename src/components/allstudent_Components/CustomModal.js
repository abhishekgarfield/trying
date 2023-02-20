import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default CustomModal = ({selectedStudent, setSelectedStudent}) => {
  const {student} = selectedStudent;
  console.log(student, '0000000');
  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        justifyContent: 'center',
      }}>
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: 'yellow',
            paddingVertical: 10,
            flexDirection: 'row',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 15,
            opacity: 1,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              padding: 7,
              borderRadius: 3,
              justifyContent: 'center',
              marginRight: 10,
            }}
            onPress={() => {
              setSelectedStudent({show: false, student: null});
            }}>
            <Text style={{fontWeight:"600"}}>Back</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Student info
          </Text>
        </View>
        <View
          style={{
            opacity: 1,
            padding: 10,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 2,
              borderBottomColor: 'skyblue',
            }}>
            <Text style={{flex: 1}}>First name</Text>
            <Text style={{flex: 3}}>{student?.first_name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomColor: 'skyblue',
              borderBottomWidth: 2,
            }}>
            <Text style={{flex: 1}}>Last name</Text>
            <Text style={{flex: 3}}>{student?.last_name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomColor: 'skyblue',
              borderBottomWidth: 2,
            }}>
            <Text style={{flex: 1}}>Age</Text>
            <Text style={{flex: 3}}>{student?.age}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomColor: 'skyblue',
              borderBottomWidth: 2,
            }}>
            <Text style={{flex: 1}}>Dob</Text>
            <Text style={{flex: 3}}>{student?.dob}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomColor: 'skyblue',
              borderBottomWidth: 2,
            }}>
            <Text style={{flex: 1}}>City</Text>
            <Text style={{flex: 3}}>{student?.city}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
