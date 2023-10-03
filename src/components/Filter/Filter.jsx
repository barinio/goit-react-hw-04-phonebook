import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChangeFilter} value={filter} />
    </Label>
  );
};
