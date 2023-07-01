import connectMongo from '../../../database/conn'
import { getUsers, postUser, putUser, deleteUser } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch((e) => res.status(405).json({ error: "Error in the Connection" + e.toString()}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            getUsers(req, res)
            break;
        case 'POST':
            postUser(req, res)
            break;
        case 'PUT':
            putUser(req, res)
            break;
        case 'DELETE':
            deleteUser(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  