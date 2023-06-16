import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from "../../../assets/logo.png"
import { carregaTopo } from '../../../services/carregaDados'

 class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: "",
            legenda: ""
        }
    }
    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({topo: retorno})
    }
    componentDidMount() {
        this.atualizaTopo();
    }

    render () {
        return (
            <View style={styles.topo}>
                <Image source={logo} style={styles.imagem}/>
                <Text style={styles.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    legenda:{
        fontSize: 16,
        lineHeight: 16
    }
})

export default Topo;