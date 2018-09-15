// Import a library to help create a component
import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Header'
import Menu from './src/components/Menu';

// Create and export a component
export default App = () => {
    return (
        <View>
            <Header headerName={"Hello"}/>
            <Text style={{textAlign:'center'}}>Menu</Text>
            <Menu/>
            <Text>Hello</Text>
        </View>

    );
}
