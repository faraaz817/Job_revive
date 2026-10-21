# IBM Z — badges and a live z/OS development environment

Two IBM digital badges issued through Credly — **IBM Z Xplore – Concepts** (May 2026) and **IBM Z
and LinuxONE Community Contributor – 2026 (Level 1)** (August 2026) — plus a self-built development
environment that connects VS Code to a real IBM mainframe and runs JCL on it. Part of a deliberate
IBM Z / mainframe track alongside AI/ML roles.

2026, Melbourne. Records: the credentials as listed on LinkedIn (credential IDs below, checked
against a screenshot on 21 October 2026) and the private `job-go/IBM pathway/` notes.

## Credentials

| Badge | Issuer | Issued | Credential ID | Verify |
| --- | --- | --- | --- | --- |
| IBM Z Xplore – Concepts | IBM | May 2026 | `d5509c0f-81fd-4e9e-9e02-8bb1f6f1d6bd` | [Credly](https://www.credly.com/badges/d5509c0f-81fd-4e9e-9e02-8bb1f6f1d6bd) |
| IBM Z and LinuxONE Community Contributor – 2026 (Level 1) | IBM | Aug 2026 | `19522c4d-306c-4e4f-8b1f-643aa1701d2a` | [Credly](https://www.credly.com/badges/19522c4d-306c-4e4f-8b1f-643aa1701d2a) |

IBM Z Xplore is IBM's hands-on learning platform on a real mainframe. The Concepts path is listed
in the job-go notes as Intermediate level, covering data sets, JCL, USS (Unix System Services),
Python on Z and IBM Z Open Automation Utilities; it also unlocks IBM's Career Depot.

## Why

Mainframes still run banking, insurance and government back ends, and graduate pipelines into them
are narrow. The badges show the basics were learned on a real system, and the development
environment shows they were used outside the course.

## The development environment

```
VS Code ── IBM Z Open Editor 5.7.1
   ├─ Zowe Explorer 3.4.2 ─┐
   └─ Zowe CLI 8.31.5 ─────┴─► z/OSMF REST APIs ─► live IBM z/OS system
                                   submit JCL ─► job output ─► CC 0000
```

Installed and configured on Windows: Node.js, Java 21 runtime, IBM Z Open Editor, Zowe Explorer and
Zowe CLI. VS Code was connected to a live z/OS system (not a simulator) over z/OSMF, and a JCL job
was submitted and verified with condition code 0000 — a clean run.

## Known issues / Limitations

- **Introductory level.** Both badges are entry points. IBM Z 101 and AI on Z were on the to-do
  list in the job-go roadmap (last updated 28 July 2026); there is no record of either since.
- **The environment has no artefact.** There is no repo, screenshot or job log in this collection
  for the JCL run; the CC 0000 result is from the author's notes.
- **Credly could not be opened from the session that wrote this**, so the verify links are built
  from the credential IDs (the Concepts link was already recorded in job-go; the Community
  Contributor link follows the same pattern).
