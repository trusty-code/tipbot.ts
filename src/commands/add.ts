import {setAddress} from '../database';

export function add(user: string, address: string) {

    if (!user) {
        return 'Error - Missing user.';
    }

    if (isValidBech32AddressAndPrefix(address, "iota")) {
        setAddress(user, address)
        return 'Address added.';

    } else {
        return 'Error - Address is missing or not valid.';
    }

    function isValidBech32AddressAndPrefix(addressToBeCheckedWithoutPrefix: string, expectedAddressPrefix: string): boolean {
        return new RegExp(`^${expectedAddressPrefix}1[02-9ac-hj-np-z]{59}$`).test(addressToBeCheckedWithoutPrefix)
    }

}
