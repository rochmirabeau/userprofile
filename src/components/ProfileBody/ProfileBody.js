import React from 'react'

export default (props) => {
    const { stats, blurb , profileImage } = props
  return(
  <div className="body">
        <ProfilePic 
          profileImage = { profileImage }
        />
        <AddButton />
        <div>
        {
          stats.map(stat => <span key={ stat.name } className="body-stats"> { stat.name } <span> { stat.value } </span></span>)
        }
        </div>
        <div className="u-clearfix"></div>
        <ProfileBodyInfo
          blurb= { blurb }  
        />
      </div>

)
}

export const AddButton = (props) => {
  return(
            <div className="body-action-button u-flex-center">
              <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>

  )
}

export const ProfileBodyInfo = (props) => {
  const { blurb } = props
  console.log("hi roch" + blurb)
  return(
    <div>
    <div className="body-info">
    {
      blurb.map(paragraph => <p> { paragraph } </p>)
    }
    <div className="body-more">
    <span></span>
    <span></span>
    <span></span>
    </div>
    </div>
    </div>
  )

}

export const ProfilePic = (props)=>{
  const { profileImage } = props
  return(
            <img src={ profileImage } alt="Hugh Jackman" className="body-image" />
    
  )
}
