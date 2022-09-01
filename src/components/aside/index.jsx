import React, { useState, useEffect } from 'react'
import mapPin from '../../assets/map-pin.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import mail from '../../assets/mail.svg'
import './styles.css'

export default () => {

  const [user, setUser] = useState({ name: ``, avatar: ``})

  useEffect (() => {
    fetch (`https://api.github.com/users/Mateus-N`)
      .then ( response => response.json())
      .then ( data => {
        setUser ({
          name: data.name,
          avatar: data.avatar_url
        })
      })
      .catch ( error => console.error(error))
  }, [])

  return (
    <aside>
        <div className="perfil card">
          <img src={user.avatar} alt="Imagem de perfil" />
          <h1>{user.name}</h1>
          <p>ReactJS Developer</p>
        </div>
        <div className="infos card">
          <ul>
            <li>
              <a href="https://goo.gl/maps/Bax8xqLStZQ2ST8N9"target="_blank">
                <img src={mapPin} alt="Cidade" /> Patos/PB</a></li>
            <li>
              <a href="https://github.com/Mateus-N" target="_blank">
                <img src={github} alt="Git-hub" /> Mateus-N</a></li>
            <li>
              <a href="https://www.linkedin.com/in/mateusnunes620/" target="_blank">
              <img src={linkedin} alt="Linkedin" /> mateusnunes620</a></li>
            <li>
              <a href="https://twitter.com/mateusnunes620" target="_blank">
              <img src={twitter} alt="Twitter" /> mateusnunes620</a></li>
            <li>
              <a href="mailto:mateusnunes620@gmail.com" target="_blank">
              <img src={mail} alt="E-mail" /> mateusnunes620@gmail.com</a></li>
          </ul>
        </div>
        <div className="techs card">
          <table>
            <tr>
              <td>ReactJS</td>
              <td>NodeJS</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>HTML</td>
              <td>CSS</td>
              <td>Python</td>
            </tr>
          </table>
        </div>
      </aside>
  )
}
