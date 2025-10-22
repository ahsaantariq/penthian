export const recordKeepingPolicyData = {
    recordKeeping: {
        title: "Record-Keeping Policy",
        subTitle:
            "Framework for retention, accessibility, and secure management of records in compliance with FSC and VAITOS Act 2021.",
        description: [
            "This Record-Keeping Policy outlines Penthian Ltd’s standards for creating, storing, maintaining, and disposing of records to meet the requirements of the Financial Services Commission (FSC) of Mauritius, the VAITOS Act 2021, and related AML/CFT obligations.",
            "Proper record-keeping is essential for regulatory compliance, auditing, dispute resolution, and operational continuity."
        ],
        sections: [
            {
                title: "1. Introduction & Objective",
                content: [
                    "Defines the purpose and regulatory basis for record-keeping across all Penthian Ltd operations.",
                    "Aligns with FSC of Mauritius, VAITOS Act 2021, and international AML/CFT frameworks."
                ]
            },
            {
                title: "2. Scope & Applicability",
                content: [
                    "Applies to all departments, staff, contractors, and technology systems involved in Penthian Ltd’s regulated Virtual Asset Marketplace."
                ],
                subSections: [
                    {
                        number: "2.1",
                        title: "Covered Records",
                        subItems: [
                            {
                                title: "Client Identification & Onboarding",
                                points: [
                                    "KYC files verified through Veriff",
                                    "Proof of identity (passport, ID, license)",
                                    "Proof of address (utility bill, bank statement)",
                                    "Risk assessments and source-of-funds declarations"
                                ]
                            },
                            {
                                title: "Transaction & Wallet Records",
                                points: [
                                    "Token purchases and sales",
                                    "Token allocations under ERC-721, ERC-1155, ERC-3643",
                                    "Wallet addresses, transaction hashes, timestamps",
                                    "Smart contract logs and dividend distributions"
                                ]
                            },
                            {
                                title: "Compliance & AML/CFT Records",
                                points: [
                                    "Suspicious Transaction Reports (STRs)",
                                    "Ongoing monitoring logs and investigation reports",
                                    "Correspondence with FSC and FIU"
                                ]
                            },
                            {
                                title: "Legal & Governance Records",
                                points: [
                                    "Board resolutions and minutes",
                                    "Contracts and partnership agreements",
                                    "Incident and breach reports"
                                ]
                            },
                            {
                                title: "Financial & Accounting Records",
                                points: [
                                    "Annual financial statements and tax returns",
                                    "Invoices, bank reconciliations, audit trails"
                                ]
                            }
                        ]
                    },
                    {
                        number: "2.2",
                        title: "Policy Applicability",
                        content: [
                            "Applies to all internal teams, external vendors managing data (e.g., Veriff, legal counsel), and cloud providers (AWS, Google Cloud)."
                        ]
                    }
                ]
            },
            {
                title: "3. Regulatory Requirements",
                subSections: [
                    {
                        number: "3.1",
                        title: "Minimum Retention Periods",
                        subItems: [
                            {
                                title: "Retention Table",
                                points: [
                                    "KYC records — 7 years after client relationship ends",
                                    "Transaction and blockchain logs — 7 years from date of transaction",
                                    "STRs — 7 years from filing date",
                                    "Legal contracts — 7 years post-termination",
                                    "Financial records — 7 years after fiscal year end",
                                    "System logs — 5–7 years depending on risk profile"
                                ]
                            }
                        ]
                    },
                    {
                        number: "3.2",
                        title: "Accessibility & Auditability",
                        points: [
                            "Records must be retrievable within 48 hours upon request",
                            "Stored securely with backups, metadata indexing, and immutability",
                            "Regulators (FSC, FIU) have unrestricted access during audits"
                        ]
                    },
                    {
                        number: "3.3",
                        title: "Cross-Border Data Compliance",
                        points: [
                            "Cloud providers must enforce AES-256 encryption and secure transfer protocols",
                            "Cross-border data transfers comply with Mauritius Data Protection Act 2017 and GDPR",
                            "Vendors must meet equivalent security and retention standards"
                        ]
                    }
                ]
            },
            {
                title: "4. Record Storage & Security",
                subSections: [
                    {
                        number: "4.1",
                        title: "Digital Record Storage",
                        content: [
                            "All electronic records stored in encrypted, access-controlled cloud systems (AWS, Google Cloud).",
                            "Blockchain records (ERC-3643, ERC-721, ERC-1155) are immutable and permanently stored on-chain.",
                            "Access managed via RBAC, MFA, and continuous audit logging."
                        ]
                    },
                    {
                        number: "4.2",
                        title: "Physical Record Storage",
                        content: [
                            "Hardcopy documents stored in secure, fireproof locations with logged physical access."
                        ]
                    },
                    {
                        number: "4.3",
                        title: "Security Measures",
                        subItems: [
                            {
                                title: "Encryption",
                                points: ["AES-256 at rest", "TLS 1.2+ in transit"]
                            },
                            {
                                title: "Authentication",
                                points: ["Multi-factor authentication", "Quarterly access reviews"]
                            },
                            {
                                title: "Monitoring & Alerts",
                                points: ["Automated breach detection", "Incident escalation to CTO and Compliance"]
                            }
                        ]
                    }
                ]
            },
            {
                title: "5. Record Access & Retrieval",
                subSections: [
                    {
                        number: "5.1",
                        title: "Internal Access Controls",
                        subItems: [
                            {
                                title: "Access Matrix",
                                points: [
                                    "Compliance Team — full access to compliance records",
                                    "Executive Management — financial and governance records",
                                    "Tech Teams — system and blockchain logs",
                                    "Customer Service — view-only client onboarding data"
                                ]
                            }
                        ]
                    },
                    {
                        number: "5.2",
                        title: "External Access",
                        content: [
                            "FSC, FIU, and external auditors must receive data access within 48 hours of written request."
                        ]
                    },
                    {
                        number: "5.3",
                        title: "Retrieval Standards",
                        content: [
                            "Records retrievable in human-readable form, indexed by client ID, hash, or metadata."
                        ]
                    },
                    {
                        number: "5.4",
                        title: "Emergency Retrieval",
                        content: [
                            "Essential records recoverable from backups within 6 hours; full restoration within 24 hours (RTO)."
                        ]
                    }
                ]
            },
            {
                title: "6. Record Retention & Disposal",
                subSections: [
                    {
                        number: "6.1",
                        title: "Retention Schedule",
                        content: [
                            "Records retained per regulatory timelines (7 years minimum)."
                        ]
                    },
                    {
                        number: "6.2",
                        title: "Conditions for Early Deletion",
                        content: [
                            "Permitted only via regulator/court order or legal approval by Compliance."
                        ]
                    },
                    {
                        number: "6.3",
                        title: "Disposal Methods",
                        subItems: [
                            {
                                title: "Digital Records",
                                points: [
                                    "Wiped using DoD 5220.22-M or equivalent",
                                    "Encryption key destruction",
                                    "Deletion logs retained 2 years"
                                ]
                            },
                            {
                                title: "Physical Records",
                                points: [
                                    "Shredding by authorized staff/vendor",
                                    "Certificate of destruction stored in disposal register"
                                ]
                            }
                        ]
                    },
                    {
                        number: "6.4",
                        title: "Disposal Register",
                        content: [
                            "Centralized log with record description, disposal date/method, and authorization signature."
                        ]
                    }
                ]
            },
            {
                title: "7. Monitoring & Policy Review",
                subSections: [
                    {
                        number: "7.1",
                        title: "Monitoring of Compliance",
                        content: [
                            "Compliance Officer audits record management and vendor practices.",
                            "Breaches or deviations trigger immediate corrective actions."
                        ]
                    },
                    {
                        number: "7.2",
                        title: "Review Cycle",
                        content: [
                            "Policy reviewed annually or sooner upon regulatory changes, new products, or incidents.",
                            "Approved by Board after consultation with Compliance, Legal, and IT."
                        ]
                    },
                    {
                        number: "7.3",
                        title: "Training & Awareness",
                        content: [
                            "All staff with access to records trained on creation, retention, and secure disposal procedures."
                        ]
                    }
                ]
            }
        ],
        // closingNote: [
        //   "Penthian Ltd’s Record-Keeping Policy ensures data integrity, regulatory compliance, and long-term protection of client and operational records."
        // ]
    }
};