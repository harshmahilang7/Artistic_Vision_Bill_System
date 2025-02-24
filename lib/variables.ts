// Types
import { SignatureColor, SignatureFont } from "@/types";

/**
 * Environment
 */
export const ENV = process.env.NODE_ENV;

/**
 * Websites
 */
export const BASE_URL = "https://billing-artistic-vision.netlify.app/";
export const AUTHOR_WEBSITE = "https://billing-artistic-vision.netlify.app/";
export const AUTHOR_GITHUB = "https://github.com/harshmahilang7";
export const COMPANY_WEBSITE = "https://www.artisticvision.in/";

/**
 * API endpoints
 */
export const GENERATE_PDF_API = "/api/invoice/generate";
export const SEND_PDF_API = "/api/invoice/send";
export const EXPORT_INVOICE_API = "/api/invoice/export";

/**
 * External API endpoints
 */
export const CURRENCIES_API =
    "https://openexchangerates.org/api/currencies.json";

/**
 * Chromium for Puppeteer
 */
export const CHROMIUM_EXECUTABLE_PATH =
    "https://github.com/Sparticuz/chromium/releases/download/v122.0.0/chromium-v122.0.0-pack.tar";

/**
 * Tailwind
 */
export const TAILWIND_CDN =
    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

/**
 * Google
 */
export const GOOGLE_SC_VERIFICATION = process.env.GOOGLE_SC_VERIFICATION;

/**
 * Nodemailer
 */
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PW = process.env.NODEMAILER_PW;

/**
 * I18N
 */
export const LOCALES = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
    { code: "pt-BR", name: "Português (Brasil)" },
]
export const DEFAULT_LOCALE = LOCALES[0].code;

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
    { name: "black", label: "Black", color: "rgb(0, 0, 0)" },
    { name: "dark blue", label: "Dark Blue", color: "rgb(0, 0, 128)" },
    {
        name: "crimson",
        label: "Crimson",
        color: "#DC143C",
    },
];

export const SIGNATURE_FONTS: SignatureFont[] = [
    {
        name: "Dancing Script",
        variable: "var(--font-dancing-script)",
    },
    { name: "Parisienne", variable: "var(--font-parisienne)" },
    {
        name: "Great Vibes",
        variable: "var(--font-great-vibes)",
    },
    {
        name: "Alex Brush",
        variable: "var(--font-alex-brush)",
    },
];

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

/**
 * Form defaults
 */
export const FORM_DEFAULT_VALUES = {
  sender: {
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    customInputs: [],
  },
  receiver: {
    name: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    customInputs: [],
  },
  details: {
    invoiceLogo: "data:image/png;base64,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2ojBpg+6HsYmbO8Ajse2nw0WmXI/BTsJzNv6Rf76Q5hGM71+3hU78ngXnwyY4nX12AHtUK8/f10+EbLSn8lFPgZ4AIvO7NFxfg3tO5zj9yP0uqMjY72wiALnptPMfJ14xvkskQBDRQP0/46e/grAj8WTJ67zFK9AtyXb7Fq7F8CmrU6EabSdd9QHmwDYCCxKgnhxga95h0+47IRNog02c31r3tD2MI0mYCFzQQUezR4sNO9Rn2haWcWZ+TCNpvuzPG2QDlkv8FCRs36HadTun303tr5P8z4syqq7BPejw8vPVGxlaZLXi0WIYujFJg/vKvsEWAu2s2O9nEzDoif7JwC6sNX/R4C0TJGI3kebgk2YTd/KBMBDwMI8oe1eBvf031v2KID+e7zG27EVwNpmDTa9j7AHMJPBI5xWYJF160ry/E30+nqK19UT/Ht1DuhHDJwAeBzLufB4q0T9Fvj+jcMmRWfkmABY7u2fojRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERKQa/h/1o3N287NFXwAAAABJRU5ErkJggg=="
    ,invoiceNumber: "",
    invoiceDate: new Date(),
    dueDate: new Date(),
    items: [
      {
        name: "",
        description: "",
        quantity: 0,
        unitPrice: 0,
        total: 0,
      },
    ],
    currency: "INR",
    language: "English",
    taxDetails: {
      amount: 0,
      amountType: "amount",
      taxID: "",
    },
    discountDetails: {
      amount: 0,
      amountType: "amount",
    },
    shippingDetails: {
      cost: 0,
      costType: "amount",
    },
    paymentInformation: {
      bankName: "",
      accountName: "",
      accountNumber: "",
    },
    additionalNotes: "",
    paymentTerms: "",
    totalAmountInWords: "",
    pdfTemplate: 1,
  },
};

/**
 * ? DEV Only
 * Form auto fill values for testing
 */
export const FORM_FILL_VALUES = {
    sender: {
        name: "John Doe",
        address: "123 Main St",
        zipCode: "12345",
        city: "Anytown",
        country: "USA",
        email: "johndoe@example.com",
        phone: "123-456-7890",
    },
    receiver: {
        name: "Jane Smith",
        address: "456 Elm St",
        zipCode: "54321",
        city: "Other Town",
        country: "Canada",
        email: "janesmith@example.com",
        phone: "987-654-3210",
    },
    details: {
        invoiceLogo: "",
        invoiceNumber: "INV0001",
        invoiceDate: new Date(),
        dueDate: new Date(),
        items: [
            {
                name: "Product 1",
                description: "Description of Product 1",
                quantity: 4,
                unitPrice: 50,
                total: 200,
            },
            {
                name: "Product 2",
                description: "Description of Product 2",
                quantity: 5,
                unitPrice: 50,
                total: 250,
            },
            {
                name: "Product 3",
                description: "Description of Product 3",
                quantity: 5,
                unitPrice: 80,
                total: 400,
            },
        ],
        currency: "USD",
        language: "English",
        taxDetails: {
            amount: 15,
            amountType: "percentage",
            taxID: "987654321",
        },
        discountDetails: {
            amount: 5,
            amountType: "percentage",
        },
        shippingDetails: {
            cost: 5,
            costType: "percentage",
        },
        paymentInformation: {
            bankName: "Bank Inc.",
            accountName: "John Doe",
            accountNumber: "445566998877",
        },
        additionalNotes: "Thank you for your business",
        paymentTerms: "Net 30",
        signature: {
            data: "",
        },
        subTotal: "850",
        totalAmount: "850",
        totalAmountInWords: "Eight Hundred Fifty",
        pdfTemplate: 1,
    },
};
