import "./topBar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft"> 
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter"> 
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight"> 
            <img className="topImg" src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" alt="" />
            <i className="topSearchIcon fa-solid fa-search"></i>
        </div>
    </div>
  )
}
