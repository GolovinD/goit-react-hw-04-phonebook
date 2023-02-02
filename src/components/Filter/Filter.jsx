import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css'

const Filter = ({ filterData, onFilter }) => {

     return (
        <div>
            <label
                className={css.label}
            >
                <span
                    className={css.labelName}
                >Find contacts by name</span>
                
                <input
                    className={css.input}
                    type="text"
                    value={filterData}
                    onChange={onFilter}
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required                        
                />
            </label>
        </div>
    )
}

export default Filter;

Filter.protoTypes = {
    filterData: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}