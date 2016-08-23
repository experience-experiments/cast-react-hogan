import React from 'react'

import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js'

export default class ProfileEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const keyCommandState = RichUtils.handleKeyCommand(editorState, command)
    if (keyCommandState) this.setState({ editorState: keyCommandState })
  }

  onChange = (editorState) => this.setState({ editorState })

  render () {
    const { editorState } = this.state

    return (
      <Editor
        editorState={editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
        spellCheck={true}
      />
    )
  }
}
