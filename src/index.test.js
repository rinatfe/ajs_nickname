import Validator from "./index"

const validate = new Validator();

test('тест', () => {
    expect(validate.validateUsername("Igor_O")).toBe(true);
  });

  test('тест', () => {
    expect(validate.validateUsername("Ig11o_r-O")).toBe(true);
  });  

  test('тест', () => {
    expect(validate.validateUsername("-g11o_r-O")).toBe(false);
  });

  test('тест', () => {
    expect(validate.validateUsername("1Ig11o_r-O0")).toBe(false);
  });

  test('тест', () => {
    expect(validate.validateUsername("Ig1111o_r-O")).toBe(false);
  });

  test('тест', () => {
    expect(validate.validateUsername("Ig*/aa")).toBe(false);
  });

  test('тест', () => {
    expect(validate.validateUsername("Игорь")).toBe(false);
  });