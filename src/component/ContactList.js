import { Button, Form } from "react-bootstrap";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {
  return (
    <div>
      <SearchBox/>
      <ContactItem/>
    </div>
  )
}

export default ContactList
