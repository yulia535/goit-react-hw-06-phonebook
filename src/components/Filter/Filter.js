import React from 'react';
import { connect } from 'react-redux';
import styles from '../Filter/filter.module.css';
import actions from '..//../redux/actions'
import PropTypes from 'prop-types';

const Filter = ({ filter, handleChenge }) => (
  <label>
    Find contacts by name
    <input
      className={styles.inputFilter}
      type="text"
      // name="name"
      value={filter}
      onChange={handleChenge}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />
  </label>
);
Filter.propTypes = {
  filter: PropTypes.string,
    handleChenge: PropTypes.func,
};
 // const { contacts, filter } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    // const filteredList = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );
const mapStateToProps = state => ({
  filter: state.contacts.filter,

});
const mapDispatchToProps = dispatch => ({
  handleChenge: (e) => dispatch(actions.chengeFilter(e.currentTarget.value)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
