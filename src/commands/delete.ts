import { deleteUser, getAddress } from '../database';

export function del(user: string) {
  try {
    // Get address from user
    let address = getAddress(user)
    if (address) {
      deleteUser(user)
      return 'Account successfully deleted!'
    } else {
      return 'Error - User not found'
    }
  } catch (error) {
    return 'Error - Something wild appears.';
  }
}
