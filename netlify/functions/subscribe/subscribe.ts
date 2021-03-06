import { Handler } from '@netlify/functions'
import { MongoClient } from 'mongodb'

interface RequestBody {
  email: string
  name?: string
  lead?: string
}

const handler: Handler = async (event, _context) => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) throw new Error('MONGODB_URI env not available')

    const { email, name, lead } = JSON.parse(event.body ?? '') as RequestBody

    const uri = MONGODB_URI
    const client = new MongoClient(uri)

    const connectedClient = await client.connect()

    const collection = connectedClient.db('emails').collection('emails')

    await collection.insertOne({ email, name, lead })

    await client.close()

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  }
}

export { handler }
