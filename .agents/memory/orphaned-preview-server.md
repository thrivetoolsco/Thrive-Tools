---
name: Orphaned preview server
description: Repeated EADDRINUSE failures from a leftover development server despite a failed workflow status.
---

The configured preview workflow may report failure with EADDRINUSE while an older development server, no longer managed as the active workflow, continues to serve port 5000.

**Why:** Across separate work sessions, a process left behind by an earlier preview run held the port; restarting the workflow without clearing that process would repeat the failure even though the app itself responded normally.

**How to apply:** When a workflow fails to bind port 5000, inspect the process tree and confirm the existing listener before changing app code or workflow configuration. Stop only the orphaned development server, then restart the existing workflow once and check its logs.