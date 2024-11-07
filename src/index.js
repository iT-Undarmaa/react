import React , {useState } from 'react';
import ReactDOM from 'react-dom';
const PAGE_NAMES={
  HOME: "HOME",
  ABOUT_ME: "ABOUT_ME",
  CONTACT_ME: "CONTACT_ME"
}
function PageContent({pageName}){
if (pageName==PAGE_NAMES.HOME){
  return (
    <>
    <h1>Home</h1>
    <p>Oonh. Finally I'm home!.</p>
    </>
  )
  }else if (pageName==PAGE_NAMES.ABOUT_ME){
  return (
    <>
    <h1>About me</h1>
    <p>This is about me. I can explain myself here.</p>
    </>
  ) 
} else if(pageName==PAGE_NAMES.CONTACT_ME){
  return (
    <>
    <h1>Contact me</h1>
    <p>You can contact me through Odosury.</p>
    </>
  ) 
} }
function App(props){
  const [pageName, setPageName]=useState(PAGE_NAMES.HOME)
  return (
 <>
 <nav>
  <ul>
    <li onClick={()=>{setPageName(PAGE_NAMES.HOME)}}>Home</li>
    <li onClick={()=>{setPageName(PAGE_NAMES.ABOUT_ME)}} >About me</li>
    <li onClick={()=>{setPageName(PAGE_NAMES.CONTACT_ME)}} >Contact me</li>
    </ul>
    </nav>
<PageContent pageName={pageName}/>
  </>
 );
  }
  ReactDOM.render(<App />,document.getElementById("root"));
