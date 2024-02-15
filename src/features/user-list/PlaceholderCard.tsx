export const PlaceholderCard = () => (
  <div className="relative flex items-center w-full gap-4 p-4 overflow-hidden rounded-lg shadow cursor-pointer bg-gray-50 shadow-slate-200 text-slate-600 hover:bg-slate-100">
    <span className="rounded-full bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="object-scale-down w-12 h-12 border border-gray-100 rounded-full shadow-sm shadow-slate-300">
        &nbsp;
      </div>
    </span>
    <span className="flex flex-col w-3/4 gap-1">
      <h3 className="text-sm font-bold truncate text-sky-700">
        <div className="w-full bg-gray-200 rounded-lg">&nbsp;</div>
      </h3>
      <span className="flex items-center gap-2 text-sm">
        <img src="/github-mark.svg" className="w-4 h-4" alt="Github logo" />
        <div className="w-full bg-gray-200 rounded-lg">&nbsp;</div>
      </span>
    </span>
  </div>
)