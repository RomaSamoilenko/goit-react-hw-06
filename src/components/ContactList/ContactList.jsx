import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

export default function ContactList() {
  const allContacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFilters);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <div className={styles.listBox}>
      <ul className={styles.listElement}>
        {filteredContacts.map((person) => (
          <li className={styles.listItem} key={person.id}>
            <Contact contact={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}