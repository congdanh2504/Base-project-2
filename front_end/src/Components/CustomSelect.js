import React, { useState } from 'react';
import Select from 'react-select';

const defaultStyles = {
    width:'200px',
    borderRadius:'15px'

}
const selectTheme = (theme) =>({
    ...theme,
    borderRadius: 15,
    
})
    
const customStyles = {
option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'blue',
    padding: 20,
    borderRadius: 15,
  }),
  control:(provided)=>({
      ...provided,
      padding : 5
  })
}

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];



export default function CustomSelect({label,opts}) {
//   const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div style={defaultStyles}>
      <Select
        styles={customStyles}
        defaultValue=""
        placeholder={label}
        options={opts}
        theme={selectTheme}
      />
    </div>
  );
}