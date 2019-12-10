import React, {Component} from 'react';

import {StyleSheet, View} from 'react-native';

import {Text, Snackbar} from 'react-native-paper';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {snackbarDismiss as dismiss} from '~/store/ducks/snackbar';

class SnackBarRedux extends Component {
  render() {
    const {
      options: {style = null},
      showed = false,
      text,
    } = this.props.snackbar;
    const {dismiss} = this.props;

    if (!style) {
      return (
        <Snackbar visible={showed} onDismiss={dismiss} duration={2000}>
          <Text style={styles.text}>{text}</Text>
        </Snackbar>
      );
    }

    return (
      <Snackbar
        style={styles[style]}
        visible={showed}
        duration={2000}
        onDismiss={dismiss}>
        <Text style={styles[`${style}Text`]}>{text}</Text>
      </Snackbar>
    );
  }
}

const mapStateToProps = state => ({snackbar: state.snackbar});

const mapDispatchToProps = dispatch => bindActionCreators({dismiss}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SnackBarRedux);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  warnText: {
    color: '#fff',
  },
  warn: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  dangerText: {
    fontSize: 14,
    color: '#FFF',
  },
  danger: {
    backgroundColor: 'red',
    //marginHorizontal: 20,
    //marginBottom: 20,
  },
});
