const express = require("express")
const app = express();
const socket = require("socket.io")
const color = require('colors')
const cors = require("cors")

const { GetCurrentUser, JoinUser, UserDisconnect } = require("./controllers/user");

app.use(express())
const port = 8000
app.use(cors())

var server = app.listen(
    port, () => {
        console.log(`Server is running on the port no:${port}`.yellow)
    }
)

app.get('/test', (req, res) => {
    res.send({ 'result': 'Test is Ok.' })
})

const io = socket(server)
// console.log(io)
//user connected to server
io.on("connection", socket => {
    console.log('Connection is ok==> ', socket)
    //new user is joining the room
    socket.on("JoinRoom", ({ username, roomname }) => {
        //creating new user
        console.log('Join Room ==>', 'username:', username, ', roomname:', roomname)

        const user = JoinUser(socket.io, username, roomname)
        console.log("Id=", socket.id)
        socket.join(user.room)
        //sending message to the user who has joined the a room
        socket.emit("message", {
            userId: user.id,
            username: user.username,
            text: `Welcome ${user.username}`
        });

        //sending message to all usersin a room and says a new user has been joind
        socket.broadcast.to(user.room).emit("message", {
            userId: user.id,
            username: user.username,
            text: `{user.username} has join the chat.`
        });

    })


    //where user sending a message
    socket.on("chat", text => {
        const user = GetCurrentUser(socket.id)
        io.to(user.room).emit("message", {
            userId: user.id,
            username: user.username,
            test: text
        })
    })

    socket.on("disconnect", () => {
        const user = UserDisconnect(socket.id)
        if (user) {
            io.to(user.room).emit("message", {
                userId: user.id,
                username: user.username,
                text: `${user.username} has left the room`
            })
        }
    })

})
