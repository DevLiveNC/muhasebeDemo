import React from 'react';

/**
 * Dotted glossary term. Official names (KDV, SGK, e-Fatura) stay visible;
 * the meaning rides on the native title for hover, long-press, and screen readers.
 */
export default function Term({ children, meaning }) {
  return (
    <abbr className="term no-underline" title={meaning}>
      {children}
    </abbr>
  );
}
