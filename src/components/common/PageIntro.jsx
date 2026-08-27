import React from 'react';

/** Panel page heading: short h1 + one-sentence lead. */
export default function PageIntro({ title, lead, kicker }) {
  return (
    <div>
      {kicker && <p className="mlabel mb-1">{kicker}</p>}
      <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </div>
  );
}
