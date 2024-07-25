const transformUnique = (arr, newItem) => {
  const existingElement = arr.find((item) => item.id === newItem.id);

  if (existingElement) {
    existingElement.count += 1;
  } else {
    arr.push({ ...newItem, count: 1 });
  }

  return arr;
};

export { transformUnique };
