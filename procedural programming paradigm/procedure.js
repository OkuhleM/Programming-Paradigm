function getNestedValue(object, propertyName) {
  var childObject = object,
  parts,
  i;

  if (typeof propertyName !== 'string' || propertyName === null) {
    throw new Error('Invalid property. 9iojli?');
  }

  parts = propertyName.split('.');

  for (i = 0; i < parts.length; i++) {
    if (typeof childObject === 'undefined') {
      return undefined;
    }
    childObject = childObject[parts[i]];
  }
  return childObject;
}