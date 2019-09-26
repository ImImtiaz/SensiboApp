import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Content, Card, CardItem, Body, Text, Icon } from 'native-base'

export default class JobCard extends Component {
    render() {
        return (
                <Card>
                    <CardItem bordered style={styles.card}>
                    <Body>
                        <Text style={styles.customer}>{this.props.customer}</Text>
                        <Text style={styles.address}><Icon style={styles.homeicon} name='home' /> {this.props.address}
                        {this.props.address1.length > 0 &&
                            <Text style={styles.address}>, {this.props.address1}</Text>
                        }
                        </Text>                        
                        <Text style={styles.itemHeader}>Phone: <Text style={styles.item}>{this.props.phone}</Text></Text>
                        <Text style={styles.itemHeader}>Subscription: <Text style={styles.item}>{this.props.subscription}</Text></Text>
                        <Text style={styles.itemHeader}>Time: <Text style={styles.item}>{this.props.time}</Text></Text>
                        <Text style={styles.itemHeader}>Status: <Text style={styles.item}>{this.props.status}</Text></Text>
                    </Body>
                    </CardItem>
                </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      //backgroundColor: "#eeeeee"
    },
    customer: {
        color: '#1976d2',
        fontSize: 17
    },
    address: {
        color: "#484848",
        fontSize: 14,
        fontWeight: '500'
    },
    itemHeader: {
        color: "#000000",
        fontSize: 13,
        fontWeight: '600'
    },
    item: {
        color: "#484848",
        fontSize: 13,
        fontWeight: '400'
    },
    homeicon: {
        color: "#484848",
        fontSize: 15,
    }
});