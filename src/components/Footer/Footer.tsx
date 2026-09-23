"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const [openColumn, setOpenColumn] = useState<number | null>(null);

  const toggleColumn = (index: number) => {
    setOpenColumn(openColumn === index ? null : index);
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettà muse.</p>
          <div className={styles.emailInput}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 123 5250</p>
          <p>customercare@mettamuse.com</p>

          <div className={styles.currency}>
            <h3>CURRENCY</h3>
            <div className={styles.currencySelect}>
              <div className={styles.flagIconWrapper}>
                <Image 
                  src="/images/us-icon.png" 
                  alt="United States Flag" 
                  width={24}
                  height={16}
                  className={styles.flagIcon}
                />
              </div>
              <span>USD</span>
            </div>
            <p className={styles.note}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.column}>
          <h3 className={styles.columnHeading}>mettà muse</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(0)}>
            <h4>mettà muse</h4>
            <span className={`${styles.columnToggle} ${openColumn === 0 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 0 ? styles.openMobile : ""}`}>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnHeading}>QUICK LINKS</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(1)}>
            <h4>QUICK LINKS</h4>
            <span className={`${styles.columnToggle} ${openColumn === 1 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 1 ? styles.openMobile : ""}`}>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnHeading}>FOLLOW US</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(2)}>
            <h4>FOLLOW US</h4>
            <span className={`${styles.columnToggle} ${openColumn === 2 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 2 ? styles.openMobile : ""}`}>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>
                <div className={styles.socialImgWrapper}>
                  <Image 
                    src="/images/instagram-icon.png" 
                    alt="Instagram" 
                    width={24}
                    height={24}
                    className={styles.socialImg}
                  />
                </div>
              </a>
              <a href="#" className={styles.socialIcon}>
                <div className={styles.socialImgWrapper}>
                  <Image 
                    src="/images/linkedin-icon.png" 
                    alt="LinkedIn" 
                    width={24}
                    height={24}
                    className={styles.socialImg}
                  />
                </div>
              </a>
            </div>

            <p className={styles.accepts}>mettà muse ACCEPTS</p>
            <div className={styles.payments}>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/google-pay-icon.png" 
                    alt="Google Pay" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/mastercard-icon.png" 
                    alt="Mastercard" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/paypal-icon.png" 
                    alt="PayPal" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/american-express-icon.png" 
                    alt="American Express" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/apple-pay-icon.png" 
                    alt="Apple Pay" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
              <div className={styles.payment}>
                <div className={styles.paymentImgWrapper}>
                  <Image 
                    src="/images/opay-payment-icon.png" 
                    alt="Samsung Pay" 
                    width={40}
                    height={24}
                    className={styles.paymentImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}