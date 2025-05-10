import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet";



function Layout({ children,title,description,keywords,author }) {

  useEffect(() => {
    document.title = title || "My App";
  }, [title]);


  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main className="py-20" style={{minHeight:'90vh'}}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "My app",
  description: "MERN Stack Website",  
  keywords: "MERN, React, Node, Express, MongoDB",
  author: "Prasad",
};

export default Layout;
