import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUSer = createSelector(
  [selectUser],
  (user) => user.currentUser
);
