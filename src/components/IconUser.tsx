import * as React from 'react';

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
      <path
        d="M16 15a1 1 0 00-1-1H9a1 1 0 00-1 1v6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-2v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoIconUser = React.memo(IconUser);
export default MemoIconUser;
