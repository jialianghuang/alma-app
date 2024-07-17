export const CHANGE_STATUS = 'CHANGE_STATUS';

export const changeStatus = (index) => ({
  type: CHANGE_STATUS,
  payload: index
});