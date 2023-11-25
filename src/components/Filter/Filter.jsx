import { FilterText, FilterForm, FilterTitle } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';
const Filter = ({ handleFilter, filter }) => {
  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <FilterForm>
        <FilterText>Find contacts by name</FilterText>
        <Input
          type="text"
          onChange={handleFilter}
          value={filter}
          placeholder="Search contacts..."
        ></Input>
      </FilterForm>
    </>
  );
};
export default Filter;
