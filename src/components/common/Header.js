import './header.css';

function Header() {
    const name = sessionStorage.getItem("usernm");
    const deptnm = sessionStorage.getItem("deptnm");
    const memberimgnm = sessionStorage.getItem("memberimgnm");
  return (
      <nav className="w_bg nav_top fix_top">
        <div className="header_wrapper">
            <div className="flex_center header_logo">
                <a className="logo_right" href="/">
                    <div className="loginBoxTitle header_text">TeamHRD_K</div>
                </a>
            </div>
            <ul className="flex_center nav_right">
                <li>{name}</li>
                <li>
                    {
                        deptnm === "undefined" ?
                        null : deptnm
                    }
                </li>
                <li >
                    <img src={`${process.env.REACT_APP_SERVER}/member/memberimg/` + memberimgnm} style={{borderRadius: "20px", width:"40px", height:"40px"}} />
                </li>
            </ul>
        </div>
     </nav>
  );
}

export default Header;
