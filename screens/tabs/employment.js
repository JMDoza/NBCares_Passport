import React from 'react';
import {Button,Text,View,} from 'react-native';

const Employment = ({navigation}) => {
    return(
    <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text>
            This is the employments tab to be filled later 
        </Text>
        <Button
        onPress = {()=> navigation.navigate("Home")} title='Previous'>
        </Button>
    </View>
    );
};

export default Employment