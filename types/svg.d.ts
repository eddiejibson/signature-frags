declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export { ReactComponent };
  export default string; // For default SVG imports as URL strings
}
