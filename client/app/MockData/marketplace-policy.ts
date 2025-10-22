export const marketplaceRulesData = {
  marketplaceRules: {
    title: "Penthian Marketplace Rules",
    sections: [
      {
        title: "1. Introduction & Scope",
        subSections: [
          {
            number: "1.1",
            title: "Purpose of These Rules",
            content: [
              "These Marketplace Rules govern the listing, trading, and management of tokenized assets on the Penthian Platform, a regulated Virtual Asset Marketplace licensed under the Financial Services Commission (FSC) of Mauritius.",
              "The rules are designed to ensure:",
              "Transparent and fair access to asset tokenization and investment",
              "Protection of investors and asset issuers",
              "Compliance with applicable laws, including AML/CFT obligations",
              "Responsible use of blockchain and smart contracts",
              "Proper enforcement of ownership rights and transferability",
              "Alignment with the core values of Penthian, including integrity, transparency, and ethical stewardship",
              "These rules apply to all users of the platform, including:",
              "Issuers: Entities or individuals listing real-world or digital assets for tokenization",
              "Investors: Individuals or institutions acquiring fractional ownership via compliant token offerings",
              "Agents and Validators: Authorized parties involved in onboarding, management, or verification",
              "Marketplace Operators: Penthian Ltd and its appointed administrators and smart contract infrastructure"
            ]
          },
          {
            number: "1.2",
            title: "Legal Framework",
            content: [
              "These rules operate within the regulatory framework of:",
              "The Virtual Asset and Initial Token Offering Services Act 2021 (Mauritius)",
              "FSC Class S Marketplace License Guidelines",
              "Applicable international standards, including FATF recommendations",
              "ERC-3643, ERC-1155, and other blockchain-based standards used by the Penthian protocol",
              "The Terms of Use, Privacy Policy, and Investor Risk Disclosures available on the Penthian platform"
            ]
          },
          {
            number: "1.3",
            title: "Scope of Application",
            content: [
              "These Marketplace Rules cover:",
              "Eligibility and onboarding requirements for both issuers and investors",
              "Listing standards for real-world assets (RWAs), digital assets, and SMEs",
              "Tokenization process, including asset verification, valuation, and fractionalization",
              "Primary and secondary market trading of compliant tokens",
              "Smart contract governance, including access rights and transfer rules",
              "Revenue distribution mechanisms from underlying asset income (e.g., rent or dividends)",
              "Dispute resolution, delisting, and suspension mechanisms",
              "Marketplace integrity controls to prevent manipulation or misconduct",
              "Investor rights, voting mechanisms, and governance standards",
              "Fees, commissions, and withdrawal protocols",
              "Roles and responsibilities of Penthian Ltd and platform participants"
            ]
          },
          {
            number: "1.4",
            title: "Relationship with Other Policies",
            content: [
              "These Marketplace Rules work in tandem with:",
              "The AML/CFT Manual",
              "The Internal Controls Policy",
              "The IT and Security Policy",
              "The Risk Management Framework",
              "The Investor Protection Policy",
              "The Complaint Handling Procedure",
              "In case of conflict, regulatory requirements and FSC directives shall take precedence over internal policies."
            ]
          },
          {
            number: "1.5",
            title: "Commitment to Transparency and Ethics",
            content: [
              "Penthian is built on a foundation of faith-based values and moral leadership. These rules are not just regulatory — they reflect our unwavering commitment to:",
              "Ensuring fair and inclusive access to asset ownership",
              "Building a trustworthy environment for tokenized investing",
              "Embedding love, patience, and justice in every protocol and decision",
              "Redefining ownership for the digital age — with integrity"
            ]
          }
        ]
      },
      {
        title: "2. Participant Eligibility and Onboarding Requirements",
        content: [
          "To maintain regulatory compliance and investor protection, all participants on the Penthian platform — whether issuers, investors, or agents — must meet specific eligibility criteria and complete a structured onboarding process. This ensures the integrity, security, and lawful operation of our tokenized asset ecosystem."
        ],
        subSections: [
          {
            number: "2.1",
            title: "Issuer Eligibility",
            content: [
              "An issuer is any individual, company, or organization seeking to tokenize and offer fractional ownership of a real-world or digital asset via the Penthian platform.",
              "To be eligible, issuers must:",
              "Be a legal entity registered in a recognized jurisdiction",
              "Provide proof of ownership or legally binding rights over the asset(s) being tokenized",
              "Submit to full KYB (Know Your Business) checks, including identification of Ultimate Beneficial Owners (UBOs)",
              "Undergo a due diligence review covering financials, legal status, debt obligations, and asset encumbrances",
              "Sign a listing agreement outlining their obligations under these rules",
              "Provide independent valuation reports and other supporting documentation as required",
              "Comply with any sector-specific regulations, such as real estate licensing, securities restrictions, or land registry standards",
              "Penthian reserves the right to reject or remove any issuer that fails to meet the above criteria or poses reputational, financial, or legal risk to the platform."
            ]
          },
          {
            number: "2.2",
            title: "Investor Eligibility",
            content: [
              "An investor is any individual or institution seeking to purchase, hold, or trade tokenized assets on the Penthian platform.",
              "All investors must:",
              "Be at least 18 years old and legally competent to enter into binding agreements",
              "Complete KYC (Know Your Customer) verification via our partner, Veriff, including ID, proof of address, and selfie verification",
              "Declare source of funds and undergo a risk scoring process",
              "Acknowledge and agree to the Investor Risk Disclosure Statement",
              "Accept the Terms of Use, Marketplace Rules, and Data Privacy Policy",
              "For certain asset classes or jurisdictions, provide accreditation or investor classification documentation (e.g., retail vs. professional)",
              "Investors from restricted jurisdictions or those flagged under sanctions or PEP watchlists may be excluded from participation."
            ]
          },
          {
            number: "2.3",
            title: "Agent and Validator Requirements",
            content: [
              "Agents (e.g. property managers, asset brokers, project validators) are required to:",
              "Undergo KYC/KYB checks, including any licensing or regulatory status",
              "Sign an Agent Agreement with clear duties and code of conduct",
              "Acknowledge that all actions taken on the platform are logged and subject to audit",
              "Adhere to conflict-of-interest disclosure requirements",
              "Complete training and onboarding modules where applicable"
            ]
          },
          {
            number: "2.4",
            title: "Onboarding Process",
            content: [
              "Onboarding is conducted through the Penthian platform and includes the following steps:",
              "Digital Identity Verification: Automated document checks and biometric verification via Veriff",
              "Jurisdictional Review: Confirming legal eligibility to participate based on user location",
              "AML Screening: PEP, sanctions, and adverse media checks",
              "Investor or Issuer Profile Setup: Including wallet registration and token permissions",
              "Digital Agreement Signing: Binding acceptance of platform terms and regulatory disclosures",
              "Whitelisting: Approved users and wallets are added to the ERC-3643 permission layer",
              "Dashboard Access: Users gain access to listing, investment, and governance tools",
              "All KYC/KYB data is encrypted and stored in line with GDPR and Mauritius Data Protection Act requirements."
            ]
          },
          {
            number: "2.5",
            title: "Ongoing Monitoring",
            content: [
              "Periodic Re-verification may be required depending on risk classification",
              "Users may be flagged for enhanced due diligence (EDD) if risk profile changes",
              "Transaction behaviors are monitored by automated AML tools for unusual activity",
              "Issuer performance (e.g., late reporting, non-payment) may trigger suspension or delisting",
              "Non-compliant users will be revoked from ERC-3643 whitelists and lose transferability rights"
            ]
          },
          {
            number: "2.6",
            title: "Right to Refuse Access",
            content: [
              "Penthian reserves the right to deny platform access or revoke previously granted access at any time if:",
              "The user fails to meet ongoing eligibility criteria",
              "False or misleading information is provided during onboarding",
              "Regulatory changes require exclusion",
              "The user is involved in behavior that is fraudulent, unethical, or damaging to the platform’s mission or reputation",
              "By enforcing clear and structured eligibility requirements, Penthian ensures that all platform participants are aligned with our legal obligations, risk appetite, and core values — creating a safe and compliant environment for tokenized ownership."
            ]
          }
        ]
      },
      {
        title: "3. Asset Listing & Tokenization Standards",
        content: [
          "The tokenization of real-world and digital assets on the Penthian platform is governed by strict technical, legal, and operational standards. These ensure that every listed asset is legitimate, accurately represented, properly fractionalized, and legally enforceable within the regulatory environment of Mauritius and any applicable jurisdictions."
        ],
        subSections: [
          {
            number: "3.1",
            title: "Eligible Asset Types",
            subItems: [
              {
                title: "A. Real-World Assets (RWAs)",
                points: [
                  "Real estate (residential, commercial, industrial)",
                  "Farmland and agricultural infrastructure",
                  "Hotels and serviced apartments",
                  "Revenue-generating properties (e.g., retail centers)"
                ]
              },
              {
                title: "B. SME and Business Assets",
                points: [
                  "Operating companies with audited revenue streams",
                  "IP or revenue rights (e.g., royalties, licensing)",
                  "Franchise licenses or brand portfolios"
                ]
              },
              {
                title: "C. Digital-Native Assets",
                points: [
                  "Digitally native securities or compliant tokens",
                  "Fractional NFTs representing title or income rights",
                  "Wrapped versions of physical assets (with custody agreements)"
                ]
              }
            ],
            content: [
              "Asset types must meet Penthian’s vetting, compliance, and structuring requirements before tokenization."
            ]
          },
          {
            number: "3.2",
            title: "Listing Requirements",
            content: [
              "To list an asset, the issuer must provide:",
              "Proof of ownership or legally binding rights",
              "Third-party valuation reports (where applicable)",
              "Due diligence documentation including title, permits, leases, or contracts",
              "Risk disclosure, offering terms, and use of proceeds (if fundraising)",
              "Evidence of compliance with sector-specific licensing (e.g., real estate laws, prospectus exemptions)",
              "A legal structure allowing revenue distribution and token holder rights (e.g., unit trust, SPV)",
              "A commitment to ongoing reporting and investor communication",
              "Listings must pass internal compliance review and may require external legal validation before approval."
            ]
          },
          {
            number: "3.3",
            title: "Tokenization Process",
            subItems: [
              {
                title: "Smart Contract Deployment",
                points: [
                  "ERC-3643 for permissioned identity-linked tokens",
                  "ERC-1155 for fractional multi-class issuance",
                  "Metadata includes asset description, rights, and financial logic"
                ]
              },
              {
                title: "Minting & Custody",
                points: [
                  "Tokens minted into a secure, platform-controlled address",
                  "Linked to issuer’s compliance credentials and wallet permissions"
                ]
              },
              {
                title: "Whitelisting & Access Control",
                points: [
                  "Tokens only transferrable to KYC-verified users via ERC-3643 permission layer",
                  "Cross-jurisdictional rules enforced via smart contract modules"
                ]
              },
              {
                title: "Distribution or Sale",
                points: [
                  "Tokens offered in a primary issuance (sale or investment round)",
                  "Funds collected are held in escrow until compliance checks are passed"
                ]
              },
              {
                title: "Ongoing Revenue Sharing",
                points: [
                  "Income (e.g., rent, dividends) distributed to token holders proportionally",
                  "Distributions visible and traceable via the investor dashboard"
                ]
              }
            ]
          },
          {
            number: "3.4",
            title: "Listing Categories",
            content: [
              "Each asset is assigned a listing category, including:",
              "Stable Yield – income-generating, long-term assets (e.g., leased apartments)",
              "Growth Opportunity – high appreciation potential, lower yield (e.g., land banks)",
              "Hospitality & Tourism – hotels and short-stay rentals",
              "Private Business – equity or profit-share in SME ventures",
              "Special Projects – community infrastructure, ESG-linked assets, or diaspora programs",
              "This helps investors understand the nature of risk and return for each listing."
            ]
          },
          {
            number: "3.5",
            title: "Asset Token Structure",
            content: [
              "All tokenized assets must:",
              "Represent clear, auditable ownership or income rights",
              "Be linked to legal entities or custodial structures",
              "Include on-chain metadata for verification",
              "Be assigned transfer restrictions if required by law",
              "Comply with the relevant jurisdictional offering rules",
              "Penthian enforces no hidden leverage, opaque structuring, or synthetic exposure without full disclosure and legal justification."
            ]
          },
          {
            number: "3.6",
            title: "Review, Suspension & Delisting",
            content: [
              "An asset listing may be:",
              "Suspended if compliance documents lapse, revenue data is not provided, or legal action is initiated",
              "Delisted if the asset is sold, fails materially, or violates terms of use",
              "Reviewed quarterly to ensure continued transparency, reporting, and investor access",
              "Investors are notified of material changes. Delisted tokens are either redeemed, burned, or converted to claimable rights based on contract terms."
            ]
          },
          {
            number: "3.7",
            title: "Asset Integrity & Transparency",
            content: [
              "All listings must include:",
              "Photos, maps, legal titles, and proof of valuation",
              "Verified wallet address of issuer and payment gateway",
              "Regular financial and operational updates",
              "Public listing of fees, performance metrics, and risk warnings",
              "Each asset has a dedicated \"Transparency Page\" showing the audit trail, voting history, and governance events related to that asset.",
              "Through strict listing and tokenization standards, Penthian ensures that each asset on the platform is compliant, trustworthy, and clearly structured — creating a secure foundation for global investors to engage in fractional ownership."
            ]
          }
        ]
      },
      {
        title: "4. Primary and Secondary Market Rules",
        content: [
          "The Penthian platform offers two core transaction environments: the Primary Market, where newly issued tokens are offered directly by asset issuers, and the Secondary Market, where existing token holders may sell or transfer ownership to other eligible participants. Both markets operate under transparent, automated, and compliant rules to ensure investor protection, fair pricing, and regulatory alignment."
        ],
        subSections: [
          {
            number: "4.1",
            title: "Primary Market Overview",
            content: [
              "The Primary Market enables:",
              "Initial token offerings by approved issuers",
              "Capital raising for asset development or acquisition",
              "Investor participation in new fractional ownership opportunities",
              "Direct distribution of tokenized units based on agreed terms"
            ]
          },
          {
            number: "4.1.1",
            title: "Listing Requirements",
            content: [
              "All primary listings must:",
              "Be pre-approved by Penthian Compliance",
              "Include verified valuation and offering documentation",
              "Specify the total token supply, price per unit, minimum investment, and rights attached",
              "Set a defined offering window with start and end dates",
              "Comply with jurisdictional offering rules, especially around solicitation, advertising, and retail investor protections",
              "Route collected funds through a secure escrow or trust account"
            ]
          },
          {
            number: "4.1.2",
            title: "Subscription & Allocation",
            content: [
              "Investors subscribe by committing stablecoins or fiat (if supported)",
              "Whitelisting is confirmed via ERC-3643 permissions",
              "Once the soft cap is met (if applicable), tokens are distributed on a first-in, first-confirmed basis",
              "Any oversubscription is refunded in full or according to prorated logic"
            ]
          },
          {
            number: "4.1.3",
            title: "Unlock & Revenue Activation",
            content: [
              "Tokens remain non-transferable until the offering closes and all compliance checks are passed",
              "Once confirmed, tokens are unlocked and begin earning revenue (if yield-linked)",
              "Income is streamed or distributed monthly or quarterly, depending on the asset"
            ]
          },
          {
            number: "4.2",
            title: "Secondary Market Overview",
            content: [
              "The Secondary Market allows:",
              "Peer-to-peer trading of previously issued asset tokens",
              "Liquidity for investors seeking early exit or portfolio rebalancing",
              "Transparent price discovery through listed offers, bids, or auctions",
              "Compliant transfers between verified wallets"
            ]
          },
          {
            number: "4.2.1",
            title: "Listing a Token for Sale",
            content: [
              "Token holders may:",
              "List partial or full holdings for sale",
              "Set fixed prices or use auction-based mechanisms",
              "Choose between open market or private whitelisted sales",
              "Specify visibility (public, regional, or restricted)",
              "Listings must comply with platform-defined minimum holding periods, if applicable."
            ]
          },
          {
            number: "4.2.2",
            title: "Buying on the Secondary Market",
            content: [
              "Buyers must:",
              "Be KYC-verified and ERC-3643 whitelisted",
              "Accept platform terms and specific asset disclosures",
              "Pay in supported stablecoins or other tokens with integrated conversion",
              "Confirm purchase within defined timeout windows for fixed-price listings",
              "Upon purchase, ownership is transferred via smart contract, and token history is updated on-chain."
            ]
          },
          {
            number: "4.2.3",
            title: "Price Limits and Market Fairness",
            content: [
              "To ensure market integrity:",
              "Price floors may be enforced based on NAV (Net Asset Value) to avoid manipulation",
              "Circuit breakers can pause trading during unusual volatility",
              "Auction rules are transparent, time-bound, and fair to all bidders",
              "Suspicious pricing patterns or insider coordination are flagged for review"
            ]
          },
          {
            number: "4.3",
            title: "Trading Restrictions and Lockups",
            content: [
              "Certain asset tokens may carry minimum holding periods",
              "Transfers may be restricted by jurisdiction, wallet status, or regulatory class",
              "Forced transfer or redemption clauses are embedded in certain contracts (e.g., during asset sale or liquidation)",
              "Transfer history is recorded and auditable via explorer or investor dashboard"
            ]
          },
          {
            number: "4.4",
            title: "Fees and Commissions",
            content: [
              "Trading activity is subject to:",
              "Listing fee (for primary offerings, paid by issuers)",
              "Transaction fee (e.g., 0.5–2% of sale amount, paid by seller or buyer)",
              "Asset management fee (where applicable, deducted from revenue distributions)",
              "All fees are disclosed at the point of transaction and allocated toward platform operations, compliance, and investor services."
            ]
          },
          {
            number: "4.5",
            title: "Dispute Resolution",
            content: [
              "Penthian provides a structured process for:",
              "Investigating fraudulent sales or unauthorized listings",
              "Handling misrepresentation in asset disclosures",
              "Resolving smart contract bugs or transaction failures",
              "Initiating buybacks or token burns where redress is needed",
              "Disputes are handled first through internal resolution, then escalated to arbitration or regulator referral, if necessary.",
              "By operating transparent and compliant markets for both new and existing tokens, Penthian provides the infrastructure for safe, borderless, and liquid ownership of real-world assets."
            ]
          }
        ]
      },
      {
        title: "5. Smart Contract Governance & Identity Compliance",
        content: [
          "Penthian operates a permissioned token marketplace that leverages smart contracts to enforce compliance, protect users, and enable secure, automated transactions. At the heart of this infrastructure is ERC-3643, a decentralized identity-based token standard that allows for transfer restrictions, KYC enforcement, and on-chain investor protection."
        ],
        subSections: [
          {
            number: "5.1",
            title: "Permissioned Token Framework (ERC-3643)",
            content: [
              "All tokenized assets on Penthian are issued using ERC-3643 (formerly known as the T-REX Protocol), which includes:",
              "Identity-linked permissions: Only approved wallets can send or receive tokens",
              "Transfer rules: Based on jurisdiction, asset type, investor classification, or issuer-defined criteria",
              "Compliance layer: Enforced through modular smart contracts and access control logic",
              "Revocation mechanism: Tokens can be frozen, paused, or revoked in case of fraud, regulatory breaches, or forced liquidation",
              "This framework ensures that token transfers remain compliant across jurisdictions and use cases, even in peer-to-peer contexts."
            ]
          },
          {
            number: "5.2",
            title: "Identity Verification & Whitelisting",
            content: [
              "Each investor and issuer must pass through KYC/KYB processes before being granted access to token transfers. Specifically:",
              "Verification is performed via Veriff, Penthian’s integrated identity partner",
              "Verified users are assigned a unique identifier and linked to a Penthian Permission Registry",
              "Their wallet address is added to an on-chain whitelist specific to the token class or jurisdiction",
              "Transfer attempts involving non-whitelisted wallets are automatically rejected at the smart contract level",
              "This ensures full control over asset flows, without compromising decentralization or non-custodial principles."
            ]
          },
          {
            number: "5.3",
            title: "Compliance Parameters Embedded in Code",
            content: [
              "Each asset token includes embedded rules, such as:",
              "Jurisdiction restrictions (e.g., excluding sanctioned countries)",
              "Investor classification (e.g., accredited vs. retail)",
              "Minimum holding period",
              "Daily/monthly transfer limits",
              "Transaction logging and audit hooks",
              "These rules are hard-coded, versioned, and externally auditable, reducing reliance on centralized enforcement."
            ]
          },
          {
            number: "5.4",
            title: "Issuer and Admin Rights",
            content: [
              "Issuers and platform admins have limited smart contract permissions to:",
              "Pause token trading in case of emergency",
              "Update KYC providers or compliance oracles",
              "Authorize revenue distributions to token holders",
              "Burn tokens during redemptions or delistings",
              "Escrow or lock tokens during legal disputes or regulatory inquiries",
              "All such actions are time-stamped, recorded, and reviewable by the compliance team and FSC inspectors."
            ]
          },
          {
            number: "5.5",
            title: "Technology Governance and Audits",
            content: [
              "Penthian maintains a Tech Governance Committee responsible for:",
              "Approving smart contract templates and upgrades",
              "Reviewing external audits from cybersecurity firms",
              "Coordinating with the compliance team to ensure code reflects legal obligations",
              "Testing new features in sandbox environments before mainnet deployment",
              "Audit reports are published annually and provided to the FSC as part of regulatory reporting."
            ]
          },
          {
            number: "5.6",
            title: "Decentralized Trust, Centralized Compliance",
            content: [
              "Penthian’s architecture balances non-custodial asset control with centralized identity and permission management, giving:",
              "Users confidence in true ownership",
              "Issuers assurance that investors meet legal criteria",
              "Regulators visibility into compliance enforcement",
              "Auditors access to a full on-chain history of transactions, transfers, and KYC-linked activity",
              "This model allows Penthian to scale across borders while maintaining integrity and trust in its ecosystem."
            ]
          }
        ]
      },
      {
        title: "6. Revenue Distribution & Investor Rights",
        content: [
          "Penthian is designed to offer real economic value to investors through fractional ownership of income-generating assets. This section outlines how revenue is distributed to token holders, and what legal, financial, and participatory rights they are entitled to."
        ],
        subSections: [
          {
            number: "6.1",
            title: "Revenue Distribution Mechanism",
            subSections: [
              {
                number: "6.1.1",
                title: "Eligible Assets",
                content: [
                  "Assets eligible for revenue distribution include:",
                  "Rental properties (e.g., apartments, hotels, serviced residences)",
                  "Yield-bearing SMEs (e.g., hospitality businesses, franchises)",
                  "Royalties, licensing agreements, or dividend-paying shares",
                  "Issuers must declare revenue sources and distribution schedules during the listing process."
                ]
              },
              {
                number: "6.1.2",
                title: "Smart Contract Distribution",
                content: [
                  "Revenue is distributed automatically or manually via:",
                  "Smart contracts connected to each asset’s treasury",
                  "Proportional share logic, based on token holdings",
                  "Time-based triggers, e.g., monthly, quarterly",
                  "Stablecoins or native tokens as payout currency, depending on asset and jurisdiction",
                  "Wallets must be ERC-3643 whitelisted to receive distributions."
                ]
              },
              {
                number: "6.1.3",
                title: "Escrow and Reserves",
                content: [
                  "To protect investor interests:",
                  "Penthian may hold income in escrow until audited figures are provided",
                  "Reserve accounts may be created to handle maintenance, vacancy, or insurance risks",
                  "Issuers are contractually obligated to transfer income within a specified timeline or face platform penalties"
                ]
              }
            ]
          },
          {
            number: "6.2",
            title: "Investor Rights",
            content: [
              "Penthian is committed to embedding strong, clear, and enforceable rights for all investors."
            ],
            subSections: [
              {
                number: "6.2.1",
                title: "Legal & Economic Rights",
                content: [
                  "Investors may be granted:",
                  "A beneficial interest in revenue streams from the underlying asset",
                  "Voting or consultation rights on major decisions (e.g., sale, refinancing, renovations)",
                  "Exit rights via resale, redemption, or asset liquidation",
                  "Claim rights during asset recovery or insurance events",
                  "Access to performance reporting, cashflow updates, and notices",
                  "All rights are published in the asset’s legal documentation and encoded in the token metadata."
                ]
              },
              {
                number: "6.2.2",
                title: "Voting Mechanisms",
                content: [
                  "Where applicable, investors may vote on:",
                  "Sale or refinancing of the underlying asset",
                  "Changes to the asset’s management or operations",
                  "Reserve allocation or maintenance upgrades",
                  "Delisting or restructuring decisions",
                  "Voting is conducted via smart contract using token-weighted logic and secure UI on the platform dashboard."
                ]
              },
              {
                number: "6.2.3",
                title: "Communication Rights",
                content: [
                  "Investors are entitled to:",
                  "Timely communication of updates, income reports, and events",
                  "A transparent investor dashboard with performance metrics",
                  "Access to governance history, previous votes, and listing amendments",
                  "Ability to file support requests or complaints"
                ]
              }
            ]
          },
          {
            number: "6.3",
            title: "Tax and Withholding Obligations",
            content: [
              "Investors are responsible for reporting income per their local tax laws. However:",
              "Penthian may issue distribution summaries for tax filing",
              "For certain jurisdictions, withholding tax may be applied and remitted on behalf of investors",
              "Issuers must disclose any tax implications tied to their asset’s structure (e.g., SPV, trust)"
            ]
          },
          {
            number: "6.4",
            title: "Breach of Distribution Obligations",
            content: [
              "If an issuer fails to:",
              "Transfer revenue on time",
              "Provide audit or financial data",
              "Disclose material risks or performance issues",
              "Penthian may initiate:",
              "Temporary suspension of asset trading",
              "Forced arbitration or redemption events",
              "Issuer removal and reassignment of asset management to vetted partners",
              "Escalation to the Financial Services Commission or relevant legal authorities"
            ]
          },
          {
            number: "6.5",
            title: "Ethical and Transparent Capital Flow",
            content: [
              "Penthian is built on values of integrity, transparency, and stewardship. As such:",
              "All income and revenue flows are visible and traceable via the blockchain",
              "Issuers are required to act in good faith and prioritize investor rights",
              "The platform prohibits hidden fees, predatory rent extraction, or deceptive yield structures",
              "Investors are encouraged to understand both risks and rewards of each offering",
              "By combining smart contract automation with ethical financial governance, Penthian provides a secure, rewarding environment for investors seeking passive income and ownership in global assets."
            ]
          }
        ]
      },
      {
        title: "7. Delisting, Suspension & Termination",
        content: [
          "To preserve the trust and integrity of the Penthian ecosystem, it is essential that all listed assets and participants uphold continuous compliance with regulatory, legal, and platform standards. This section outlines the conditions under which a tokenized asset, issuer, or investor may be suspended, delisted, or terminated from the platform."
        ],
        subSections: [
          {
            number: "7.1",
            title: "Grounds for Delisting or Suspension",
            subItems: [
              {
                title: "A. Regulatory or Legal Violations",
                points: [
                  "Violation of the Virtual Asset and Initial Token Offering Services Act (VAITOS) or FSC requirements",
                  "Breach of securities, AML/CFT, land, or property laws in the asset's jurisdiction",
                  "Involvement in money laundering, fraud, or criminal investigation"
                ]
              },
              {
                title: "B. Failure to Meet Disclosure Obligations",
                points: [
                  "Non-provision of periodic financial reports or revenue updates",
                  "Omission of material risks or misrepresentation in asset listings",
                  "Failure to update title ownership or legal status of the underlying asset"
                ]
              },
              {
                title: "C. Operational or Financial Risks",
                points: [
                  "Insolvency or bankruptcy of the issuer",
                  "Destruction, devaluation, or sale of the underlying asset without proper process",
                  "Breach of token distribution or investor payment obligations"
                ]
              },
              {
                title: "D. Platform Risk & Reputation",
                points: [
                  "Engagement in unethical or deceptive business practices",
                  "Receiving persistent complaints from investors or regulatory warnings",
                  "Negative media exposure or association that compromises platform credibility"
                ]
              }
            ]
          },
          {
            number: "7.2",
            title: "Delisting Procedure",
            content: [
              "When an issue is identified, the following steps apply:",
              "Notice of Concern issued to issuer or user, with a deadline to respond",
              "Temporary Suspension if risk is material and urgent",
              "Investigation conducted by the Compliance and Risk Team",
              "Resolution Path provided (e.g., update filings, restructure legal rights, or repay obligations)",
              "If unresolved, a Formal Delisting Notice is issued and the listing is removed from public access",
              "Delisted tokens are tagged in the smart contract and blocked from further sale unless redemption or arbitration is initiated."
            ]
          },
          {
            number: "7.3",
            title: "Suspension of Trading",
            content: [
              "Suspension may occur:",
              "On request of the issuer (e.g., for restructuring)",
              "During force majeure or legal proceedings",
              "When technical, governance, or operational issues affect investor safety",
              "If a smart contract exploit or wallet compromise is detected",
              "Suspension may be lifted once remediation is complete and approved by platform compliance officers."
            ]
          },
          {
            number: "7.4",
            title: "Redemption and Exit Options Post-Delisting",
            content: [
              "Depending on the nature of the delisting:",
              "Investors may redeem tokens at a fair market value (as defined in contract)",
              "Asset may be sold and proceeds distributed proportionally",
              "A recovery trustee or agent may be appointed to manage claims",
              "In cases of fraud or misrepresentation, legal action may be initiated by the platform or affected investors"
            ]
          },
          {
            number: "7.5",
            title: "Reinstatement",
            content: [
              "In rare cases, delisted assets may be reinstated if:",
              "The issue was temporary and properly resolved",
              "The asset is restructured to meet current compliance requirements",
              "A new legal wrapper or custodian is approved and registered",
              "Reinstatement requires a full new compliance review and board approval."
            ]
          },
          {
            number: "7.6",
            title: "Communication & Transparency",
            content: [
              "All delisting or suspension actions will be:",
              "Logged on-chain",
              "Communicated to investors via platform announcements",
              "Documented for FSC compliance reporting",
              "Linked to the asset’s Transparency Page for audit trail and accountability"
            ]
          },
          {
            number: "7.7",
            title: "Termination of Platform Access (User-Level)",
            content: [
              "Individual investors, issuers, or agents may be removed from the platform for:",
              "Providing false or misleading onboarding information",
              "Engaging in market manipulation or insider trading",
              "Abusing referral, listing, or governance systems",
              "Violating the Terms of Use, Data Policy, or any other binding platform agreement",
              "Wallets linked to banned users are removed from ERC-3643 whitelists and flagged for regulatory reporting."
            ]
          },
          {
            number: "7.8",
            title: "Ethical Standards and Accountability",
            content: [
              "As a platform rooted in ethical stewardship and Kingdom values, Penthian upholds the fruits of the Spirit — even in conflict resolution:",
              "Every delisting or disciplinary process will emphasize justice, patience, and accountability",
              "Investors and issuers will be treated with dignity and transparency, even during sanctions",
              "Redemption, communication, and remedy will always be prioritized over punishment"
            ]
          }
        ]
      },
      {
        title: "8. Marketplace Integrity & Anti-Manipulation Measures",
        content: [
          "Penthian is committed to building a tokenized marketplace that is trustworthy, fair, and free of manipulation. This section outlines the systems, processes, and rules we enforce to detect, prevent, and respond to market abuse, insider trading, and unethical behavior across all transactions and listings."
        ],
        subSections: [
          {
            number: "8.1",
            title: "Fair Market Conduct Principles",
            content: [
              "All users of the Penthian platform must act in accordance with the following principles:",
              "Honesty: Represent assets and intentions truthfully",
              "Transparency: Avoid concealment of relevant information",
              "Fair Dealing: Engage with the platform in a manner that respects the rights of others",
              "Accountability: Accept responsibility for any financial, legal, or reputational damage caused by misconduct",
              "No Abuse of Power: Insiders or influential parties may not exploit their positions to manipulate the market or suppress competition"
            ]
          },
          {
            number: "8.2",
            title: "Prohibited Conduct",
            subItems: [
              {
                title: "A. Insider Trading",
                points: [
                  "Trading based on material non-public information (MNPI) related to asset listings, delistings, mergers, or governance decisions"
                ]
              },
              {
                title: "B. Market Manipulation",
                points: [
                  "Artificially inflating or deflating token prices (e.g., through wash trading, spoofing, layering)",
                  "Coordinated schemes between users to distort price discovery or mislead others",
                  "Launching or promoting assets based on fraudulent or exaggerated claims"
                ]
              },
              {
                title: "C. Front-Running",
                points: [
                  "Executing trades ahead of large buy/sell orders after obtaining non-public order book information"
                ]
              },
              {
                title: "D. Collusion & Bid Rigging",
                points: [
                  "Creating fake bidding environments in auctions",
                  "Coordinating with other investors to influence outcomes of token pricing or governance votes"
                ]
              },
              {
                title: "E. Fake Volume Generation",
                points: [
                  "Conducting trades between affiliated wallets to simulate activity",
                  "Using bots or scripts to create the illusion of high demand"
                ]
              }
            ]
          },
          {
            number: "8.3",
            title: "Surveillance Systems",
            content: [
              "Penthian deploys multiple layers of surveillance to monitor market activity:",
              "Automated pattern recognition tools to flag irregular trades, price swings, and volume spikes",
              "Wallet clustering analysis to detect suspicious token flows or coordinated actors",
              "Smart contract event logging for audit trail on transfers, redemptions, and contract interactions",
              "Manual review protocols for escalated red flags, with cross-department compliance review",
              "API abuse detection and rate-limiting to mitigate bot exploitation",
              "All incidents are documented and may be shared with FSC regulators if they indicate material risk or legal breaches."
            ]
          },
          {
            number: "8.4",
            title: "Whistleblower & Ethics Reporting",
            content: [
              "We encourage internal and external stakeholders to report concerns regarding:",
              "Market manipulation",
              "Misconduct by issuers, agents, or employees",
              "Conflicts of interest or corrupt practices",
              "Reports can be submitted via encrypted form or to a dedicated whistleblower channel, with anonymity preserved where requested. Whistleblowers will not be penalized for good faith reporting."
            ]
          },
          {
            number: "8.5",
            title: "Enforcement Measures",
            content: [
              "When violations are confirmed, Penthian may enforce:",
              "Trade reversals where technically feasible",
              "Blacklisting of wallets or users from ERC-3643 permission registry",
              "Freezing of token transfers pending investigation",
              "Permanent bans and referral to law enforcement or regulators",
              "On-chain disclosures to protect other market participants",
              "In severe cases, an emergency suspension of trading or governance rights may be activated by platform administrators."
            ]
          },
          {
            number: "8.6",
            title: "Platform-Wide Ethics Policy",
            content: [
              "All employees, agents, developers, and stakeholders of Penthian are bound by:",
              "A Code of Conduct upholding biblical virtues and professional standards",
              "Conflict-of-interest disclosure forms prior to asset involvement or market engagement",
              "Zero-tolerance policy for bribery, kickbacks, or financial inducements",
              "Ongoing training and certification for those with market access roles"
            ]
          },
          {
            number: "8.7",
            title: "Investor Education and Risk Warnings",
            content: [
              "To ensure users engage responsibly:",
              "All listings include clear, accessible risk statements",
              "Investors are provided with interactive learning modules during onboarding",
              "Disclosures include jurisdictional limits, asset-specific risks, and potential loss of capital",
              "No listings or communications may be promoted as “guaranteed”, “risk-free”, or “get rich quick”",
              "FOMO-based marketing, excessive hype, or psychological exploitation tactics are strictly prohibited",
              "By embedding strong anti-manipulation mechanisms and ethical accountability throughout the platform, Penthian ensures a secure and principled environment for tokenized ownership and investment."
            ]
          }
        ]
      },
      {
        title: "9. Investor Protection & Risk Disclosures",
        content: [
          "Penthian is designed to empower global investors with access to fractional ownership of real-world assets—but this access must be supported by comprehensive protections, transparency, and ethical stewardship. This section defines how we safeguard investors, disclose risks, and uphold trust across jurisdictions and user types."
        ],
        subSections: [
          {
            number: "9.1",
            title: "Core Investor Protections",
            subItems: [
              {
                title: "A. Verified Participation Only",
                points: [
                  "All investors must complete a full KYC/KYB process through Veriff before being allowed to trade or invest. This ensures platform safety and compliance with global AML/CFT regulations."
                ]
              },
              {
                title: "B. On-Chain Permissioning",
                points: [
                  "ERC-3643 token restrictions ensure that only eligible, whitelisted wallets can participate. Transfers between wallets outside the permission registry are automatically blocked."
                ]
              },
              {
                title: "C. Smart Contract Automation",
                points: [
                  "Revenue, governance, and redemption rules are enforced on-chain—removing discretionary or manual control, and minimizing human error or favoritism."
                ]
              },
              {
                title: "D. Escrow & Custody Protocols",
                points: [
                  "Investor funds during primary offerings are held in secure, monitored accounts. Revenue and distributions are only released once offering criteria are met and legal obligations fulfilled."
                ]
              },
              {
                title: "E. Compliance Oversight",
                points: [
                  "All listed issuers are subject to ongoing compliance reviews. Assets failing to meet platform standards may be suspended or delisted, with investor exit options provided."
                ]
              }
            ]
          },
          {
            number: "9.2",
            title: "Risk Disclosure Requirements",
            content: [
              "Each listed asset includes a mandatory Risk Disclosure Statement, addressing:",
              "Type and location of asset",
              "Title and legal structure",
              "Operational risks (e.g., market volatility, natural disasters)",
              "Financial risks (e.g., variable yield, capital loss)",
              "Regulatory risks (e.g., changes in local laws)",
              "Technical risks (e.g., smart contract failure, digital wallet issues)",
              "Jurisdiction-specific warnings (e.g., securities classification, tax treatment)",
              "Investors must explicitly acknowledge risk disclosures before purchasing."
            ]
          },
          {
            number: "9.3",
            title: "Categorization of Investors",
            content: [
              "Penthian supports multiple investor profiles, each with tailored access and limitations:",
              "Retail Investors: Subject to investment caps and restricted asset classes",
              "Accredited/Qualified Investors: May access higher-risk or exclusive deals",
              "Institutional Investors: Provided with custom onboarding, compliance reporting, and access to bulk token tranches",
              "Diaspora/Impact Investors: May be granted access to locally vetted assets with verified community benefit",
              "Investor profiles are stored securely and reviewed periodically for reclassification."
            ]
          },
          {
            number: "9.4",
            title: "Investment Limits and Safeguards",
            content: [
              "To prevent overexposure:",
              "Retail investors may face daily, monthly, or per-asset limits",
              "Certain high-risk or illiquid assets may be restricted to qualified investors only",
              "Dynamic risk assessments may trigger warnings before confirming trades",
              "Investment dashboards show portfolio diversification metrics to aid decision-making"
            ]
          },
          {
            number: "9.5",
            title: "Token Transparency and Rights",
            content: [
              "Each tokenized asset includes a Token Rights Sheet, summarizing:",
              "What the token represents (ownership, income share, utility, etc.)",
              "Legal structure or SPV backing the token",
              "Redemption or resale rules",
              "Revenue distribution mechanics",
              "Voting or governance powers",
              "Termination, exit, or force majeure clauses",
              "All token rights are embedded in smart contracts and accessible via investor dashboards."
            ]
          },
          {
            number: "9.6",
            title: "Educational Support",
            content: [
              "Penthian provides:",
              "Investor onboarding tutorials",
              "Glossaries of real estate, finance, and tokenization terms",
              "Video walkthroughs of risk concepts and platform navigation",
              "Periodic webinars, community AMAs, and newsletters to enhance user knowledge",
              "In-platform reminders and “Learn Before You Buy” features"
            ]
          },
          {
            number: "9.7",
            title: "Complaint Handling and Dispute Resolution",
            content: [
              "If an investor feels harmed or misled, they may:",
              "Submit a support ticket through the help center",
              "Escalate to Penthian’s Compliance & Investor Protection Unit",
              "If unresolved, trigger smart contract-based dispute resolution where applicable",
              "Lodge a complaint with the Mauritius Financial Services Commission (FSC)",
              "A full complaints policy is maintained and linked within user dashboards."
            ]
          },
          {
            number: "9.8",
            title: "Platform Ethics & Moral Framework",
            content: [
              "Investor protection on Penthian is not just regulatory—it’s spiritual.",
              "Our marketplace is founded on Kingdom values, including:",
              "Love: We treat all users with care and respect, regardless of wealth or experience",
              "Patience: We walk with investors through complex ideas and decisions",
              "Integrity: We disclose, not obscure",
              "Self-control: We reject pump-and-dump tactics, gambling language, or emotional manipulation",
              "Faithfulness: We protect the long-term trust of our community",
              "This is more than compliance. It is covenantal stewardship."
            ]
          }
        ]
      },
      {
        title: "10. Governance, Voting & DAO Participation",
        content: [
          "The Penthian ecosystem is designed to evolve toward a decentralized and participatory governance model, where asset owners, investors, and agents can collaborate in shaping the platform and its operations. This section describes the governance framework, voting mechanisms, and how Penthian incorporates DAO principles while complying with global legal standards."
        ],
        subSections: [
          {
            number: "10.1",
            title: "Platform Governance Framework",
            content: [
              "Penthian operates under a hybrid governance model:",
              "Corporate-level governance: For regulatory, operational, and legal oversight under Penthian Ltd (Mauritius)",
              "Protocol-level governance: Using smart contract-based voting systems for asset-specific and platform-wide decisions",
              "Community input: Through token-weighted voting, proposals, and participatory governance forums",
              "This structure allows for both regulatory compliance and progressive decentralization."
            ]
          },
          {
            number: "10.2",
            title: "Governance Participants",
            content: [
              "Governance rights may be extended to:",
              "Asset Investors: Token holders with rights to vote on key asset matters (e.g. refinancing, sale, renovations)",
              "Issuers & Asset Managers: Who may propose changes to operations or legal structures",
              "Platform Agents: Verified parties responsible for onboarding assets or users",
              "Core Developers & Legal Stewards: Contributing to protocol upgrades and policy decisions",
              "Participants must hold the relevant governance-eligible tokens or NFTs and be ERC-3643 whitelisted."
            ]
          },
          {
            number: "10.3",
            title: "Voting Rights and Triggers",
            content: [
              "Voting may be triggered for the following types of decisions:",
              "Asset-Level Decisions:",
              "Sale or refinancing of property",
              "Renewal or termination of management agreements",
              "Reallocation of reserve funds or major capital improvements",
              "Marketplace-Level Decisions:",
              "Protocol upgrades",
              "Changes to marketplace fees",
              "Adding/removing supported jurisdictions",
              "Appointing dispute resolution agents"
            ]
          },
          {
            number: "10.4",
            title: "Voting Mechanics",
            content: [
              "Votes are executed through a token-weighted smart contract system:",
              "Each token represents 1 vote unless specified otherwise",
              "Minimum quorum thresholds must be met (e.g., 25% participation)",
              "Simple majority or supermajority rules apply based on the proposal type",
              "Voting is conducted on-chain with full transparency and time-bound execution windows",
              "Abstentions, re-votes, and delegate voting may be supported in future versions",
              "Results are immutable and executed through pre-coded contract logic where applicable."
            ]
          },
          {
            number: "10.5",
            title: "DAO Integration Path",
            content: [
              "While Penthian is not currently a full DAO, it is DAO-aligned and will progressively decentralize:",
              "Future tokenized assets may launch with native sub-DAOs (e.g., hotel owners’ DAO, regional investor DAO)",
              "Governance tokens or NFTs may grant voting power across the ecosystem",
              "Revenue-sharing DAOs may form for passive income pooling and joint decision-making",
              "DAO treasuries may control community grants, education budgets, or platform initiatives",
              "All DAOs will remain compliant with local laws and ERC-3643 permissions."
            ]
          },
          {
            number: "10.6",
            title: "Proposal Submission & Review",
            content: [
              "Governance participants may submit proposals via:",
              "In-platform governance dashboard",
              "Verified wallet signature",
              "Submission of a detailed rationale and impact summary",
              "Optional financial or legal attachments for complex decisions",
              "Proposals are reviewed by the Compliance and Governance Committee before entering the voting phase."
            ]
          },
          {
            number: "10.7",
            title: "Governance Abuse Safeguards",
            content: [
              "To maintain integrity:",
              "Proposal spam filters limit low-quality or abusive proposals",
              "Cooling-off periods apply between controversial decisions",
              "Wallet reputation scoring may be introduced to weigh trustworthy participation",
              "Any proposal that violates FSC, AML/CFT, or local laws will be automatically rejected or reversed"
            ]
          },
          {
            number: "10.8",
            title: "Communication & Transparency",
            content: [
              "Every governance vote will be:",
              "Accompanied by clear, unbiased explanatory content",
              "Open to discussion in official governance channels",
              "Stored permanently on-chain",
              "Documented in platform governance records for audit and investor review",
              "Investor dashboards will include governance history and alerts for open proposals."
            ]
          },
          {
            number: "10.9",
            title: "Faith-Based Governance Values",
            content: [
              "Penthian believes righteous governance is foundational to flourishing ecosystems. As such:",
              "Proposals must not violate biblical values or ethical conduct",
              "Governance should reflect gentleness, kindness, and wisdom, not manipulation or self-interest",
              "Our governance forums are places of dialogue and discernment, not divisiveness",
              "Participation in governance is not just technical—it’s spiritual leadership in the new economy."
            ]
          }
        ]
      },
      {
        title: "11. Term Definitions & Legal Disclosures",
        subSections: [
          {
            number: "11.1",
            title: "Key Definitions",
            content: [
              "Asset Token: A digital token issued on the blockchain representing fractional ownership, income rights, or other entitlements related to a real-world asset (e.g., property, SME, or contract).",
              "Issuer: A person, legal entity, or asset owner who lists and offers tokenized assets for investment or trade on the Penthian platform.",
              "Investor: A verified individual or institution who purchases, holds, or trades asset tokens on the platform, either in the primary or secondary market.",
              "Primary Market: The environment where asset tokens are initially offered by issuers to investors for purchase.",
              "Secondary Market: The marketplace where investors can trade previously purchased asset tokens with other verified investors.",
              "DAO (Decentralized Autonomous Organization): A collective structure governed by token-based voting and smart contracts, enabling decentralized decision-making and treasury management.",
              "ERC-3643: A blockchain token standard that enables transfer permissions, investor identity verification, and compliant asset issuance through on-chain rules.",
              "Whitelisting: The process of linking a blockchain wallet to verified identity data, allowing it to send, receive, and hold permissioned tokens.",
              "KYC/KYB (Know Your Customer/Business): Legal procedures to verify the identity and legitimacy of individual or institutional users under AML/CFT regulations.",
              "Smart Contract: A self-executing code deployed on the blockchain that automates logic such as payments, distributions, or rule enforcement.",
              "Marketplace Rules: This document, outlining the operational, legal, and compliance framework for all parties engaging with Penthian Ltd’s virtual asset marketplace."
            ]
          },
          {
            number: "11.2",
            title: "Legal Disclosures",
            subItems: [
              {
                title: "A. Regulatory Status",
                points: [
                  "Penthian Ltd is in the process of obtaining a Virtual Asset Marketplace License (Class S) from the Financial Services Commission (FSC) of Mauritius. Until full approval is granted, all platform functions remain in a restricted, pre-commercial state for testing and onboarding purposes only.",
                  "Users must verify local laws before participating."
                ]
              },
              {
                title: "B. Jurisdictional Restrictions",
                points: [
                  "Access to the platform and its services may be restricted or prohibited in certain countries, including (but not limited to):",
                  "United States",
                  "North Korea",
                  "Iran",
                  "Belarus",
                  "Any jurisdiction currently under FATF blacklist or targeted sanctions",
                  "Users accessing the platform from these jurisdictions are solely responsible for ensuring they do not violate national or international laws."
                ]
              },
              {
                title: "C. Risk of Loss",
                points: [
                  "All investments carry risk. Users may experience:",
                  "Full or partial loss of capital",
                  "Illiquidity in the secondary market",
                  "Technical failure of smart contracts or wallet systems",
                  "Legal or regulatory changes that impact asset accessibility",
                  "Project or asset underperformance",
                  "Penthian does not offer any guaranteed returns. Each user must conduct their own due diligence."
                ]
              },
              {
                title: "D. Intellectual Property",
                points: [
                  "All intellectual property relating to:",
                  "Platform design",
                  "Smart contract architecture",
                  "Legal documentation",
                  "Branding and trademarks",
                  "Governance systems",
                  "is owned or licensed by Penthian Ltd. Unauthorized copying, redistribution, or commercial use is prohibited."
                ]
              },
              {
                title: "E. Privacy & Data",
                points: [
                  "Penthian adheres to global data privacy standards, including GDPR, and commits to:",
                  "Never selling user data",
                  "Encrypting all personal identity records",
                  "Storing only what is necessary for regulatory and operational compliance",
                  "Providing users the right to access or delete their data on request"
                ]
              },
              {
                title: "F. Amendments to Marketplace Rules",
                points: [
                  "These Marketplace Rules are subject to change based on:",
                  "Regulatory guidance",
                  "Technological updates",
                  "Operational restructuring",
                  "Security improvements",
                  "Stakeholder proposals and governance votes",
                  "All changes will be announced with appropriate notice and made available on the platform’s official documentation page."
                ]
              }
            ]
          },
          {
            number: "11.3",
            title: "Acknowledgment of Terms",
            content: [
              "By using the Penthian platform, all users:",
              "Agree to abide by these Marketplace Rules",
              "Accept the risks, responsibilities, and limitations of investing in virtual assets",
              "Acknowledge that they have read and understood the risk disclosures",
              "Consent to data processing under the stated terms",
              "Failure to comply with these rules may result in restriction, suspension, or termination of access to the platform."
            ]
          }
        ]
      }
    ]
  }
};
