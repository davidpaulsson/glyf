import * as React from 'react';

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243 7.07-7.071-1.413-1.415-5.657 5.657z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconCheck = React.memo(IconCheck);
export default MemoIconCheck;
