import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class List extends Component {
  componentDidMount() {}

  render() {
    const {list} = this.props;
    return (
      <View key={item.Id} styles={styles.card}>
        <View styles={styles.img}>
          <Image
            source={{
              uri: item.Images[0].ImageUrl,
            }}
            style={{width: 140, height: 140}}
          />
        </View>

        <View styles={styles.content}>
          {/* <Text styles={styles.name}>
                    {item.Name.length > 20
                      ? `${item.Name.substring(0, 20)}...`
                      : item.Name}
                  </Text> */}
          <Text styles={styles.price}>R${item.Sellers[0].ListPrice}</Text>
          <Text styles={styles.price}>R${item.Sellers[0].Price}</Text>
          <Text styles={styles.installment}>
            {item.Sellers[0].BestInstallment.Count}x $
            {item.Sellers[0].BestInstallment.Value}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default List = connect(mapStateToProps, mapDispatchToProps)(List);
