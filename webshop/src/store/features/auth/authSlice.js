import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  loading: false,
  error: null,
}

// registerUser
export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      return await authService.signup(formData.email, formData.password)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

// loginUser
export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData.email, formData.password)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

// subscribeUser
export const subscribeUser = createAsyncThunk(
  'auth/subscribe',
  async (formData, thunkAPI) => {
    try {
      return await authService.subscribe(formData.email)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })

      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })

      // subscribeUser
      .addCase(subscribeUser.pending, (state) => {
        state.loading = true
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })
  },
})

export const { setError } = authSlice.actions
export default authSlice.reducer
