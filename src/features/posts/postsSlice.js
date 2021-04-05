import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.REACT_APP_API_KEY;

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.published.localeCompare(a.date)
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (label) => {
  const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/8051615640630699138/posts?key=${apiKey}&fetchImages=true`)
  const jsonResponse = await response.json();
  console.log(jsonResponse.items);
  console.log(label);
  const result = jsonResponse.items.filter(post => {return post.labels.indexOf(label) !== -1});
  console.log(result);
  return result;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      postsAdapter.upsertMany(state, action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});


// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);