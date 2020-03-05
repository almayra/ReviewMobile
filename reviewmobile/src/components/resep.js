import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { Button } from 'native-base'

const Resep=(props)=>{
    return (
        <View>
            <Text>ini Resep</Text>
            <Button title='toggledrawer' onPress={()=>props.navigation.openDrawer()} />
        </View>

    )
}

export default Resep