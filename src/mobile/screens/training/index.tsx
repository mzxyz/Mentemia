import { connect } from 'react-redux';
import actionTypes from '../../../actionTypes';
import TrainingPage from './trainingPage';

const mapStateToProps = ({ 
  training: { projects } 
}) => ({
  projects
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.training.requested }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingPage);

