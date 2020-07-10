import { useState, useCallback } from "react";

export default (initialState, [on, off] = [true, false]) => {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => {
    setState(s => (s === on ? off : on));
  }, [on, off]);
  return [state, toggleState, setState];
};
