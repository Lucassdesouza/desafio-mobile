import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getProductList, getProductListPaginate} from '~/store/ducks/list';
import ItemList from './item';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Products extends Component {
  componentDidMount() {}

  renderFooter = () => {
    if (!this.props.loadingNew) return null;
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

  _reload = () => {
    this.props.getProductList();
  };

  state = {
    data: [],
    page: 0,
    loading: false,
  };

  loadRepositories = () => {
    this.props.getProductListPaginate(1);
  };

  render() {
    const {pullRefresh, products} = this.props;

    return (
      <View>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={products}
          onRefresh={() => this._reload()}
          refreshing={pullRefresh}
          renderItem={({item, index, separators}) => (
            <View key={item.Id} key={index} styles={styles.card}>
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
          )}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.5}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
  },
  img: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  name: {
    fontSize: 9,
    width: 30,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexWrap: 'wrap',
  },
  content: {
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
  price: {
    fontWeight: '700',
  },
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  products: state.list.list,
  categories: state.categories.categories,
  loadingNew: state.list.loadingNew,
  pullRefresh: state.list.pullRefresh,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProductList, getProductListPaginate}, dispatch);

export default Products = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
