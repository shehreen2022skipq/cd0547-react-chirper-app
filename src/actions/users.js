<<<<<<< HEAD
export const RECIEVE_USERS = "RECIEVE_USERS";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
=======
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
    users,
  };
}
