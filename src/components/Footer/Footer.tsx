"use client";

import { useState } from "react";
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
          <h2>Subscribe to our emails</h2>
          <p>Get the latest updates, promotions, and more.</p>
          <div className={styles.emailInput}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>support@example.com</p>
          <p>+1 (555) 123-4567</p>
          <a href="#">Help Center</a>

          <div className={styles.currency}>
            <h3>Currency</h3>
            <div className={styles.currencySelect}>
              <img src="/images/us-icon.png" alt="US" className={styles.flagIcon} />
              <span>USD $</span>
            </div>
            <p className={styles.note}>Transactions are processed in USD.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.column}>
          <h3 className={styles.columnHeading}>Shop</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(0)}>
            <h4>Shop</h4>
            <span className={`${styles.columnToggle} ${openColumn === 0 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 0 ? styles.openMobile : ""}`}>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnHeading}>Company</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(1)}>
            <h4>Company</h4>
            <span className={`${styles.columnToggle} ${openColumn === 1 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 1 ? styles.openMobile : ""}`}>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnHeading}>Support</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(2)}>
            <h4>Support</h4>
            <span className={`${styles.columnToggle} ${openColumn === 2 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 2 ? styles.openMobile : ""}`}>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnHeading}>Follow Us</h3>
          <div className={styles.columnHeader} onClick={() => toggleColumn(3)}>
            <h4>Follow Us</h4>
            <span className={`${styles.columnToggle} ${openColumn === 3 ? styles.open : ""}`}>▼</span>
          </div>
          <div className={`${styles.columnContent} ${openColumn === 3 ? styles.openMobile : ""}`}>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/instagram-icon.png" alt="Instagram" className={styles.socialImg} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/linkedin-icon.png" alt="LinkedIn" className={styles.socialImg} />
              </a>
            </div>

            <p className={styles.accepts}>We Accept</p>
            <div className={styles.payments}>
              <div className={styles.payment}>
                <img src="/images/american-express-icon.png" alt="American Express" className={styles.paymentImg} />
              </div>
              <div className={styles.payment}>
                <img src="/images/apple-pay-icon.png" alt="Apple Pay" className={styles.paymentImg} />
              </div>
              <div className={styles.payment}>
                <img src="/images/google-pay-icon.png" alt="Google Pay" className={styles.paymentImg} />
              </div>
              <div className={styles.payment}>
                <img src="/images/mastercard-icon.png" alt="Mastercard" className={styles.paymentImg} />
              </div>
              <div className={styles.payment}>
                <img src="/images/opay-payment-icon.png" alt="OPay" className={styles.paymentImg} />
              </div>
              <div className={styles.payment}>
                <img src="/images/paypal-icon.png" alt="PayPal" className={styles.paymentImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© 2024 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
