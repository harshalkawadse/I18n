import React,{ useState } from 'react'
import "./Home.css"
import I18n from "./../../utils/I18n";
function Home() {
const usersCount = 2500;

 return (
        <div>
            <h1>  {I18n("welcomeMessage")}  </h1>

            <h2>  {I18n("normalMessage")} </h2>

            <h3>  {I18n("greetingMessage")}  </h3>

              <h2>
               {I18n("usersStatmessage","<studentcount>",usersCount)}

             </h2>

            <h5> {I18n("endMessage")}</h5>

 <select 
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang",e.target.value);
                window.location.reload();

            }}>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
                <option value="en">English</option>
 </select>
</div>
    )
}
export default Home
