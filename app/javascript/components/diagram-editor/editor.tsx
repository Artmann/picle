import ContentEditable from './content-editable';
import React, { RefObject, useRef } from 'react';

interface EditorProps {
  schema: string;
  onChange: (value: string) => void;
}

export default function Editor({ schema, onChange }: EditorProps) {
  const editorRef = useRef<HTMLElement>();

  const changeHandler = (event: any) => {
    onChange(event.target.value);
  };

  const lineCount = schema.split(/\r*\n/).length;
  const lineNumbers = Array(lineCount)
    .fill(null)
    .map((item, index) => index + 1)
    .join('\n');

  return (
    <div className="flex h-full leading-loose font-mono overflow-x-scroll text-sm bg-gray-200">
      <div className="h-full whitespace-pre-wrap px-2 py-2 text-gray-600">
        { lineNumbers }
      </div>
      <ContentEditable
        className="block h-full px-4 py-2 whitespace-pre-wrap outline-none bg-white"
        contentEditable={ true }
        html={ schema }
        innerRef={ editorRef as RefObject<HTMLElement> }
        onChange= { changeHandler }
        />
    </div>
  );
}
