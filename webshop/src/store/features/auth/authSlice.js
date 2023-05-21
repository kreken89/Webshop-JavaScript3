import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  loading: false,
  error: null,
  authIsReady: false,
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

// registerAdmin
export const registerAdmin = createAsyncThunk(
  'auth/registerAdmin',
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

// logoutUser
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await authService.logout()
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

// loginAdmin
export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin',
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

// login with google
export const signInWithGoogle = createAsyncThunk(
  'auth/googleLogin',
  async (_, thunkAPI) => {
    try {
      return await authService.signInWithGoogle()
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
    authReady: (state, action) => {
      state.user = action.payload
      state.authIsReady = true
    }
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

      // registerAdmin
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(registerAdmin.rejected, (state, action) => {
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

      // loginAdmin
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(loginAdmin.rejected, (state, action) => {
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

      // signInWithGoogle
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })

      // logoutUser
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { setError, authReady } = authSlice.actions
export default authSlice.reducer
