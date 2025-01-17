import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import AboutUs from "./pages/aboutUs";
import { ThankYou } from "./pages/thank-you-page";
import { Contact } from "./pages/contact";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import { Dashboard } from "./pages/dashboard";
import { DashboardHistory } from "./pages/dashboard-history";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<AboutUs />} path="/aboutUs" />
                        <Route element={<ThankYou />} path="/thank-you-page" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ForgotPassword />} path="/forgot-password" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route element={<DashboardHistory />} path="/dashboard-history" />

                        <Route element={<ThankYou />} path="/thank-you-page" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
