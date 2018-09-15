import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = {menuItems: []};

    componentWillMount() {
        // Returns a promise
        axios.get('https://fjchng-menuItems.herokuapp.com/api/getMenuItems')
            .then(response => this.setState({menuItems: response.data}));
    }

    renderItems() {
        return this.state.menuItems.map(item => <MenuItem key={item.itemName} menuItem={item}/>);
    }

    render() {
        return (
            <View>
                {this.renderItems()}
            </View>
        );
    }
}

export default Menu;