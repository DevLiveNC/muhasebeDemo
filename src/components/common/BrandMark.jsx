import React from 'react';
import { useApp } from '../../context/AppContext';
import { cn } from '../../utils/cn';

const SIZE = {
  sm: 'w-6 h-6 text-[9px] rounded-md',
  md: 'w-9 h-9 text-[13px] rounded-lg',
  lg: 'w-10 h-10 text-sm rounded-lg'
};

export default function BrandMark({ size = 'md', tone = 'pine', className }) {
  const { firmInfo } = useApp();

  return (
    <div
      className={cn(
        'font-serif font-bold flex items-center justify-center shrink-0 tracking-tight',
        SIZE[size] || SIZE.md,
        tone === 'inverse'
          ? 'bg-white text-pine-900'
          : 'bg-pine-700 text-white',
        className
      )}
      aria-hidden="true"
    >
      {firmInfo.mark}
    </div>
  );
}
