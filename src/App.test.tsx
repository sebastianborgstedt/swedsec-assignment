import { screen } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)

  expect(screen.getByLabelText("Search for GitHub users by name")).toBeInTheDocument()
  expect(screen.getByLabelText("Search for GitHub users by name")).toHaveTextContent("")
})
