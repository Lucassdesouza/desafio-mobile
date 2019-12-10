import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class List extends Component {
  componentDidMount() {}

  render() {
    const {list} = this.props;
    return (
      <View>
        <Text>Teste</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default List = connect(mapStateToProps, mapDispatchToProps)(List);
