import Navbar from'./Navbar'

export default function DesktopNav() {
 
  const date = new Date().getFullYear()
  // const checkActive 
  return (
    <div id='sidebar' >
      <span style={{fontWeight:'bold', fontSize:20, marginRight:25}}>DAVISjs</span>
      <Navbar />
      <span><i class="nav-lines las la-bars" style={{fontSize:30}}></i></span>
    </div>
  )
}
