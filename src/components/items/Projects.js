import weather from '../../data/images/weather.png'
import note from '../../data/images/noteTaker.png'
import github from '../../data/images/github.png'
import scheduler from '../../data/images/workSched.png'
import jstest from '../../data/images/jsTest.png'
import pwa from '../../data/images/pwaEditor.png'
import team from '../../data/images/team.png'
import Footer from '../items/Footer'

function Projects(){
    return(
        <section id="projects">
        <h2 class>My Projects</h2>   
        <div id="projectContainer">
            <div class="card">
                    <a href="https://lizandro21.github.io/hw04/">
                    <img src={jstest} alt="js test"></img>
                </a>
                <br></br>
                <br></br>
                <h3>Javascript Quiz!</h3>
                <p> <br></br>
                    Made a functioning javascript Quiz with questions and answers, including a leaderboard in local storage.
                </p>
                <a href="https://github.com/Lizandro21/hw04"><img className="githublogo" alt="github" src={github}></img></a>
            </div>

            <div class="card">
                    <a href="https://www.youtube.com/watch?v=FTGIHQkB7hY&feature=youtu.be">
                    <img src={team} alt="team generator"></img>
                </a>
                <br></br>
                <br></br>
                <h3>Team Profile Generator</h3>
                <p><br></br>
                    Generates a team with information provided by the user on a HTML page.
                </p>
                <a href="https://github.com/Lizandro21/Team-Profile-Creator"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                    <a href="https://warm-ravine-71815.herokuapp.com/">
                    <img src={pwa} alt="pwa editor"></img>
                </a>
                <br></br>
                <br></br>
                <h3>PWA Editor</h3>
                <p> <br></br>
                    A app where you can edit files/code it also can be downloaded.
                </p>
                <a href="https://github.com/Lizandro21/PWA-Editor"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                    <a href="https://lizandro21.github.io/Weather-App/">
                    <img src={weather} alt="weather Dashboard"></img>
                </a>
                <br></br>
                <h3>Weather App</h3>
                <p>
                     <br></br>
                    Made a weather app for cities where you can put in your information for the weather there.
                </p>
                <a href="https://github.com/Lizandro21/Weather-App"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                    <a href="https://morning-lake-75867.herokuapp.com/">
                    <img src={note} alt="note generator"></img>
                </a>
                <br></br>
                <h3>Note Taker App</h3>
                <p><br></br>
                    Simple app to take notes.
                </p>
                <a href="https://github.com/Lizandro21/Note-Taker"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                    <a href="https://lizandro21.github.io/Work-Day-Scheduler/">
                    <img src={scheduler} alt="work day scheduler"></img>
                </a>
                <br></br>
                <h3>Work Day Scheduler</h3>
                <p><br></br>
                    Simple calander based app to set up a schedule for work.
                </p>
                <a href="https://github.com/Lizandro21/Work-Day-Scheduler"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
        </div>   
      <Footer />
    </section>
    )
}

export default Projects