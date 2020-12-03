import { add } from '../src/index';
test('Add Valid Address', () => {
  expect(add('Carl', 'HYMYMBXAWOTQSSCMUHLTEZM9ODBRQHQXE9YYITUIQKTLMIKHMUTSETAQIFRCNKIVFNEETSXDNHAYHYSVCHPXUVQDMX')).toBe('Address added.');
});

test('Try to Add without Checksum', () => {
  expect(add('Carl', 'HYMYMBXAWOTQSSCMUHLTEZM9ODBRQHQXE9YYITUIQKTLMIKHMUTSETAQIFRCNKIVFNEETSXDNHAYHYSVC')).toBe("Error - Missing checksum.")
});

test('Try to Add Invalid Address', () => {
  expect(add('Carl', 'INVALID')).toMatch(/(Error)/i)

});
