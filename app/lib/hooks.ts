// import { useDispatch, useSelector, useStore } from 'react-redux'
// import type { RootState, AppDispatch, AppStore } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()

import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"
import type { RootState, AppDispatch, AppStore } from "./store"

// typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// typed store
export const useAppStore = () => useStore<AppStore>()