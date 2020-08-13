import * as React from 'react';

function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 17a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 18V7h14v11a1 1 0 01-1 1H6a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconCalendar = React.memo(IconCalendar);
export default MemoIconCalendar;
