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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Products extends Component {
  componentDidMount() {}

  renderFooter = () => {
    if (!this.props.loadingNew) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
  };

  _reload = () => {
    this.props.getProductList();
  };

  state = {
    data: [],
    page: 1,
    loading: false,
  };

  loadRepositories = () => {
    this.props.getProductListPaginate(this.state.page);
    console.tron.log(this.state.page);

    this.setState(state => {
      return {page: state.page + 1};
    });
  };

  installment = item => {
    const installment = item.BestInstallment
      ? `${item.BestInstallment.Count} x R$ ${item.BestInstallment.Value}`
      : 'Sem parcelamento';

    return installment;
  };

  render() {
    const {pullRefresh, products} = this.props;

    return (
      <View>
        <FlatList
          data={products}
          renderItem={({item, index, separators}) => (
            <View key={item.Id} styles={styles.card}>
              <Image
                source={{
                  uri: item.Images[0].ImageUrl,
                }}
                style={{width: 80, height: 80}}
              />
              {/* <Text>{item.Name}</Text> */}
              <Text>
                {item.Sellers[0].ListPrice
                  ? `R$ ${item.Sellers[0].ListPrice}`
                  : 'Sem preço'}
              </Text>
              <Text>
                {item.Sellers[0].Price
                  ? `R$ ${item.Sellers[0].Price}`
                  : 'Sem preço'}
              </Text>
              <Text>{this.installment(item.Sellers[0])}</Text>
            </View>
          )}
          horizontal={false}
          ListFooterComponent={
            <ActivityIndicator size="large" color="#0000ff" />
          }
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
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
