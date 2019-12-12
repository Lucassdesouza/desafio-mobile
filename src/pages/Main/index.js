import React, {Component} from 'react';
import {
  View,
  BackHandler,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';

import Products from '~/components/Products';
import {IconButton, Appbar, Colors, TextInput} from 'react-native-paper';

import {getProductList, getProductsBySearch} from '~/store/ducks/list';
import {getCategoriestList} from '~/store/ducks/categories';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Text} from 'react-native-paper';

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

  componentDidMount() {
    // this.props.getProductList();
    // this.props.getCategoriestList();
  }

  _reload = () => {
    this.props.getProductList();
    this.props.getCategoriestList();
  };

  changeSearch = text => {
    if (text.length > 2) {
      this.props.getProductsBySearch(text);
    }
    if ((text.length = 0)) {
      this.props.getProductList();
    }
  };

  render() {
    const {toggleList, reloadButton} = this.props;
    return (
      <View styles={styles.container}>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.navigate('Categories')}
          />
          <TextInput
            onChangeText={text => this.changeSearch(text)}
            mode={'outlined'}
            dense={true}
          />
        </Appbar.Header>
        {/* <IconButton
          onPress={() => this.props.navigation.navigate('Categories')}
          color="#000"
          icon="menu"
          size={28}
        /> */}
        {toggleList && reloadButton ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <View styles={styles.reload}>
            <View>
              <Button title="Recarregar" onPress={() => this._reload()} />
            </View>
          </View>
        )}
        {!toggleList ? <Products /> : <></>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  reload: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center',
    width: wp('40%'),
    marginTop: hp('30%'),
  },
  input: {
    width: wp('30%'),
  },
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  products: state.list.list,
  categories: state.categories.categories,
  reloadButton: state.list.reloadButton,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {getProductList, getCategoriestList, getProductsBySearch},
    dispatch,
  );

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
