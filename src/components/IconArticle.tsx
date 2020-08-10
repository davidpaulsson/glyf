import * as React from 'react';

function IconArticle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 6a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 13a1 1 0 100 2h10a1 1 0 100-2H7zM6 18a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a3 3 0 013-3h14a3 3 0 013 3v16a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm3-1h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconArticle = React.memo(IconArticle);
export default MemoIconArticle;
