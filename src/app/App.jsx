import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurClients = lazy(() => import("./pages/OurClients"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop /> 
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen text-blue-600 text-lg">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/clients" element={<OurClients />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/admin" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute isAuth={isLoggedIn}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}