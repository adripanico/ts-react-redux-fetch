import { RefObject, useEffect } from 'react';

import { targetAsNode } from 'utils/assertIsNode';

/**
 * Perform an action when the user clicks outside of received elements.
 * @param refs The list of RefObject for each element that will NOT trigger the action.
 * @param action The action to be triggered on click outside of any of the given refs.
 */
export function useActionOnClickOutside(refs: RefObject<HTMLDivElement>[], action: () => void) {
  useEffect(() => {
    const onClickListener = (e: MouseEvent) => {
      if (!refs.some((ref) => ref.current?.contains(targetAsNode(e.target)))) {
        action();
      }
    };

    document.addEventListener('click', onClickListener);
    return () => document.removeEventListener('click', onClickListener);
  }, [action, refs]);
}
