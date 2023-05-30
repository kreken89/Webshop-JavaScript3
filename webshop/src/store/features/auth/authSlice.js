import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  loading: false,
  error: null,
  authIsReady: false,
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const user = await authService.signup(formData)
      thunkAPI.dispatch(authReady(user)) 
      return user
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const user = await authService.login(formData.email, formData.password)
      thunkAPI.dispatch(authReady(user)) 
      return user
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await authService.logout()
      thunkAPI.dispatch(authReady(null)) 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

/* export const subscribeUser = createAsyncThunk(
  'auth/subscribe',
  async (formData, thunkAPI) => {
    try {
      const user = await authService.subscribeToNewsletter(formData.email)
      thunkAPI.dispatch(authReady(user)) // Dispatch the authReady action
      return user
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
) */

export const signInWithGoogle = createAsyncThunk(
  'auth/googleLogin',
  async (_, thunkAPI) => {
    try {
      const user = await authService.signInWithGoogle()
      thunkAPI.dispatch(authReady(user)) 
      return user
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

// edit user data in my account
export const update = createAsyncThunk(
  'auth/update',
  async (formData, thunkAPI) => {
    try {
      
      const updatedUser = { ...formData } 
      return updatedUser
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
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
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
      /* .addCase(subscribeUser.pending, (state) => {
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
      }) */
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
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
         
      })

      .addCase(update.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })
  },
})

export const { setError, authReady, setUser } = authSlice.actions
export default authSlice.reducer

