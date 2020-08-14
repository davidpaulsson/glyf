import * as React from 'react';

function IconGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 7h2v2H7V7zM11 7h2v2h-2V7zM17 7h-2v2h2V7zM7 11h2v2H7v-2zM13 11h-2v2h2v-2zM15 11h2v2h-2v-2zM9 15H7v2h2v-2zM11 15h2v2h-2v-2zM17 15h-2v2h2v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconGrid = React.memo(IconGrid);
export default MemoIconGrid;
