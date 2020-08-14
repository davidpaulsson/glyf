import { useEffect, useState } from 'react';

//alternate hook that accepts a single query
export default function useMedia(
  queries: any[],
  values: boolean[],
  defaultValue: boolean
) {
  // state and setter for matched value
  const [value, setValue] = useState(defaultValue);

  //array containing a media query list for each query
  const mediaQueryLists = queries.map((q: string) => window.matchMedia(q));

  //state update function
  const getValue = () => {
    const index = mediaQueryLists.findIndex(
      (mql: { matches: any }) => mql.matches
    );

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  useEffect(
    () => {
      //set the initial value
      setValue(getValue);

      const handler = () => setValue(getValue);

      mediaQueryLists.forEach(
        (mql: { addListener: (arg0: () => void) => any }) =>
          mql.addListener(handler)
      );

      //remove listeners on cleanup
      return () =>
        mediaQueryLists.forEach(
          (mql: { removeListener: (arg0: () => void) => any }) =>
            mql.removeListener(handler)
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] //empty array ensures effect is only run on mount and unmount
  );

  return value;
}
