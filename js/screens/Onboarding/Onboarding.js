import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';
import NavigationLayout from '../../navigation/NavigationLayout';

const Circle = ({ isLight, selected }) => {
  const circleStyle = { ...styles.circle };
  if (isLight) {
    circleStyle.backgroundColor = selected ? '#35367B' : '#D8D8D8';
  }

  return <View style={circleStyle} />;
};

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};
const Subtitle = props => {
  return <Text style={styles.subTitle}>{props.subtitle}</Text>;
};

const Skip = ({ pressed }) => {
  return (
    <TouchableOpacity
      style={styles.skipButton}
      title={'Done'}
      onPress={pressed}
    >
      <Text style={styles.skip}>Skip</Text>
    </TouchableOpacity>
  );
};

let deviceWidth = Dimensions.get('window').width;

const OnboardingPage = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Onboarding
        bottomBarHighlight={false}
        showNext={false}
        showDone={true}
        onDone={() => {
          navigation.navigate('Profile');
        }}
        imageContainerStyles={{
          width: deviceWidth,
        }}
        bottomBarHeight={100}
        flatlistProps={{
          width: deviceWidth,
        }}
        DotComponent={Circle}
        SkipButtonComponent={() => (
          <Skip
            pressed={() => {
              navigation.navigate('Profile');
            }}
          />
        )}
        pages={[
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/login/tutorial.png')}
              />
            ),
            title: <Title title="View updates on your child" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/login/fox.png')}
              />
            ),
            title: <Title title="Set up a personalized profile" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/login/provider.png')}
              />
            ),

            title: <Title title="Learn about your provider" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
          {
            backgroundColor: colors.teal,
            image: (
              <Image
                style={styles.image}
                source={require('../../assets/login/onboarding.png')}
              />
            ),

            title: <Title title="Read about Edify" />,
            subtitle: <Subtitle subtitle="Description to be added" />,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingPage;
