import { connect } from 'react-redux';
import ExplorePage from './explorePage';
import actionTypes from '../../../actionTypes';

const mapStateToProps = ({ 
  explore: { latest }
}) => ({
  latest,
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () => 
    dispatch({ type: actionTypes.explore.requested }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePage);