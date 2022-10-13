import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
const initialState = {
  userLogin: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      const userLogin = action.payload;
      state.userLogin = userLogin;
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;
//----------------------action thunk --------------------
export const loginApi = (userLogin) => {
  return async (dispatch2) => {
    //Xử lí logic api để có được dữ liệu
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      console.log(result.data);
      const action = setUserLoginAction(result.data.content);
      dispatch2(action);
    } catch (err) {
      console.log(err);
    }
  };
};
