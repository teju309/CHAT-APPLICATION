const users = []

const addUser = ({id, username, room}) => {

    username = username.trim().toLowerCase()
    room = room.trim().toUpperCase()

    if(!username || !room){
      
      return {error:"username and room are required",user:null}
    }

    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })
    
    if(existingUser){
      return {error:"username in use",user:null}
    }
    const user = {id, username, room}
    users.push(user)
    return {error:null,user:user}
}

const getUser = (id) => {
    const user = users.find((user) => {
        return user.id === id
    })
    return user
}

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => {
        return user.room === room
    })
    return usersInRoom
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if(index != -1)
    {
        return users.splice(index, 1)[0]
    }
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}