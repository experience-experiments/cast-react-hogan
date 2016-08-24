import React from 'react'
import { connect } from 'react-redux'

import {
  Editor,
  EditorState,
  RichUtils,
  // convertFromRaw,
  convertToRaw
} from 'draft-js'

import * as ProfileEditorActions from '../../../app/actions/profile-editor'

// import { stateToHTML } from 'draft-js-export-html'
// import { stateToMarkdown } from 'draft-js-export-markdown'

export default class ProfileEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => this.setState({ editorState })

  focus = () => this.refs.profileEditor.focus()

  handleKeyCommand = (keyCommand) => {
    const { editorState } = this.state
    const keyCommandState = RichUtils.handleKeyCommand(editorState, keyCommand)
    if (keyCommandState) this.setState({ editorState: keyCommandState })
  }

  toggleInlineStyle (inlineStyle) { // console.log('toggleInlineStyle()', inlineStyle)
    const { editorState } = this.state
    const toggleState = RichUtils.toggleInlineStyle(editorState, inlineStyle)
    if (toggleState) this.setState({ editorState: toggleState })
  }

  toggleBlockType (blockType) { // console.log('toggleBlockType()', blockType)
    const { editorState } = this.state
    const toggleState = RichUtils.toggleBlockType(editorState, blockType)
    if (toggleState) this.setState({ editorState: toggleState })
  }

  toggleB = () => this.toggleInlineStyle('BOLD')
  toggleI = () => this.toggleInlineStyle('ITALIC')
  toggleUL = () => this.toggleBlockType('unordered-list-item')
  toggleOL = () => this.toggleBlockType('ordered-list-item')

  handleSaveProfileClick = () => {
    const { editorState } = this.state
    ProfileEditorActions.patchProfile('1KowuWwlVsp9qArb', convertToRaw(editorState.getCurrentContent()))
  }

  render () {
    const { editorState } = this.state

    return (
      <div className='container'>
        <button onClick={this.toggleB}>B</button>
        <button onClick={this.toggleI}>I</button>
        <button onClick={this.toggleUL}>UL</button>
        <button onClick={this.toggleOL}>OL</button>
        <button onClick={this.handleSaveProfileClick}>Save Profile</button>
        <div className='profileEditor'>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            spellCheck={true}
            ref='profileEditor'
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    profile: state.profile
  })
)(ProfileEditor)
