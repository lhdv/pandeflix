import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valoresForm, setValoresForm] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValoresForm({
      ...valoresForm,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValor(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValoresForm(valoresIniciais);
  }

  return {
    valoresForm,
    handleChange,
    clearForm,
  };
}

export default useForm;
