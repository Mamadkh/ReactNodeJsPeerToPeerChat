users = [];

function JoinUser(id, username, room){
    let privateuser = {id,username,room}
    users.push(privateuser)
    console.log("users :",users)
    return privateuser;
}
function GetCurrentUser(id){
    return users.find(user => user.id == id )
}
function UserDisconnect(id){
    const idx = users.findIndex(user => user.id === id)
    if (idx!== -1){
        return users.splice(idx,1)[0]
    }
}

module.exports = {
    JoinUser,
    GetCurrentUser,
    UserDisconnect
}


