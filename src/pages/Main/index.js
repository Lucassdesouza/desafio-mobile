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
import Loading from '~/components/Products/placeholder';
import {IconButton, Colors} from 'react-native-paper';

import {getProductList} from '~/store/ducks/list';
import {getCategoriestList} from '~/store/ducks/categories';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Text} from 'react-native-paper';

class Main extends Component {
  static navigationOptions = navigation => ({
    title: 'Details',
    // headerLeft: () => {
    //   return (
    //     <IconButton
    //       onPress={() => navigation.navigate('Menu')}
    //       color="#000"
    //       icon="menu"
    //       size={28}
    //     />
    //   );
    // },
  });

  componentDidMount() {
    this.props.getProductList();
    this.props.getCategoriestList();
  }

  _reload = () => {
    this.props.getProductList();
    this.props.getCategoriestList();
  };

  render() {
    const {toggleList, reloadButton} = this.props;
    return (
      <View styles={styles.container}>
        {toggleList ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Products></Products>
        )}
        {reloadButton ? (
          <View styles={styles.reload}>
            <Button title="Recarregar" onPress={() => this._reload()} />
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reload: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  products: state.list.list,
  categories: state.categories.categories,
  reloadButton: state.list.reloadButton,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProductList, getCategoriestList}, dispatch);

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
