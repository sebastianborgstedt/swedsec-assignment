import { screen } from '@testing-library/react'
import { UserCard } from './UserCard'
import { renderWithProviders } from '../../utils/test-utils'

describe('UserCard', () => {
  const mockUser = {
    login: 'mockUser',
    avatarUrl: 'http://mockavatar.url',
    url: 'http://mockprofile.url',
    id: 1,
    name: "mockName",
    bio: "mockBio",
    location: "mockLocation"
  }

  it('renders without crashing', () => {
    renderWithProviders(<UserCard user={mockUser} />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('displays the user avatar correctly', () => {
    renderWithProviders(<UserCard user={mockUser} />)
    const avatarImage = screen.getByAltText(`Github avatar for ${mockUser.login}`)
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', mockUser.avatarUrl)
  })

  it('links to the correct GitHub profile', () => {
    renderWithProviders(<UserCard user={mockUser} />)
    const profileLink = screen.getByRole('link')
    expect(profileLink).toHaveAttribute('href', mockUser.url)
  })

  it('displays the user login name correctly', () => {
    renderWithProviders(<UserCard user={mockUser} />)
    const loginName = screen.getByText(mockUser.login)
    expect(loginName).toBeInTheDocument()
  })
})
