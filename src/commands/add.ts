import { isValidChecksum } from '@iota/checksum';
import { setAddress } from '../database';

export function add(user: string, address: string) {
  try {
    // Check if address has valid checksum
    if (isValidChecksum(address)) {
        setAddress(user, address)
        return 'Address added.';
    } else {
        return 'Error - Missing checksum.';
    }
  } catch (error) {
    return 'Error - Probably not a valid IOTA address';
  }
}
