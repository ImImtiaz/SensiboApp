import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { Content, List, ListItem, Text, Left, Right, Icon } from 'native-base'

export default class JobList extends Component {

    constructor(props){
        super(props)
      }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <List>
                    <ListItem selected>
                    <Left>
                        <Text>Date: {this.props.date}</Text>
                    </Left>
                    <Right>
                        <Text>Jobs# {this.props.numberOfJob}</Text>
                    </Right>
                    </ListItem>
                </List>
            </TouchableOpacity>
                
        )
    }
}
