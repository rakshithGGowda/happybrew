import React from 'react'

function Explore() {
  return (
    <div className='explore'>
      <div className='explore-container'>
        <div className='explore-title'>
          <h1 className='title' style={{WebkitTextStroke: "3px #fdff6d",textAlign:"center"}} >ESCAPE THE ORDINARY</h1>
        </div>
        <div className='explore-content'>
          <div className='explore-content-item'>
                <div className='explore-content-item-title'>
                  <h2 style={{fontSize:"1.875rem",textTransform: "uppercase",textDecoration: "underline",textDecorationColor:"#FC7701"}}>World-class cocktails under the arches</h2>
                </div>
                <div style={{fontSize:"1.1rem"}} className='explore-content-item-desc'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris euismod, nunc eget euismod consectetur, nunc nisi
                    tincidunt nisi, euismod consectetur nunc nisi euismod.
                    Pellentesque euismod, nunc eget euismod consectetur, nunc
                    nisi tincidunt nisi, euismod consectetur nunc nisi euismod.
                    Pellentesque euismod, nunc eget euismod consectetur, nunc
                    nisi tincidunt nisi, euismod consectetur nunc nisi euismod.
                  </p>
                  <div  className='book-table-btn' style={{margin:"auto",borderColor:"#fff"}}>
                    <a href='' style={{color:"#fff"}} >BOOK A TABLE</a>
                  </div>
                </div>
          </div>
          <div className="explore-img-container">
              <div className="explore-image"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore