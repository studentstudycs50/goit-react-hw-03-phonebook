import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact, deleteContactById }) => {
  return (
    <>
      <li key={contact.id}>
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
        <button
          type="button"
          data-id={contact.id}
          onClick={deleteContactById}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.object,
  deleteContactById: PropTypes.func,
};