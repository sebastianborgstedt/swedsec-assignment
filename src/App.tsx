import { SearchInput } from "./features/search-input/SearchInput"
import { UserList } from "./features/user-list/UserList"

const App = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-24">
      <SearchInput />
      <UserList />
    </div>
  )
}

export default App
