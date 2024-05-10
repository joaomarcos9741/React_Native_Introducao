import React from 'react'
import { View, Text } from 'react-native'



export default function ResulteIMC(props) {
    return(
        <View>
            <Text>{props.ResulteIMC}</Text>
            <Text>{props.mensageResulteIMC}</Text>
        </View>
    );
}