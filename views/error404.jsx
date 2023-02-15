const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/404-page.png" alt="404 page"
                width="900"
                height="800" 
                />
                <div>
                Photo by <a href="https://img.lovepik.com/free_png/32/49/27/91H58PICBSifDYEudS56f_PIC2018.png_300.png">Unknown</a> on 
                <a href="https://img.lovepik.com/free_png/32/49/27/91H58PICBSifDYEudS56f_PIC2018.png_300.png">lovepik</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
