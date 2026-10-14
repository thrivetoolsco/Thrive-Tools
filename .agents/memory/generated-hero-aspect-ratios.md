---
name: Generated hero aspect ratios
description: A widescreen image prompt does not guarantee a widescreen output file.
---

Inspect generated image dimensions before wiring a requested 16:9 hero. Enforce the aspect ratio in the actual asset, not just its rendered CSS, so the social-sharing image is also widescreen.

**Why:** Three explicitly widescreen hero requests returned square images on 2026-10-13. Describing the composition in the prompt alone did not enforce output dimensions.

**How to apply:** Check the finished image, crop appropriately when needed, and review the resulting composition before using it as both the hero and OG image. Do not assume a successful generation has satisfied the requested aspect ratio.
