import { getAddress } from '../database';

export function tip(user: string) {
  try {
    // Get address from user
    let address = getAddress(user)
    if(address) {
      return address;
    } else {
      return 'Error - User not found'
    }
  } catch (error) {
    return 'Error - Something wild appears.';
  }
}
