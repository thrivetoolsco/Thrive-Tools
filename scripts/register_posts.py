#!/usr/bin/env python3
"""Register the six new discount-code blog posts across the site's route files."""
import re
import sys

POSTS = [
    ("BioptimizersDiscountCode", "bioptimizers-discount-code"),
    ("EquipFoodsDiscountCode", "equip-foods-discount-code"),
    ("IM8DiscountCode", "im8-discount-code"),
    ("TimelineMitopureDiscountCode", "timeline-mitopure-discount-code"),
    ("SupplementDiscountCodesFaq", "supplement-discount-codes-faq"),
    ("RedLightTherapyDiscountCodes", "red-light-therapy-discount-codes"),
]

TITLES = {
    "bioptimizers-discount-code": "Bioptimizers Discount Code 2026",
    "equip-foods-discount-code": "Equip Foods Discount Code 2026",
    "im8-discount-code": "IM8 Discount Code 2026",
    "timeline-mitopure-discount-code": "Timeline MitoPure Discount Code 2026",
    "supplement-discount-codes-faq": "Supplement Discount Codes FAQ (2026)",
    "red-light-therapy-discount-codes": "Best Red Light Therapy Discount Codes 2026",
}

EXCERPTS = {
    "bioptimizers-discount-code": "Use code THRIVETOOLS in the discount-code box at checkout on bioptimizers.com. Verified for 2026.",
    "equip-foods-discount-code": "Use code THRIVETOOLS at checkout on equipfoods.com. Verified for 2026.",
    "im8-discount-code": "Use code THRIVE10 at checkout on im8health.com. Verified for 2026.",
    "timeline-mitopure-discount-code": "No code to enter. Shop via the discount link and the savings apply automatically. Verified for 2026.",
    "supplement-discount-codes-faq": "Every supplement discount code question, answered: where to find verified codes, how to use them, and why a code might not work.",
    "red-light-therapy-discount-codes": "Verified red light therapy discount codes for Joovv, Mito Red Light, RedTherapy.co, and VieLight.",
}


def insert_after_last(lines, pattern, new_lines):
    """Insert new_lines after the last line matching pattern. Returns (new_lines_list, anchor_line)."""
    idx = None
    anchor = None
    for i, line in enumerate(lines):
        if re.search(pattern, line):
            idx = i
            anchor = line
    if idx is None:
        raise ValueError(f"Pattern not found: {pattern}")
    indent = anchor[: len(anchor) - len(anchor.lstrip())]
    indented = [indent + nl.lstrip() if nl.strip() else nl for nl in new_lines]
    return lines[: idx + 1] + indented + lines[idx + 1 :], anchor


def process_app():
    path = "client/src/App.tsx"
    with open(path) as f:
        lines = f.readlines()
    # 1. Lazy imports after the last reviews lazy import
    import_lines = [
        f'const {name} = lazy(() => import("@/pages/reviews/{name}"));\n' for name, _ in POSTS
    ]
    lines, anchor = insert_after_last(
        lines, r'^const \w+ = lazy\(\(\) => import\("@/pages/reviews/', import_lines
    )
    print(f"App.tsx imports anchored at: {anchor.strip()}")
    # 2. Routes after the last /blog/ Route
    route_lines = [
        f'<Route path="/blog/{slug}" component={{{name}}} />\n' for name, slug in POSTS
    ]
    lines, anchor = insert_after_last(lines, r'<Route path="/blog/', route_lines)
    print(f"App.tsx routes anchored at: {anchor.strip()}")
    with open(path, "w") as f:
        f.writelines(lines)
    print("App.tsx updated")


def process_entry_server():
    path = "client/src/entry-server.tsx"
    with open(path) as f:
        lines = f.readlines()
    import_lines = [f'import {name} from "@/pages/reviews/{name}";\n' for name, _ in POSTS]
    lines, anchor = insert_after_last(
        lines, r'^import \w+ from "@/pages/reviews/', import_lines
    )
    print(f"entry-server.tsx imports anchored at: {anchor.strip()}")
    route_lines = [f'  "/blog/{slug}": {name},\n' for name, slug in POSTS]
    lines, anchor = insert_after_last(lines, r'^\s*"/blog/', route_lines)
    print(f"entry-server.tsx routes anchored at: {anchor.strip()}")
    with open(path, "w") as f:
        f.writelines(lines)
    print("entry-server.tsx updated")


def process_ssr_routes():
    path = "client/src/ssr-routes.ts"
    with open(path) as f:
        lines = f.readlines()
    import_lines = [f'import {name} from "./pages/reviews/{name}";\n' for name, _ in POSTS]
    lines, anchor = insert_after_last(
        lines, r'^import \w+ from "\./pages/reviews/', import_lines
    )
    print(f"ssr-routes.ts imports anchored at: {anchor.strip()}")
    route_lines = [f'  "/blog/{slug}": {name},\n' for name, slug in POSTS]
    lines, anchor = insert_after_last(lines, r'^\s*"/blog/', route_lines)
    print(f"ssr-routes.ts routes anchored at: {anchor.strip()}")
    with open(path, "w") as f:
        f.writelines(lines)
    print("ssr-routes.ts updated")


def process_site_routes():
    path = "shared/site-routes.ts"
    with open(path) as f:
        content = f.read()
    # Find the blogPosts array and its closing ];
    m = re.search(r"(export\s+)?const blogPosts[^=]*=\s*\[", content)
    if not m:
        raise ValueError("blogPosts array not found")
    start = m.end()
    # Find the matching closing ]; by bracket counting
    depth = 1
    i = start
    in_str = None
    while i < len(content) and depth > 0:
        c = content[i]
        if in_str:
            if c == in_str and content[i - 1] != "\\":
                in_str = None
        elif c in ("'", '"', "`"):
            in_str = c
        elif c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
        i += 1
    if depth != 0:
        raise ValueError("Could not find end of blogPosts array")
    # i now points just after the closing ]. Insert before it.
    entries = []
    for name, slug in POSTS:
        entries.append(
            f"  {{\n"
            f'    id: "{slug}",\n'
            f'    title: "{TITLES[slug]}",\n'
            f'    excerpt: "{EXCERPTS[slug]}",\n'
            f'    href: "/blog/{slug}",\n'
            f'    canonical: "https://thrivetools.co/blog/{slug}",\n'
            f'    badge: "Discount Codes",\n'
            f'    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",\n'
            f'    date: "September 20, 2026",\n'
            f'    lastmod: "2026-09-20",\n'
            f"  }},\n"
        )
    new_content = content[: i - 1] + "".join(entries) + content[i - 1 :]
    with open(path, "w") as f:
        f.write(new_content)
    print("site-routes.ts updated")


def process_vite():
    path = "server/vite.ts"
    with open(path) as f:
        lines = f.readlines()
    map_lines = [
        f'    "/blog/{slug}": "/src/pages/reviews/{name}.tsx",\n' for name, slug in POSTS
    ]
    lines, anchor = insert_after_last(lines, r'"/blog/.*": "/src/pages/reviews/', map_lines)
    print(f"vite.ts anchored at: {anchor.strip()}")
    with open(path, "w") as f:
        f.writelines(lines)
    print("server/vite.ts updated")


if __name__ == "__main__":
    process_app()
    process_entry_server()
    process_ssr_routes()
    process_site_routes()
    process_vite()
    print("All route files updated.")
