import { connect } from 'react-redux';
import ItemForm from './item_form';
import { createItem } from '../../actions/item_actions';


const mapStateToProps = ( state, ownProps ) => {
  return {
    todoId: ownProps.todoId,
  };
};
 // teamId: ownProps.match.params.teamId,


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (item) => dispatch(createItem( item )),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemForm);
