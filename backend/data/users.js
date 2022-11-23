import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin',
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'elon',
        email:"elon@example.com",
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'zuck',
        email:"zuck@example.com",
        password:bcrypt.hashSync('123456',10),
    }
]

export default users