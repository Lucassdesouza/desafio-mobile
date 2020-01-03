import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';
import {List} from 'react-native-paper';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MenuList from '~/components/CategoriesTreeList/list';

class CategoriesScreen extends Component {
  componentDidMount() {}

  render() {
    const {toggleList, categories} = this.props;
    return (
      <View>
        {toggleList ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <MenuList list={categories.Categories} treeLevel={1} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default CategoriesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesScreen);
