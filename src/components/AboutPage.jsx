import git from '../assets/icons/git.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.png';
import grace from '../assets/icons/gracie.jpeg'

const AboutPage = () => {
    return (
        <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container'>
            <div className="text-white relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
                <h1 className="flex text-6xl font-extrabold font-serif">Hello its me</h1>
                <h1 className="text-6xl font-extrabold font-sans mb-2">Grace Muthui</h1>
                <h2 className="text-4xl font-medium mb-4">And i am a <span className='text-blue-400'>frontend  Developer</span></h2>
                <div className='inline-block text-left mb-8 text-xl'>
                    <p>Welcome to my frontend developer portfolio! I am passionate
                        about crafting elegant and intuitive user interfaces that bring
                        ideas to life on the web. With 1 years of experience in frontend development,I specialize in leveraging cutting-edge technologies to build responsive and visually appealing websites and web applications.</p>
                </div>
                <div className='flex gap-12'>
                    <a href="https://github.com/gragra-kj"  ><img src={git} alt="git" className='h-30 w-36'  /></a>
                    <a href="https://www.instagram.com/katee_arg/?next=%2F&hl=en"><img src={instagram} alt="" className='h-30 w-36' /></a>
                    <a href="https://www.linkedin.com/in/grace-muthui-b33730230/"><img src={linkedin} alt="" className='h-30 w-36'  /></a>
                    <a href=""><img src={twitter} alt="" className='h-30 w-36' /></a>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mt-16'>Download CV</button>
            </div>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center'>
                <img src={grace} alt="" className='rounded-full relative object-contain z-10 h-115 w-110'/>
            </div>
        </section>
    )
}

export default AboutPage