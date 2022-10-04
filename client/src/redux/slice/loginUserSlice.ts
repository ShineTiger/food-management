import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState: {
    name: '',
    id: '',
  },
  reducers: {
    setLoginUser(state, { payload }: PayloadAction<LoginUserInfoType>) {
      state.name = payload.name;
      state.id = payload.id;
    },
  },
});

export const { setLoginUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
