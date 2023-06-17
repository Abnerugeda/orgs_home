import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
    const [titulo, lista] = useProdutores();
    const TopoLista = () => {
        return (<>
            <Topo/>
            <Text style={styles.titulo}>{titulo}</Text>
            </> 
        )
    }
    return (
        <FlatList 
        renderItem={({item}) => <Produtor {...item}/>}
        data={lista}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}/>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold"
    }
})
