// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Axios
import { AxiosError } from "axios";

// Helpers
import {
   removeAccessCookie,
   removeRefreshCookie,
   setAccessCookie,
   setRefreshCookie,
} from "../helpers/cookies.helpers";

// API
import { GET } from "../services/api/api";

// Services
import { refreshTokenService, signInService } from "../services/auth/auth";

export interface IAuthState {
   token: string;
   user: IUser | null;
   isLoading: boolean;
   error: IAuthError | null;
   rejected: boolean;
   lastRejected: boolean;
}

export interface IUser {
   id: number;
   username: string;
   first_name: string;
   last_name: string;
   email: string;
   permission: Permission;
}

export interface Permission {
   name: string;
   menu_attendance: boolean;
   attendance_create: boolean;
   attendance_list: boolean;
   attendance_view: boolean;
   menu_absences: boolean;
   absences_list: boolean;
   menu_comment: boolean;
   comment_create: boolean;
   menu_room: boolean;
   room_create: boolean;
   room_delete: boolean;
   room_list_all: boolean;
   room_view: boolean;
   new_view_teachers: boolean;
}

export interface IAuthError {
   msg: string;
}

export interface ICurrentToken {
   access: string;
   refresh: string;
}

const initialState: IAuthState = {
   token: "",
   user: null,
   isLoading: false,
   error: null,
   rejected: false,
   lastRejected: false,
};

export const signIn = createAsyncThunk(
   "auth/getToken",
   async (body: { email: string; password: string }, thunkApi) => {
      try {
         const response = await signInService<ICurrentToken>(
            body.email,
            body.password
         );
         return response.data;
      } catch (err) {
         let error: AxiosError = err as AxiosError;
         return thunkApi.rejectWithValue(error.response?.data);
      }
   }
);

export const getCurrentUser = createAsyncThunk(
   "auth/getCurrentUser",
   async (_, thunkApi) => {
      try {
         const response = await GET<IUser>("/account/backoffice/users/0/");
         return response;
      } catch (err) {
         let error: AxiosError = err as AxiosError;
         return thunkApi.rejectWithValue(error.response?.data);
      }
   }
);

export const refreshToken = createAsyncThunk(
   "auth/refreshToken",
   async (refresh: string, thunkApi) => {
      try {
         const response = await refreshTokenService<{
            access: string;
         }>(refresh);
         return response.data;
      } catch (err) {
         let error: AxiosError = err as AxiosError;
         return thunkApi.rejectWithValue(error.response?.data);
      }
   }
);

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setToken: (state, action) => {
         state.token = action.payload;
      },
      logout: (state) => {
         removeAccessCookie();
         removeRefreshCookie();
         state.token = initialState.token;
         state.user = initialState.user;
         state.isLoading = initialState.isLoading;
         state.rejected = initialState.rejected;
         state.lastRejected = initialState.lastRejected;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state, action) => {
         state.token = action.payload.access;
         setAccessCookie(action.payload.access);
         setRefreshCookie(action.payload.refresh);
      });
      builder.addCase(signIn.rejected, (state, action) => {
         removeAccessCookie();
         state.token = initialState.token;
         state.user = initialState.user;
         state.isLoading = initialState.isLoading;
         state.error = {
            msg: (action.payload as any).detail || "Error Server",
         };
      });
      builder.addCase(getCurrentUser.pending, (state, _) => {
         state.user = initialState.user;
         state.isLoading = true;
      });
      builder.addCase(getCurrentUser.fulfilled, (state, action) => {
         state.user = action.payload;
         state.isLoading = false;
         state.error = null;
      });
      builder.addCase(getCurrentUser.rejected, (state, _) => {
         removeAccessCookie();
         state.token = initialState.token;
         state.user = initialState.user;
         state.isLoading = initialState.isLoading;

         // Init refresh(refreshCookie)
         state.rejected = true;
      });
      builder.addCase(refreshToken.pending, (state, _) => {
         state.token = initialState.token;
         state.user = initialState.user;
         state.isLoading = true;
      });
      builder.addCase(refreshToken.fulfilled, (state, action) => {
         setAccessCookie(action.payload.access);
         state.token = action.payload.access;
         state.isLoading = false;
         state.error = null;
         state.rejected = false;
      });
      builder.addCase(refreshToken.rejected, (state, _) => {
         removeAccessCookie();
         removeRefreshCookie();
         state.token = initialState.token;
         state.user = initialState.user;
         state.isLoading = initialState.isLoading;
         state.error = null;
         state.rejected = false;
         state.lastRejected = true;
      });
   },
});

export const { setToken, logout } = authSlice.actions;
