import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Loading extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <View styles={styles.item}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
        </View>
        <View styles={styles.item}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={20} height={50} />
          </Placeholder>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flex: 1,
  },
});
