import { isValidChecksum } from '@iota/checksum';
import { setAddress } from '../database';

export function add(user: string, address: string) {
  try {
    // Check if address has valid checksum
    if (isValidChecksum(address)) {
        setAddress(user, address)
        return 'Address added.';
    } else {
        return 'Error - Checksum is missing.';
    }
  } // catch (error) {
  //  return 'Error - Probably Not A Valid IOTA Address';
  // }
}
