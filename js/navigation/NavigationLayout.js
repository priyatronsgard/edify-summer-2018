import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import AccountScreen from '../screens/Account';
import ProfileScreen from '../screens/Profile';
import ChildProfileScreen from '../screens/ChildProfile/';
import EdifyScreen from '../screens/Edify';
import ResourcesScreen from '../screens/Resources';
import LoginScreen from '../screens/Login';
import LearningCurriculumScreen from '../screens/LearningCurriculum';
import EducatorScreen from '../screens/Educator';
import OnboardingScreen from '../screens/Onboarding';
import CurriculumScreen from '../screens/Curriculum';
import ContactScreen from '../screens/Contact';
import ChildInfoScreen from '../screens/ChildInfo';
import { HumanIcon } from '../components/Icons/HumanIcon';
import { AccountIcon } from '../components/Icons/AccountIcon';
import { EdifyIcon } from '../components/Icons/EdifyIcon';
import { sharedNavigationOptions } from './config';
import { colors } from '../config/styles';
import ActivityScreen from '../screens/Activity';
import ChildPostScreen from '../screens/ChildPost';

const EdifyStack = createStackNavigator(
  {
    Edify: EdifyScreen,
    Curriculum: CurriculumScreen,
    LearningCurriculum: LearningCurriculumScreen,
    Activity: ActivityScreen,
    Resources: ResourcesScreen,
    Contact: ContactScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    ChildProfile: ChildProfileScreen,
    ChildInfo: ChildInfoScreen,
    Educator: EducatorScreen,
    ChildPost: ChildPostScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export const loginStack = createStackNavigator(
  { Login: LoginScreen },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
        height: 0,
      },
    },
  },
);

const NavigationLayout = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Account: AccountStack,
    Edify: EdifyStack,
  },

  {
    modeModal: true,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
          case 'Account':
            icon = <AccountIcon color={tintColor} />;
            break;
          case 'Profile':
            icon = <HumanIcon color={tintColor} />;
            break;
          case 'Edify':
            icon = <EdifyIcon color={tintColor} />;
            break;
          default:
            icon = <EdifyIcon color={tintColor} />;
            break;
        }
        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.purple,
      inactiveTintColor: colors.white,
      showLabel: false,
      style: {
        backgroundColor: colors.teal,
        borderTopColor: colors.teal,
        height: 80,
      },
    },
  },
);

export default createStackNavigator(
  {
    onBoarding: {
      screen: OnboardingScreen,
    },
    NavigationLayout,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
