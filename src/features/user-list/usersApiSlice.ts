import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type UserQuery = {
  searchTerm: string
  limit: number
  cursor?: string
}

export type GitHubUser = {
  avatarUrl: string
  id: number
  login: string
  url: string
  name?: string
  bio?: string
  location?: string
}

type PageInfo = {
  endCursor: string
  hasNextPage: boolean
}

type GraphQLResponse<T> = {
  data: {
    search: {
      edges: Array<{
        cursor: string,
        node: T
      }>,
      pageInfo: PageInfo
    }
  }
}

export type UsersApiResponse = GraphQLResponse<GitHubUser>
export type UsersApiSlice = {
  users: Array<GitHubUser>,
  endCursor: string,
  hasNextPage: boolean
}

const token = import.meta.env.VITE_GITHUB_API_KEY

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    method: 'POST',
    baseUrl: 'https://api.github.com/graphql',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }),
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  endpoints: build => ({
    getUsers: build.query<UsersApiSlice, UserQuery>({
      query: ({ searchTerm, cursor, limit }) => {
        return {
          url: '',
          body: JSON.stringify(
            {
              query: `
                query getUsers($query: String!, $first: Int!, $after: String) {
                  search(type: USER, query: $query, last: $first, after: $after) {
                    edges {
                      cursor
                      node {
                        ... on User {
                          id
                          bio
                          name
                          location
                          login
                          url
                          avatarUrl
                        }
                      }
                    }
                      pageInfo {
                          endCursor
                          hasNextPage
                      }
                  }
                }
              `,
              variables: {
                query: searchTerm,
                after: cursor,
                first: limit
              },
              operationName: "getUsers"
            }
          )
        }
      },
      providesTags: ['Users'],
      serializeQueryArgs: ({ queryArgs }) => queryArgs.searchTerm,
      transformResponse: (response: UsersApiResponse) => ({
        // I Filter the reponse here, since some nodes return as empty objects from github
        users: response.data.search.edges.map(edge => edge.node).filter(user => user.id),
        endCursor: response.data.search.pageInfo.endCursor,
        hasNextPage: response.data.search.pageInfo.hasNextPage
      }),
      merge: (currentCache, newItems) => {
        currentCache.users.push(...newItems.users)
        currentCache.endCursor = newItems.endCursor
        currentCache.hasNextPage = newItems.hasNextPage
      },
      forceRefetch({ currentArg, previousArg, endpointState }) {
        if (currentArg?.searchTerm !== previousArg?.searchTerm) {
          return true
        }

        // @ts-expect-error I could not find where in the docs you type endpointState, it is the type of the state, which in this case is UsersApiSlice
        if (endpointState?.data?.endCursor === currentArg?.cursor) {
          // @ts-expect-error
          return endpointState?.data?.hasNextPage
        }

        return false
      },
    })
  })
})

export const { useGetUsersQuery } = usersApiSlice
