
import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../Header/Header.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailPage = lazy(() => import("../../pages/CamperDetailPage/CamperDetailPage.jsx"));
import NotFound from "../../pages/NotFound/NotFound.jsx";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailPage />} >
            <Route path="features" element={<CamperFeatures/>} />
            <Route path="reviews" element={<CamperReviews />} />
           </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
