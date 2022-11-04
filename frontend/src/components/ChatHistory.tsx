import { Chat } from "../App"
import styled from 'styled-components'

type Props = {
  history: Chat[];
}

const S = styled.div`
background-color: #f7f7f7;
margin: 0;
padding: 20px;
`

const Header = styled.h2`
margin: 0;
padding: 0;
`

const ChatHistory = ({ history }: Props) => {
  const messages = history.map((msg, idx) => {
    return <p key={idx}>{msg.message}</p>
  })

  return (
    <S>
      <Header>Chat History</Header>
      {messages}
    </S>
  )
}

export default ChatHistory;