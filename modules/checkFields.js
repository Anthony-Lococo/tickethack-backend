function checkFields(body, key) {
  let isValid = true;
  for (const field of key) {
    if (!body[field] || body[field] === "") {
      isValid = false;
    }
  }
  return isValid;
}

module.exports = { checkFields };
