export const ErrorUserList = () => (
  <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg shadow shadow-slate-200">
    <img src="/alert.png" className="w-24 h-24 mb-12" alt="Warning" />
    <h2 className="pb-6 text-xl font-bold text-slate-800">
      Something went terribly, terribly wrong
    </h2>
    <p className="text-base text-left text-slate-800">
      Reloading the page will probably fix it
    </p>
  </div>
)