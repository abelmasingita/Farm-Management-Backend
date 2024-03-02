import { Field } from './models/fieldModel.js'
import { Farm } from './models/farmModel.js'
import { Role } from './models/roleModel.js'
import farms from './data/farm.js'
import fields from './data/field.js'
import roles from './data/role.js'
import { User } from './models/userModel.js'
import users from './data/users.js'

export const importData = async () => {
  try {
    await Field.deleteMany()
    await Farm.deleteMany()
    await User.deleteMany()
    //await Role.deleteMany()

    //await Role.insertMany(roles)
    await User.insertMany(users)
    const savedFarms = await Farm.insertMany(farms)

    const farm = savedFarms[0]._id
    const fieldImport = fields.map((field) => {
      return {
        ...field,
        farmId: farm,
      }
    })
    await Field.insertMany(fieldImport)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
}

export const deleteData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    console.log('Data Deleted!')
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
}
