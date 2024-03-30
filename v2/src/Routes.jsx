import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, Blog, Chat, Login, SignUp, NotFound, Blogs, CreateBlog } from "pages";
import PricingPage from "pages/Pricing";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
