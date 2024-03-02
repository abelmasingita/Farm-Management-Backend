import bcrypt from 'bcryptjs'

let password = '===19641Mm1505***@@'
const salt = await bcrypt.genSalt(10)
password = await bcrypt.hash(password, salt)

const users = [
  {
    username: 'admin@farm.co.za',
    password,
    firstName: 'Abel',
    lastName: 'Hlongwani',
    phoneNumber: '0742261505',
    roleId: '65e3b8f0ff3dcef5da43163f',
  },
  {
    username: 'manager@farm.co.za',
    password,
    firstName: 'Abel',
    lastName: 'Hlongwani',
    phoneNumber: '0742261506',
    roleId: '65e3b8f0ff3dcef5da43163f',
  },
  {
    username: 'employee@farm.co.za',
    password,
    firstName: 'Abel',
    lastName: 'Hlongwani',
    phoneNumber: '0742261507',
    roleId: '65e3b8f0ff3dcef5da43163f',
  },
  {
    username: 'guest@farm.co.za',
    password,
    firstName: 'Abel',
    lastName: 'Hlongwani',
    phoneNumber: '0742261508',
    roleId: '65e3b8f0ff3dcef5da43163f',
  },
]

export default users
