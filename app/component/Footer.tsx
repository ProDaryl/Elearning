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
    <div className="bg-white border-white py-6 flex max-sm:flex-col items-center bottom-0">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row gap-4 w-[90%] md:ml-40 py-10 flex-2 place-content-between">
    <div className="flex flex-col gap-4 items-center md:items-start">
      <Image src={Logo} alt="Logo image" width={50} />
      <div>
        <ul className="list-none text-center md:text-left flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span>
              <Image src={email} alt="Email Icon" width={15} />
            </span>
            ejohdaryl@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <span>
              <Image src={phone} alt="Phone Icon" width={15} />
            </span>
            +237 6 58 93 71 24
          </li>
          <li className="flex items-center gap-2">
            <span>
              <Image src={locationIcon} alt="Location Icon" width={15} />
            </span>
            ICT University
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="flex flex-col md:flex-row gap-10 w-[90%] p-4 md:p-10 items-center md:items-start">
    {/* Navigation Links */}
    <div className="text-center md:text-left">
      <ul className="list-none space-y-2">
        <li className="font-semibold">Home</li>
        <li>Benefits</li>
        <li>Our Courses</li>
        <li>Our Testimonials</li>
        <li>Our FAQs</li>
      </ul>
    </div>

    {/* About Us */}
    <div className="text-center md:text-left">
      <ul className="list-none space-y-2">
        <li className="font-semibold">About Us</li>
        <li>Company</li>
        <li>Our Goals</li>
      </ul>
    </div>

    {/* Social Profiles */}
    <div className="flex flex-col gap-3 items-center md:items-start">
      <h1 className="font-semibold">Social Profiles</h1>
      <div className="flex gap-4 justify-center">
        <Link href="#">
          <Image src={facebookIcon} alt="Facebook Icon" width={30} height={30} />
        </Link>
        <Link href="#">
          <Image src={whatsappIcon} alt="WhatsApp Icon" width={30} height={30} />
        </Link>
        <Link href="#">
          <Image src={twiterIcon} alt="Twitter Icon" width={30} height={30} />
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer;