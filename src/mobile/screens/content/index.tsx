import { connect } from 'react-redux';
import actionTypes from '../../../actionTypes';
import contentDetailsPage from './contentDetailsPage';

const mapStateToProps = ({ 
  content
}) => ({
  ...content,
  relatedTopics: content.related_topics,
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () =>
    dispatch({ type: actionTypes.content.requested }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(contentDetailsPage);
