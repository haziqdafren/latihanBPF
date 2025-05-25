
import { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";



import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout"; 
import GuestLayout from "./layouts/GuestLayout";

import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import Register from "./pages/auth/Register";
import Loading from "./components/Loading";

import Hero from "./components/Hero";
import Product from "./components/Product";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import MembershipCheckPage from "./components/MembershipCheckPage";

import React from "react";

// Lazy loaded pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customer"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const User = React.lazy(() => import("./pages/User"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Admin Dashboard Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/user" element={<User />} />

          <Route path="/error-400" element={<ErrorPage errorCode={400} />} />
          <Route path="/error-401" element={<ErrorPage errorCode={401} />} />
          <Route path="/error-402" element={<ErrorPage errorCode={402} />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Guest Layout Routes - These are your public facing routes */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/news" element={<NotFound />} /> {/* Replace with actual News component when available */}
          <Route path="/contact" element={<NotFound />} /> {/* Replace with actual Contact component when available */}
          <Route path="/check-membership" element={<MembershipCheckPage />} />
          {/* Add other guest routes here */}
        </Route>

        {/* Global fallback for all routes not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;