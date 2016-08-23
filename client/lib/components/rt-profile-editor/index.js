import React from 'react'

import RichTextEditor from 'react-rte'

export default class RTProfileEditor extends React.Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  }

  static propTypes = {
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    onChange: () => { /* */ }
  }

  onChange = (value) => {
    this.setState({ value })
    this.props.onChange(value)
  }

  render () {
    const { value } = this.state

    return (
      <RichTextEditor
        value={value}
        onChange={this.onChange}
      />
    )
  }
}
