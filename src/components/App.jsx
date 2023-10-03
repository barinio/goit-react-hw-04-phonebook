import { useEffect, useState } from 'react';

import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Notification } from './Notification/Notification';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = (values, { resetForm }) => {
    resetForm();

    const duplicateContactName = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (duplicateContactName) {
      alert(`${duplicateContactName.name} is already in contacts`);
    } else {
      addNewContact(values);
    }
  };

  const addNewContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(state => [...state, newContact]);
  };

  const onChangeFilter = ({ target }) => setFilter(target.value.toLowerCase());

  const filteredList = () =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter)) ||
    contacts;

  const onDelete = id => setContacts(contacts.filter(item => item.id !== id));

  return (
    <>
      <Section title={'Phonebook'}>
        <FormContacts onSubmitForm={onSubmitForm} />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length ? (
          <>
            <Filter filter={filter} onChangeFilter={onChangeFilter} />
            <ContactsList contacts={filteredList()} onDelete={onDelete} />
          </>
        ) : (
          <Notification message={'There is no contacts!'} />
        )}
      </Section>
    </>
  );
};
