import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"

const ContactList = () => {
    console.log("컴포넌트 시작")
  const { contactList, keyword } = useSelector(state => state)
  let [ filteredList, setFilteredList ] = useState([])
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword))
      setFilteredList(list)
    } else {
      setFilteredList(contactList)
    }
    console.log("UseEffect 내부")
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox/>
      <div className="contact-list">
           num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ContactList
