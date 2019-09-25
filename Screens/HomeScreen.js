import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { Content, Container, Header, Left, Body, Button, Icon, Title } from 'native-base'
import PropTypes from 'prop-types';

import JobCard from '../Components/JobCard'
//import CustomHeader from '../Components/Header'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://10.0.2.2:5000/api/getJob/11833')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.response,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render() {

        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

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
                    <Title>Dashboard</Title>
                </Body>
                </Header>


                <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.CustomerName}, {item.SubscriptionID}</Text>}
          keyExtractor={({id}, index) => id}
        />

                <Content padder>
                <JobCard customer='Linda Betz' address='70 Mirranda Ct, Willington' phone={12345678} subscription='DR-000186' time='15:00' status='Success' />
                <JobCard />
                <JobCard />
                </Content>

            </Container>
        )
    }
}

// CustomHeader.propTypes =
// {
//   title: PropTypes.string
// }

// CustomHeader.defaultProps =
// {
//     title: "Title"
// }

JobCard.propTypes =
{
    customer: PropTypes.string,
    address: PropTypes.string, 
    phone: PropTypes.number,
    subscription: PropTypes.string,
    time: PropTypes.string, 
    status: PropTypes.string
}
 
JobCard.defaultProps =
{
    customer: "ABC",
    address: "22 Gilman St", 
    phone: 1234567,
    subscription: "DR-000169",
    time: "14:10", 
    status: "Success"
}