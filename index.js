const Subscript = require('@bobrovice/subscript');
const EditorJS = require('@editorjs/editorjs');

const editor = new EditorJS({
    autofocus: true,
    tools: {
      subscript: {
          class: Subscript
      }
    }
  });

  document.getElementById('save-button').onclick = () => {
      editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
      }).catch((error) => {
      console.log('Saving failed: ', error)
      });
  };