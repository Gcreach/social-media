const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [
       reactionSchema
    ],
    }
);

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
  toJSON: {
    getters: true,
    virtuals: true,
  },
}
)

thoughtSchema 
    .virtual('reactionCount')
    .get(function () {
      return `${this.reactions}`;
    });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;