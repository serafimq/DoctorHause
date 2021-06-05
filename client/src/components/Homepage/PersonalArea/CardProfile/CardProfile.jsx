/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import style from './CardProfile.module.css'

const CardProfile = () => {
  return (
    <div>
        <div class="card profile-card">
              <figure>
                <img src="https://i.ibb.co/hghhKRN/jp-00158-x-UAMV.jpg" className="img-fluid img-profile" alt="Card image"/>
              </figure>
              <div class="card-block text-xs-center">
              </div>
        </div> 
        <div className={style.line}></div> 
    </div>
  )
}

export default CardProfile
