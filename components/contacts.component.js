import { getContacts } from '../data/contacts.data';

const Contacts = () => (
    getContacts().map((value,index) => 
    <li key={index}>
        <span>{value.name}</span>
        <a 
            className="right-align-links" 
            {...(value.target ? {target: '_blank'} : {})}
            href={value.href}>
                {value.description}
        </a>
    </li>
    )
);

export default Contacts;
