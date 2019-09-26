import React from 'react';
import { Root } from "native-base";
import { DrawerNavigator } from 'react-navigation';
import { AppLoading } from "expo";
import * as Font from 'expo-font';

import HomeScreen from './Screens/HomeScreen';
import JobsScreen from './Screens/JobsScreen';
import UpComingJobs from './Screens/UpComingJobsScreen';
import JobSheet from './Screens/JobSheetScreen'

const MyDrawerNavigator = new DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Jobs: JobsScreen,
    UpcomingJobs: UpComingJobs
  },
  {
    initialRouteName: 'Home',
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#3f51b5',
    },
  }
);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <MyDrawerNavigator />
      </Root>
    );
  }
}
