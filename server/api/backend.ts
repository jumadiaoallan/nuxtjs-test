import data from './recipes.json';

export default defineEventHandler((event) => {
  return {
    data
  }
});