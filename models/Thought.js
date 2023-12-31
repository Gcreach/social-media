const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      default: Schema.Types.ObjectId,
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


thoughtSchema 
    .virtual('reactionCount')
    .get(function () {
      return `${this.reactions}`;
    });


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
