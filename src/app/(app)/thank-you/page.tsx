import Link from 'next/link';
import './thank-you.scss';

export default function ThankYouPage() {
  return (
      <div className="thank-you-page">
        <div className="container">
          <div className="thank-you-content">
            <h1 className="thank-you-title">
              <span>Дякуємо!</span>
            </h1>

            <p className="thank-you-description">
              Ваша заявка успішно відправлена. Ми зв&#39;яжемося з вами
              найближчим часом.
            </p>

            <div className="thank-you-actions">
              <Link href="/" className="default-btn">
                Повернутися на головну
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}