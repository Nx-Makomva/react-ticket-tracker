import { FormEventHandler } from 'react'


type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>
}

const SearchBox = ({label, searchTerm, handleInput}: SearchBoxProps) => {
  
  return (
    <div>
      <label htmlFor={label}>{label} </label>
      <input type="text" 
      id={label}
      name={label}
      value={searchTerm}
      onInput={handleInput}
      />
    </div>
  )
}

export default SearchBox
