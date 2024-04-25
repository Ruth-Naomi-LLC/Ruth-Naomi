import Link from 'next/link';

const Footer = ({ white_bg = '' }) => {
   return (
     <>
       <footer>
         <div className="footer__area">
           <div
             className={`footer__top grey-bg-4 pt-95 pb-45 ${
               white_bg && white_bg
             }`}
           >
             <div className="container">
               <div className="row">
                 <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                   <div className="footer__widget footer-col-1 mb-10">
                     <div className="footer__logo">
                       <div className="logo">
                         <Link href="/">
                           <a>
                             <img src="/assets/img/logo/r&n-2.png" alt="" />
                           </a>
                         </Link>
                       </div>
                     </div>
                     <div className="footer__widget-content">
                       <div className="footer__widget-info">
                         <div className="footer__social">
                           <h3>Follow Us</h3>

                           <ul>
                             <li>
                               <a href="https://www.facebook.com/RUTH416/">
                                 <i className="fa-brands fa-facebook-f"></i>
                               </a>
                             </li>
                             <li>
                               <a href="https://www.tiktok.com/@nxt2godlyness">
                                 <i className="fa-brands fa-tiktok"></i>
                               </a>
                             </li>
                             <li>
                               <a href="https://www.instagram.com/ruthnnaomico?fbclid=IwAR3P2qOj_wnGVR3O4pyyoOGTkhq7Ly8qH__nRDjnUOQuYGYxn6xL9V22mHc">
                                 <i className="fa-brands fa-instagram"></i>
                               </a>
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                   <div className="footer__widget mb-30">
                     <h3 className="footer__widget-title">Explore</h3>
                     <div className="footer__widget-content">
                       <ul>
                         <li>
                           <a href="#">About us</a>
                         </li>
                         <li>
                           <a href="#">Success story</a>
                         </li>
                         <li>
                           <a href="#">Contact us</a>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                   <div className="footer__widget mb-30">
                     <h3 className="footer__widget-title">Links</h3>
                     <div className="footer__widget-content">
                       <ul>
                         <li>
                           <a href="#">Gallery</a>
                         </li>
                         <li>
                           <a href="#">Terms of service</a>
                         </li>
                         <li>
                           <a href="#">Subscription</a>
                         </li>
                         <li>
                           <a href="#">Career</a>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                   <div className="footer__widget footer-col-4 mb-30">
                     <h3 className="footer__widget-title">
                       Sign up for our newsletter
                     </h3>

                     <div className="footer__subscribe">
                       <p>
                         Receive promotional offers or join our loyalty membership!
                       </p>
                       <form action="#">
                         <div className="footer__subscribe-input">
                           <input type="text" placeholder="Email" />
                           <button type="submit" className="tp-btn-subscribe">
                             Subscribe
                           </button>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className={`footer__bottom grey-bg-4 ${white_bg && white_bg}`}>
             <div className="container">
               <div className="footer__bottom-inner">
                 <div className="row">
                   <div className="col-xxl-12">
                     <div className="footer__copyright text-center">
                       <p>© 2024 Ruth and Naomi Co LLC. All Rights Reserved</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </footer>
     </>
   );
};

export default Footer;