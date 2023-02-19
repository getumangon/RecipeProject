import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './reducers/dishDetails/commentsReducer'

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})
