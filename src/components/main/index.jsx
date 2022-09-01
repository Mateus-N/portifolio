import React, { useState, useEffect } from "react";
import './styles.css'
import Repositories from "../repositories";

export default () => {

  const [repos, setRepos] = useState([])

  useEffect (() => {
    fetch (`https://api.github.com/users/Mateus-N/repos`)
      .then ( response => response.json())
      .then ( data => {
        setRepos (data)
      })
  }, [])

  return (

    <div className="main card">
      {
        repos.map ( repo => (
          <Repositories
            key={repo.name}
            userName={repo.owner.login}
            name={repo.name}
            description={repo.description}
            link={repo.html_url}
          />
        ))
      }
    </div>

  )

}
