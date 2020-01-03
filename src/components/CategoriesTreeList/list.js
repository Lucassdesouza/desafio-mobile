import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {subcategoriesList} from '~/store/ducks/categories';
import {getProductsBySearch} from '~/store/ducks/list';

class CategoriesTreeList extends Component {
  onClickCategorie = () => {};

  render() {
    const {list, treeLevel} = this.props;
    return (
      <List.Section>
        {list.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                treeLevel === 1
                  ? this.props.subcategoriesList(item.SubCategories, item.Name)
                  : this.props.getProductsBySearch(
                      item.Redirect.SearchCriteria.ApiQuery,
                    );
              }}>
              <List.Item title={item.Name} />
            </TouchableOpacity>
          );
        })}
      </List.Section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({subcategoriesList, getProductsBySearch}, dispatch);

export default CategoriesTreeList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesTreeList);
