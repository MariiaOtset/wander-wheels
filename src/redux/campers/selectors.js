export const selectCampers = (store) => store.campers.items;
export const selectCamper = (store) => store.campers.camperById;
export const selectLoading = (store) => store.campers.loading;
export const selectError = (store) => store.campers.error;
