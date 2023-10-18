import serviceReducer from "./features/services/serviceSlice";
import { baseApi } from "./api/baseApi";

export const reducer = {
  service: serviceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
