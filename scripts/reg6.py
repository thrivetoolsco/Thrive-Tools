from pathlib import Path
ROOT = Path(".")
POSTS = [
 ("MitoRedLightDiscountCode","/blog/mito-red-light-discount-code"),
 ("RedTherapyDiscountCode","/blog/redtherapy-discount-code"),
 ("VielightDiscountCode","/blog/vielight-discount-code"),
 ("WaterDropDiscountCode","/blog/waterdrop-discount-code"),
 ("KoracaoDiscountCode","/blog/koracao-discount-code"),
 ("IsunSkincareDiscountCode","/blog/isun-skincare-discount-code"),
]
def insert_after(path, anchor, new_lines):
 p = Path(path)
 t = p.read_text()
 i = t.find(anchor)
 if i < 0: raise ValueError("missing: " + anchor)
 j = t.find(chr(10), i)
 t = t[:j+1] + chr(10).join(new_lines) + chr(10) + t[j+1:]
 p.write_text(t)
 print("updated", path)
insert_after("client/src/App.tsx", "import DavidsDiscountCode from", ["import " + c + " from \"./pages/reviews/" + c + "\";" for c, _ in POSTS])
insert_after("client/src/App.tsx", "path=\"/blog/davids-discount-code\"", ["      <Route path=\"" + r + "\" component={" + c + "}/>" for c, r in POSTS])
insert_after("client/src/ssr-routes.ts", "import DavidsDiscountCode from", ["import " + c + " from \"./pages/reviews/" + c + "\";" for c, _ in POSTS])
insert_after("client/src/ssr-routes.ts", "\"/blog/davids-discount-code\":", ["  \"" + r + "\": " + c + "," for c, r in POSTS])
insert_after("client/src/entry-server.tsx", "import DavidsDiscountCode from", ["import " + c + " from \"@/pages/reviews/" + c + "\";" for c, _ in POSTS])
insert_after("client/src/entry-server.tsx", "\"/blog/davids-discount-code\":", ["  \"" + r + "\": " + c + "," for c, r in POSTS])
print("3 files done")
