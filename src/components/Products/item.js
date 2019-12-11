import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class ItemList extends Component {
  componentDidMount() {}

  render() {
    const {item} = this.props;
    return (
      <View key={item.Id} styles={styles.card}>
        <Image
          source={{
            uri: item.Images[0].ImageUrl,
          }}
          style={{width: 50, height: 50}}
        />
        <Text>{item.Name}</Text>
        <Text>{item.Sellers[0].Price}</Text>
        <Text>{item.Sellers[0].BestInstallment.Count}</Text>
        <Text>{item.Sellers[0].BestInstallment.Value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 40,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default ItemList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
