import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Cards from "./pages/Cards"
import Details from "./pages/Details"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path='sign-up' element={<SignUp />} />
      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='cards' element={<Cards />} />
        <Route path='cards/:index' element={<Details />} />
      </Route>
    </Routes>
  </ChakraProvider>
)
