import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Table>
      <TabletHead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </TabletHead>
      <TableBody>
        {contacts.map(({ id, name, number }) => {
          return (
            <ItemRow key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button type="button" onClick={() => onDelete(id)}>
                  Delete
                </button>
              </td>
            </ItemRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
