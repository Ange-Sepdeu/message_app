import React from 'react'
import {View, TouchableOpacity, Text, ScrollView, TextInput, Image} from "react-native"
import tw from 'twrnc'
import {AntDesign, FontAwesome5, FontAwesome} from "@expo/vector-icons"

function Register({navigation}) {
  return (
    <ScrollView>
    <View style={tw`flex justify-around p-10 mt-10`}>
    <View style={tw`items-center justify-center `}>
        <View style={tw`absolute p-40 bg-white rounded-full opacity-10`}></View>
        <View style={tw`absolute bg-indigo-300 rounded-full p-18 opacity-200 mb-5`}></View>
        <FontAwesome5
          name="robot"
          size={40}
          color="black"
          style={tw`z-20 mb-20 text-violet-700`}
        />
        <FontAwesome
          name="commenting-o"
          size={100}
          color="black"
          style={tw`absolute z-10 text-white`}
        />
      </View>
        <Text style={tw`text-2xl font-bold text-center mt-2`}>Create Account</Text>
    <TextInput placeholder='Username' style={tw`border-b h-15 border-gray-200`}/>
    <TextInput placeholder='Password' style={tw`border-b h-15 border-gray-200`}/>
    <View>
    {/* <Image resizeMode='contain' style={{width: '20px', height: '20px'}} source={require('../../assets/nigeria.jpg')} /> */}
    <TextInput placeholder='Phone number' style={tw`border-b h-15 border-gray-200`}/>
    </View>
    <TextInput placeholder='Gender' style={tw`border-b h-15 border-gray-200`} />
    <TextInput placeholder='Location' style={tw`border-b h-15 border-gray-200`} />
    <TouchableOpacity style={tw`rounded-xl bg-blue-900 p-5 items-center text-center w-80 mt-5`}>
            <Text style={tw`text-white font-bold`}>
                Create Account
                </Text>
        </TouchableOpacity>
        <View style={tw`mt-3 mb-2`}>
            <Text style={tw`text-center text-lg text-gray-500`}>Already have an account ? 
                <Text style={tw`text-blue-900 text-center text-lg font-semibold`} onPress={navigation.navigate("Login")}> Log In </Text>
            </Text>
        </View>
        <View style={tw`flex flex-row justify-around items-center self-center`}>
                <View style={tw`mr-4`}>
            <AntDesign 
            name="google" 
            size={24} 
            color="black" 
            style={tw`text-red-900`}/>
            </View>
            <View>
            <Text style={tw`text-center`}>Signup with Google</Text>
            </View>
            </View>

            <View style={tw`flex flex-row justify-around items-center self-center mt-5`}>
            <TouchableOpacity>
            <View style={tw`ml-2`}>    
            <Text>
              <FontAwesome5
              name="facebook"
              color="#00008B"
              size={24}
            />
            <Text style={tw`text-center`}> <Text>  </Text>Signup with Facebook</Text>
            </Text>
            </View>
        </TouchableOpacity>
        </View>
</View>
</ScrollView>
  )
}

export default Register