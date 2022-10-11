import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { username: "UserA", content: "abc" },
    { username: "UserB", content: "asdadasd" },
  ],
};

const fakebookAppReducer = createSlice({
  name: 'fakebookAppReducer',
  initialState,
  reducers: {
    addComment: (state,action) => {
        //B1: Lay du lieu dispatch le tu action.payload
        let userComment = action.payload
        state.arrComment.push(userComment)
    }
  },
});

export const {addComment} = fakebookAppReducer.actions;

export default fakebookAppReducer.reducer;
