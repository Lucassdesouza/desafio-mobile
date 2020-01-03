import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getProductList, getProductListPaginate} from '~/store/ducks/list';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Products extends Component {
  state = {
    item: [],
    show: false,
    page: 1,
    loading: false,
    modalVisible: false,
  };

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

  loadRepositories = () => {
    this.props.getProductListPaginate(this.state.page);

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

  renderModal = () => (
    <Portal>
      <Modal
        visible={this.state.show}
        onDismiss={() => this.setState({show: false})}>
        <View>
          <View
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              backgroundColor: '#eee',
              width: 300,
              height: 300,
            }}>
            <Text>Hello World!</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  );

  render() {
    const {pullRefresh, products} = this.props;

    return (
      <View>
        {this.renderModal()}
        <FlatList
          contentContainerStyle={styles.container}
          data={products}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity
              onLongPress={() => {
                this.setState({show: true});
              }}>
              <View key={item.Id} style={styles.card}>
                <Image
                  source={{
                    uri: item.Images[0].ImageUrl,
                  }}
                  style={styles.img}
                />
                <Text style={styles.name}>{item.Name.substring(0, 30)}</Text>
                <View style={styles.content}>
                  {item.Sellers[0].ListPrice === item.Sellers[0].Price ? (
                    <></>
                  ) : (
                    <Text style={styles.oldPrice}>
                      {item.Sellers[0].ListPrice
                        ? `R$ ${item.Sellers[0].ListPrice}`
                        : 'Sem preço'}
                    </Text>
                  )}
                  <Text style={styles.price}>
                    {item.Sellers[0].Price
                      ? `R$ ${item.Sellers[0].Price}`
                      : 'Sem preço'}
                  </Text>
                  <Text style={styles.installment}>
                    {this.installment(item.Sellers[0])}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          refreshing={this.props.toggleList}
          onRefresh={this._reload}
          horizontal={false}
          numColumns={2}
          onEndReached={this.loadRepositories}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('6%'),
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: wp('40%'),
    height: hp('40%'),
    marginHorizontal: wp('2%'),
    marginVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    borderRadius: 5,
  },
  img: {
    flex: 1,
    maxHeight: hp('30%'),
    resizeMode: 'contain',
  },
  name: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    alignContent: 'center',
  },
  listContainer: {
    flex: 1,
  },
  oldPrice: {
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E81C0D',
  },
  installment: {
    textAlign: 'center',
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
