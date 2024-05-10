import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import ResulteIMC from './ResulteIMC/index copy'


export default function Form() {

const [height, setheight] = useState(null)
const [weigth, setweigth] = useState(null)
const [mensageIMC, setmensageIMC] = useState("preencha o peso e a altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weigth/(height*height)).toFixed(2))

}

function validationIMC(){
    if(weigth != null && height != null){
        imcCalculator()
        setheight(null)
        setweigth(null)
        setmensageIMC("Seu IMC e igual:")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setmensageIMC("Preencha peso e altura")
}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setheight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setweigth}
                    value={weigth}
                    placeholder="Ex. 75.375"
                    keyboardType='numeric'
                />
                <Button
                onPress={() => validationIMC}
                title='Calcular IMC'/>
            </View>
            <ResulteIMC mensageResulteIMC={mensageIMC} ResulteIMC={imc}/>
        </View>
    );
}