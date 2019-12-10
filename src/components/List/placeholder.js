import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Placeholder extends Component {
  render() {
    return (
      <View>
        <View styles={styles.container}>
          <ShimmerPlaceHolder
            width={200}
            height={200}
            autoRun={true}
            styles={styles.item}
          />
          <ShimmerPlaceHolder
            width={100}
            height={100}
            autoRun={true}
            styles={styles.item}
          />
        </View>
        <View styles={styles.container}>
          <View styles={styles.item}>
            <ShimmerPlaceHolder width={200} height={200} autoRun={true} />
          </View>
          <View styles={styles.item}>
            <ShimmerPlaceHolder width={200} height={200} autoRun={true} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: hp('2%'),
  },
  item: {},
});
