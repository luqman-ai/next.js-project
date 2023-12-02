import Image from 'next/image'
import {myblog} from './blog/[slug]/page'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link'
 
function Home() {
  return (<html lang="en">
        
        
  <body/>
      <section className="Sub-header">
          <nav>
              <a href="/" className="logo">Xplore
                  <i className="fab fa-staylinked"></i>kill
              </a>
              <div className="nav-links" id="navLinks">
                  {/*<!-- reposnive bar open and close -->*/}
                  <i className="fa fa-times" onClick="hideMenu()"></i>
                  <ul>
                  <li><a href="/">Home</a></li>
                  {myblog.map((post) => (
      <li key={post.id}>
        <Link href={`/blog/${post.id}`}>{post.slug}</Link>
      </li>
    ))}
                  </ul>
              </div>
              <i className="fa fa-bars" onClick="showMenu()"></i>
              {/*<!-- reposnive bar open and close -->*/}
          </nav>
          <h1>Our Post</h1>
      </section>
    </html>
  )
}
 
export default Home

 
