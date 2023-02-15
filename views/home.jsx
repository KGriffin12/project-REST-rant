const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/bread-and-berries.jpg" alt="Bread with raspberries"
                width="900"
                height="800" 
                />
                <div>
                Photo by <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a> on 
                <a href="https://unsplash.com/photos/eicwDsIM0_E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                 <button className="btn-primary">Places Page</button>
                 <link rel="stylesheet" href="/css/style.css"/>
              </a>

          </main>
      </Def>
    )
  }  

module.exports = home
