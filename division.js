function division(val1, val2) {
  if (val2 === 0) {
    return new Error("На ноль делить нельзя");
  }
  return val1 / val2;
}

module.exports = { division };
