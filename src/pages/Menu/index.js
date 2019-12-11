import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {navigationOptions} from 'react-navigation';

import Products from '~/components/Products';
import Loading from '~/components/Products/placeholder';
import {IconButton, Colors} from 'react-native-paper';

import {List} from 'react-native-paper';

class Menu extends Component {
  componentDidMount() {}

  static navigationOptions = {
    headerTitle: 'Categorias',
  };

  render() {
    const {toggleList, categories} = this.props;
    return (
      <View>
        <List.Section>
          {categories.Categories.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SubCategories')}>
                <List.Item title={item.Name} />
              </TouchableOpacity>
            );
          })}
        </List.Section>
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

export default Menu = connect(mapStateToProps, mapDispatchToProps)(Menu);
