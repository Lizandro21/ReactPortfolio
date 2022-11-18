import profile from '../../data/images/profile.jpg'

function Aside() {
    return(
        <aside id="aboutme">
            <h2>About Me</h2>
            <div id="about">
                <img id="profile" src={profile} alt="profile"></img>
                <p>
                    This is my first Portfolio being build using react!
                    <br></br>
                    I am a fullstack developer still learning!
                    <br></br>
                    Great work ethic and attitude! :D
                </p>
            </div>
        </aside>
    )
}

export default Aside