# Academic Homepage

This repository contains the initialization skeleton for a bilingual Hugo academic homepage.

## Status

- Default language: English
- Additional language: Chinese
- Theme: HugoBlox Builder v0.12.0 (vendored under `themes/hugo-blox-builder`)
- Deployment target: GitHub Pages
- Content: intentionally not populated in this initialization phase

The Hugo implementation specification document is currently empty. The project therefore follows the available website and visual specifications for this initial structure.

## Local development

Use Hugo Extended 0.159.0 or another version supported by the pinned HugoBlox release. If Hugo is not on `PATH`, the workspace fallback is:

```powershell
.\.tools\hugo.exe server --buildDrafts
```

Then open <http://localhost:1313/>.

## Content structure

Translated content is kept in separate language roots:

```text
content/
├── en/
└── zh/
```

External profile links are intentionally blank until real URLs are supplied. No publications, projects, biographies, or external profiles are fabricated by this initialization.

Before GitHub Pages deployment, set the production `baseURL` in `hugo.yaml` or override it in the deployment workflow.
