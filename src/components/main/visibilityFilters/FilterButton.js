import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../../actions/visibilityActions'
import Button from '../visibilityFilters/Button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibility[ownProps.name]
})


const mapDispatchToProps = (dispatch, ownProps) => (
  {
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter, ownProps.name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)