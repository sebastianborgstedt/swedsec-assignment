export const EmptyUserList = () => (
  <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg shadow shadow-slate-200">
    <img src="/empty.png" className="w-24 h-24 mb-12" alt="Empty" />
    <h2 className="pb-6 text-xl font-bold text-slate-800">
      Could not find any users with that name
    </h2>
    <p className="text-base text-left text-slate-800">
      Try searching for something else?
    </p>
  </div>
)