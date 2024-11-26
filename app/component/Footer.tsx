'use client';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import email from '../../public/email.svg';
import phone from '../../public/phone.svg';
import locationIcon from '../../public/location.svg';
import facebookIcon from '../../public/facebook.svg';
import whatsappIcon from '../../public/whatsapp.svg';
import twiterIcon from '../../public/twitter.svg';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-white border-2 border-gray-200 py-6 flex flex-col md:flex-row items-center shadow-[2px] bottom-0">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row gap-6 w-[90%] md:ml-40 py-6 flex-2 place-content-between">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Image src={Logo} alt="Logo image" width={50} />
        <div>
          <ul className="list-none text-center md:text-left flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <span>
                <Image src={email} alt="Email Icon" width={15} />
              </span>
              <span className="text-gray-700">ejohdaryl@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Image src={phone} alt="Phone Icon" width={15} />
              </span>
              <span className="text-gray-700">+237 6 58 93 71 24</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Image src={locationIcon} alt="Location Icon" width={15} />
              </span>
              <span className="text-gray-700">ICT University</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row gap-10 w-[90%] p-4 md:p-10 items-center md:items-start">
      {/* Navigation Links */}
      <div className="text-center md:text-left">
        <ul className="list-none space-y-2 text-gray-700">
          <li className="font-semibold text-gray-900">Home</li>
          <li>Benefits</li>
          <li>Our Courses</li>
          <li>Our Testimonials</li>
          <li>Our FAQs</li>
        </ul>
      </div>
  
      {/* About Us */}
      <div className="text-center md:text-left">
        <ul className="list-none space-y-2 text-gray-700">
          <li className="font-semibold text-gray-900">About Us</li>
          <li>Company</li>
          <li>Our Goals</li>
        </ul>
      </div>
  
      {/* Social Profiles */}
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h1 className="font-semibold text-gray-900">Social Profiles</h1>
        <div className="flex gap-4 justify-center">
          <Link href="#">
            <Image
              src={facebookIcon}
              alt="Facebook Icon"
              width={30}
              height={30}
              className="hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="#">
            <Image
              src={whatsappIcon}
              alt="WhatsApp Icon"
              width={30}
              height={30}
              className="hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="#">
            <Image
              src={twiterIcon}
              alt="Twitter Icon"
              width={30}
              height={30}
              className="hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Footer;