import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

export default function Aoo() {
  return(
    <>
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       </Layout>
    </>
  )
}