import React from 'react'


export default () => {
  return(
        <div className="card u-clearfix">
              <span className="card-heading">Movies</span>
              <span className="card-more">
                <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </span>
              <ul className="card-list">
                <li><img src="https://s12.postimg.cc/c0ryp65lp/m1f.jpg" alt="" /></li>
                <li><img src="https://s14.postimg.cc/6ts0it3xt/m2f.jpg" alt="" /></li>
                <li><img src="https://s13.postimg.cc/ri499o2zr/m3f.jpg" alt="" /></li>
              </ul>
            </div>

  )
}
