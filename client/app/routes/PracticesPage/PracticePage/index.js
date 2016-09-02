import React from 'react'
import { connect } from 'react-redux'

import Practice from '../../../components/practices/practice'
import Navigation from '../../../components/navigation'

import * as PracticeActions from '../../../../app/actions/practices/practice'

class PracticePage extends React.Component {
  hasPractice () {
    const { practice, params } = this.props

    return (practice._id === params.practice)
  }

  componentDidMount () {
    if (!this.hasPractice()) {
      const { dispatch, params } = this.props

      dispatch(PracticeActions.getPractice(params.practice))
    }
  }

  getPractice () {
    if (!this.hasPractice()) {
      return (
        <p>No results.</p>
      )
    }

    const { practice } = this.props

    return (
      <Practice practice={practice} />
    )
  }

  render () {
    return (
      <section>
        <header>
          <h1>Practice</h1>
        </header>
        {this.getPractice()}
        <Navigation />
      </section>
    )
  }
}

PracticePage.propTypes = {
  practice: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired
}

PracticePage.defaultProps = {
  practice: {},
  dispatch: () => false,
  params: {}
}

PracticePage.needs = [
  ({ practice }) => PracticeActions.getPractice(practice)
]

export default connect(
  (state) => ({
    practice: state.practice
  })
)(PracticePage)
