<<<<<<< HEAD
import { RECIEVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECIEVE_TWEETS:
=======
import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
      return {
        ...state,
        ...action.tweets,
      };
<<<<<<< HEAD
=======
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case ADD_TWEET:
      const { tweet } = action;

      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id]),
          },
        };
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
    default:
      return state;
  }
}
