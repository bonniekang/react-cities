// TODO: add and export your own actions
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
