import { useEffect } from 'react';

const useClickAway = (element: HTMLElement, callback: (e: Event) => void) => {

  useEffect(() => {
    document.addEventListener('click', handleClickCheck);
    return () => document.removeEventListener('click', handleClickCheck);
  }, [element]);

  const handleClickCheck = e => {
    !element?.contains(e.target) && callback(e);
  };
};

export default useClickAway;
