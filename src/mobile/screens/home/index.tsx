import { connect } from 'react-redux';
import actionTypes from '../../../actionTypes';
import HomePage from './homePage';

const mapStateToProps = ({ 
  home: { actions, contents }
}) => ({
  actions,
  contents
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.home.requested }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
