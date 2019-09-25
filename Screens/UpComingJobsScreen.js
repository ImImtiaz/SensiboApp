import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Content } from 'native-base'
import PropTypes from 'prop-types';

import JobList from '../Components/JobList'

export default class UpComingJobsScreen extends Component {
    render() {
        return (
            <Container style={{marginTop: 24, backgroundColor: '#eceff1'}}>
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
                    <Title>Upcoming Jobs</Title>
                </Body>
                </Header>

            <Content>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <JobList date='22-Nov-18' numberOfJob={2} />
                </TouchableOpacity>

                <JobList date='12-Nov-18' numberOfJob={3} />
                <JobList date='18-Nov-18' numberOfJob={4} />
                <JobList date='25-Nov-18' numberOfJob={5} />

                <JobList date='22-Nov-18' numberOfJob={2} />
                <JobList date='12-Nov-18' numberOfJob={3} />
                <JobList date='18-Nov-18' numberOfJob={4} />
                <JobList date='25-Nov-18' numberOfJob={5} />
                <JobList date='22-Nov-18' numberOfJob={2} />
                <JobList date='12-Nov-18' numberOfJob={3} />
                <JobList date='18-Nov-18' numberOfJob={4} />
                <JobList date='25-Nov-18' numberOfJob={5} />
                <JobList date='22-Nov-18' numberOfJob={2} />
                <JobList date='12-Nov-18' numberOfJob={3} />
                <JobList date='18-Nov-18' numberOfJob={4} />
                <JobList date='25-Nov-18' numberOfJob={5} />
            </Content>
                

            </Container>
        )
    }
}

JobList.propTypes =
{
  date: PropTypes.string,
  numberOfJob: PropTypes.number,
}
 
JobList.defaultProps =
{
    date: "Default",
  numberOfJob: 0,
}