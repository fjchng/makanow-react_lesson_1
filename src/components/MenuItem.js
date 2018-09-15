// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
// Make a component
const MenuItem = (props) => {
    return (
        <Card>
            <Text>Item Name: {props.menuItem.itemName}</Text>
            <Text>Category: {props.menuItem.category}</Text>
            <Text></Text>
            <Text>Price: {props.menuItem.price}</Text>
        </Card>
    );
};


// Make component available to other parts of the app
export default MenuItem;

