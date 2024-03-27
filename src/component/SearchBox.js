import { Button, Form, Row, Col } from "react-bootstrap";
import {useState} from "react"
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("")
  let dispatch = useDispatch()
  let { contactList } = useSelector(state => state)
  const searchByName = (event)=> {
    event.preventDefault()
    let payload = contactList.filter(contact=>contact.name.includes(keyword))
    console.log("payload==",payload)
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } })
  }
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col lg={10}>
          <Form.Control type="text"
                        placeholder="이름을 입력해주세요"
                        onChange={(event)=> setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
