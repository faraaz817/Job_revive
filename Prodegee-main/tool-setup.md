# Tool Setup

This guide walks you through installing and configuring the tools you'll use on the project. Follow each section in order — each step builds on the previous one.

## 0. Connect with Prodegee (Optional)

If you'd like to stay connected with Prodegee beyond the project, you're welcome to:

- **Connect with Marc on LinkedIn**: [linkedin.com/in/torramarc](https://www.linkedin.com/in/torramarc/)
- **Follow the Prodegee company page**: [linkedin.com/company/prodegee](https://www.linkedin.com/company/prodegee)
- **Add the internship to your profile**: You can list Prodegee as your current position in your LinkedIn "Experience" section — this helps show your industry engagement during your studies

This is entirely optional and has no bearing on the project.

## 1. GitHub Account and GitHub Desktop

GitHub is where the project code lives. GitHub Desktop handles Git for you through a visual interface — no command line needed for day-to-day work.

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com/) and click **Sign up**
2. Use your **RMIT email address** (`sXXXXXXX@student.rmit.edu.au`)
3. Choose a username and complete the sign-up process
4. Verify your email address when prompted

**Why your RMIT email?** Three reasons:
- **Repository access**: Prodegee sends repository invitations to your RMIT email. Using a different address means we can't grant you access.
- **Claude Pro account**: Prodegee creates your Claude Pro subscription under your RMIT email. Using the same email across GitHub and Claude keeps everything linked to one identity.
- **RMIT library access**: The copyright compliance workflow for research papers (Section 4) relies on your RMIT institutional subscription. Your RMIT email is the proof of that entitlement.

**Already have a GitHub account with a different email?** You don't need to create a new account. Instead, add your RMIT email as a secondary address: go to **Settings > Emails > Add email address**, add your RMIT email, and verify it. Then let us know which account to invite.

### Step 2: Install GitHub Desktop

1. Go to [desktop.github.com](https://desktop.github.com/download/)
2. Download the installer for your operating system (Windows or macOS)
3. Run the installer and follow the prompts
4. When GitHub Desktop opens for the first time, click **Sign in to GitHub.com**
5. Sign in with the GitHub account you created in Step 1
6. On the "Configure Git" screen, confirm your name and email, then click **Finish**

### Step 3: Clone the Repositories

Both repositories are private. You should have received email invitations to access them — check your RMIT inbox for invitations from GitHub. **Accept both invitations before proceeding.** If you haven't received them, contact Marc at marc@prodegee.com.

You need to clone both repositories into the **same parent folder** — the workspace file expects them side by side. GitHub Desktop defaults to `Documents/GitHub` on both macOS and Windows. You can use that default or choose a different folder — what matters is that both repos end up next to each other.

**Clone prodegee-flows:**

1. In GitHub Desktop, go to **File > Clone Repository...**
2. Select the **URL** tab
3. Paste: `https://github.com/16plus1org/prodegee-flows.git`
4. Note the **Local Path** at the bottom — by default it will be something like `Documents/GitHub/prodegee-flows`. You can keep this or change the parent folder, but remember what you chose.
5. Click **Clone**

**Clone prodegee-config:**

1. Go to **File > Clone Repository...** again
2. Paste: `https://github.com/16plus1org/prodegee-config.git`
3. Make sure the **Local Path** uses the **same parent folder** as prodegee-flows (e.g., if you cloned prodegee-flows into `Documents/GitHub/`, this should be `Documents/GitHub/prodegee-config`)
4. Click **Clone**

Your folder structure should look like:

```
GitHub/                  (or whatever parent folder you chose)
  prodegee-flows/        — Main repository (flows, scripts, docs, team workspaces)
  prodegee-config/       — Configuration (calibration parameters, reference data)
```

#### prodegee-flows

This is the main repository you'll work with. It contains documentation, team workspaces, processing flows, and scripts:

```
prodegee-flows/
  docs/
    getting-started/       — Setup guides (you are here)
    support-material/      — Reference guides (GIS primer, and more to come)
    2026-S1/               — Semester S1 2026
      1-info/              — Shared project information
      2-teams/             — One directory per team
        2026-S1-DA1/       — Team DA-1 workspace
        2026-S1-DS1/       — Team DS-1 workspace
        ...
  climate16/
    connectors/            — Data ingestion flows (CSV, GeoJSON, etc.)
    mcp-servers/           — EED.IF pipeline flows (Round 1, 2, 3)
  namespace-files/
    climate16/scripts/     — Python scripts called by the flows
  scripts/                 — Shared utility scripts
```

Your team has a dedicated directory under `docs/2-teams/` (e.g., `da1-data-discovery-and-calibration/` for team DA1). Each team directory has the same structure:

```
da1-data-discovery-and-calibration/
  da1-supporting-document.md  — Team brief (read this first)
  1-backlog/                  — Assignments identified but not yet scheduled
  2-ready/                    — Assignments ready to be picked up
  3-in-progress/              — Assignments currently being worked on
  4-done/                     — Completed assignments
  5-outputs/                  — Intermediate working files organised by assignment ID
```

#### prodegee-config

This repository contains calibration parameters and reference data used by the processing pipeline. You won't modify it often, but having it locally lets you browse the parameter hierarchies and understand how the pipeline is configured.

### Step 4: Read the Getting Started Documents

Now that you have the repository locally, read all documents in `docs/1-getting-started/` — including this guide, the project overview, and any other files in that directory. These give you the full picture of what Prodegee does, where your work fits, and what to expect.

Also read everything in your team's `1-info/` directory (e.g., `docs/2026-S1/2-teams/2026-S1-DA1/1-info/`). These documents describe your specific project scope, objectives, and context. Read them carefully before your kick-off meeting and post any questions in the shared MS Teams group (the cross-team channel that includes all 8 projects and Prodegee).

## 2. VS Code

VS Code is the editor you'll use for all project work. Install it now — you'll use it to read project documentation, and later Claude Code will run inside it as an extension.

### Step 1: Install VS Code

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install the latest stable version
3. Launch VS Code

### Step 2: Open the Project Workspace

1. Go to **File > Open Workspace from File...**
2. Navigate to the `prodegee-flows` directory you cloned in Section 1
3. Select `prodegee-flows.code-workspace`
4. VS Code will reload with both **prodegee-flows** and **prodegee-config** visible in the Explorer sidebar

### Step 3: About Markdown

You'll notice that most documentation in this project is written in **Markdown** (`.md` files) — including this guide. We use Markdown because it is the optimal format for working with large language models (LLMs) like Claude. It's plain text with simple formatting (headings, bold, links, code blocks) that both humans and AI assistants can read and write naturally.

You can read Markdown files in several ways:

- **GitHub web**: Browse the repository on github.com — GitHub renders Markdown with proper formatting by default
- **VS Code preview**: Open any `.md` file in VS Code, then press Ctrl+Shift+V (Windows/Linux) or Cmd+Shift+V (macOS) to open the built-in Markdown preview. You can also click the preview icon (split rectangle) in the top right of the editor.
- **Typora** (recommended, USD 15): A dedicated Markdown editor that renders formatting as you type — no split preview needed. Available at [typora.io](https://typora.io/). This is optional but many people find it the most comfortable way to read and write Markdown.

## 3. QGIS

QGIS is a desktop GIS application. At Prodegee we use it to visually verify processing results — checking whether compound detection is identifying the right buildings, whether settlement boundaries make sense, and whether calibrated parameters produce correct outputs.

### Step 1: Installation

Download from [qgis.org/download](https://qgis.org/download/). Install the latest stable release (3.44).

### Step 2: First Steps in QGIS

Once installed:

1. **Open QGIS** and create a new project
2. **Add a basemap**: Go to Web > Quick Map Services > Google > Google Satellite. Double-click to add it as a layer.
3. **Navigate to Cote d'Ivoire**: Use the coordinate bar at the bottom to jump to longitude -5.5, latitude 7.5 (roughly central Cote d'Ivoire)
4. **Zoom in** to see individual buildings on the satellite/OSM basemap
5. Access Dropbox directory [GIS RMIT](https://www.dropbox.com/scl/fo/vvvys6dhq943rsccor8ey/AGPo6irceg9VbmfOCVQSRsA?rlkey=z7trq6oorhjpbx9woohi3a8pz&st=f7x1wtit&dl=0) to access data you can use on QGIS to start practicing.

You'll use QGIS throughout the project to:
- Load GeoJSON/GeoPackage outputs from the pipeline and visually inspect them
- Compare compound detection results against satellite imagery
- Identify calibration issues (e.g., compound includes buildings across a road)
- Create screenshots for reports and presentations

## 4. Zotero and Research Papers

Your first major assignment will be a literature review. Before setting up Claude Code, you need Zotero installed and to start collecting research papers.

Zotero is the reference manager all teams use to collect and share scholarly papers. We chose Zotero because it is open source and already one of the recommended reference managers at RMIT.

### Step 1: Install Zotero

Download from [zotero.org/download](https://www.zotero.org/download/). Install the latest version (Zotero 7).

### Step 2: Create a Team Group

Create a private Zotero group for your team so everyone can share papers and PDFs. Either nominate ONE team member to create the group or request your academic supervisor to do it, as only one group per team is to be created.

**How to create the group:**

1. Go to [zotero.org/groups/new](https://www.zotero.org/groups/new) and sign in
2. Name the group after your team slug used in prodegee-flows/docs/2-teams (e.g., `DA1-data-discovery-and-calibration`)
3. Set **Group Type** to "Private" — only invited members can see the library
4. Set **File Editing** to "Any group member" — this lets everyone upload PDFs
5. Click **Create Group**
6. Invite your teammates using their Zotero accounts or email addresses

Because all group members are RMIT staff and students covered by RMIT's institutional library licences, sharing PDFs within this group is permitted.

**How to add papers:**

1. Find a paper through the RMIT library or Google Scholar
2. Save it to the team group library in Zotero — the PDF will sync to all group members automatically
3. You can also save papers to your personal **"My Library"** first, then drag them into the team group

### Step 3: Share Citations with Prodegee

You'll receive an invitation to join a private Zotero group called **2026-S1-RMIT**, shared across all 8 teams and Prodegee staff. This group is for **citations only** — no PDFs are stored in the group library.

**Why citations only?** Prodegee staff are not covered by RMIT's institutional library subscriptions. To comply with Australian copyright law and publisher licensing agreements, copyrighted PDFs must not be shared with non-RMIT parties. This group lets Prodegee see what research you're using without receiving copyrighted material.

**Setup:**

1. Accept the group invitation sent to your RMIT email
2. Open Zotero and sign in with your Zotero account
3. The **2026-S1-RMIT** group library should appear in the left panel under "Group Libraries"

**How to share citations:**

1. From your team group (Step 2), drag the **citation entry** into the 2026-S1-RMIT group library. Don't try to drag the PDF attachment — the group is configured not to accept them.
2. The Prodegee group will show the paper's title, authors, journal, DOI, and abstract — but no PDF

This way Prodegee can track which papers are informing each team's work, while copyrighted material stays within RMIT-entitled parties. For open-access papers, Prodegee staff can follow the URL or DOI link in the citation to read them directly.

### Step 4: Reading Papers with Claude Code

Once you have Claude Code set up (Section 6), your AI assistant can read any paper in your Zotero library directly — no conversion or export needed. Claude Code connects to Zotero through the MCP gateway and can search your library, read full paper text, and retrieve citation metadata.

Just ask Claude Code naturally:

> *"Search my Zotero library for papers about settlement electrification"*
>
> *"Read the Torres-Pérez 2024 paper and summarise the methodology"*
>
> *"What does the Ciller paper say about demand estimation for off-grid communities?"*

Claude Code will search your Zotero library, retrieve the paper's full text, and work with it in the conversation. No files are created on disk — the text is read in-session only.

## 5. Introduce Yourself and Request Claude Code Access

Once you have GitHub, VS Code, QGIS, and Zotero set up and have started collecting scholarly papers for your literature review, send an email to **marc@prodegee.com** to introduce yourself if you haven't done so and request your Claude Code credentials. If you have already contacted him, send him another message with the extra information not included in your original email.

**Please include the following in your email:**

1. Your **full name** and **RMIT student ID**
2. Your **team code** (e.g., DA-1, DS-2, EN-3)
3. Your **GitHub username** (so we can verify repository access)
4. A brief description of your **academic background** — what have you studied so far, and what are your main areas of interest?
5. Any **relevant skills or experience** — programming languages, data analysis tools, GIS, or other technical skills you're comfortable with
6. What you **hope to learn or achieve** during this project
7. Confirmation that you have **installed Zotero** and **started collecting papers** for your literature review

Marc will reply with your **Claude Pro account credentials** and your **MCP gateway token** — you'll need both for the next section.

**A note on privacy:** The information you share in this email is used solely by Prodegee to understand your background and tailor project guidance. It is not stored in any database or server — it remains in email only.

## 6. Claude Code

Claude Code is the AI development assistant you'll use throughout the project. You can use Claude through the web interface at claude.ai or the desktop app, but for this project we use the VS Code extension instead. Since the work involves writing and reviewing code, scripts, and data files, running Claude Code inside VS Code lets your assistant read project files directly, suggest edits in context, and handle Git operations for you — all without switching between windows.

### Step 1: Log In to Claude

1. Using the credentials Marc sent you, go to [claude.ai](https://claude.ai) and log in (your RMIT email)
2. Verify you can access the Claude web interface — this confirms your account is active

### Step 2: Install the Claude Code Extension

1. In VS Code (which you installed in Section 2), go to **Extensions** (Ctrl+Shift+X on Windows/Linux, Cmd+Shift+X on macOS)
2. Search for **"Claude Code"**
3. Click **Install**

### Step 3: Verify Claude Code is Working

1. Open the Claude Code panel (look for the Claude icon in the sidebar or Activity Bar)
2. Log in with your RMIT email credentials when prompted
3. In the VS Code Explorer sidebar, open `docs/1-getting-started/tool-setup.md` (this file) so Claude Code can see it
4. Ask Claude Code:

> *"I've just finished setting up GitHub Desktop, VS Code, Zotero, and the Claude Code extension. I have the tool-setup.md file open. Can you help me continue with the remaining setup steps — Python and Kestra?"*

Claude Code will read this guide and walk you through the remaining sections interactively. This is also a good way to start practising with your AI assistant — ask Claude Code questions if anything is unclear, and let your assistant help you troubleshoot if something doesn't work as expected.

### Step 4: Set Up MCP Access

Claude Code uses MCP (Model Context Protocol) servers to interact with GitHub, Kestra, Gitea, and other tools on your behalf. You don't need to install any of these servers locally — they run on Prodegee infrastructure and Claude Code connects to them through a gateway using your team token.

1. In the `prodegee-flows` directory, copy the environment template:

```bash
cp .env.template .env
```

2. Open `.env` in VS Code (or any text editor) and fill in the two values:
   - **`PRODEGEE_GATEWAY_TOKEN`**: Your team's gateway token, provided by Marc in the email from Section 5
   - **`REF_URL_TOKEN`**: Your Ref.tools documentation search token, also provided in that email

3. Verify MCP access works. In the Claude Code panel, ask:

> *"Can you list the available MCP servers?"*

Claude Code should show you the servers your team can access (typically: github, kestra, gitea, step-runner). If you see an authentication error, double-check your `PRODEGEE_GATEWAY_TOKEN` value in `.env`.

**Important:**
- The `.env` file contains your credentials and is gitignored — it will never be committed to the repository
- Do not share your gateway token with other teams
- If your token stops working, contact Marc at marc@prodegee.com

The rest of this guide (Sections 7–8 below) is written for both you and Claude Code to follow.

## 7. Python Environment

We use Python for all geospatial processing. You'll need Python 3.10 or later.

### Step 1: Installation

If you don't already have Python 3.10+, install it via your system's package manager or from [python.org](https://www.python.org/downloads/).

### Step 2: Required Libraries

You'll run these commands in a **terminal** (command line). To open a terminal inside VS Code, go to **Terminal > New Terminal** (or press Ctrl+` on Windows/Linux, Cmd+` on macOS). The terminal appears at the bottom of the VS Code window and should already be in the `prodegee-flows` directory.

Create a virtual environment and install the dependencies by typing each line below and pressing Enter:

```bash
python -m venv prodegee-env
source prodegee-env/bin/activate  # On Windows: prodegee-env\Scripts\activate

pip install duckdb geopandas shapely fiona pyproj requests
```

The first command creates an isolated Python environment for the project. The second activates it (you'll see `(prodegee-env)` appear at the start of your terminal prompt). The third installs all the libraries the project needs — this may take a few minutes.

**Key libraries and what they do at Prodegee:**

| Library | What we use it for |
|---------|-------------------|
| **DuckDB** | In-process SQL database for spatial queries — we load building footprints and entity data into DuckDB tables and run spatial joins |
| **GeoPandas** | Reading and writing geospatial file formats (GeoJSON, GeoPackage, Shapefiles) |
| **Shapely** | Geometry operations — buffering points, calculating distances, polygon operations |

### Step 3: Verify Installation

In the same terminal (with `(prodegee-env)` active), type `python` and press Enter to open the Python interactive shell. Then paste or type these lines:

```python
import duckdb
import geopandas as gpd
from shapely.geometry import Point

print(f"DuckDB: {duckdb.__version__}")
print(f"GeoPandas: {gpd.__version__}")
print(f"Shapely point: {Point(0, 0)}")
```

If you see version numbers and a point geometry printed, everything is working. Type `exit()` to leave the Python shell and return to the terminal.

## 8. Kestra

Kestra is our workflow orchestration platform. It runs the EED.IF pipeline — each processing round is a Kestra flow that chains Python scripts together.

### Step 1: Access

You'll work on a dedicated student Kestra instance, separate from production. Access details will be provided at the kick-off meeting.

### Step 2: What You'll Do in Kestra

- **Browse flows**: See how Round 1, 2, and 3 are structured
- **Run flows**: Execute processing for specific countries/regions
- **Check logs**: When a flow run fails, the logs tell you what went wrong
- **Modify parameters**: Test different calibration values by adjusting flow inputs

The flow definitions are in this repository under `climate16/mcp-servers/` (the EED.IF round flows) and the Python scripts they call are in `namespace-files/climate16/scripts/`.
