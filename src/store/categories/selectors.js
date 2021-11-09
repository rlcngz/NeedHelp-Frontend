export const selectCategories = (state) => state.categories.list;

export const selectCategoryDetails = (state) => state.categories.selected;

export const selectMapItems = (state) => {
  //   console.log(state.categories.selected.services);
  return state.categories.selected?.services
    .map((service) =>
      service.spaces.map((space) => ({
        lng: space.address.lng,
        lat: space.address.lat,
        title: space.title,
        logoUrl: space.logoUrl,
        id: space.id,
      }))
    )
    .flat();
};
