import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorConfiguration = {
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
    'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
    'undo', 'redo'
  ],
  removePlugins: ['BalloonToolbar', 'BalloonBlockEditor'],
  height: 'auto', // Ensure the editor adjusts height automatically
};

const InputCKEditor = () => {
  const [editorData, setEditorData] = useState('');

  return (
    <div className="app rounded-md editor-container">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
};

export default InputCKEditor;
