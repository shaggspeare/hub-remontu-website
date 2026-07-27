"use client";

import { useEffect } from "react";

const CHUNK_ERROR_RELOAD_KEY = "chunk-load-error-reload";

export default function GlobalError({
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
    <html lang="uk">
      <body>
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1>Щось пішло не так</h1>
          <p>Виникла неочікувана помилка. Спробуйте оновити сторінку ще раз.</p>
          <button
            onClick={() => reset()}
            style={{
              cursor: "pointer",
              padding: "10px 24px",
              marginTop: "16px",
              border: "none",
              borderRadius: "4px",
              background: "#0d6efd",
              color: "#fff",
            }}
          >
            Спробувати ще раз
          </button>
        </div>
      </body>
    </html>
  );
}
