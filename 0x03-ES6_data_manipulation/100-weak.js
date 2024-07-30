export const weakMap = new WeakMap();
let callCount = 1;
export const queryAPI = (endpoint) => {
  weakMap.set(endpoint, callCount++);
  if (callCount >= 5) {
    throw Error('Endpoint load is high');
  }
};
