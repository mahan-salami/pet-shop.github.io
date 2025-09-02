import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
import Logo from '../assets/12.png'
export default function PetShopLayout() {
  return (
  

    
      <footer className="bg-gray-100 px-10 py-6 mt-30">
        <div className="flex flex-wrap justify-around gap-8">
          {/* Footer Info */}
          <div className="text-center">
            <img
              src={Logo}
              alt="Pet Shop Logo"
              className="w-28 mx-auto mb-3"
            />
            <p className="text-gray-600">جامعه دوستداران حیوانات ایران</p>
            <div className="flex justify-center gap-3 mt-3 text-xl text-blue-500">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaTelegram /></a>
            </div>
          </div>

          {/* Sections */}
          <div className="text-right">
            <h4 className="text-gray-800 font-semibold mb-2">خرید حیوانات</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">سگ‌ها</a></li>
              <li><a href="#">گربه‌ها</a></li>
              <li><a href="#">پرندگان</a></li>
              <li><a href="#">ماهی‌ها</a></li>
              <li><a href="#">جوندگان</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-gray-800 font-semibold mb-2">لوازم حیوانات</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">غذا و مکمل</a></li>
              <li><a href="#">اسباب‌بازی</a></li>
              <li><a href="#">لوازم نظافتی</a></li>
              <li><a href="#">وسایل خواب</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-gray-800 font-semibold mb-2">خدمات</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">دامپزشکی</a></li>
              <li><a href="#">آرایش و بهداشت</a></li>
              <li><a href="#">آموزش</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-gray-800 font-semibold ">درباره ما</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">تماس با ما</a></li>
              <li><a href="#">همکاری با ما</a></li>
              <li><a href="#">قوانین و مقررات</a></li>
              <li><a href="#">بلاگ</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 text-sm border-t mt-6 pt-4">
         کلیه حقوق این وبسایت متعلق به پاپت شاپ می باشد 
        </div>
      </footer>
  
  );
}
