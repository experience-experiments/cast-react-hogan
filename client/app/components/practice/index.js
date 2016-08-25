import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as PracticeActions from '../../../app/actions/practice'

class Practice extends React.Component {
  componentWillMount () {
    const { practice, dispatch, id } = this.props

    dispatch(PracticeActions.getPractice(id))
  }

  render () {
    const { practice } = this.props

    return (
      <div className='container' />
    )
  }
}

Practice.needs = [
  (id) => PracticeActions.getPractice(id)
]

export default connect(
  (state) => ({
    practice: state.practice
  })
)(Practice)
