import type { GitHubUser } from "./usersApiSlice"

type UserCardProps = {
  user: GitHubUser
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <a href={user.url} className="relative flex items-center w-full gap-4 p-4 overflow-hidden rounded-lg shadow cursor-pointer bg-gray-50 shadow-slate-200 text-slate-600 hover:bg-slate-100">
    <span className="rounded-full bg-gradient-to-b from-gray-100 to-gray-200">
      <img
        src={user.avatarUrl}
        alt={`Github avatar for ${user.login}`}
        className="object-scale-down w-12 h-12 border border-gray-100 rounded-full shadow-sm shadow-slate-300"
      />
    </span>
    <span className="flex flex-col w-3/4 gap-1">
      <h3 className="text-sm font-bold truncate text-sky-700">{user.name}</h3>
      <h4 className="text-sm font-bold truncate">{user.location}</h4>
      <p className="text-sm">{user.bio}</p>
      <span className="flex items-center gap-2 text-sm">
        <img src="/github-mark.svg" className="w-4 h-4" alt="Github logo" />
        {user.login}
      </span>
    </span>
  </a>
)