import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const nameInputChange = target.name;
    const valueInputChange = target.value;

    setFormValues({
      ...formValues,
      [nameInputChange]: valueInputChange,
    });
  };

  const resetForm = () => setFormValues(initialState);

  return { formValues, setFormValues, handleInputChange, resetForm };
};
