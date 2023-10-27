import aboutImg1 from '../../../assets/images/about_us/person.jpg';
import aboutImg2 from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='max-w-[1140px] flex justify-between items-center gap-14'>
            <div className='w-[45%] relative flex justify-center items-center'>
                <img src={aboutImg1} alt="" className='w-[90%] bg-contain mt-[-80px] rounded shadow-[0_0_70px_#c9c9c9]'/>
                <img src={aboutImg2} alt="" className='absolute z-10 w-[60%] border-8 border-white rounded bottom-[0] right-0 bg-cover mb-[-100px] mr-[-20px] shadow-[0_60px_50px_#C2BEC14F]'/>
            </div>
            <div className='w-[55%] flex-1 flex flex-col justify-center items-left gap-5'>
                <h3 className='text-xl font-bold text-main'>About Us</h3>
                <h2 className='text-4xl font-bold text-sub w-[50%]'>We are qualified & of experience in this field</h2>
                <p className='text-base text-gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {'don\'t'} look even slightly believable.</p>
                <p className='text-base text-gray'>the majority have suffered alteration in some form, by injected humour, or randomised words which {'don\'t'} look even slightly believable. </p>
                <button className='bg-main px-4 py-2 rounded text-white font-semibold w-fit'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;