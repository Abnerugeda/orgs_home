import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Estrelas from '../../../componentes/Estrelas'

export default function Produtor({nome, imagem, distancia, estrelas }) {
  return (
    <View style={styles.cartao}>
        <Image style={styles.imagem} source={imagem} accessibilityLabel={nome}/>
        <View style={styles.informacoes}>
            <View>
                <Text style={styles.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas}/>
            </View>
            <Text style={styles.distancia}>{distancia}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        //Android
        elevation: 4,
        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
        marginRight: 16
    }
})