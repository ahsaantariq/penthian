export const amlManualData = {
    amlManual: {
        title: "Anti-Money Laundering (AML) Policy",
        subTitle: "Anti-Money Laundering & Counter-Terrorism Financing (AML/CFT) Manual",
        organization: "Penthian Ltd – Mauritius",
        sections: [
            {
                title: "1. Introduction & Scope",
                content: [
                    "Penthian Ltd is committed to the highest standards of anti-money laundering (AML) and counter-financing of terrorism (CFT) compliance. This AML/CFT Manual outlines the policies, procedures, and controls implemented to prevent the misuse of our platform for illicit purposes, in full alignment with:",
                    "The Financial Intelligence and Anti-Money Laundering Act (FIAMLA)",
                    "The Virtual Asset and Initial Token Offering Services Act 2021 (VAITOS Act)",
                    "The FSC AML/CFT Handbook for VASPs",
                    "Applicable FATF Recommendations",
                    "As a licensed Virtual Asset Marketplace (Class S) operator, Penthian recognizes its obligations to implement a risk-based framework that detects, mitigates, and reports suspicious or criminal financial activity while enabling lawful access to digital asset investment."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Scope of the Manual",
                        content: [
                            "This manual applies to:",
                            "All directors, officers, staff, and agents of Penthian Ltd",
                            "All users and issuers onboarded to the Penthian Platform",
                            "Third-party partners involved in KYC, custody, legal, or onboarding",
                            "All transactions involving token issuance, listing, or exchange",
                            "The policies herein govern the end-to-end lifecycle of asset tokenization on our platform, including:",
                            "Customer onboarding and Know Your Customer (KYC) procedures",
                            "Ongoing monitoring of user and issuer behaviour",
                            "Detection of red flags and risk indicators",
                            "Recordkeeping, internal reporting, and escalation",
                            "Engagement with regulatory bodies and law enforcement"
                        ]
                    },
                    {
                        number: "B",
                        title: "Objectives",
                        content: [
                            "Penthian’s AML/CFT program is built to:",
                            "Detect and deter use of the platform for laundering proceeds of crime",
                            "Comply with FSC and FATF standards on VASP oversight",
                            "Protect investors and asset owners through rigorous due diligence",
                            "Promote transparency and trust in tokenized real-world asset markets",
                            "Ensure long-term regulatory alignment for global expansion",
                            "This manual is reviewed annually and updated in response to:",
                            "Changes in local or international AML/CFT laws",
                            "Evolving typologies of money laundering in digital asset markets",
                            "Emerging risks and platform usage patterns"
                        ]
                    },
                    {
                        number: "C",
                        title: "Penthian’s Core Beliefs and Compliance Ethos",
                        content: [
                            "Our commitment to AML/CFT stems not only from legal obligation, but from our core values. We believe in operating a platform that reflects:",
                            "Faithfulness in safeguarding the financial system",
                            "Goodness in protecting people from scams and manipulation",
                            "Self-control in access and permission management",
                            "Transparency in user activity and data handling",
                            "Justice in treating all users fairly while screening out illicit actors",
                            "We integrate these principles into our compliance decisions, staff training, and technology stack — using tools like Veriff and ERC-3643 to enforce KYC and identity-based permissioning at the smart contract level."
                        ]
                    }
                ]
            },
            {
                title: "2. Applicable Laws & Regulatory Framework",
                content: [
                    "Penthian Ltd operates under a robust regulatory and legal environment, both locally in Mauritius and internationally. As a Virtual Asset Service Provider (VASP) licensed by the Financial Services Commission (FSC) under the Virtual Asset and Initial Token Offering Services Act 2021 (VAITOS Act), the company is bound to comply with a set of domestic and international laws that guide its anti-money laundering (AML) and counter-terrorism financing (CFT) framework."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "National Laws & Regulations (Mauritius)",
                        subItems: [
                            {
                                title: "1. Virtual Asset and Initial Token Offering Services Act 2021 (VAITOS Act)",
                                points: [
                                    "Establishes the legal and regulatory framework for virtual asset service providers (VASPs) and issuers of initial token offerings (ITOs)",
                                    "Requires Penthian to implement risk-based AML/CFT procedures, maintain customer records, and file Suspicious Transaction Reports (STRs)"
                                ]
                            },
                            {
                                title: "2. Financial Intelligence and Anti-Money Laundering Act (FIAMLA)",
                                points: [
                                    "The primary legislation governing AML and CFT in Mauritius",
                                    "Requires regulated entities to identify and verify customers, maintain transaction records, report suspicious transactions to the Financial Intelligence Unit (FIU)"
                                ]
                            },
                            {
                                title: "3. Financial Services Act 2007",
                                points: [
                                    "Provides the operational oversight powers of the Financial Services Commission (FSC)",
                                    "Requires Penthian to meet the fit-and-proper criteria for directors, officers, and compliance staff"
                                ]
                            }
                        ]
                    },
                    {
                        number: "B",
                        title: "FSC AML/CFT Handbook for VASPs (2023 Edition)",
                        content: [
                            "Issued by the FSC to guide VASPs in Mauritius, this handbook outlines the specific AML/CFT expectations for businesses like Penthian. It includes:",
                            "Detailed guidance on Customer Due Diligence (CDD)",
                            "Enhanced measures for high-risk countries and Politically Exposed Persons (PEPs)",
                            "Reporting obligations to the FIU",
                            "Requirements for AML policies, internal controls, and independent audits",
                            "This AML Manual aligns fully with the FSC’s expectations and integrates its latest guidance into Penthian’s processes."
                        ]
                    },
                    {
                        number: "C",
                        title: "International Standards",
                        subItems: [
                            {
                                title: "1. Financial Action Task Force (FATF)",
                                points: [
                                    "Recognized global authority on AML/CFT compliance",
                                    "Penthian aligns with the FATF’s 40 Recommendations, including:",
                                    "Risk-Based Approach (RBA) to AML/CFT",
                                    "Customer identification and verification",
                                    "Record-keeping and transaction monitoring",
                                    "STR filing and cooperation with authorities",
                                    "VASP-specific compliance under Recommendation 15 (updated in 2019)"
                                ]
                            },
                            {
                                title: "2. European Union (EU) – MiCA (Future Alignment)",
                                points: [
                                    "Penthian’s roadmap includes MiCA-aligned compliance for EU operations, particularly under obligations for token issuance, investor protection, and secondary trading"
                                ]
                            },
                            {
                                title: "3. UN Security Council Resolutions",
                                points: [
                                    "Sanctions screening and CFT requirements related to terrorist financing and embargo enforcement"
                                ]
                            }
                        ]
                    },
                    {
                        number: "D",
                        title: "Cross-Jurisdictional Compliance Approach",
                        content: [
                            "As Penthian expands across regions (Africa, Australia, EU, MENA), legal opinions and regulatory mapping will be conducted to ensure:",
                            "No duplication of license obligations",
                            "Local AML laws are respected",
                            "Assets are structured in compliance with security or utility classifications",
                            "Geo-fencing or access restrictions are enforced where necessary",
                            "The AML/CFT controls described in this manual will be tailored for local compliance without compromising the platform’s core framework."
                        ]
                    }
                ]
            },
            {
                title: "3. Governance & AML Roles",
                content: [
                    "Penthian Ltd understands that effective governance is central to maintaining a compliant and trustworthy AML/CFT program. This section outlines the roles, responsibilities, and reporting structures that ensure anti-money laundering and counter-terrorist financing policies are implemented, monitored, and enforced across the organization."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Board of Directors",
                        content: [
                            "The Board of Penthian Ltd holds ultimate responsibility for ensuring compliance with AML/CFT obligations. Its duties include:",
                            "Approving the AML/CFT policy and reviewing it at least annually",
                            "Appointing qualified persons as Money Laundering Reporting Officer (MLRO) and Compliance Officer",
                            "Ensuring adequate resources (staff, systems, training) are allocated to the AML/CFT function",
                            "Reviewing reports of internal audits, suspicious activity, and compliance breaches",
                            "Promoting a strong culture of compliance, integrity, and transparency"
                        ]
                    },
                    {
                        number: "B",
                        title: "Money Laundering Reporting Officer (MLRO)",
                        content: [
                            "The MLRO is a designated officer responsible for managing all AML/CFT reporting duties. This role is mandatory under Mauritius law and must be independent and experienced in financial crime compliance.",
                            "Key Responsibilities:",
                            "Receiving, assessing, and reporting Suspicious Transaction Reports (STRs) to the Financial Intelligence Unit (FIU)",
                            "Maintaining a centralized register of suspicious activity",
                            "Acting as the point of contact with regulators and law enforcement",
                            "Ensuring all AML/CFT breaches are escalated and remediated",
                            "Monitoring adherence to internal AML policies and procedures",
                            "Filing Tipping-off Prevention Logs and escalation memos where needed"
                        ]
                    },
                    {
                        number: "C",
                        title: "Compliance Officer",
                        content: [
                            "The Compliance Officer supports the MLRO and ensures day-to-day application of the AML framework. Their role includes:",
                            "Designing and maintaining the AML/CFT policy and procedures",
                            "Overseeing Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD)",
                            "Managing KYC and screening processes with third-party providers (e.g., Veriff)",
                            "Training staff on red flags and reporting obligations",
                            "Conducting periodic compliance reviews and preparing internal reports",
                            "Collaborating with tech teams to enforce ERC-3643-based on-chain compliance"
                        ]
                    },
                    {
                        number: "D",
                        title: "Executive Management",
                        content: [
                            "Senior executives (CEO, COO, CTO) are accountable for:",
                            "Integrating AML/CFT principles into product design and platform features",
                            "Ensuring technical systems support KYC enforcement and transaction monitoring",
                            "Supporting the Compliance Officer and MLRO in risk-based decision-making",
                            "Ensuring users understand AML/CFT measures (onboarding, disclosures, FAQ)"
                        ]
                    },
                    {
                        number: "E",
                        title: "Platform Staff & Contractors",
                        content: [
                            "Every team member involved in user onboarding, investor education, token listing, or technical development is expected to:",
                            "Undergo annual AML/CFT training",
                            "Understand the importance of reporting unusual user behavior or attempted circumvention",
                            "Cooperate with internal investigations led by the Compliance Officer or MLRO",
                            "Reflect the platform’s values — especially integrity, justice, and faithfulness — in handling sensitive compliance issues"
                        ]
                    },
                    {
                        number: "F",
                        title: "Third-Party Service Providers",
                        content: [
                            "Where functions are outsourced (e.g., KYC/AML checks via Veriff), Penthian ensures:",
                            "Contracts include data protection, compliance, and liability clauses",
                            "Service providers meet FATF and Mauritius standards",
                            "Records of due diligence and monitoring of provider performance are maintained"
                        ]
                    },
                    {
                        number: "G",
                        title: "Governance Summary Table",
                        table: {
                            columns: ["Role", "Responsibility", "Appointed By", "Reports To"],
                            rows: [
                                ["Board", "Oversight, resource allocation, tone from the top", "Shareholders", "FSC, FIU (via MLRO)"],
                                ["MLRO", "STR filing, regulatory liaison, suspicious activity review", "Board", "FSC, FIU"],
                                ["Compliance Officer", "Policy enforcement, KYC/CDD, audits", "Board/CEO", "MLRO, Board"],
                                ["Executive Team", "Operational implementation, system design", "CEO", "Board"],
                                ["Staff", "Daily vigilance, reporting red flags", "Management", "Compliance Officer"],
                                ["Veriff (KYC Provider)", "Customer verification, screening", "Outsourced", "Compliance Officer"]
                            ]
                        }
                    }
                ]
            },
            {
                title: "4. Customer Due Diligence (CDD)",
                content: [
                    "Customer Due Diligence (CDD) is a cornerstone of Penthian Ltd’s AML/CFT framework. Before allowing any user to interact with the platform — whether for investing, listing, or managing assets — we apply rigorous identity verification and risk assessment processes. These are implemented via both human oversight and advanced third-party KYC infrastructure.",
                    "Our CDD policy ensures that no anonymous or pseudonymous activity occurs on the platform, and that all participants are risk-profiled, documented, and continuously monitored in line with local and international AML standards."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "When CDD is Required",
                        content: [
                            "Penthian performs full CDD in the following situations:",
                            "At the time of onboarding any new user (retail or institutional)",
                            "When the user reaches transactional thresholds (e.g., deposits or token purchases)",
                            "Prior to asset listing or token issuance on the platform",
                            "When suspicion arises regarding the legitimacy of a user or transaction",
                            "During a refresh cycle (e.g., every 12–24 months or upon material changes)",
                            "When transferring assets or interacting with off-chain structures"
                        ]
                    },
                    {
                        number: "B",
                        title: "Minimum CDD Information Collected",
                        subItems: [
                            {
                                title: "For Individual Users (Retail Investors)",
                                points: [
                                    "Full legal name",
                                    "Date and place of birth",
                                    "Nationality and residency",
                                    "Government-issued photo ID (passport, driver’s license)",
                                    "Proof of address (utility bill, bank statement)",
                                    "Live video/selfie verification via Veriff",
                                    "Source of funds and wealth declaration (if triggered by risk tier)"
                                ]
                            },
                            {
                                title: "For Legal Entities (Token Issuers / Corporate Investors)",
                                points: [
                                    "Certificate of incorporation and legal form",
                                    "Registered business address",
                                    "Identity of directors and UBOs (Ultimate Beneficial Owners)",
                                    "Company resolution or mandate to engage with Penthian",
                                    "Source of funds and purpose of investment",
                                    "Screening of UBOs for PEP/sanctions exposure"
                                ]
                            },
                            {
                                title: "Retention Note",
                                points: [
                                    "All data is securely stored in encrypted databases and maintained for a minimum of 7 years."
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Risk-Based Customer Categorization",
                        content: [
                            "Upon onboarding, users are assigned a risk rating using a combination of manual and automated scoring. Categories include:",
                            "Low Risk (e.g., retail investor from FATF-compliant jurisdiction with clean documents)",
                            "Medium Risk (e.g., entity from a neutral-risk jurisdiction or with large capital flows)",
                            "High Risk (e.g., user from high-risk jurisdiction, PEP, crypto privacy tools use)",
                            "This risk tiering determines the depth of due diligence, ongoing monitoring frequency, and transaction thresholds."
                        ]
                    },
                    {
                        number: "D",
                        title: "Verification Tools and Technology",
                        content: [
                            "Penthian uses Veriff as its KYC verification provider. Veriff enables:",
                            "Real-time ID verification with anti-fraud detection",
                            "Global document and language support",
                            "AML screening against global watchlists and sanctions databases",
                            "Biometric facial recognition and liveness checks",
                            "Onboarding flows tailored for both web and mobile users",
                            "All verified users are whitelisted via on-chain identity using ERC-3643, which restricts token transferability to compliant wallets only."
                        ]
                    },
                    {
                        number: "E",
                        title: "Refusal or Termination of CDD",
                        content: [
                            "Penthian will refuse to onboard or will terminate the relationship with any user that:",
                            "Fails to provide accurate, complete, or verifiable KYC documents",
                            "Attempts to use forged or manipulated identity data",
                            "Refuses to disclose beneficial ownership or source of funds",
                            "Is found to be listed on a sanctions list or matched to a known PEP risk",
                            "Attempts to circumvent KYC through VPNs, shell entities, or token proxies",
                            "Termination is recorded and escalated to the MLRO, and where appropriate, a report is filed with the Financial Intelligence Unit (FIU)."
                        ]
                    },
                    {
                        number: "F",
                        title: "Recordkeeping",
                        content: [
                            "All CDD records are maintained for a minimum of seven years after the end of the customer relationship. These include:",
                            "KYC documents",
                            "Internal risk assessment forms",
                            "System logs and screening results",
                            "Correspondence or clarification emails",
                            "Flags raised by Veriff or compliance staff",
                            "Records are stored securely in accordance with data protection laws and are accessible only by authorized compliance personnel."
                        ]
                    }
                ]
            },
            {
                title: "5. Enhanced Due Diligence (EDD)",
                content: [
                    "Enhanced Due Diligence (EDD) is applied by Penthian Ltd in situations where the customer or transaction presents a higher-than-normal risk of money laundering, terrorism financing, or other financial crime. EDD provides additional layers of verification and scrutiny beyond standard Customer Due Diligence (CDD), ensuring that all high-risk activities are evaluated thoroughly before permission to interact with the platform is granted."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Triggers for Enhanced Due Diligence",
                        content: [
                            "EDD is required when any of the following conditions are met:",
                            "The customer is a Politically Exposed Person (PEP)",
                            "The user is from a high-risk or non-cooperative jurisdiction (as per FATF or FSC)",
                            "The customer is an entity with a complex ownership structure",
                            "The user engages in unusual, large, or unexplained transactions",
                            "The source of funds is unclear or unverifiable",
                            "There are inconsistencies in the user's submitted documentation or behavior",
                            "The transaction involves privacy-focused tokens or tools (e.g., mixers, obfuscators)",
                            "The customer previously triggered internal red flags or was terminated and reapplied"
                        ]
                    },
                    {
                        number: "B",
                        title: "Additional Verification Measures",
                        subItems: [
                            {
                                title: "For Individual Users",
                                points: [
                                    "Enhanced ID verification including 2nd ID or notarized documents",
                                    "Live video interview with compliance team",
                                    "Written declarations on source of wealth and purpose of investment",
                                    "Confirmation of bank account ownership (via micro-deposit or statement)",
                                    "Ongoing transaction monitoring for 90 days post-onboarding"
                                ]
                            },
                            {
                                title: "For Legal Entities",
                                points: [
                                    "Beneficial ownership breakdown with supporting legal documents",
                                    "Screening of all UBOs, directors, and signatories",
                                    "Audit of corporate structure to rule out shell or layered entities",
                                    "Confirmation of physical business presence and operations",
                                    "Legal opinion or letter of good standing from a recognized jurisdiction (if required)"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Risk Scoring & Approval Workflow",
                        content: [
                            "All users subject to EDD are assigned a High-Risk Client File, which includes:",
                            "A risk scoring form (geography, ownership, funding, behavior)",
                            "Supporting documents reviewed and signed off by a Compliance Officer",
                            "Escalation to the MLRO for final decision and justification record",
                            "If needed, consultation with external legal or compliance advisor",
                            "No EDD client is activated without two levels of approval."
                        ]
                    },
                    {
                        number: "D",
                        title: "Monitoring & Transaction Limitations",
                        content: [
                            "High-risk clients may have one or more of the following restrictions:",
                            "Capped daily/monthly investment limits",
                            "Blocked access to certain asset classes (e.g., SME or security tokens)",
                            "Delayed withdrawals or added scrutiny on outgoing transfers",
                            "Real-time transaction monitoring flags",
                            "Periodic refresh of EDD file every 6–12 months",
                            "These users are also prioritized for manual review when interacting with the token marketplace or issuing assets."
                        ]
                    },
                    {
                        number: "E",
                        title: "Reporting of Suspicious Behavior",
                        content: [
                            "If, during EDD, the compliance team suspects that the customer:",
                            "Has provided false information",
                            "Is using the platform to obfuscate illicit wealth",
                            "Has ties to criminal organizations or sanctioned persons",
                            "Then the MLRO must immediately file a Suspicious Transaction Report (STR) to the Financial Intelligence Unit (FIU) and retain full records of the customer’s file and all communications."
                        ]
                    },
                    {
                        number: "F",
                        title: "Alignment with ERC-3643",
                        content: [
                            "Where enhanced due diligence is required, smart contract-based access control (via ERC-3643) ensures that:",
                            "High-risk users cannot bypass restrictions by changing wallets",
                            "Token transfers remain identity-bound and compliant",
                            "Permissions can be revoked or paused on-chain if risk status changes",
                            "This blockchain-enforced identity linkage is critical for maintaining the effectiveness of the EDD program at scale."
                        ]
                    }
                ]
            },
            {
                title: "6. Ongoing Monitoring & Red Flags",
                content: [
                    "Customer risk is dynamic, not static. Penthian Ltd’s AML/CFT policy therefore includes robust ongoing monitoring processes to detect suspicious behavior, changes in customer risk profiles, and potentially illicit activity after a user has been onboarded.",
                    "Ongoing monitoring applies to all users and transactions — not just high-risk accounts — and is powered by both technology and human review."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Objectives of Ongoing Monitoring",
                        content: [
                            "To identify unusual patterns inconsistent with a customer’s profile",
                            "To detect structuring, layering, or evasion tactics",
                            "To trigger internal investigations or refresh CDD/EDD",
                            "To comply with real-time reporting requirements under Mauritius law",
                            "To prevent misuse of tokenized real-world assets or funds"
                        ]
                    },
                    {
                        number: "B",
                        title: "Tools & Systems Used",
                        subItems: [
                            {
                                title: "1. Automated Monitoring Tools",
                                points: [
                                    "Integrated transaction monitoring system (via Veriff or other solution)",
                                    "Smart contract logs and real-time analytics (wallet activity, token transfers)",
                                    "Volume/velocity limits to detect structuring",
                                    "IP address and device fingerprinting to detect multiple account abuse",
                                    "Geo-fencing and sanctions screening APIs"
                                ]
                            },
                            {
                                title: "2. Manual Oversight",
                                points: [
                                    "Compliance team review of flagged transactions",
                                    "Behavior analysis (e.g., investor buying high and instantly selling, unusual interest in high-risk assets)",
                                    "Cross-checks against external negative media or alerts",
                                    "Reviews of users who stop engaging after funding wallets (possible mule indicators)"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Examples of Red Flags",
                        subItems: [
                            {
                                title: "Customer Behavior",
                                points: [
                                    "Reluctance to provide or update KYC/EDD documentation",
                                    "Sudden change in behavior or asset classes interacted with",
                                    "Use of anonymous, temporary, or privacy-enhancing browsers and VPNs",
                                    "Multiple attempts at failed login or wallet connection"
                                ]
                            },
                            {
                                title: "Transaction Activity",
                                points: [
                                    "Unusually high transaction volumes for a new user",
                                    "Use of token “bridges” or attempts to bypass wallet permissioning",
                                    "In-and-out transactions with minimal token holding duration",
                                    "Rapid movement of funds between wallets or jurisdictions",
                                    "Transfers involving known mixers or blacklisted addresses"
                                ]
                            },
                            {
                                title: "Geographic Risks",
                                points: [
                                    "IP or wallet origin from high-risk or sanctioned countries",
                                    "Token transfers to/from offshore entities without legitimate business reason",
                                    "Travel rule mismatch (i.e., no counterpart data for high-value transfers)"
                                ]
                            }
                        ]
                    },
                    {
                        number: "D",
                        title: "Frequency of Monitoring",
                        table: {
                            columns: ["Risk Category", "Monitoring Type", "Frequency"],
                            rows: [
                                ["Low Risk", "Automated alerts only", "Ongoing"],
                                ["Medium Risk", "Automated + periodic manual review", "Every 6 months"],
                                ["High Risk", "Real-time alerting + monthly compliance review", "Every 1–3 months"]
                            ]
                        },
                        content: [
                            "Risk scoring is updated dynamically based on behavioral signals, system flags, and compliance team escalation."
                        ]
                    },
                    {
                        number: "E",
                        title: "Internal Reporting Process",
                        content: [
                            "If a red flag is detected:",
                            "System alert or team member observation triggers an internal case",
                            "Compliance Officer investigates, documents findings, and assigns a temporary risk score",
                            "If suspicious, the case is escalated to the MLRO",
                            "MLRO determines whether a Suspicious Transaction Report (STR) must be filed",
                            "Where needed, access is restricted or transactions are frozen",
                            "Each step is logged in the Suspicious Activity Register with time stamps and audit trail."
                        ]
                    },
                    {
                        number: "F",
                        title: "Smart Contract-Based Monitoring",
                        content: [
                            "Penthian leverages ERC-3643 and other modular smart contract features to:",
                            "Pause transfers for flagged wallets",
                            "Enforce investor whitelists and blacklists",
                            "Record non-transferable compliance metadata (e.g., risk score, jurisdiction)",
                            "Trigger on-chain logs for external audit",
                            "This makes our monitoring not just post-factum but preventive and programmable."
                        ]
                    },
                    {
                        number: "G",
                        title: "Continuous Improvement",
                        content: [
                            "Monitoring rules and red flag typologies are updated:",
                            "Based on FSC, FIU, and FATF guidance",
                            "Following internal audits or STR outcomes",
                            "In line with new token listings, asset types, or geographic expansion",
                            "This ensures Penthian remains responsive to evolving threats and emerging typologies in digital finance."
                        ]
                    }
                ]
            },
            {
                title: "7. Transaction Monitoring & Reporting",
                content: [
                    "Transaction monitoring is central to Penthian’s ability to detect and respond to suspicious activity, money laundering schemes, terrorist financing, and other forms of illicit use. Our system is designed to monitor real-time and historical transactions across all users, wallets, and smart contracts on the platform — including token sales, asset purchases, and wallet-to-wallet transfers.",
                    "This section outlines how Penthian monitors transactions and reports those that raise suspicion to the appropriate authorities."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Scope of Transaction Monitoring",
                        content: [
                            "Penthian monitors the following transaction types:",
                            "Token purchases on the primary market",
                            "Investor trades on the secondary market",
                            "Asset issuer deposits and withdrawals",
                            "On-chain transfers involving tokenized assets",
                            "Interactions with treasury contracts, DAOs, and voting modules",
                            "Cross-border transfers between jurisdictions",
                            "Any transaction exceeding a predefined monetary threshold"
                        ]
                    },
                    {
                        number: "B",
                        title: "Methods of Monitoring",
                        subItems: [
                            {
                                title: "1. Automated Monitoring System",
                                points: [
                                    "Penthian uses both internal logic and integrated third-party providers (like Veriff and Chainalysis tools) to:",
                                    "Analyze wallet behavior, velocity, and frequency",
                                    "Flag transactions based on predefined risk triggers",
                                    "Detect abnormal usage patterns or wallet interactions",
                                    "Block suspicious transfers automatically pending review"
                                ]
                            },
                            {
                                title: "2. Risk Rules Engine",
                                points: [
                                    "Penthian defines dynamic rules to raise alerts, such as:",
                                    "$10,000 USD equivalent in a single transaction",
                                    "More than 5 transactions within 30 minutes",
                                    "Attempted interaction with non-whitelisted smart contracts",
                                    "Mismatch between customer location and transfer destination",
                                    "Transfer from/to flagged high-risk jurisdictions or entities"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Suspicious Transaction Reporting (STR)",
                        content: [
                            "If a transaction appears to be suspicious and meets the internal or regulatory criteria, it is escalated to the Money Laundering Reporting Officer (MLRO) for review.",
                            "Steps to File an STR:",
                            "Compliance team flags suspicious activity via internal system",
                            "MLRO investigates and documents findings",
                            "If suspicion is confirmed, an STR is filed with the Financial Intelligence Unit (FIU) of Mauritius",
                            "A copy is retained securely in the internal compliance archive",
                            "A temporary lock may be placed on related transactions if needed",
                            "Note: Tipping-off is strictly prohibited. Staff members are trained to maintain confidentiality around STR investigations and filings."
                        ]
                    },
                    {
                        number: "D",
                        title: "Threshold-Based Reporting",
                        content: [
                            "Penthian may also be required to report large-value transactions even if no suspicion arises, under threshold reporting rules:",
                            "Cash equivalents exceeding MUR 500,000 (~$11,000 USD)",
                            "Virtual asset transfers over $10,000 USD equivalent",
                            "Records of such transactions are compiled and submitted to the FIU as per regulatory requirements."
                        ]
                    },
                    {
                        number: "E",
                        title: "Audit Trails & Recordkeeping",
                        content: [
                            "All alerts, escalations, STR filings, and communications are logged using:",
                            "A centralized case management tool",
                            "Time-stamped STR registers",
                            "Email and ticketing systems for compliance documentation",
                            "Blockchain logs tied to wallet addresses and token contracts",
                            "This audit trail ensures regulatory transparency and enables post-event analysis or third-party audit as needed."
                        ]
                    },
                    {
                        number: "F",
                        title: "Sanctions & Watchlist Screening",
                        content: [
                            "All transactions are screened in real-time using:",
                            "UN, OFAC, and EU Sanctions Lists",
                            "FATF and FSC-published high-risk jurisdictions",
                            "PEP databases and adverse media feeds",
                            "Any direct or indirect link to a sanctioned party will trigger immediate review and system response — including wallet blacklisting and smart contract transfer lockout via ERC-3643."
                        ]
                    },
                    {
                        number: "G",
                        title: "Training on Reporting Obligations",
                        content: [
                            "Staff involved in transaction reviews are trained on:",
                            "How to identify suspicious transactions",
                            "How to escalate internally",
                            "When and how to file STRs",
                            "Legal consequences of failing to report or tipping-off"
                        ]
                    },
                    {
                        number: "H",
                        title: "Regular Testing & Review",
                        content: [
                            "The transaction monitoring program is reviewed and updated:",
                            "Quarterly, or upon changes to FSC/FIU guidance",
                            "Following detection of new typologies or evasion strategies",
                            "Based on audit findings or compliance review"
                        ]
                    }
                ]
            },
            {
                title: "8. Record-Keeping Procedures",
                content: [
                    "Accurate and secure record-keeping is essential for effective AML/CFT compliance. It ensures that Penthian Ltd can demonstrate adherence to regulatory obligations, support investigations, respond to audits, and provide transparency to authorities. Our record-keeping policies comply with the requirements of the Financial Intelligence and Anti-Money Laundering Act (FIAMLA), the Virtual Asset and Initial Token Offering Services Act (VAITOS Act), and the FSC AML/CFT Handbook for VASPs."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Retention Periods",
                        content: [
                            "Penthian retains all AML/CFT-related records for a minimum of seven (7) years after:",
                            "The date the business relationship ends",
                            "The completion of a transaction (whichever is later)",
                            "This period may be extended upon request by regulators, during investigations, or due to ongoing litigation."
                        ]
                    },
                    {
                        number: "B",
                        title: "Records Maintained",
                        subItems: [
                            {
                                title: "1. Customer Due Diligence (CDD) Records",
                                points: [
                                    "Customer identity documents (e.g., passport, proof of address)",
                                    "Video/selfie verification logs via Veriff",
                                    "UBO declarations and company incorporation documents (for legal entities)",
                                    "Risk assessments and scoring files",
                                    "Notes from interviews or clarifications"
                                ]
                            },
                            {
                                title: "2. Transaction Records",
                                points: [
                                    "Date, time, amount, and parties to each transaction",
                                    "Wallet addresses and asset types involved",
                                    "Associated smart contract ID and transaction hash",
                                    "Geo-location and device metadata (when applicable)",
                                    "Payment method and source of funds information (when applicable)"
                                ]
                            },
                            {
                                title: "3. Suspicious Transaction Reports (STRs)",
                                points: [
                                    "Internal alerts and case files",
                                    "Notes and rationale for STR decisions",
                                    "Copies of filed reports to the Financial Intelligence Unit (FIU)",
                                    "Escalation history and access logs"
                                ]
                            },
                            {
                                title: "4. Monitoring and Audit Logs",
                                points: [
                                    "Alerts and compliance system flags",
                                    "Logs of rule changes or updates",
                                    "Staff investigations and reviews",
                                    "Notes from external audits or FSC inspections"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Storage & Security of Records",
                        content: [
                            "All records are:",
                            "Digitally stored in encrypted cloud environments with role-based access",
                            "Backed up regularly to prevent loss",
                            "Segmented by jurisdiction and user risk tier",
                            "Subject to data retention policies in compliance with GDPR and the Mauritius Data Protection Act",
                            "Hard-copy records (if any) are secured in restricted-access filing systems within our registered office and scanned for redundancy."
                        ]
                    },
                    {
                        number: "D",
                        title: "Access Control & Confidentiality",
                        content: [
                            "Access to sensitive AML records is restricted to:",
                            "The MLRO",
                            "The Compliance Officer",
                            "Senior management (on a need-to-know basis)",
                            "FSC-authorized regulators and external auditors (upon request)",
                            "Any staff member accessing compliance records is subject to strict confidentiality obligations, including non-disclosure agreements and internal logging of access events."
                        ]
                    },
                    {
                        number: "E",
                        title: "Recordkeeping for On-Chain Compliance",
                        content: [
                            "Penthian also retains on-chain data as part of its AML/CFT record base. This includes:",
                            "ERC-3643 permissioned wallet status",
                            "Investor-level token history and metadata",
                            "Token creation and distribution logs",
                            "Smart contract audit trails",
                            "These records are stored on both immutable public ledgers and mirrored internally for quick analysis and reporting."
                        ]
                    },
                    {
                        number: "F",
                        title: "Deletion & Destruction Policy",
                        content: [
                            "Once the retention period has passed and legal/regulatory requirements are satisfied, records are:",
                            "Digitally deleted from active systems",
                            "Backups purged in scheduled data sweeps",
                            "Physical documents shredded and destroyed securely",
                            "A formal log of destroyed records is maintained and signed off by the Compliance Officer."
                        ]
                    }
                ]
            },
            {
                title: "9. Training & Awareness",
                content: [
                    "Penthian Ltd recognizes that the effectiveness of any AML/CFT program depends not only on policies and systems, but on the knowledge, vigilance, and ethical commitment of its people. Therefore, all relevant staff, contractors, and leadership at Penthian undergo regular AML/CFT training aligned with local and international standards.",
                    "This section outlines our approach to employee training, awareness initiatives, and continuous education to uphold a strong culture of compliance."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Objectives of AML/CFT Training",
                        content: [
                            "The purpose of our training and awareness program is to:",
                            "Ensure staff understand their legal obligations under FIAMLA, VAITOS, and FSC guidelines",
                            "Equip employees to detect and respond to suspicious activity or red flags",
                            "Reinforce internal procedures for CDD, EDD, reporting, and recordkeeping",
                            "Maintain a high standard of integrity, diligence, and professionalism",
                            "Encourage ethical behavior aligned with Penthian’s core values and fruits of the Spirit"
                        ]
                    },
                    {
                        number: "B",
                        title: "Who Must Be Trained",
                        content: [
                            "Training is mandatory for:",
                            "Board of Directors and executive leadership",
                            "Compliance Officer and MLRO",
                            "Staff handling onboarding, KYC, or user support",
                            "Developers working on smart contract or KYC integrations",
                            "Anyone involved in transaction monitoring, token listing, or wallet oversight",
                            "Contractors who engage with sensitive data or platform operations"
                        ]
                    },
                    {
                        number: "C",
                        title: "Training Frequency",
                        table: {
                            columns: ["Role", "Initial Training", "Ongoing Refresher", "Specialized Modules"],
                            rows: [
                                ["All New Staff", "Within 14 days of onboarding", "Annually", "As needed"],
                                ["Compliance & MLRO", "Within 7 days", "Semi-annually", "Deep dives on STRs, FIU reports"],
                                ["Board of Directors", "On appointment", "Annually", "FSC regulatory updates"],
                                ["Developers", "On hire", "Annually", "Secure smart contract design, ERC-3643 use cases"]
                            ]
                        }
                    },
                    {
                        number: "D",
                        title: "Training Delivery Methods",
                        content: [
                            "Live workshops (virtual or on-site) led by Compliance Officer or external advisor",
                            "E-learning modules with scenario-based simulations and quizzes",
                            "Compliance newsletters with updates on red flags, typologies, and emerging threats",
                            "Case studies of real-world crypto laundering cases and platform misuse",
                            "Technical deep dives for developers on risk-based coding and compliance automation"
                        ]
                    },
                    {
                        number: "E",
                        title: "Training Content Includes:",
                        content: [
                            "Introduction to AML/CFT and legal duties in Mauritius",
                            "Overview of Penthian’s AML/CFT Manual and compliance structure",
                            "Red flags for money laundering and terrorist financing",
                            "How to identify and escalate suspicious activity",
                            "Use of tools like Veriff, transaction monitoring systems, and ERC-3643",
                            "STR reporting process and prohibition of tipping-off",
                            "Data privacy and recordkeeping rules",
                            "Culture of accountability, integrity, and investor protection"
                        ]
                    },
                    {
                        number: "F",
                        title: "Monitoring and Evaluation",
                        content: [
                            "Training effectiveness is assessed via:",
                            "Completion rates and attendance logs",
                            "Quizzes and pass/fail metrics",
                            "Post-training feedback surveys",
                            "Scenario-based performance evaluations (where applicable)",
                            "Performance is documented in each employee’s compliance file and contributes to ongoing role evaluations and promotions."
                        ]
                    },
                    {
                        number: "G",
                        title: "Promoting a Culture of Compliance",
                        content: [
                            "Beyond formal training, Penthian fosters a culture where compliance is part of daily operations. This includes:",
                            "Recognizing staff who demonstrate integrity and diligence",
                            "Encouraging open communication with the Compliance Officer",
                            "Incorporating values like faithfulness, self-control, goodness, and peace into leadership and team practices",
                            "Publishing monthly internal “Risk Roundups” and compliance digest emails"
                        ]
                    },
                    {
                        number: "H",
                        title: "Outsourced & Third-Party Training",
                        content: [
                            "Where external vendors (e.g. Veriff, developers, agents) access client data or AML systems, they must:",
                            "Undergo onboarding training tailored to their role",
                            "Acknowledge Penthian’s AML/CFT policies",
                            "Commit to cooperating with audits and internal investigations"
                        ]
                    }
                ]
            },
            {
                title: "10. Risk-Based Approach & Risk Scoring",
                content: [
                    "Penthian Ltd adopts a Risk-Based Approach (RBA) as recommended by the Financial Action Task Force (FATF) and mandated by Mauritius’ FSC guidelines. This approach allows the platform to allocate compliance resources proportionately—based on the risk each customer, transaction, asset, or jurisdiction poses to the platform and its users.",
                    "A well-structured RBA enables Penthian to prevent abuse without stifling innovation and to protect legitimate users while identifying and isolating potential threats early."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Core Principles of Risk-Based Approach",
                        content: [
                            "Not all customers present the same level of risk — we assess and tier them accordingly",
                            "Controls are proportionate to the level of risk — higher-risk users receive more scrutiny",
                            "Risk is dynamic — ongoing behavior may raise or lower a user's risk level",
                            "Automation supports efficiency — but human oversight ensures context and judgment",
                            "Tokenized asset types carry different risk levels — real estate ≠ DeFi ≠ high-yield SME"
                        ]
                    },
                    {
                        number: "B",
                        title: "Risk Assessment Factors",
                        content: [
                            "Penthian applies a multi-factor scoring model to evaluate and monitor AML/CFT risks. These factors include:",
                            "Risk Category",
                            "Examples",
                            "Customer Risk",
                            "PEP status, UBO transparency, source of funds, transaction behavior",
                            "Geographic Risk",
                            "Residency or business in high-risk jurisdictions, conflict zones",
                            "Service/Asset Risk",
                            "Tokenization of illiquid or unregulated assets, high-volume trading",
                            "Delivery Channel Risk",
                            "Wallet creation via VPNs, use of mixers, API access to tokens",
                            "Behavioral Risk",
                            "Irregular buying/selling patterns, reluctance to update KYC",
                            "Each factor is scored on a weighted scale and reviewed regularly."
                        ]
                    },
                    {
                        number: "C",
                        title: "Risk Tiering System",
                        table: {
                            columns: ["Tier", "Description", "Controls"],
                            rows: [
                                ["Low Risk", "Retail investors from compliant jurisdictions, clean KYC", "Standard CDD"],
                                ["Medium Risk", "SMEs or investors from less transparent markets", "Enhanced CDD + monitoring"],
                                ["High Risk", "PEPs, high-volume traders, or complex entities", "Full EDD, MLRO oversight, STR triggers"]
                            ]
                        },
                        content: [
                            "Automated rules initially assign tiers, which may be overridden based on manual review or changes in user behavior."
                        ]
                    },
                    {
                        number: "D",
                        title: "Risk Scoring Engine",
                        content: [
                            "Each user is assigned a numerical risk score based on:",
                            "Jurisdictional weight",
                            "Verification level",
                            "UBO transparency (for companies)",
                            "Transaction patterns",
                            "Onboarding method and referral source",
                            "Use of external wallets or tools (e.g., Tor, mixers)",
                            "Scores are recalculated in real-time during major events, including:",
                            "New asset interaction",
                            "Suspicious activity detection",
                            "Smart contract upgrade",
                            "Regulatory watchlist updates"
                        ]
                    },
                    {
                        number: "E",
                        title: "Role of Compliance & MLRO in Risk Management",
                        content: [
                            "Compliance Officer: configures scoring parameters, reviews flagged users, and manages tier changes",
                            "MLRO: signs off on high-risk designations, oversees STR preparation, and maintains audit logs",
                            "Board: approves risk framework annually and reviews summary reports of tier distribution"
                        ]
                    },
                    {
                        number: "F",
                        title: "Asset & Service Risk Ratings",
                        content: [
                            "Penthian also scores tokenized offerings, not just users. Each listed asset is assigned a platform risk level, based on:",
                            "Legal status and documentation (e.g., real estate with title vs. speculative SME equity)",
                            "Project team KYC and track record",
                            "Geographic exposure",
                            "Yield type and risk (e.g., rental income vs. profit-share vs. ICO-style raise)",
                            "High-risk assets are restricted from certain investor tiers and may require bespoke onboarding flows."
                        ]
                    },
                    {
                        number: "G",
                        title: "Smart Contract Risk Control",
                        content: [
                            "ERC-3643 allows Penthian to embed risk into the protocol itself:",
                            "Whitelisting only wallets with appropriate tier levels",
                            "Requiring re-verification before interacting with high-risk tokens",
                            "Temporarily disabling transfers for wallets with rising risk scores",
                            "Triggering permission revocation on escalation",
                            "This ensures risk management is not just policy—but code."
                        ]
                    },
                    {
                        number: "H",
                        title: "Periodic Review of Risk Framework",
                        content: [
                            "Penthian’s risk scoring engine and tier logic are reviewed:",
                            "Quarterly by Compliance",
                            "After every STR",
                            "Following FSC audits or industry changes",
                            "When expanding into new jurisdictions",
                            "Adjustments are documented, signed by the Compliance Officer, and approved by the MLRO or Board."
                        ]
                    }
                ]
            },
            {
                title: "11. Use of Technology (Veriff, ERC-3643)",
                content: [
                    "As a forward-looking blockchain platform, Penthian Ltd integrates advanced compliance technologies that strengthen its ability to prevent financial crime, ensure regulatory compliance, and offer a seamless user experience. These technologies are not add-ons — they are embedded into the platform’s core design.",
                    "This section outlines how Penthian uses Veriff for identity verification and ERC-3643 for on-chain compliance and permissioned tokenization."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Identity Verification with Veriff",
                        content: [
                            "Veriff (Sum & Substance) is a globally recognized identity verification and compliance technology provider. Penthian has fully integrated Veriff to handle:",
                            "KYC (Know Your Customer) onboarding for individual and corporate users",
                            "KYB (Know Your Business) for token issuers and SMEs",
                            "AML screening using global watchlists, PEP lists, and adverse media databases",
                            "Liveness detection and biometric verification",
                            "Geolocation validation to enforce jurisdictional compliance",
                            "Video selfie verification to prevent impersonation",
                            "Benefits of Veriff Integration:",
                            "Rapid onboarding with high accuracy",
                            "Automated document fraud detection",
                            "Real-time screening and flagging",
                            "Flexible flow customization for high-risk user paths",
                            "Full audit trail for regulatory review",
                            "API logs stored securely with time stamps for every verification step"
                        ]
                    },
                    {
                        number: "B",
                        title: "Compliance Automation with ERC-3643",
                        content: [
                            "Penthian implements ERC-3643, a permissioned token standard that enforces compliance rules at the smart contract level, making identity and access controls programmable and verifiable on-chain.",
                            "Key Features of ERC-3643:",
                            "Identity-bound tokens: each token holder must be whitelisted and KYC-verified",
                            "Transfer restrictions: tokens can only be transferred to wallets with valid on-chain permission",
                            "Revocable access: if a user’s risk status changes or KYC expires, token rights can be paused",
                            "Jurisdictional control: restricts interaction from sanctioned or high-risk locations",
                            "Investor tiering: specific tokens may be made available only to investors who meet financial, geographic, or risk requirements",
                            "Benefits to AML/CFT Compliance:",
                            "Eliminates anonymous token transfers",
                            "Ensures tokens are held only by verified and ongoing-compliant users",
                            "Allows real-time enforcement of onboarding and risk controls",
                            "Provides transparent and immutable auditability of token flows",
                            "Enables fast deactivation of users flagged by compliance or FIU reporting"
                        ]
                    },
                    {
                        number: "C",
                        title: "Integration Flow Overview",
                        content: [
                            "User signs up on Penthian and is routed through Veriff onboarding",
                            "On successful KYC, Veriff returns a verification token",
                            "Penthian issues an ERC-3643 permissioned wallet status",
                            "Smart contracts check the user's status before allowing asset interaction",
                            "Any change in status (risk, document expiry, suspicious activity) auto-updates the on-chain permissions"
                        ]
                    },
                    {
                        number: "D",
                        title: "Ongoing Monitoring via Tech Stack",
                        content: [
                            "Automated monitoring for unusual patterns (Veriff + in-house tools)",
                            "Smart contract tracking via blockchain analytics (Chainalysis and internal tools)",
                            "API integrations for sanctions list updates and real-time screening",
                            "Alerts configured to trigger internal case reviews when thresholds are breached"
                        ]
                    },
                    {
                        number: "E",
                        title: "Data Security and Compliance",
                        content: [
                            "All KYC/AML data stored securely and encrypted at rest and in transit",
                            "Access to verification records limited to MLRO, Compliance Officer, and approved audit personnel",
                            "Penthian is fully compliant with Mauritius Data Protection Act and GDPR, ensuring privacy rights are respected",
                            "Veriff is ISO/IEC 27001 certified"
                        ]
                    },
                    {
                        number: "F",
                        title: "Future Technology Enhancements",
                        content: [
                            "Penthian plans to enhance its AML/CFT tech stack with:",
                            "AI-based behavioral risk scoring models",
                            "Travel Rule compliance tools for large VA transfers",
                            "Additional blockchain analytics integrations for asset tracing",
                            "Zero-knowledge proof (ZKP) modules for privacy-preserving KYC"
                        ]
                    }
                ]
            },
            {
                title: "12. Internal Controls & Audits",
                content: [
                    "Penthian Ltd maintains a robust system of internal controls designed to ensure the effective implementation, monitoring, and continuous improvement of its AML/CFT framework. These controls ensure that all policies are not only well-written, but properly applied in practice — across the company’s people, technology, and processes.",
                    "Internal audits and compliance reviews are a critical part of this framework, providing independent checks on whether the platform is meeting its obligations under Mauritius law and global AML/CFT standards."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Purpose of Internal Controls",
                        content: [
                            "Enforce consistent application of AML/CFT policies",
                            "Detect and prevent gaps in onboarding, reporting, and monitoring",
                            "Prevent misuse of company tools, smart contracts, or privileges",
                            "Identify training needs and system vulnerabilities",
                            "Provide documentation for FSC inspections and third-party reviews",
                            "Safeguard Penthian’s reputation and platform integrity"
                        ]
                    },
                    {
                        number: "B",
                        title: "Key Elements of Internal Control Framework",
                        subItems: [
                            {
                                title: "Segregation of Duties",
                                points: [
                                    "The onboarding, monitoring, and reporting functions are handled by different roles",
                                    "MLRO operates independently from business development or sales teams",
                                    "Technology changes are reviewed by Compliance before deployment"
                                ]
                            },
                            {
                                title: "Access Control & System Permissions",
                                points: [
                                    "Role-based access to sensitive data and tools",
                                    "Use of logs to record every access, approval, and policy override",
                                    "Blockchain-level permissioning via ERC-3643"
                                ]
                            },
                            {
                                title: "Case Management System",
                                points: [
                                    "All alerts, escalations, STRs, and reviews are handled through a structured case system",
                                    "Cases are tagged, time-stamped, assigned, and escalated automatically"
                                ]
                            },
                            {
                                title: "Automated Compliance Alerts",
                                points: [
                                    "Built into onboarding, wallet connection, and transaction flows",
                                    "Trigger investigations based on behavior, location, or token interaction"
                                ]
                            },
                            {
                                title: "Developer Controls",
                                points: [
                                    "All smart contract upgrades go through code review and audit",
                                    "Release schedules and upgrade logs are monitored by the Compliance Officer"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Internal Audits",
                        subItems: [
                            {
                                title: "1. Frequency",
                                points: [
                                    "Conducted at least bi-annually by an internal team or third-party compliance auditor",
                                    "Spot audits may also be performed in response to incidents, STRs, or regulatory updates"
                                ]
                            },
                            {
                                title: "2. Scope",
                                points: [
                                    "Audits may cover:",
                                    "KYC/KYB onboarding logs",
                                    "Risk scoring effectiveness and tier distribution",
                                    "STR records and reporting timelines",
                                    "Monitoring systems and alert outcomes",
                                    "Access permissions and data handling",
                                    "Developer actions tied to compliance-sensitive areas (e.g. KYC logic or asset approval)"
                                ]
                            },
                            {
                                title: "3. Outcomes",
                                points: [
                                    "Action plans are created for each gap or weakness",
                                    "Responsible persons and deadlines are assigned",
                                    "Follow-up is scheduled to confirm implementation",
                                    "Reports are reviewed by the Board or Audit Committee (if established)"
                                ]
                            }
                        ]
                    },
                    {
                        number: "D",
                        title: "Oversight by the Board & Senior Management",
                        content: [
                            "The Board is ultimately responsible for AML/CFT governance",
                            "The MLRO provides quarterly compliance reports",
                            "Senior management must sign off on any proposed policy changes",
                            "The Compliance Officer has unrestricted access to all records and teams"
                        ]
                    },
                    {
                        number: "E",
                        title: "Policy Review and Improvement",
                        content: [
                            "AML/CFT policies are reviewed annually or when triggered by:",
                            "FSC feedback",
                            "Audit findings",
                            "New product launches",
                            "Major changes to global FATF guidance",
                            "Updates are tracked, version-controlled, and communicated to all affected staff",
                            "Every revision is signed off by the MLRO and retained in the AML policy archive"
                        ]
                    },
                    {
                        number: "F",
                        title: "Whistleblower Policy",
                        content: [
                            "Penthian encourages staff to report suspected misconduct, breaches of compliance procedures, or unethical behavior. A confidential whistleblower channel is available for:",
                            "Anonymous tip-offs",
                            "Internal policy violations",
                            "Compliance process circumvention",
                            "Reports are reviewed by a senior manager independent of the compliance function and escalated when necessary."
                        ]
                    }
                ]
            },
            {
                title: "13. Sanctions & Politically Exposed Persons (PEPs)",
                content: [
                    "Penthian Ltd maintains a strict policy to identify, screen, and manage risks related to sanctioned individuals/entities and politically exposed persons (PEPs). These categories present a higher risk for involvement in corruption, terrorist financing, and other financial crimes. As such, enhanced vigilance and screening are applied at onboarding and throughout the user relationship."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Definitions",
                        content: [
                            "Sanctioned Persons: Individuals, legal entities, or jurisdictions subject to asset freezes, travel bans, or prohibitions by international authorities (e.g. UN, OFAC, EU, UK, FATF).",
                            "Politically Exposed Persons (PEPs): Individuals entrusted with prominent public functions — such as heads of state, ministers, judges, senior military officials, ambassadors, or executives of state-owned enterprises — as well as their family members and close associates."
                        ]
                    },
                    {
                        number: "B",
                        title: "Screening Process",
                        subItems: [
                            {
                                title: "1. At Onboarding",
                                points: [
                                    "All users (individuals and legal entities) are screened against:",
                                    "UN Security Council Consolidated List",
                                    "OFAC SDN List (U.S. Treasury)",
                                    "EU Sanctions List",
                                    "UK HMT Financial Sanctions List",
                                    "PEP Watchlists and Databases",
                                    "Adverse Media and Enforcement Databases",
                                    "Penthian uses Veriff’s integrated global sanctions and PEP screening tools, which run automatically during user onboarding and KYB flows."
                                ]
                            },
                            {
                                title: "2. Ongoing Monitoring",
                                points: [
                                    "Sanctions and PEP screenings are refreshed in real time or at minimum every 24 hours using live API feeds",
                                    "If a user or issuer becomes sanctioned after onboarding, access is immediately frozen and reported to the MLRO"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Handling Sanctions Hits",
                        content: [
                            "If a match is found:",
                            "Screening is verified manually by compliance staff to avoid false positives",
                            "User account is placed under review",
                            "All transactions are temporarily suspended",
                            "The MLRO is notified immediately",
                            "If confirmed, a Suspicious Transaction Report (STR) is filed with the Financial Intelligence Unit (FIU)",
                            "Access to funds, tokens, or wallets may be restricted or revoked via smart contract-level actions (ERC-3643)",
                            "Note: Penthian complies fully with any freeze orders or prohibitions issued by the FSC or international bodies."
                        ]
                    },
                    {
                        number: "D",
                        title: "Handling PEPs and Their Associates",
                        subItems: [
                            {
                                title: "1. PEP Risk Classification",
                                points: [
                                    "PEPs are automatically considered High-Risk Clients",
                                    "Close associates and family members are also elevated to high-risk tier",
                                    "These users require Enhanced Due Diligence (EDD)"
                                ]
                            },
                            {
                                title: "2. EDD Measures for PEPs",
                                points: [
                                    "Verification of source of funds and wealth",
                                    "Identification and documentation of all beneficial owners (for businesses)",
                                    "Ongoing transaction monitoring with tighter thresholds",
                                    "Quarterly compliance review of account behavior",
                                    "Pre-approval from MLRO before any token investments or asset listings"
                                ]
                            }
                        ]
                    },
                    {
                        number: "E",
                        title: "Jurisdictional Risk & Sanctioned Countries",
                        content: [
                            "Penthian blocks access from all FATF-listed high-risk jurisdictions and any countries under comprehensive international sanctions.",
                            "These include (but are not limited to):",
                            "North Korea",
                            "Iran",
                            "Syria",
                            "Russia (partial sanctions depending on region)",
                            "Myanmar",
                            "Crimea region",
                            "Sudan (as designated by UN/OFAC)",
                            "Attempts to access the platform from these regions result in IP blocking and wallet disconnection. ERC-3643 ensures wallets linked to users in these jurisdictions are excluded from all token transfers."
                        ]
                    },
                    {
                        number: "F",
                        title: "Smart Contract Compliance with Sanctions",
                        content: [
                            "Using ERC-3643 and blockchain-based permissioning, Penthian can:",
                            "Revoke token transfer rights from flagged wallets",
                            "Prevent listing of assets issued by or connected to sanctioned entities",
                            "Record sanctions enforcement actions transparently on-chain for audit purposes"
                        ]
                    },
                    {
                        number: "G",
                        title: "Documentation & Reporting",
                        content: [
                            "All sanction/PEP screenings, investigations, and STRs are:",
                            "Logged in Penthian’s case management system",
                            "Time-stamped and signed by the Compliance Officer",
                            "Retained for at least 7 years",
                            "Available to the FSC, FIU, or external auditors upon request"
                        ]
                    }
                ]
            },
            {
                title: "14. Data Protection & Privacy",
                content: [
                    "Penthian Ltd is fully committed to protecting the personal data of its users, partners, and investors. As a Virtual Asset Service Provider (VASP) operating under the laws of Mauritius and engaging with global stakeholders, Penthian ensures that all data collected and processed for AML/CFT purposes is handled with the highest standards of security, confidentiality, and legal compliance.",
                    "This section outlines how Penthian complies with the Mauritius Data Protection Act 2017, the General Data Protection Regulation (GDPR) where applicable, and other global data protection best practices."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Data Protection Principles",
                        content: [
                            "Penthian adheres to the following key principles when handling personal data:",
                            "Lawfulness, Fairness, and Transparency",
                            "Data is collected with a legal basis (e.g., AML/CFT obligation)",
                            "Users are informed of how their data will be used",
                            "Purpose Limitation",
                            "Data is used strictly for purposes related to onboarding, KYC/AML, compliance, and internal controls",
                            "Data Minimization",
                            "Only data necessary for AML/CFT and regulatory obligations is collected",
                            "Accuracy",
                            "Data is kept up to date; users are required to update documents and contact information as needed",
                            "Storage Limitation",
                            "Data is retained for no longer than the legally mandated period (minimum 7 years for AML)",
                            "Integrity and Confidentiality",
                            "Data is protected through encryption, access control, and internal safeguards",
                            "Accountability",
                            "Penthian documents all data protection measures and provides access to users upon request"
                        ]
                    },
                    {
                        number: "B",
                        title: "Types of Data Collected",
                        subItems: [
                            {
                                title: "For individuals:",
                                points: [
                                    "Full name",
                                    "Date of birth",
                                    "Nationality",
                                    "Residential address",
                                    "Passport or national ID",
                                    "Video selfie or liveness check",
                                    "IP address and device metadata",
                                    "Wallet addresses linked to identity",
                                    "Transaction records and history"
                                ]
                            },
                            {
                                title: "For legal entities:",
                                points: [
                                    "Company registration documents",
                                    "UBO identification",
                                    "Board resolutions",
                                    "Corporate structure diagrams",
                                    "AML policies (for issuers or partners)"
                                ]
                            }
                        ]
                    },
                    {
                        number: "C",
                        title: "Security Measures",
                        content: [
                            "All data collected is:",
                            "Encrypted in transit and at rest",
                            "Stored in ISO 27001-certified data centers with multi-factor authentication",
                            "Accessed only by authorized personnel (e.g., Compliance Officer, MLRO)",
                            "Logged and monitored for unusual access patterns",
                            "In addition, Penthian performs:",
                            "Quarterly internal audits of data handling practices",
                            "Penetration testing of KYC onboarding and user databases",
                            "Regular updates and patching of backend systems"
                        ]
                    },
                    {
                        number: "D",
                        title: "Data Subject Rights",
                        content: [
                            "Users have the right to:",
                            "Access their personal data stored by Penthian",
                            "Request corrections to inaccurate information",
                            "Request deletion (subject to AML retention obligations)",
                            "Withdraw consent for optional marketing communications",
                            "Submit complaints to the Data Protection Office (DPO) of Mauritius",
                            "Penthian provides these rights through a self-service compliance portal or by contacting its Data Protection Officer at [compliance@penthian.com]."
                        ]
                    },
                    {
                        number: "E",
                        title: "Sharing of Data with Third Parties",
                        content: [
                            "Penthian only shares user data when necessary for:",
                            "KYC verification (e.g., with Veriff)",
                            "Transaction monitoring (e.g., Chainalysis or regulatory screening providers)",
                            "Compliance with lawful requests from regulators, FSC, or FIU",
                            "Legal investigations or subpoena orders",
                            "All vendors undergo third-party risk assessments and are bound by data processing agreements (DPAs) to ensure security and confidentiality."
                        ]
                    },
                    {
                        number: "F",
                        title: "Data Breach Response Policy",
                        content: [
                            "In the event of a suspected or confirmed data breach:",
                            "The incident is immediately escalated to the Compliance Officer and DPO",
                            "A preliminary investigation is conducted within 24 hours",
                            "Affected users and regulators are notified within 72 hours, if legally required",
                            "The breach is logged, and corrective action is taken (e.g., revoking access, patching systems)",
                            "A post-mortem report is compiled, and mitigation plans are reviewed with executive leadership"
                        ]
                    },
                    {
                        number: "G",
                        title: "Blockchain-Specific Considerations",
                        content: [
                            "As a blockchain-based platform:",
                            "Certain data (e.g., wallet addresses, token transfers) is immutable and publicly accessible on-chain",
                            "However, Penthian does not store personal identifiers on-chain",
                            "ERC-3643 enforces off-chain identity verification and permission mapping, with only access tokens reflected on-chain",
                            "This model enables compliance with privacy laws while maintaining blockchain transparency and trust."
                        ]
                    }
                ]
            },
            {
                title: "15. Conclusion & Commitment to Compliance",
                content: [
                    "Penthian Ltd was founded with a vision to transform how individuals, institutions, and communities access ownership and financial opportunity in the digital age. Our commitment to integrity, transparency, and responsible innovation is not just a business decision — it is a core part of who we are.",
                    "This AML/CFT Manual reflects our deep respect for the laws and regulatory frameworks of Mauritius and our determination to build a platform that is not only secure and effective, but ethically sound and globally compliant."
                ],
                subSections: [
                    {
                        number: "A",
                        title: "Summary of Our AML/CFT Commitment",
                        content: [
                            "Penthian has implemented:",
                            "A comprehensive compliance governance framework led by an experienced Money Laundering Reporting Officer (MLRO) and Compliance Officer",
                            "Full integration with Veriff for secure, high-fidelity onboarding and user screening",
                            "Implementation of ERC-3643 to enforce identity-linked tokenization and restrict unauthorized transfers",
                            "A Risk-Based Approach to tailor due diligence and transaction monitoring based on real-world and on-chain risks",
                            "Advanced recordkeeping and internal control systems for full auditability and transparency",
                            "Strict procedures for handling sanctions, PEPs, and STRs, in line with FATF and FSC expectations",
                            "Ongoing staff training and awareness programs to foster a culture of compliance and accountability"
                        ]
                    },
                    {
                        number: "B",
                        title: "Ethical Foundations",
                        content: [
                            "In addition to legal and regulatory requirements, Penthian’s compliance culture is deeply shaped by our commitment to the fruits of the Spirit:",
                            " Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, and Self-Control.",
                            "These values guide how we interact with users, treat their data, and uphold our responsibilities as stewards of their financial trust. Our AML/CFT practices are built to not only detect risk — but to serve people with dignity and fairness."
                        ]
                    },
                    {
                        number: "C",
                        title: "Continuous Improvement",
                        content: [
                            "We understand that financial crime evolves constantly. That’s why we:",
                            "Review and update this Manual at least annually, or upon significant platform or legal changes",
                            "Maintain a proactive relationship with the FSC, FIU, and other relevant authorities",
                            "Encourage feedback from employees, partners, users, and regulators to improve our systems",
                            "Invest in the latest technology and training to stay ahead of threats"
                        ]
                    },
                    {
                        number: "D",
                        title: "Final Commitment",
                        content: [
                            "Penthian Ltd fully acknowledges its obligations under:",
                            "The Financial Intelligence and Anti-Money Laundering Act (FIAMLA)",
                            "The Virtual Asset and Initial Token Offering Services Act (VAITOS)",
                            "Guidelines and circulars issued by the Financial Services Commission (FSC)",
                            "Relevant international AML/CFT best practices issued by the FATF, Basel Committee, and IOSCO",
                            "Our entire executive leadership, Board of Directors, and operational teams affirm their commitment to maintaining the highest standards of compliance, user protection, and lawful conduct in every market we serve."
                        ]
                    }
                ]
            }
        ]
    }
};
