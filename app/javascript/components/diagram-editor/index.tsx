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
  const divider = <div className="border-r border-gray-300 w-1 h-full mx-8"></div>

  return (
    <div className="h-screen flex flex-col">
      <div className="mb-4 py-4 flex justify-between items-center">

        <h1 className="uppercase tracking-wide text-gray-700 cursor-pointer hover:underline block">
          Untitled
        </h1>

        <div>

        </div>

      </div>
      <div className="flex flex-1 overflow-hidden">
        { showEditor && editor }

        { editorMode === EditorMode.Split && divider }

        { showPreview && preview }
      </div>
    </div>
  );
}
