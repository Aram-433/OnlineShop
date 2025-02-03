import styles from "./info.module.css";

function Info() {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.firstCard}>
          <h2 className={styles.about}>About Our Products</h2>
          <p>
            At Products Shop, we are committed to bringing you high-quality,
            carefully curated products <br /> designed to meet your needs and
            exceed your expectations. Each item in our collection <br />
            is chosen with thoughtfulness, whether it's crafted by skilled
            artisans or sourced from trusted suppliers.
          </p>
        </div>
        <img src="https://primal7movement.com/cdn/shop/files/about_img_600x_crop_center.png?v=1614312806" />
      </div>
      <p className={styles.message}>
        We believe in the power of quality – that's why we only offer products
        that are made to last <br />
        and crafted with care. From [list some types of products you sell, e.g.,
        handmade jewelry,
        <br /> eco-friendly home goods, premium skincare, etc.], we strive to
        ensure that every piece in <br />
        our shop not only serves a purpose but adds value to your life.
      </p>
      <p className={styles.support}>
        Thank you for supporting us and for choosing products that truly make a
        difference. We're excited to continue bringing you the best of what we
        love!
      </p>
    </>
  );
}

export default Info;
