import re, os

base = "client/src/pages/reviews"

jobs = [
    (
        "JoovvDiscountCode.tsx",
        "joovvHeroImg",
        "joovv-discount-code-hero_1790058148708.jpg",
        "Joovv red light therapy device",
        "img-hero-joovv-discount",
    ),
    (
        "AquaOmegaDiscountCode.tsx",
        "aquaOmegaHeroImg",
        "aquaomega-discount-code-hero_1790058214412.jpg",
        "AquaOmega fish oil supplements",
        "img-hero-aquaomega-discount",
    ),
    (
        "EarthRunnersDiscountCode.tsx",
        "earthRunnersHeroImg",
        "earthrunners-discount-code-hero_1790058248055.jpg",
        "EarthRunners barefoot sandals",
        "img-hero-earthrunners-discount",
    ),
    (
        "Cookware360DiscountCode.tsx",
        "cookware360HeroImg",
        "360-cookware-discount-code-hero_1790058276472.jpg",
        "360 Cookware stainless steel cookware",
        "img-hero-cookware360-discount",
    ),
    (
        "NeurosityDiscountCode.tsx",
        "neurosityHeroImg",
        "neurosity-discount-code-hero_1790058294771.jpg",
        "Neurosity Crown brain training device",
        "img-hero-neurosity-discount",
    ),
    (
        "DavidsDiscountCode.tsx",
        "davidsHeroImg",
        "davids-discount-code-hero_1790058313367.jpg",
        "Davids natural toothpaste",
        "img-hero-davids-discount",
    ),
]

NL = chr(10)

for fname, var, imgfile, alt, testid in jobs:
    p = os.path.join(base, fname)
    s = open(p).read()
    anchor = 'import { Link } from "wouter";'
    assert anchor in s, "wouter import missing in " + fname
    new_import = "import " + var + ' from "@assets/' + imgfile + '";'
    assert new_import not in s, "import already present in " + fname
    s = s.replace(anchor, anchor + NL + new_import, 1)
    lines = s.split(NL)
    kept = [l for l in lines if "Hero image pending upload" not in l]
    assert len(kept) < len(lines), "pending comment missing in " + fname
    s = NL.join(kept)
    m = re.search(r'datePublished:\s*"[^"]+",', s)
    assert m, "datePublished missing in " + fname
    s = (
        s[: m.end()]
        + NL
        + "        image: "
        + var
        + ","
        + NL
        + '        imageAlt: "'
        + alt
        + '",'
        + s[m.end() :]
    )
    art = '<article className="space-y-10">'
    assert art in s, "article tag missing in " + fname
    hero = (
        NL
        + '        <div className="card-glass rounded-2xl overflow-hidden" data-testid="'
        + testid
        + '">'
        + NL
        + '          <img loading="lazy" decoding="async" src={'
        + var
        + '} alt="'
        + alt
        + '" className="w-full h-auto object-cover" />'
        + NL
        + "        </div>"
    )
    s = s.replace(art, art + hero, 1)
    open(p, "w").write(s)
    print("OK " + fname)

print("ALL DONE")
