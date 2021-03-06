import React from 'react';


const NavBar = (props) =>{

    // window.onscroll = () => {
    //     let nav = document.getElementById('main--container__style');
    //     let topPos = nav.offsetTop;
    //     console.log(topPos); 
    //   };

    return(
        <div className="row__content">
            <header>
                <nav className="desktop--container__style">
                    <ul className="desktop--items__stlye">
                        <a href="#start-tag"><img src={require("../Assets/Tonys_Logo_TW.png")} alt="main-logo" className="desktop--img__style"/></a> 
                        <li ><a href="#project-tag" className="desktop--link__style">Projects</a></li>
                        <li ><a href="#about-tag" className="desktop--link__style">About Me</a></li>
                        <li ><a href="#skill-tag" className="desktop--link__style">Skills</a></li>
                        <li ><a href="#contact-tag" className="desktop--link__style">Contact Me</a></li>
                    </ul>
                </nav>

                <nav className= "mobile--container__style" onScroll={(event)=>this.handleNavScroll(event)}> 
                    <a href="#start-tag"><img src={require("../Assets/Tonys_Logo_TW.png")} alt="main-logo" className="main--img__style"/></a> 
                    <i className="fas fa-bars" onClick={()=> props.handletoggleNavMenu()}></i>   
                        { props.toggleNavMenuStatus === true &&
                        <ul className="main--items__style">
                            <span className="close--stlye" onClick={()=>props.handletoggleNavMenu()}>&times;</span>
                            <li ><a href="#project-tag" className="mobile--link__style" onClick={()=>props.handletoggleNavMenu()}>Projects</a></li>
                            <li ><a href="#about-tag" className="mobile--link__style" onClick={()=>props.handletoggleNavMenu()}>About Me</a></li>
                            <li ><a href="#skill-tag" className="mobile--link__style" onClick={()=>props.handletoggleNavMenu()}>Skills</a></li>
                            <li ><a href="#contact-tag" className="mobile--link__style" onClick={()=>props.handletoggleNavMenu()}>Contact Me</a></li>
                        </ul>
                        }
                </nav>
            </header> 
        </div>
    )
};

export default NavBar;