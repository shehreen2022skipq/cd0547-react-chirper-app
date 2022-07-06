<<<<<<< HEAD
import { SET_AUTHED_USER } from "../actions/authedUsers";
=======
import { SET_AUTHED_USER } from "../actions/authedUser";
>>>>>>> f9152942841ee934641ee40080684cea9e04d296

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
