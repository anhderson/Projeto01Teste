import { View, Text, StyleSheet } from 'react-native'


export function Profile(){
    return (
        <View style={styles.container}>
            <Text>Página perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})