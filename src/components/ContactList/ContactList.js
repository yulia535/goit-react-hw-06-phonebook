import React from 'react';
import { connect } from 'react-redux';
import actions from '..//../redux/actions';
import styles from '../ContactList/contactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeteteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contactListItem} key={id}>
        <span>
          {name}:{number}
        </span>

        <button
          className={styles.deleteButton}
          onClick={() => onDeteteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeteteContact: PropTypes.func,
};

const gatFilteredList = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
  ); 
}

const mapStateToProps = state => {
  const {items, filter } = state.contacts;
const filteredList = gatFilteredList(items, filter)
  return {
    contacts: filteredList,
} 
};
const mapDispatchToProps = dispatch => ({
  onDeteteContact: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
