"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

// Variables
import { AUTHOR_GITHUB } from "@/lib/variables";
import { COMPANY_WEBSITE } from "@/lib/variables";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    href={AUTHOR_GITHUB}
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    Harsh Mahilang
                </a>
            </p>
            <p>
                <a
                    href={COMPANY_WEBSITE}
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    © 2025 Artistic Vision. All rights reserved.
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;
