import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Fix import statement

import Results from "./Results";
import Search from "./Search";

export function MainRoutes() {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/images" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
        <Route exact path="/news" element={<Results />} />

        {["/search", "/images", "/videos"]}
      </Routes>
    </div>
  );
}
