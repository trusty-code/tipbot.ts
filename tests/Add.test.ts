import {add} from '../src';

test('Adding a valid address and user', () => {
    expect(add('Carl', 'iota1qqqa5f3a04dj5lazwn6fgsjpx9rclqszafs7wkqft7lpxq65am37wrzgnjy')).toBe('Address added.');
});

test('Trying to add a valid address without prefix', () => {
    expect(add('Carl', 'qqqa5f3a04dj5lazwn6fgsjpx9rclqszafs7wkqft7lpxq65am37wrzgnjy')).toBe("Error - Address is missing or not valid.")
});

test('Trying to add an invalid address', () => {
    expect(add('Carl', 'INVALID')).toBe('Error - Address is missing or not valid.')
});

test('Trying to add an empty address', () => {
    expect(add('Carl', '')).toBe('Error - Address is missing or not valid.')
});

test('Trying to add a valid address without user', () => {
    expect(add('', 'iota1qqqa5f3a04dj5lazwn6fgsjpx9rclqszafs7wkqft7lpxq65am37wrzgnjy')).toBe('Error - Missing user.')
});
