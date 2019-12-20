import React, { FormEvent } from 'react';

interface EditorProps {
  schema: string;
  onChange: (value: string) => void;
}

export default function Editor({ schema, onChange }: EditorProps) {
  const changeHandler = (event: FormEvent<HTMLTextAreaElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div>
      <textarea
        className="w-full md: w-1/2 h-64"
        defaultValue={schema}
        onChange={changeHandler}
        >
      </textarea>
    </div>
  );
}
