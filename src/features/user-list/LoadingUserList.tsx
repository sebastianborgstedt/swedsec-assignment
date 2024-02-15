import { PlaceholderCard } from "./PlaceholderCard"

export const LoadingUserList = () => (
  <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg shadow shadow-slate-200">
    <div className="w-96 animate animate-pulse">
      <PlaceholderCard />
    </div>
    <p className="py-6 text-base text-left text-slate-800 animate animate-pulse">
      Fetching users from GitHub...
    </p>
  </div>
)