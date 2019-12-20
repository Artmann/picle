import React, { useLayoutEffect, useState } from 'react';
import mermaid from 'mermaid';

import theme from './themes/default';

interface PreviewProps {
  schema: string;
}

export default function Preview({ schema }: PreviewProps) {
  const [ diagram, setDiagram ] = useState('');

  useLayoutEffect(() => {
    mermaid.initialize({
      theme: undefined
    });

    mermaid.render('diagram', schema, (svg: string) => {
      setDiagram(`<style>${theme}</style>\n${svg}`);
    });
  }, ['schema']);

  return (
    <div className="h-full overflow-scroll flex-1">
      <div dangerouslySetInnerHTML={{__html: diagram}}>
      </div>
    </div>
  );
}
