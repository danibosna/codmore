import { useState } from 'react';

const useAlert = (options: { active: boolean; message: string; type: string; autoClose: boolean }) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });
  const toggleAlert = (): void => {
    setAlert({
      ...alert,
      active: !alert.active,
    });
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
