#!/usr/bin/env python3
"""Register batch 3 discount-code blog posts across the site's route files."""
import re


POSTS = [
    ("JoovvDiscountCode", "joovv-discount-code"),
    ("AquaOmegaDiscountCode", "aquaomega-discount-code"),
    ("EarthRunnersDiscountCode", "earthrunners-discount-code"),
    ("Cookware360DiscountCode", "360-cookware-discount-code"),
    ("NeurosityDiscountCode", "neurosity-discount-code"),
    ("DavidsDiscountCode", "davids-discount-code"),
]


def insert_after_last(lines, pattern, new_lines):
    """Insert new_lines after the last line matching pattern."""
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
    import_lines = [
        f'const {name} = lazy(() => import("@/pages/reviews/{name}"));\n' for name, _ in POSTS
    ]
    lines, anchor = insert_after_last(
        lines, r'^const \w+ = lazy\(\(\) => import\("@/pages/reviews/', import_lines
    )
    print(f"App.tsx imports anchored at: {anchor.strip()}")
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


if __name__ == "__main__":
    process_app()
    process_entry_server()
    process_ssr_routes()
    print("DONE")
