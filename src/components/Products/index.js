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

import {getProductListPaginate} from '~/store/ducks/list';
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

  state = {
    data: [],
    page: 0,
    loading: false,
  };

  loadRepositories = () => {
    this.props.getProductListPaginate(1);
  };

  render() {
    const {products} = this.props;
    return (
      <View>
        <View styles={styles.container}>
          <FlatList
            data={products}
            renderItem={({item, index, separators}) => (
              <View key={item.Id} styles={styles.card}>
                <Image
                  source={{
                    uri: item.Images[0].ImageUrl,
                  }}
                  style={{width: 50, height: 50}}
                />
                <Text>{item.Name}</Text>
                <Text>{item.Sellers[0].ListPrice}</Text>
                <Text>{item.Sellers[0].Price}</Text>
                <Text>
                  {item.Sellers[0].BestInstallment.Count}x
                  {item.Sellers[0].BestInstallment.Value}
                </Text>
              </View>
            )}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.loadRepositories}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    maxWidth: 40,
  },
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  products: state.list.list,
  categories: state.categories.categories,
  loadingNew: state.list.loadingNew,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProductListPaginate}, dispatch);

export default Products = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
