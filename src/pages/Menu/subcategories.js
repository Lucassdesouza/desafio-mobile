import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List} from 'react-native-paper';

import {getProductsByCategories} from '~/store/ducks/list';

class SubCategoriesScreen extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.subCategoriesName,
    });
  }

  button = () => {
    console.tron.log(this.props.subCategories);
  };

  render() {
    const {subCategories, toggleSubCategories} = this.props;
    return (
      <View>
        {toggleSubCategories ? (
          <List.Section>
            {subCategories.map(item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.getProductsByCategories(
                      item.Redirect.SearchCriteria.ApiQuery,
                    )
                  }>
                  <List.Item title={item.Name} />
                </TouchableOpacity>
              );
            })}
          </List.Section>
        ) : (
          // <Button title="Botao" onPress={() => this.button()}></Button>
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  toggleList: state.list.toggleList,
  subCategories: state.categories.subCategories,
  toggleSubCategories: state.categories.toggleSubCategories,
  subCategoriesName: state.categories.subCategoriesName,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getProductsByCategories}, dispatch);

export default SubCategoriesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategoriesScreen);
