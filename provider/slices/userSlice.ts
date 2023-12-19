import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  pronouns: string;
  fullName: string;
  dateOfBirth: string;
  currentAddress: string;
  howLong: string;
  about: string;
  status: string;
  savings: string;
}

const initialState: UserState = {
  email: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
  pronouns: 'Mr',
  fullName: '',
  dateOfBirth: '',
  currentAddress: '',
  howLong: '',
  about: '',
  status: '',
  savings: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setPronouns: (state, action: PayloadAction<string>) => {
      state.pronouns = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
    setCurrentAddress: (state, action: PayloadAction<string>) => {
      state.currentAddress = action.payload;
    },
    setHowLong: (state, action: PayloadAction<string>) => {
      state.howLong = action.payload;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSavings: (state, action: PayloadAction<string>) => {
      state.savings = action.payload;
    },
  },
});

export const {
  setEmail,
  setMobileNumber,
  setPassword,
  setConfirmPassword,
  setPronouns,
  setFullName,
  setDateOfBirth,
  setCurrentAddress,
  setHowLong,
  setAbout,
  setStatus,
  setSavings,
} = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user;
export const selectUserFields = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
