import React, {Component} from 'react';
import {BackHandler} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Text} from 'react-native-paper';

class Main extends Component {
  render() {
    const {} = this.props;
    return (
      <>
        <Text>Teste</Text>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
