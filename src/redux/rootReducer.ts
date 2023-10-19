import serviceReducer from "./features/services/serviceSlice";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";

export const reducer = {
  service: serviceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
