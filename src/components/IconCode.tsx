import * as React from 'react';

function IconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.953 16.912l-1.36 1.449-6.562-6.16L8.19 5.64l1.458 1.369-4.79 5.104 5.094 4.781v.02zM14.047 16.912l1.36 1.449 6.562-6.16L15.81 5.64l-1.458 1.369 4.79 5.104-5.094 4.781v.02z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconCode = React.memo(IconCode);
export default MemoIconCode;
