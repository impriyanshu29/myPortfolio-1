import { configureStore,combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../function/theme.slice";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../function/user.slice";

const rootReducer = combineReducers({
    theme: themeReducer,
    user : userReducer,
});

const persistConfig = {
    key: "root",
    storage,
    version:1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),

});

export const persistor = persistStore(store);


