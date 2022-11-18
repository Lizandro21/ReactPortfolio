import Section from './items/Section';
import Footer from './items/Footer'

function Home(){
    return (
        <>
            
            <div className='homepage'>
                <h3>Hello welcome to Lizandro's Portfolio!</h3>
                <br></br>
                <p>Thanks for checking it out! Reach out to me or just check out my projects!</p>
            </div>
            <Section />
            <Footer />
        </>
    )
}

export default Home