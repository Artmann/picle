import React, { useState } from 'react';
import Editor from './editor';
import Preview from './preview';

interface DiagramEditorProps {
  schema: string;
}

enum EditorMode {
  Edit,
  View,
  Split
}

export default function DiagramEditor(props: DiagramEditorProps) {
  const [ schema, setSchema ] = useState(props.schema);
  const [ editorMode ] = useState(EditorMode.Split);

  const schemaChangeHandler = (value: string) => {
    setSchema(value);
  };

  const showEditor = [EditorMode.Edit, EditorMode.Split].includes(editorMode);
  const showPreview = [EditorMode.View, EditorMode.Split].includes(editorMode);

  const editor = <Editor schema={ schema } onChange={ schemaChangeHandler } />
  const preview = <Preview schema={ schema } />

  return (
    <div>
      { showEditor && editor }

      { showPreview && preview }
    </div>
  );
}
