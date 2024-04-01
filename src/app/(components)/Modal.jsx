"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed top-0 bottom-0 left-0 right-0 z-10 grid p-10 mx-auto overflow-hidden place-content-center bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="z-50 flex items-center justify-center max-w-6xl transition-opacity duration-300 place-items-center bg-body overflow-y-auto h-[80vh] max-h-[800px] rounded-lg"
                style={{
                    overflowY: "auto",
                    scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
                    scrollbarThumbColor: "#cccccc",
                    scrollbarWidth: "none",
                }}
            >
                {children}
            </div>
        </div>
    );
}
