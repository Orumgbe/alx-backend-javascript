// A weak map of endpoints and the number of calls made.
export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

/**
 * Track the number of calls made to an API's endpoint
 * endpoint format as shown below
 * {
 *   protocol: '<string>',
 *   name: '<string>',
 * }
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
