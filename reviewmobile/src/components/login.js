import React from 'react'
import {useEffect} from'react'
import {View, Text, Button} from 'react-native'
import { CommonActions } from '@react-navigation/native'

const Login=(props)=>{

    useEffect(() => {
        const resetAction=CommonActions.reset({
            index:0,
            routes:[
                {name:'Drawermain'}
            ]
        })
       props.navigation.dispatch(resetAction)
    }, [])

    return (
        <View>
            <Text>ini Login</Text>
            <Button title='register' onPress={()=>props.navigation.navigate('Register', {nama: 'bebsa'})} />
            <Button title='Home' onPress={()=>props.navigation.navigate('Drawermain', {nama:'bebas'})} />
        </View>

    )
}

export default Login