/*ORGANIZE LIKE THIS:
You will organize it into these components:
(Indented components are suppose to be nested. E.g. Header should render a Navbar component
and BlogList should render a BlogPost component).

<Header />
    <Navbar />
<BlogList />
    <BlogPost />
<Footer />


You will pass <BlogPost /> its title, subTitle, author, and date through props.

For now, we're using hard-coded data (seen below), but eventually you'll be able to pull this 
data from an API instead.
*/

import React from "react"
import blogs from "./blogs"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"


function App() {
    const blogInfo = blogs.map((blog, index) => {
        return <BlogList
            key={blog.index}
            title={blog.title}
            subtitle={blog.subtitle}
            author={blog.author}
            date={blog.date}
        />
    })

    return (
        <div>
            <Header />
            {blogInfo}
            <Footer />
        </div>

    )

}

export default App