import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ent1 from '../../../img/articles/ent1.jpg';
import tech1 from '../../../img/articles/tech1.jpg';
import sports1 from '../../../img/articles/sports1.jpg';
import tech2 from '../../../img/articles/tech2.jpg';
import ent2 from '../../../img/articles/ent2.jpg';


function Articles(props) {
  return (
    <section id="home-articles" className="py-2">
    <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          <article className="card">
            <Link to = "/article"><img src={ent1} alt="" /></Link>
            <div>
              <div className="category category-ent">Entertainment</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
          </article>
          <article className="card bg-dark">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <img src={tech1} alt="" />
            <div className="category category-tech">Technology</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            <img src={sports1} alt="" />
          </article>
          <article className="card">
            <img src={tech2} alt="" />
            <div className="category category-tech">Technology</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card bg-primary">
            <div className="category category-sports">Sports</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
          </article>
          <article className="card">
            <div>
              <div className="category category-ent">Entertainment</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
            <img src={ent2} alt="" />
          </article>
        </div>
    </div>
  </section>
  )
}

Articles.propTypes = {

}

export default Articles

