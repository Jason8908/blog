import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import ChapterList from "./pages/ChapterList"
import ChapterPost from "./pages/ChapterPost"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chapters" element={<ChapterList />} />
          <Route path="chapters/:slug" element={<ChapterPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
