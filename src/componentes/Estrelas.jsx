import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Estrela from './Estrela';

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    const styles = stylesFunction(grande);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++){
            listaEstrelas.push(
              <Estrela 
                key={i}
                onPress={() => setQuantidade(i+1)} 
                desabilitada={!editavel} 
                preenchida={i < quantidade}
                grande={grande}/>
            );
        }
        return listaEstrelas;
    }
    return (
        <View style={styles.estrelas}>
            <RenderEstrelas/>
        </View>
    )
}

const stylesFunction = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
})