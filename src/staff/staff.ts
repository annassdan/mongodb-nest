import * as Mongoose from 'mongoose';

export const StaffSchema = new Mongoose.Schema({
  nama: { type: String, required: true },
  alamat: { type: String, required: false },
  telepon: { type: String, required: false },
  email: { type: String, required: true },
});


/* define model collections */
export interface Staff extends Mongoose.Document {
  nama: string;
  alamat?: string;
  telepon?: string;
  email: string;
}
