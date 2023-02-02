import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    // console.log(id);
    return (
        <li
            className={css.contact}
            id={id}>
        <p>
            {name}: <span>{number}</span>
        </p>
            <button
                type="button"
                onClick={() => onDeleteContact(id)}
                >Delete
            </button>
    </li>  
    )
}

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};