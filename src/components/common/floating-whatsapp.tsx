const WHATSAPP_URL = "https://wa.me/";

export function FloatingWhatsApp() {
  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group fixed bottom-5 right-5 z-[9999] pointer-events-auto"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-sm bg-stone-900 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white opacity-0 transition-all duration-200 md:block group-hover:translate-x-0 group-hover:opacity-100">
        WhatsApp
      </span>

      <button
        type="button"
        aria-label="Open WhatsApp"
        onClick={openWhatsApp}
        className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.36)] transition-transform duration-200 group-hover:scale-105 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 8.001 0C3.58 0 0 3.584 0 8.001a7.98 7.98 0 0 0 1.146 4.07L.1 15.45l3.472-1.087A7.95 7.95 0 0 0 8 16c4.423 0 8-3.583 8-7.999a7.92 7.92 0 0 0-2.399-5.675zM8 14.5a6.5 6.5 0 0 1-3.295-.893l-.236-.14-2.058.645.67-2.008-.154-.245A6.48 6.48 0 0 1 1.5 8a6.5 6.5 0 1 1 6.5 6.5zm3.65-4.617c-.2-.1-1.18-.58-1.36-.65s-.31-.1-.44.1-.49.65-.6.79-.22.15-.42.05a5.33 5.33 0 0 1-1.57-.97 5.99 5.99 0 0 1-1.11-1.37c-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.11.13-.19.2-.32.07-.13.03-.24-.02-.34-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.44-.35h-.38c-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.6s.7 1.85.8 1.98c.1.13 1.38 2.1 3.35 2.95.47.2.84.32 1.13.41.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.39-.23z" />
        </svg>
      </button>
    </div>
  );
}
