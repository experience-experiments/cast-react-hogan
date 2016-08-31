import React from 'react'

import {
  EditorState,
  ContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js'

import {
  Bold,
  Italic,
  Code,
  Underline,
  BlockQuote,
  CodeBlock,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive,
  HeaderSix,
  OrderedList,
  UnorderedList,
  DraftEditor
} from 'react-draft-editor'

// import { stateToHTML } from 'draft-js-export-html'
// import { stateToMarkdown } from 'draft-js-export-markdown'

export class ProfileEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(ContentState.createFromText(this.props.profile.summary || ''))
  }

  onChange = (editorState) => this.setState({ editorState })

  handleSaveProfileClick = () => {
    const { onSaveProfile } = this.props
    onSaveProfile({})
  }

  render () {
    const { editorState } = this.state

    return (
      <div className='container'>

        <Bold
          onChange={this.onChange}
          editorState={editorState}
        />
        <Italic
          onChange={this.onChange}
          editorState={editorState}
        />
        <Code
          onChange={this.onChange}
          editorState={editorState}
        />
        <Underline
          onChange={this.onChange}
          editorState={editorState}
        />

        <BlockQuote
          onChange={this.onChange}
          editorState={editorState}
        />
        <CodeBlock
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderOne
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderTwo
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderThree
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderFour
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderFive
          onChange={this.onChange}
          editorState={editorState}
        />
        <HeaderSix
          onChange={this.onChange}
          editorState={editorState}
        />
        <OrderedList
          onChange={this.onChange}
          editorState={editorState}
        />
        <UnorderedList
          onChange={this.onChange}
          editorState={editorState}
        />

        <button
          onMouseDown={this.handleSaveProfileClick}>
            Save Profile
        </button>

        <DraftEditor
          onChange={this.onChange}
          editorState={editorState}
        />

      </div>
    )
  }
}

ProfileEditor.propTypes = {
  onSaveProfile: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object.isRequired
}

ProfileEditor.defaultProps = {
  onSaveProfile: () => false,
  profile: {}
}
