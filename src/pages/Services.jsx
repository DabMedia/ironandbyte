import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => {
    return (
        <div className="min-h-screen py-10 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
            <Outlet />
        </div>
    );
};

export default Services;
