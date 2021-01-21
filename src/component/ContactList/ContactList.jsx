import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";


const ContactList = ({ contacts, filter, deleteContactById }) => {
  return (
    <>
      <ul>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              deleteContactById={deleteContactById}
            />
          ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
};


