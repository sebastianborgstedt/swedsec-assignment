import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export type SearchInputSliceState = {
  searchTerm: string
  cursor?: string
}

const initialState: SearchInputSliceState = {
  searchTerm: ""
}

export const searchInputSlice = createAppSlice({
  name: "searchInput",
  initialState,
  reducers: create => ({
    reset: create.reducer(state => {
      state.searchTerm = ""
    }),
    setSearchTerm: create.reducer((state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.cursor = undefined
    }),
    setCursor: create.reducer((state, action: PayloadAction<string | undefined>) => {
      state.cursor = action.payload
    }),
  }),
  selectors: {
    selectSearchTerm: searchInput => searchInput.searchTerm,
    selectCursor: searchInput => searchInput.cursor
  },
})

export const { reset, setSearchTerm, setCursor } = searchInputSlice.actions

export const { selectSearchTerm, selectCursor } = searchInputSlice.selectors
