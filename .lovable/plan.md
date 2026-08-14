# Plan: Updating Monteiro Ramalho Website with New Commercial Presentation Data

Update the website to reflect the shift from a lead-gen landing page for individuals (INSS/Labor) to a "Strategic Juridical Hub for Companies and Legacies" based on the new PDF presentation.

## User Review Required

> [!IMPORTANT]
> The focus of the office has shifted significantly in this document towards **Business and Estate Planning (Companies, Condominiums, and Family Legacies)**. I will update the service sections to reflect this corporate focus while keeping the high-conversion elements.

- **Areas of Practice**: I will replace the "Individual INSS" focus with:
  - Corporate Law (Constitution, Governance)
  - Tax Law (Planning, Credit Recovery)
  - Real Estate Law (Due Diligence, Protection)
  - Condominium Law (Management Support)
  - Labor Compliance (Prevention)
  - Estate Planning (Holdings, Succession)

## Proposed Changes

### Content & UI Updates
- **Hero Section**: Change the headline to "Hub jurídico estratégico para empresas e legados" and the subtext to "Toda decisão empresarial envolve riscos. Nossa atuação começa antes do problema surgir."
- **Services/Problems Section**: Update the grid with the 6 core pillars from the PDF (Business, Tax, Real Estate, Condominium, Labor Compliance, Estate Planning).
- **Impact Stats**: Add the numbers from Page 5 (+10 years, 100+ companies, +150M recovered, 5000+ actions).
- **Process Section**: Add the "How we act" steps (Diagnosis, Analysis, Strategy, Implementation, Monitoring, Results).
- **Team Section**: Add the names of the partners/directors (Williams Ramalho, Monteiro Neto, Giovanna Alcântara, Abraão Vasconcelos).
- **Contact Info**: Update address (Fortaleza - CE) and phone/email from Page 22.

### Visual Refinements
- Maintain the Navy (#101947) and Peach (#EFA171) color scheme.
- Ensure typography (DM Serif Display and Source Sans 3) is applied consistently.
- Add a "Clients" ticker/grid featuring the logos/names mentioned (Grupo Marva, Direcional, etc.).

## Technical Details
- **File Updates**:
  - `src/routes/index.tsx`: Rewrite sections and data arrays.
  - `src/styles.css`: Minor adjustments to spacing/contrast if needed.
- **Components**: Create specialized components for the "Impact Stats" and "Process Steps" to improve readability.
- **Assets**: Use generic professional images for new sections (Business/Condominium) as the PDF images are not directly provided as high-res CDN links yet.
