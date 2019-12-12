import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {subcategoriesList} from '~/store/ducks/categories';

import {List} from 'react-native-paper';

class CategoriesScreen extends Component {
  componentDidMount() {}

  loadCategoriesList = (list, name) => {
    this.props.subcategoriesList(list, name);
  };

  render() {
    const {toggleList, categories} = this.props;
    return (
      <View>
        {toggleList ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <List.Section>
            {categories.Categories.map(item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.loadCategoriesList(item.SubCategories, item.Name)
                  }>
                  <List.Item title={item.Name} />
                </TouchableOpacity>
              );
            })}
          </List.Section>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({subcategoriesList}, dispatch);

export default CategoriesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesScreen);
