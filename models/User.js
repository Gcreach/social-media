const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName:
    {   type: String,
        required: true,
        unique: true,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match validation here
        match: /\w+@\w+\.\w{2,6}/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends}`;
  });

  const User = model('User', userSchema);

  module.exports = User;