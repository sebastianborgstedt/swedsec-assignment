import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { reset, setSearchTerm, selectSearchTerm } from "./searchInputSlice"
import { useDebounce } from "../../hooks/useDebounce"

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const currentSearchTerm = useAppSelector(selectSearchTerm)
  const [query, setQuery] = useState(currentSearchTerm)
  const debouncedQuery = useDebounce<string>(query, 500)

  const onChange = (value: string) => {
    setQuery(value)
  }

  const resetInput = () => {
    dispatch(reset())
    setQuery("")
  }

  useEffect(() => {
    dispatch(setSearchTerm(debouncedQuery))
  }, [debouncedQuery, dispatch])

  return (
    <div className="w-full max-w-3xl py-2 p-6 flex flex-col pb-1 sm:px-0 sm:py-12 md:max-w-4xl">
      <div className="sm:hidden w-full flex items-center justify-center pb-6">
        <img src="/github-mark.svg" className="w-12" alt="Github logo" />
      </div>
      <label className="mb-2 text-sm font-semibold text-slate-500" htmlFor="search-input">
        Search for GitHub users by name
      </label>
      <div className="relative">
        <img
          src="/github-mark.svg"
          className="hidden sm:block sm:w-8 sm:pt-3.5 sm:-ml-12 sm:absolute sm:left-0 sm:top-0"
          alt="Github logo"
        />
        <input
          id="search-input"
          name="search-input"
          type="text"
          value={query}
          placeholder="Search..."
          onChange={e => onChange(e.target.value)}
          className="w-full border-2 border-slate-200 rounded-lg px-4 py-4 text-slate-600 placeholder:text-slate-300"
        />
        {currentSearchTerm.length > 3 ? (
          <button
            onClick={resetInput}
            className="-ml-16 text-sky-500 font-bold uppercase text-xs hover:text-sky-700"
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  )
}
