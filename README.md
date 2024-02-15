# Swedsec assignment

A quick explanation of my decisions for all different parts of the assignment

## Template

I used the Redux typescript vite react template to get started quickly and get all the requirements installed right away.

## Styling

My choice was to not use the modulear styling that came with the template and instead use TailwindCSS, its very popular for a reason and easy to use.

## Structure

Using features and components makes it easy to keep track of where everything happens. Components for more generic components that are used in multiple features/components and features for more complex components, to have everything in one spot.

I like to seperate hooks and utils/helpers/components. Usually I would structure them and categorize them in directories, but when there is only 2 there is no need to do so.

## Memoization

Since nothing in this app is complex enough to warrant the use of memoization I did not use it. In this app it would only be a performance hit to use for example `useMemo`, `useCallback` or `React.memo`

## Tests

With the time constraint I just made some very simple and basic tests, I did not have time to setup mocking of API requests.

## Github API

The basic https://developer.github.com/v3/search/ request does not return `location` or `name` of github users, so I ignored those fields. To be able to query more fields I need to use their GraphQL endpoint, which I didnot