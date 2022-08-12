import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const Schema = mongoose.Schema;
const PinSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  about: {
    type: String,
  },
  destination: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  image: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  poster: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  saved: [{
    type: Schema.Types.ObjectId,
    ref: 'Save',
  }],
  commnets: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }]
});

PinSchema.plugin(mongoosePaginate);

const Pin = mongoose.model('Pin', PinSchema);
export default Pin
