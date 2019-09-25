import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Content, Card, CardItem, Body, Text } from 'native-base'

export default class JobCard extends Component {
    render() {
        return (
                <Card>
                    <CardItem bordered style={styles.card}>
                    <Body>
                        <Text style={styles.customer}>{this.props.customer}</Text>
                        <Text style={styles.address}>{this.props.address}</Text>
                        <Text style={styles.item}>Phone:</Text><Text>{this.props.phone}</Text>
                        <Text style={styles.item}>{this.props.subscription}</Text>
                        <Text style={styles.item}>{this.props.time}</Text>
                        <Text style={styles.item}>{this.props.status}</Text>
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
        fontSize: 20,
        fontWeight: '600'
    },
    address: {
        color: "#484848",
        fontSize: 16,
        fontWeight: '600'
    }
});