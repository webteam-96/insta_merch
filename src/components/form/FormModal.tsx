import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

type Ctx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const FormModalContext = createContext<Ctx | null>(null);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <FormModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <div
              className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center px-4 py-8 sm:p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-modal-title"
            >
              <motion.button
                type="button"
                aria-label="Close"
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-default"
              />
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.94 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-[520px] my-auto"
              >
                {/* Decorative gradient glow behind modal */}
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-70 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(131,58,180,0.35), rgba(225,48,108,0.35), rgba(247,119,55,0.35))",
                  }}
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-lg border border-ink-gray200 hover:bg-ink-gray100 hover:scale-110 transition"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <div id="lead-modal-title" className="sr-only">
                  Book your free strategy session
                </div>
                <div className="relative">
                  <LeadForm />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx)
    throw new Error("useFormModal must be used within FormModalProvider");
  return ctx;
}
