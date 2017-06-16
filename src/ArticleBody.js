import React, { Component } from 'react';
import './ArticleBody.css'
import Author from './Author'
import ArticleText from './ArticleText'
import ArticleTitle from './ArticleTitle'
import ArticleLinks from './ArticleLinks'
import Aside from './Aside'
import OtherArticles from './OtherArticles'


class ArticleBody extends Component {
    render() {
        return (
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <ArticleTitle />

            <Author />

            <ArticleText />

            <ArticleLinks />

          </div>

            <Aside />

            <OtherArticles />

        </main>
        )
    }
}

export default ArticleBody