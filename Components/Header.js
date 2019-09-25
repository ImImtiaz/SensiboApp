import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base'

export default class CustomHeader extends Component {
    render() {
        return (
            <Container style={{marginTop: 24}}>
                <Header>
                <Left>
                    <Button transparent>                    
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Icon name='menu' />
                    </TouchableOpacity>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                </Header>
            </Container>
        )
    }
}
