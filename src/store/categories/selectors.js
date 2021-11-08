export const selectCategories = (state) => state.categories.list;

export const selectCategoryDetails = (state) => state.categories.selected;

export const selectFilter = (state) => state.categories.selected.services;
