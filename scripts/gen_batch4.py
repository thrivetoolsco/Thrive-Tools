#!/usr/bin/env python3
"""Generate batch-4 discount-code posts (6) and register routes in 4 files.
Codes/hrefs verified against live https://thrivetools.co/discount-codes on 2026-09-22.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REVIEWS = ROOT / "client/src/pages/reviews"
DATE = "2026-09-22"

POSTS = [
    {
        "component": "MitoRedLightDiscountCode",
        "route": "/blog/mito-red-light-discount-code",
        "brand": "Mito Red Light",
        "testid": "mito-red-light",
        "code": None,
        "href": "https://www.mitoredlight.com/EDEN27299",
        "site": "mitoredlight.com",
        "seo_desc": "Looking for a Mito Red Light discount code? No code needed \u2014 follow the link to get the discount automatically. Verified for 2026.",
        "image_alt": "Mito Red Light red light therapy device",
        "answer": "no code needed \u2014 the discount applies automatically when you shop Mito Red Light via the link on this page.",
        "section_eyebrow": "The discount",
        "section_title": "Mito Red Light discount",
        "section_desc": "Follow the link below \u2014 your discount applies automatically at checkout. No code to remember.",
        "howto_title": "How to get the discount",
        "steps": [
            "Click the Shop Mito Red Light button on this page to open mitoredlight.com with the discount applied.",
            "Add the Mito Red Light products you want to your cart.",
            "Go to checkout \u2014 the discount applies automatically. There is no code to enter.",
            "Complete your purchase and enjoy the savings.",
        ],
        "tips": [
            "No code to remember \u2014 just make sure you start from the link on this page.",
            "If the discount does not appear, empty your cart and click the link again.",
            "I re-check this link regularly to make sure the discount still applies.",
        ],
        "faqs": [
            ("Do I need a discount code for Mito Red Light?",
             "No. The discount applies automatically when you shop via the link on this page. There is no code to enter at checkout."),
            ("How do I get the Mito Red Light discount?",
             "Click the Shop Mito Red Light button on this page, add products to your cart on mitoredlight.com, and check out. The discount applies automatically."),
            ("Does the Mito Red Light discount expire?",
             "Brands can change or pause discounts at any time. I re-check the link on my discount codes page regularly. If it ever stops working, I update it there first."),
        ],
        "keep2_href": "/blog/redtherapy-discount-code",
        "keep2_title": "RedTherapy",
        "keep2_desc": "My RedTherapy discount code post.",
        "keep2_testid": "link-mito-red-light-redtherapy",
        "cta_title": "Ready to save on Mito Red Light?",
        "cta_desc": "Follow the link \u2014 the discount applies automatically at checkout.",
        "button_label": "Shop Mito Red Light",
        "excerpt": "No code needed \u2014 follow the link to get the Mito Red Light discount automatically. Verified for 2026.",
    },
    {
        "component": "RedTherapyDiscountCode",
        "route": "/blog/redtherapy-discount-code",
        "brand": "RedTherapy",
        "testid": "redtherapy",
        "code": "THRIVETOOLS",
        "href": "https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132",
        "site": "redtherapy.co",
        "seo_desc": "Looking for a RedTherapy discount code? Use code THRIVETOOLS at checkout on redtherapy.co. Verified for 2026.",
        "image_alt": "RedTherapy red light therapy device",
        "answer": 'use the code{" "} <strong className="font-semibold text-black">THRIVETOOLS</strong> in the discount-code box at checkout on redtherapy.co to save on your order.',
        "section_eyebrow": "The code",
        "section_title": "RedTherapy discount code",
        "section_desc": "Use the link below and enter the code at checkout.",
        "howto_title": "How to apply the code at checkout",
        "steps": [
            "Add the RedTherapy products you want to your cart on redtherapy.co.",
            "Go to checkout and find the discount-code (promo code) box.",
            "Type THRIVETOOLS exactly as shown, all caps with no spaces, and click apply.",
            "Complete your purchase and enjoy the savings.",
        ],
        "tips": [
            "Type the code exactly \u2014 THRIVETOOLS in all caps with no spaces.",
            "Make sure you are shopping on redtherapy.co and not a reseller site.",
            "I re-check this code regularly to make sure it still works.",
        ],
        "faqs": [
            ("Does the RedTherapy discount code expire?",
             "Brands can change or retire codes at any time, so no code works forever. I re-check the codes on my discount codes page regularly. If THRIVETOOLS ever stops working, I update it there first."),
            ("Where do I enter the RedTherapy discount code?",
             "Add your products to the cart on redtherapy.co, go to checkout, and look for the discount-code box. Type THRIVETOOLS exactly as shown (all caps, no spaces) and apply it before you pay."),
            ("Can I stack discount codes on RedTherapy?",
             "In almost all cases, no. RedTherapy checkout accepts one discount code per order, like most brands. If you have more than one code, use whichever saves you the most on that order."),
        ],
        "keep2_href": "/blog/mito-red-light-discount-code",
        "keep2_title": "Mito Red Light",
        "keep2_desc": "My Mito Red Light discount code post.",
        "keep2_testid": "link-redtherapy-mito-red-light",
        "cta_title": "Ready to save on RedTherapy?",
        "cta_desc": "Enter <strong className=\"font-semibold text-black\">THRIVETOOLS</strong> in the discount-code box at checkout.",
        "button_label": "Shop RedTherapy",
        "excerpt": "Use code THRIVETOOLS in the discount-code box at checkout on redtherapy.co. Verified for 2026.",
    },
]

print("POSTS defined:", len(POSTS))
