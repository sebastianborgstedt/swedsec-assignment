import { useGetUsersQuery } from "./usersApiSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectCursor, selectSearchTerm, setCursor } from "../search-input/searchInputSlice"
import { UserCard } from "./UserCard"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"
import { EmptyUserList } from "./EmptyUserList"
import { ErrorUserList } from "./ErrorUserList"
import { LoadingUserList } from "./LoadingUserList"

const LIMIT = 60

export const UserList = () => {
  const dispatch = useAppDispatch()
  const searchTerm = useAppSelector(selectSearchTerm)
  const cursor = useAppSelector(selectCursor)
  const invalidSearchTerm = searchTerm.length < 3
  const { data, isError, isLoading, isSuccess, isFetching } = useGetUsersQuery({
    searchTerm, cursor, limit: LIMIT
  }, {
    skip: invalidSearchTerm
  })
  const canFetchNewPage = !isFetching && isSuccess && !invalidSearchTerm && data?.hasNextPage

  const bottomRef = useIntersectionObserver((entries) => {
    if (canFetchNewPage && entries[0]?.isIntersecting) {
      dispatch(setCursor(data.endCursor))
    }
  })

  if (isError) {
    return <ErrorUserList />
  }

  if (isLoading) {
    return <LoadingUserList />
  }

  if ((!data?.users || data?.users.length <= 0) && !invalidSearchTerm) {
    return <EmptyUserList />
  }

  if (isSuccess && data?.users.length > 0) {
    return (
      <div className="grid grid-cols-1 gap-5 w-full max-w-3xl px-6 sm:px-0 sm:grid-cols-3 sm:gap-4 md:max-w-4xl">
        {data?.users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
        <div ref={bottomRef} />
      </div>
    )
  }

  return null
}
