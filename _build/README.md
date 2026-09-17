# Resume generator

`build_resume.js` regenerates `../Faraaz_Mohammed_Resume_Base.docx` with docx-js. Edit the
content arrays in the script, then:

```bash
cd _build
npm install docx          # once
node build_resume.js ../Faraaz_Mohammed_Resume_Base.docx
soffice --headless --convert-to pdf ../Faraaz_Mohammed_Resume_Base.docx --outdir ..
```

Style matches the original template: A4, Calibri 10 pt body, navy `#1F3A5F` headings with a
bottom rule, grey `#444444` meta text, right-tab dates. Every bullet is sourced from the README
in the matching project folder — keep it that way when tailoring for a specific role.
