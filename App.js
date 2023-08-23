
import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet, Text, SafeAreaView, Button  } from "react-native";
import * as Speech from 'expo-speech';

export default function App(){
    const ThingsToSay = "press 1: to know your account details\n\n press 2: to know your package details \n\n press 3: to contact to our service provider"
    const speak = () =>{
        Speech.speak(ThingsToSay)
    }
    const [titleText, setTitleText] = useState("Show Options");
    const [newText, settingtext] = useState("");
    const onPressTitle = () => {
        speak(ThingsToSay);
        setTitleText("Listed Successfully");
        settingtext("press 1: to know your account details\n\n press 2: to know your package details \n\n press 3: to contact to our service provider");
    };
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text1}> Customer Care Call</Text>
            <AppButton title={titleText} onPress={onPressTitle}/>
            <Text style={styles.Text2}> {newText}</Text>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor: '#EDBFFF',
        alignItems:'center',
        justifyContent: 'center',
    },
    Text2:{
        marginTop: 10,
        color:'black',
        padding:10,
        fontSize: 15,
    },
    Text1:{
        fontSize: 30,
        marginTop: 0,
    },
    appButtonContainer:{
        marginTop: 200,
        elevation: 8,
        width: 300,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

});