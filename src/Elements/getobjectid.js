import { ObjectId } from 'mongodb';

export const getObjectId = (id) => {
  return new ObjectId(id);
};