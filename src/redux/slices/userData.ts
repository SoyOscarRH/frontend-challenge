import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserData = {
  data: { username: string; email: string} | null;
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {data: null} as UserData,
  reducers: {
    setUserData(userData, action: PayloadAction<NonNullable<UserData['data']>>) {
      const {username, email} = action.payload;
      userData.data = {username, email};
    },
    logout(userData) {
      userData.data = null;
    },
  }
});

export const { setUserData, logout } = userDataSlice.actions;
export default userDataSlice.reducer;