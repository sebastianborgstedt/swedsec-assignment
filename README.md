# Swedsec assignment

Due to the assignment not being that big, I have made some principle decisions to allow the codebase to grow.
The folder structure as it is split between components and features, to keep the functionality coupled when needed and general when possible.

I've kept things simple and tried to create a couple of UI only components (one per view state of the app). Otherwise state is connected through RTK.

## Getting started

1. Run `npm i` in the terminal

2. Create a `.env.local` file with the contents, the key is generated here: `https://github.com/settings/tokens?type=beta`, only `Public Repositories (read-only)` is required.

``
VITE_GITHUB_API_KEY=github_pat_SECRET_KEY
``

3. Run `npm run dev`

## Template

I used a Vite template for RTK + React TS, to get started quickly and get all the requirements installed right away.
Having a solid build process setup saved me lots of time and I did not need any special requirements from the build process, so it felt like a solid choice.

## Styling

I enjoy using CSS and prefer it to CSS-in-JS. To style I used Tailwind since it's quick to get things up and running and it's easy for other developers to jump right in. For those not familiar with Tailwind, a common critique is that the HTML gets filled with class names, but as most Tailwind users, I've found this to be mainly about familiarity.

## Structure

Using features and components makes it easy to keep track of where everything happens. Components are for more generic components that are used in multiple features/components and features for more complex components, with unique logic that only happens there.

An example on how I would make this more generic in the future for a bigger project could be to make a Component for Images and another component for a DebouncedInput.

Same idea goes to hooks and other helpers/utilities. If the hook is used only inside a feature, its inside the feature directory. If its a more generic hook, it lives inside the hooks directory.

## Memoization

Since nothing in this app is complex enough to warrant the use of memoization I did not use it. In this app it would only be a performance hit to use for example `useMemo`, `useCallback` or `React.memo`

## Tests

Due to the time restriction I've only written a couple of basic tests. In a production environment I usually write stories for Storybook, unit tests using something like React Testing Library and when needed mocked functionality. I usually include snapshots to prevent regressions also.

## Github API

The basic https://developer.github.com/v3/search/ request does not return `location` or `name` of github users. To be able to query more fields I had to use their GraphQL API endpoint.
