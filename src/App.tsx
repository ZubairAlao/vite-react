import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./components/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
