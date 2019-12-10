import React, {Component} from 'react';
import {View, BackHandler, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import List from '~/components/List';
import Placeholder from '~/components/List/placeholder';

import {getProductList} from '~/store/ducks/list';

import {Text} from 'react-native-paper';

class Main extends Component {
  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    const {toggleList} = this.props;
    return (
      <View styles={styles.container}>
        {toggleList ? <Placeholder /> : <List></List>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProductList}, dispatch);

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
