export default function FavoriteBookOverlay({ isOpen, onClose, bookImage }) {
  if (!isOpen) return null;

  return (
    <div className="book-overlay-backdrop">
      <button
       className="book-overlay-close"
       onClick={(e) => {
       e.stopPropagation();
       onClose();
      }}
    >
        ×
    </button>

      <div
        className="book-overlay-content"
        onClick={(e) => e.stopPropagation()}
      >
       <div className="book-overlay-image-panel">
        <img
          src={bookImage}
          alt="Americanah book cover"
          className="book-overlay-image"
        />
       </div>

        <div className="book-overlay-text">
          <p className="book-overlay-eyebrow">Favourite Read</p>

          <h2 className="book-overlay-heading">One of my favorite books</h2>

          <p className="book-overlay-description">
            <a
              className="book-overlay-inline-link"
              href="https://a.co/d/0caIdd5g"
              target="_blank"
              rel="noreferrer"
            >
              Americanah
            </a>{" "}
            is a very witty and authentic depiction of the immigrant
            experience, and it deeply resonates with me.
          </p>

          <a
            className="book-overlay-button"
            href="https://a.co/d/0caIdd5g"
            target="_blank"
            rel="noreferrer"
          >
            View on Amazon ↗
          </a>
        </div>
      </div>
    </div>
  );
}