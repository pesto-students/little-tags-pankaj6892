export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    if (serializedState !== null)
      localStorage.setItem('state', serializedState);
  } catch {
    return null;
    // ignore write errors
  }
};
