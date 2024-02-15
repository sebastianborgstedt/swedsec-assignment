import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import type { SearchInputSliceState } from "./searchInputSlice"
import { searchInputSlice, setCursor, reset, setSearchTerm, selectCursor, selectSearchTerm } from "./searchInputSlice"

type LocalTestContext = {
  store: AppStore
}

describe<LocalTestContext>("Search input reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: SearchInputSliceState = {
      cursor: "123",
      searchTerm: "Test"
    }

    const store = makeStore({ searchInput: initialState })

    context.store = store
  })

  it("should handle initial state", () => {
    expect(searchInputSlice.reducer(undefined, { type: "unkown" })).toStrictEqual({
      searchTerm: ""
    })
  })

  it("should handle setCursor", ({ store }) => {
    expect(selectCursor(store.getState())).toBe("123")

    store.dispatch(setCursor("1234"))

    expect(selectCursor(store.getState())).toBe("1234")
  })

  it("should handle reset", ({ store }) => {
    expect(selectCursor(store.getState())).toBe("123")
    expect(selectSearchTerm(store.getState())).toBe("Test")

    store.dispatch(reset())

    expect(selectCursor(store.getState())).toBe("123")
    expect(selectSearchTerm(store.getState())).toBe("")
  })

  it("should handle setSearchTerm", ({ store }) => {
    expect(selectSearchTerm(store.getState())).toBe("Test")

    store.dispatch(setSearchTerm("Testar"))

    expect(selectSearchTerm(store.getState())).toBe("Testar")
  })
})
