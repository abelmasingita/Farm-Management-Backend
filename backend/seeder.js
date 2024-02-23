import { Field } from './models/fieldModel.js'
import { Farm } from './models/farmModel.js'
import farms from './data/farm.js'
import fields from './data/field.js'

export const importData = async () => {
  try {
    await Field.deleteMany()
    await Farm.deleteMany()

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
