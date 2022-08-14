import desensitizationRule  from '../src/desensitizationRule.js';
test('desensitizationRule("18703606791", "mobile" ) === 187****6791', () => {
   expect(desensitizationRule("18703606791", "mobile")).toBe("187****6791");
})