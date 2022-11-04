import { Domain } from 'domain'
import { useRef } from 'react'
import styled from 'styled-components'

interface Props {
  send: (msg: string) => void
}

const Container = styled.div`
width: 95%;
display: block;
margin: auto;
`

const Input = styled.input`
padding: 10px;
margin: 0;
font-size: 16px;
border: none;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.1);
width: 98%;
box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
`

const ChatInput = ({ send } : Props) => {
  const inputEl = useRef<HTMLInputElement>(null)

  const submit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputEl.current && inputEl.current.value !== "") {
      send(inputEl.current.value)
      inputEl.current.value = ""
    }
  }

  return (<Container>
    <Input type="text" ref={inputEl} onKeyDown={submit}/>
  </Container>)
}

export default ChatInput