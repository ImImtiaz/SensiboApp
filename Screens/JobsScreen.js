import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Content } from 'native-base'
import PropTypes from 'prop-types';

import JobCard from '../Components/JobCard'

export default class JobsScreen extends Component {
    render() {
        return (
            <Container style={{marginTop: 24, backgroundColor: '#eeeeee'}}>
                <Header style={{backgroundColor: '#1976d2'}}>
                <Left>
                    <Button transparent>                    
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Icon name='menu' />
                    </TouchableOpacity>
                    </Button>
                </Left>
                <Body>
                    <Title>Jobs</Title>
                </Body>
                </Header>
                <Text>
                    Date: 26-Nov-19
                </Text>
                
                <Content padder>
                <JobCard customer='Linda Betz' address='70 Mirranda Ct, Willington' phone={12345678} subscription='DR-000186' time='15:00' status='Success' />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                </Content>
                

            </Container>
        )
    }
}


JobCard.propTypes =
{
    customer: PropTypes.string,
    address: PropTypes.string, 
    address1: PropTypes.string, 
    phone: PropTypes.string,
    subscription: PropTypes.string,
    time: PropTypes.string, 
    status: PropTypes.string
}
 
JobCard.defaultProps =
{
    customer: "ABC",
    address: "22 Gilman St", 
    address1: "", 
    phone: "1234567",
    subscription: "DR-000169",
    time: "14:10", 
    status: "Success"
}
