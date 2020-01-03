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

import {getProductsBySearch} from '~/store/ducks/list';

class SubCategoriesScreen extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.subCategoriesName,
    });
  }

  button = () => {};

  render() {
    const {subCategories, toggleSubCategories} = this.props;
    return (
      <View>
        {toggleSubCategories ? (
          <MenuList list={subCategories} treeLevel={2} />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  subCategories: state.categories.subCategories,
  toggleSubCategories: state.categories.toggleSubCategories,
  subCategoriesName: state.categories.subCategoriesName,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default SubCategoriesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategoriesScreen);
