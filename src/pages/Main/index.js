import React, {Component} from 'react';
import {View, StyleSheet, Button, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Products from '~/components/ProductsList';
import {Appbar, Coors, TextInput} from 'react-native-paper';

import {getProductList, getProductsBySearch} from '~/store/ducks/list';
import {getCategoriestList} from '~/store/ducks/categories';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Main extends Component {
  static navigationOptions = navigation => ({
    header: null,
  });

  state = {
    text: 'Buscar',
    page: 1,
    loading: false,
  };

  onChangeText = () => {};

  _reload = () => {
    this.props.getProductList();
  };

  changeSearch = text => {
    if (text.length > 2) {
      this.props.getProductsBySearch(text);
    }
  };

  _content = teste => {
    if (teste) {
      return (
        <View style={styles.reload}>
          <View>
            <Button
              color="#E81C0D"
              title="Recarregar"
              onPress={() => this._reload()}
            />
          </View>
        </View>
      );
    } else {
      return <Products />;
    }
  };

  render() {
    const {toggleList, reloadButton, loadFail} = this.props;
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.navbar}>
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.navigate('Categories')}
            style={{flex: 1}}
          />
          <TextInput
            onChangeText={text => this.changeSearch(text)}
            onBlur={() => this._reload()}
            placeholder="Buscar"
            placeholderTextColor={'#fff'}
            mode={'flat'}
            dense={true}
            style={styles.input}
          />
        </Appbar.Header>
        {toggleList ? (
          <View style={styles.load}>
            <ActivityIndicator size="large" color="#E81C0D" />
          </View>
        ) : (
          this._content(loadFail)
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#E0E0E0',
  },
  reload: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('40%'),
  },
  load: {
    justifyContent: 'center',
  },
  input: {
    flex: 6,
    width: wp('30%'),
    borderRadius: 10,
    backgroundColor: '#E81C0D',
  },
  navbar: {
    backgroundColor: '#E81C0D',
  },
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  products: state.list.list,
  categories: state.categories.categories,
  loadFail: state.list.loadFail,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {getProductList, getCategoriestList, getProductsBySearch},
    dispatch,
  );

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
