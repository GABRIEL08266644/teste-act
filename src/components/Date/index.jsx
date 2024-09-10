import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import './Date.css'

export const MyCustomDatePicker = () => {
  const [dataInicio, setDataInicio] = useState(null);

  return (
    <div>
      <DatePicker
        selected={dataInicio}
        onChange={(date) => setDataInicio(date)}
        dateFormat="dd MMMM, yyyy"
        className="custom-datepicker"
        placeholderText="Selecione uma data"
      />
    </div>
  );
};

