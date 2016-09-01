
const EditorState = require('draft-js').EditorState
const ContentState = require('draft-js').ContentState
const convertToRaw = require('draft-js').convertToRaw
const editorState = EditorState.createEmpty()

const Database = require('nedb');

const profilesDB = new Database({ filename: process.cwd() + '/.db/profiles.db', autoload: true })

  profilesDB.find({}, (e, profiles) => {
    console.log(`Updating ${profiles.length} profiles`);
    profiles.forEach((profile) => {
      const { summary, _id } = profile
      if (summary === null) {
        profilesDB.update({ _id: _id }, { $set: { summary: convertToRaw(editorState.getCurrentContent()) } })
      } else if (typeof summary === 'string') {
        profilesDB.update({ _id: _id }, { $set: { summary: convertToRaw(ContentState.createFromText(summary)) } })
      }
    })
  })
