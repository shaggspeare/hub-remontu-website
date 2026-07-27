"use client";

import { useEffect } from "react";
import Image from "next/image";

import errorImg from "../../../public/images/error.png";

const CHUNK_ERROR_RELOAD_KEY = "chunk-load-error-reload";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkLoadError =
      error.name === "ChunkLoadError" ||
      /Loading chunk [\d]+ failed/.test(error.message);

    if (isChunkLoadError && !sessionStorage.getItem(CHUNK_ERROR_RELOAD_KEY)) {
      sessionStorage.setItem(CHUNK_ERROR_RELOAD_KEY, "1");
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="not-found-area ptb-100">
      <div className="container">
        <div className="not-found-content text-center">
          <Image src={errorImg} alt="error-image" width={250} height={250} />

          <div style={{ maxWidth: "500px", margin: "0 auto 15px" }}>
            <h3>Щось пішло не так</h3>
            <p>
              Виникла неочікувана помилка. Спробуйте оновити сторінку ще раз.
            </p>
          </div>

          <button
            className="default-btn"
            onClick={() => reset()}
            style={{ cursor: "pointer", border: "none" }}
          >
            Спробувати ще раз
          </button>
        </div>
      </div>
    </div>
  );
}
