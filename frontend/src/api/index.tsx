const socket = new WebSocket("ws://localhost:8080/ws")

let connect = (cb: (msg: MessageEvent) => void) => {
  socket.onopen = () => {
    console.log("successfully connected")
  }

  socket.onmessage = msg => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = event => {
    console.log("socket closed connection: ", event)
  }

  socket.onerror = error => {
    console.log("socket error: ", error)
  }
}

let sendMsg = (msg: string) => {
  console.log("sending msg: ", msg)
  socket.send(msg)
}

export {connect, sendMsg}