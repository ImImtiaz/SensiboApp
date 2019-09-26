import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Content, Container, Header, Left, Body, Button, Icon, Title } from 'native-base'

import PropTypes from 'prop-types';

import JobCard from '../Components/JobCard'
//import CustomHeader from '../Components/Header'

const userId = 11833;

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    

    componentDidMount(){
        return fetch('http://192.168.101.198:5000/api/gettodayJob/'+userId)
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
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#1976d2" />
              </View>
            )
          }

        return (
            
            <Container style={{marginTop: 25, backgroundColor: '#eeeeee'}}>
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
                    <Title>Today's Job</Title>
                </Body>
                </Header>


                
                <Content padder>
                {this.state.dataSource.map((item) =>

                    <JobCard customer={item.CustomerName} address={item.cAddress1} address1={item.cAddress2} phone={item.cPrimaryPhone} subscription={item.SubscriptionID} time={item.JobStartTime.substring(11, 16)} status={item.JobStatus} />
                
                )}
                </Content>

                {/* <Content padder>
                <JobCard customer='Linda Betz' address='70 Mirranda Ct, Willington' phone={12345678} subscription='DR-000186' time='15:00' status='Success' />
                <JobCard />
                <JobCard />
                </Content> */}

{/* <Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  /> */}

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
    address1: PropTypes.string, 
    phone: PropTypes.string,
    subscription: PropTypes.string,
    time: PropTypes.string, 
    status: PropTypes.string
}
 
JobCard.defaultProps =
{
    customer: "Not Specified",
    address: "Not given", 
    address1: "", 
    phone: "",
    subscription: "",
    time: "", 
    status: "Undefined"
}