import { deleteUser, getAddress } from '../database';

async export function del(user: string) {
  try {
    // Get address from user
    let address = await getAddress(user)
    if (typeof address !== 'undefined' && address) {
      deleteUser(user)
      return 'Account successfully deleted!'
    } else {
      return 'User not found!'
    }
  } catch (error) {
    return 'Error - Something wild appears.';
  }
}
