# Accessibility review — September 11, 2026

Status: accessibility improvements implemented; ADA compliance has **not** been established. This is a bounded technical review, not certification or a complete WCAG conformance evaluation.

## Scope and checks

Local site reviewed against automated WCAG 2 A/AA, 2.1 AA and 2.2 AA rules using axe-core 4.13.0. Eight pages at widths 1440, 768, 390 and 320 CSS pixels produced 32 completed runs with **zero automated violations and no document-level horizontal overflow**:

- `/`
- `/weight-loss`
- `/videos`
- `/appointment`
- `/consent-forms`
- `/patient-education`
- `/pregnancy-calculator`
- `/patient-education/hair-loss-in-women.html`

Automated contrast checks marked image/gradient text as incomplete: 17 nodes on the home page, seven on weight loss, two on each other React page, none on the HTML handout. Stronger overlays and opaque text reduce these risks, but the incomplete checks are not counted as passes. Embedded and external documents/apps are outside these page scan results.

Manual browser checks confirmed skip-to-main followed by Tab reaches page content, mobile menu closes with Escape and returns focus to its button, internal appointment navigation focuses the page heading, handout searches announce result counts, category selection exposes its pressed state including the empty-result state, and membership billing selection updates its pressed state and live price information. Accessibility-tree inspection confirmed the HTML handout's heading structure and complete text.

TypeScript checking and ESLint on all changed React files passed. Full-repository lint has a preexisting prefer-const issue in generated `src/integrations/supabase/previewAuthStorage.ts`; this review did not modify that generated integration.

## Changes

- Moved site navigation and footer outside the main landmark on all seven routes; made the skip destination focusable.
- Added visible keyboard focus, route/anchor focus handling, reduced-motion support and mobile Escape handling.
- Kept compact navigation through tablet widths and made expanded mobile navigation scrollable.
- Added a visible search label, category pressed states and live result counts to patient education.
- Added named billing controls, selected states, live pricing information and truthful clipboard success/failure feedback.
- Strengthened text contrast over images and gradients and fixed calculator/button wrapping at narrow widths.
- Corrected the footer education link and added a consistent telephone route for accessibility assistance.
- Identified the Spanish intake link's language.
- Added a semantic HTML alternative for the untagged hair-loss PDF, linked from patient education. Its clinical text was compared against the extracted original and preserved; the PDF remains downloadable.

## Items still requiring review

1. **Assistive technology and visual testing:** complete VoiceOver/NVDA reading and task testing, desktop dropdown behavior, zoom/text spacing, focus visibility throughout every interaction, and manual contrast verification where automated checks were incomplete. Document-level overflow testing alone does not verify every element or the full reflow criterion.
2. **PDFs:** all 34 PDFs contain extractable text; 33 contain a structure tree and language metadata. Tags alone do not establish correct reading order, headings, link names or document conformance. The remaining untagged hair-loss PDF now has an HTML alternative. Review all PDFs with assistive technology and repair or provide HTML alternatives as needed.
3. **Videos:** caption availability, caption accuracy, transcripts and any needed audio description have not been audited. The site does not provide separate transcripts. Review every embedded video before claiming conformance.
4. **External forms and portal:** only public entry screens of IntakeQ and Healow were inspected. No patient information was entered or submitted. Later form steps, validation, errors and authenticated portal workflows need vendor/test-account testing. The Spanish intake link currently opens an English entry screen; verify the intended language experience with the vendor.
5. **External pregnancy calculator:** the separate application has not been audited in this review. Its accessibility is not established by the local site's checks.

## Interpretation

WCAG 2.2 AA is the technical target for continuing work, not a claim that a particular ADA legal standard has been satisfied. The Department of Justice describes accessibility obligations for businesses open to the public, including medical offices, and points to technical guidance. Automated scans do not establish compliance; the outstanding manual, media, document and complete-process checks above remain necessary.

References: [DOJ web accessibility guidance](https://www.ada.gov/resources/web-guidance/) and [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).
