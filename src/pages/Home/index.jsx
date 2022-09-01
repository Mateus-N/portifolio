import React from "react";
import Aside from "../../components/aside"
import Main from "../../components/main";
import './styles.css'


export default () => {

  return (
    <div className="home">
      <div className="body">
        <aside>
          <Aside />
        </aside>
        <main>
          <Main />
        </main>
      </div>
    </div>
  )
}
