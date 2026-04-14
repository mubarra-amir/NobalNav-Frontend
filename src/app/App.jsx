import { lazy, Suspense, useState, useEffect } from "react";
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
const Login = lazy(() => import("./pages/Login"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("nn_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const handleSetUser = (u) => {
    setUser(u);
    if (u) {
      localStorage.setItem("nn_user", JSON.stringify(u));
    } else {
      localStorage.removeItem("nn_user");
    }
  };

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
            <Route element={<Layout user={user} setUser={handleSetUser} />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/clients" element={<OurClients />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route
                path="/book"
                element={
                  user ? (
                    <BookAppointment user={user} />
                  ) : (
                    <Login setUser={handleSetUser} />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Auth pages — outside Layout so they have their own full-screen design */}
            <Route path="/login" element={<Login setUser={handleSetUser} />} />
            <Route path="/admin" element={<AdminLogin setIsLoggedIn={setIsAdminLoggedIn} />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute isAuth={isAdminLoggedIn}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
