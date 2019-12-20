import React, { useLayoutEffect, useState } from 'react';
import mermaid from 'mermaid';

interface PreviewProps {
  schema: string;
}

export default function Preview({ schema }: PreviewProps) {
  const [ diagram, setDiagram ] = useState('');

  useLayoutEffect(() => {
    mermaid.initialize({});

    mermaid.render('diagram', schema, (svg: string) => {
      setDiagram(svg);
    });
  }, ['schema']);

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: diagram}}>
      </div>
    </div>
  );
}
