export const cyberSecurityData = {
  cyberSecurity: {
    title: "Cybersecurity Policy",
    subTitle: "Establishing Trust, Compliance, and Digital Resilience.",
    description: [
      "The purpose of this Cybersecurity Policy is to establish a robust and adaptive framework to protect Penthian Ltd’s information systems, digital infrastructure, user data, and tokenized asset marketplace from internal and external cyber threats.",
      "This policy aligns with the Virtual Asset and Initial Token Offering Services (VAITOS) Act 2021, regulatory guidance from the Financial Services Commission (FSC) of Mauritius, and international standards such as ISO/IEC 27001, NIST Cybersecurity Framework, and CIS Controls.",
      "It reflects our internal values including integrity, transparency, and investor protection while ensuring operational security and compliance across the ecosystem."
    ],

    sections: [
      /* -------------------------------
         1. Purpose & Objectives
      -------------------------------- */
      {
        title: "1. Purpose & Objectives",
        content: [
          "The purpose of this Cybersecurity Policy is to establish a robust and adaptive framework to protect Penthian Ltd’s information systems, digital infrastructure, user data, and tokenized asset marketplace from internal and external cyber threats.",
          "This policy ensures alignment with the VAITOS Act 2021, guidance from the FSC of Mauritius, and international standards such as ISO/IEC 27001, NIST Cybersecurity Framework, and CIS Controls.",
          "It also enforces internal values including integrity, transparency, and investor protection."
        ],
        subSections: [
          {
            number: "1.1",
            title: "Protection of Information Assets",
            content:
              "Ensure the confidentiality, integrity, and availability of all data—customer, issuer, transactional, or administrative."
          },
          {
            number: "1.2",
            title: "Threat Detection & Response",
            content:
              "Implement proactive monitoring, detection, and rapid response capabilities to mitigate the impact of cyberattacks or unauthorized access."
          },
          {
            number: "1.3",
            title: "Secure Platform Infrastructure",
            content:
              "Maintain security across all layers of Penthian’s infrastructure, including the cloud environment, wallet infrastructure, marketplace, API integrations, and smart contracts."
          },
          {
            number: "1.4",
            title: "Regulatory Compliance",
            content:
              "Satisfy cybersecurity-related requirements under applicable VASP laws and frameworks, including auditability and reporting obligations."
          },
          {
            number: "1.5",
            title: "User Trust & Resilience",
            content:
              "Uphold Penthian’s reputation as a secure, transparent, and user-first tokenization platform through clear cybersecurity governance and zero-tolerance for negligence."
          }
        ]
      },

      /* -------------------------------
         2. Scope & Applicability
      -------------------------------- */
      {
        title: "2. Scope & Applicability",
        content: [
          "This Cybersecurity Policy applies to all digital systems, data repositories, personnel, partners, and third-party service providers involved in the operation of the Penthian platform, including but not limited to:"
        ],
        subSections: [
          {
            number: "2.1",
            title: "Covered Systems and Assets",
            content: [
              "Web platform and mobile application (frontend and backend)",
              "Multi-chain wallet infrastructure (including self-custody and private key security)",
              "Smart contracts and token modules (e.g. ERC-3643, ERC-1155)",
              "Cloud-based hosting and storage systems (AWS, Azure, or equivalent)",
              "Internal IT systems (email, productivity, file sharing, internal communication tools)",
              "APIs and third-party integrations (e.g. Veriff, blockchain explorers, compliance tools)",
              "KYC/AML data storage and transmission pipelines",
              "Databases housing investor, issuer, and transactional data",
              "Administrative control panels and developer consoles",
              "Employee devices accessing Penthian systems"
            ]
          },
          {
            number: "2.2",
            title: "Internal Applicability",
            content: [
              "All employees and contractors of Penthian Ltd",
              "Executive leadership and board members with system access",
              "Marketplace operators and compliance personnel",
              "Platform developers and DevOps engineers",
              "Marketing, sales, and support teams who access internal platforms or user data"
            ]
          },
          {
            number: "2.3",
            title: "External Applicability",
            content: [
              "KYC/AML service providers (e.g. Veriff)",
              "Cloud service vendors",
              "Smart contract auditors and security consultants",
              "Legal and accounting firms with system access",
              "Joint venture partners and integrators",
              "Each third-party provider must adhere to this policy or demonstrate equivalent cybersecurity standards."
            ]
          }
        ]
      },

      /* -------------------------------
         3. Roles & Responsibilities
      -------------------------------- */
      {
        title: "3. Roles & Responsibilities",
        content: [
          "Effective cybersecurity governance at Penthian Ltd depends on clearly defined responsibilities, accountability at all levels, and coordination between internal teams and external partners."
        ],
        subSections: [
          {
            number: "3.1",
            title: "Board of Directors",
            content: [
              "Approving the Cybersecurity Policy and reviewing it annually",
              "Ensuring sufficient budget and resources for security initiatives",
              "Appointing a qualified Chief Information Security Officer (CISO) or equivalent",
              "Monitoring the overall cybersecurity risk posture"
            ]
          },
          {
            number: "3.2",
            title: "Chief Executive Officer (CEO)",
            content: [
              "Supporting compliance with the FSC and global standards",
              "Promoting a security-first culture across the company",
              "Overseeing incident response decisions at the executive level"
            ]
          },
          {
            number: "3.3",
            title: "Chief Information Security Officer (CISO)",
            content: [
              "Implementing and maintaining the cybersecurity program",
              "Managing threat detection and incident response",
              "Conducting risk assessments and audits",
              "Reporting material cybersecurity risks or breaches to the Board and FSC",
              "Coordinating third-party penetration testing and system hardening"
            ]
          },
          {
            number: "3.4",
            title: "Compliance Officer",
            content: [
              "Aligning cybersecurity policies with FSC regulatory expectations",
              "Ensuring data protection obligations (e.g., Data Protection Act, GDPR) are met",
              "Verifying third-party providers meet cybersecurity SLAs and audit requirements"
            ]
          },
          {
            number: "3.5",
            title: "IT & Engineering Team",
            content: [
              "Ensuring secure development practices (DevSecOps)",
              "Applying updates, security patches, and configurations",
              "Managing API security and access permissions",
              "Monitoring infrastructure for intrusion attempts or anomalies"
            ]
          },
          {
            number: "3.6",
            title: "All Employees",
            content: [
              "Comply with this Cybersecurity Policy and related IT policies",
              "Complete annual cybersecurity training",
              "Use strong passwords and multi-factor authentication",
              "Report suspicious activities or phishing attempts immediately"
            ]
          },
          {
            number: "3.7",
            title: "Third-Party Vendors",
            content: [
              "Sign a cybersecurity and confidentiality agreement",
              "Demonstrate compliance with ISO 27001, SOC 2, or equivalent",
              "Cooperate in vulnerability assessments and risk reviews",
              "Notify Penthian of any known or suspected breaches related to their services"
            ]
          }
        ]
      },

      /* -------------------------------
         4. Risk Management & Assessment
      -------------------------------- */
      {
        title: "4. Risk Management & Assessment",
        content: [
          "Cybersecurity risks are continuously evolving and require ongoing identification, evaluation, and mitigation."
        ],
        subSections: [
          {
            number: "4.1",
            title: "Risk Management Framework",
            content: [
              "Identify – Assets, systems, data, and threats",
              "Protect – Implement controls to safeguard systems",
              "Detect – Monitor and identify threats or breaches",
              "Respond – Act on security incidents and limit impact",
              "Recover – Restore affected services and learn from events"
            ]
          },
          {
            number: "4.2",
            title: "Cyber Risk Categories",
            content: [
              "External Threats: DDoS, ransomware, phishing, credential stuffing",
              "Internal Threats: Insider leaks, poor access management, negligent staff",
              "Third-Party Risk: API exploits, supply chain attacks, vendor data breaches",
              "Technology Risk: Smart contract bugs, code vulnerabilities, outdated libraries",
              "Compliance Risk: Violation of FSC rules, data protection laws, or industry standards"
            ]
          },
          {
            number: "4.3",
            title: "Risk Assessments",
            content: [
              "Initial Risk Assessment during onboarding of new technology, smart contracts, or third-party vendors",
              "Periodic Reviews conducted quarterly to reassess the threat landscape",
              "Ad-hoc Assessments triggered by incidents, system changes, or regulatory updates",
              "Includes penetration testing, vulnerability scanning, configuration reviews, and security audits"
            ]
          },
          {
            number: "4.4",
            title: "Risk Register & Mitigation Plan",
            content: [
              "Maintain a centralized Cyber Risk Register updated by the CISO",
              "Include risk description, probability and impact ratings, assigned owner, mitigation controls, residual risk, and monitoring frequency"
            ]
          },
          {
            number: "4.5",
            title: "Risk Reporting",
            content: [
              "Report material risks or confirmed breaches to the Board of Directors",
              "Notify the FSC and impacted users where applicable in line with disclosure regulations"
            ]
          }
        ]
      },

      /* ------------------------------------------
         5. Access Controls & Identity Management
      ------------------------------------------- */
      {
        title: "5. Access Controls & Identity Management",
        content: [
          "Access control is based on least privilege and zero trust, ensuring only authorized users access sensitive systems and data."
        ],
        subSections: [
          {
            number: "5.1",
            title: "Identity Verification",
            content: [
              "a. Internal Users: Company-issued credentials with Multi-Factor Authentication (MFA); access tied to role-based permissions.",
              "b. External Users (Investors, Issuers, Agents): KYC/KYB via Veriff; wallet addresses tied to verified identities using ERC-3643 whitelisting; session data encrypted and tracked for anomalies."
            ]
          },
          {
            number: "5.2",
            title: "Role-Based Access Control (RBAC)",
            content: [
              "Admin – Full backend/platform access including user controls",
              "Compliance – KYC/KYB, risk dashboard, and reporting",
              "Developer – Codebase, staging, and smart contract deployment",
              "Issuer – Listing tools, asset dashboards, investor messages",
              "Investor – View and transact on verified offerings",
              "Agent – Limited access to referral tools and managed property dashboards",
              "Access levels are reviewed quarterly and upon role or employment change"
            ]
          },
          {
            number: "5.3",
            title: "Password Policy",
            content: [
              "Minimum 12 characters with symbols and mixed case",
              "Mandatory MFA for all staff and critical systems",
              "Password managers required for internal accounts",
              "Automatic lockout after 5 failed login attempts",
              "No plaintext storage of passwords"
            ]
          },
          {
            number: "5.4",
            title: "Session Management",
            content: [
              "User sessions expire after 15 minutes of inactivity",
              "Admin sessions logged and stored for audit",
              "Anomaly detection flags session hijacking attempts"
            ]
          },
          {
            number: "5.5",
            title: "Device & Network Controls",
            content: [
              "Access limited to company-approved devices with up-to-date endpoint protection",
              "Remote access requires VPN and device fingerprinting",
              "IP whitelisting enforced for sensitive admin panels and backend services"
            ]
          },
          {
            number: "5.6",
            title: "Access Review & De-provisioning",
            content: [
              "Quarterly access reviews conducted",
              "Immediate deactivation upon exit or termination",
              "Automated tools detect and revoke stale/inactive accounts"
            ]
          }
        ]
      },

      /* -------------------------------
         6. Data Security & Encryption
      -------------------------------- */
      {
        title: "6. Data Security & Encryption",
        content: [
          "Protect sensitive user, investor, issuer, and operational data using encryption, classification, and restricted access controls."
        ],
        subSections: [
          {
            number: "6.1",
            title: "Data Classification",
            content: [
              "Confidential – KYC/KYB documents, investor transactions, wallet addresses (Restricted to Compliance & Admin)",
              "Internal – Employee records, internal communications, financial reports (Role-based staff access)",
              "Public – Platform FAQs, marketing materials, investor education (Open to all users)"
            ]
          },
          {
            number: "6.2",
            title: "Data Storage Security",
            content: [
              "Data at rest encrypted with AES-256",
              "Cloud on ISO 27001-compliant providers; keys managed via HSMs",
              "On-chain data (e.g., ownership records) hashed/obfuscated where feasible",
              "Daily encrypted backups stored geographically separate with 30-day retention"
            ]
          },
          {
            number: "6.3",
            title: "Data in Transit",
            content: [
              "TLS 1.3 enforced for all web/API communications",
              "Mutual TLS (mTLS) between internal services",
              "SFTP used for file-based data exchange"
            ]
          },
          {
            number: "6.4",
            title: "KYC/KYB Data Handling",
            content: [
              "Identity data handled per GDPR and FSC requirements",
              "PII encrypted at rest and in transit",
              "Access limited to Compliance; all access logged"
            ]
          },
          {
            number: "6.5",
            title: "Token & Wallet Data",
            content: [
              "Self-custody private keys are never stored by Penthian",
              "Custodial features protected by multi-signature and air-gapped cold storage",
              "Smart contract interactions audited and signed by verified roles"
            ]
          },
          {
            number: "6.6",
            title: "Third-Party Data Handling",
            content: [
              "Vendors sign Data Protection Agreements",
              "Vendor systems meet/exceed Penthian’s encryption and storage standards",
              "Third-party data access is monitored and logged continuously"
            ]
          }
        ]
      },

      /* ---------------------------------------
         7. Endpoint Security & Device Controls
      ---------------------------------------- */
      {
        title: "7. Endpoint Security & Device Controls",
        content: [
          "Rigorous device controls protect sensitive systems and data across all endpoints."
        ],
        subSections: [
          {
            number: "7.1",
            title: "Device Registration & Authorization",
            content: [
              "All devices accessing Penthian systems must be registered and approved by IT",
              "Device IDs and MAC addresses logged and tied to user profiles",
              "BYOD prohibited for staff accessing sensitive environments"
            ]
          },
          {
            number: "7.2",
            title: "Endpoint Protection Tools",
            content: [
              "Antivirus/anti-malware kept up to date",
              "Endpoint Detection & Response (EDR) for advanced monitoring",
              "Firewalls enabled; auto-lock and screen timeouts configured"
            ]
          },
          {
            number: "7.3",
            title: "Operating System & Patch Management",
            content: [
              "OS must be regularly updated with security patches",
              "Unsupported OS versions prohibited",
              "Automated tools enforce patch compliance and scan for vulnerabilities"
            ]
          },
          {
            number: "7.4",
            title: "Disk & File Encryption",
            content: [
              "Full-disk encryption required (e.g., BitLocker, FileVault)",
              "Sensitive local files encrypted individually",
              "USB and external storage encrypted and approved before use"
            ]
          },
          {
            number: "7.5",
            title: "Remote Access Controls",
            content: [
              "Remote access only via company-approved VPNs",
              "Devices authenticated with MFA and IP whitelisting",
              "RDP monitored for unusual activity"
            ]
          },
          {
            number: "7.6",
            title: "Device Monitoring & Audits",
            content: [
              "Endpoint activity (times, IPs, device IDs) logged",
              "Periodic log reviews to detect anomalous behavior",
              "Non-compliant devices quarantined and remediated"
            ]
          },
          {
            number: "7.7",
            title: "Lost or Stolen Devices",
            content: [
              "Incidents reported within 1 hour",
              "IT triggers remote lock or wipe",
              "Security reviews access logs; incident report filed and escalated if data exposure is suspected"
            ]
          }
        ]
      },

      /* -------------------------------
         8. Incident Response Plan (IRP)
      -------------------------------- */
      {
        title: "8. Incident Response Plan (IRP)",
        content: [
          "A structured and rapid response framework to detect, contain, mitigate, and recover from cybersecurity incidents."
        ],
        subSections: [
          {
            number: "8.1",
            title: "Incident Definition",
            content: [
              "Events that compromise confidentiality, integrity, or availability of systems/data",
              "Violations of cybersecurity policies or applicable laws",
              "Unauthorized access, disclosure, alteration, or destruction of data",
              "Incidents affecting wallets, smart contracts, or token logic",
              "Triggers from monitoring systems or third-party vendors"
            ]
          },
          {
            number: "8.2",
            title: "Incident Response Team (IRT)",
            content: [
              "CISO – IRP coordinator and lead responder",
              "Compliance Officer – Regulatory reporting and user disclosure",
              "Engineering Lead – Technical triage, patching, rollback",
              "Legal Representative – Liabilities and breach disclosure obligations",
              "Communications Lead – Internal and external updates"
            ]
          },
          {
            number: "8.3",
            title: "Incident Response Stages",
            content: [
              "1. Identification – Detect anomaly via alerts or reports",
              "2. Containment – Isolate affected systems/services",
              "3. Investigation – Gather logs/data and determine scope/origin",
              "4. Notification – Inform teams, regulators, and users as required",
              "5. Eradication – Remove malware, close vulnerabilities, revoke access",
              "6. Recovery – Restore from backup, verify integrity, resume operations",
              "7. Postmortem – Analyze root cause, update playbooks, report to Board & FSC"
            ]
          },
          {
            number: "8.4",
            title: "Incident Classification",
            content: [
              "Critical – Major system outage, data breach, smart contract exploit (Immediate)",
              "High – Unauthorized access, phishing with credentials at risk (≤ 2 hours)",
              "Medium – Failed intrusion attempt, suspicious logins (≤ 24 hours)",
              "Low – Policy violations, misconfigured access (≤ 72 hours)"
            ]
          },
          {
            number: "8.5",
            title: "Reporting & Disclosure",
            content: [
              "All incidents logged in the Incident Register",
              "Material incidents reported to the FSC within 72 hours",
              "Affected users notified with scope, impact, and remedial actions"
            ]
          },
          {
            number: "8.6",
            title: "Post-Incident Review",
            content: [
              "Conduct lessons learned session",
              "Review timeline, detection gaps, and response speed",
              "Recommend policy updates, technical upgrades, or training",
              "File an Incident Report Summary for Board and regulator records"
            ]
          }
        ]
      },

      /* ------------------------------------------
         9. Security Monitoring & Threat Detection
      ------------------------------------------- */
      {
        title: "9. Security Monitoring & Threat Detection",
        content: [
          "Layered monitoring tools and processes detect threats in real time to protect investor assets, platform integrity, and regulatory compliance."
        ],
        subSections: [
          {
            number: "9.1",
            title: "Continuous Monitoring",
            content: [
              "SIEM and automated tools monitor app logs, smart contracts, logins, APIs, cloud infrastructure, third-party data flows, and on-chain transactions",
              "Logs centralized, timestamped, and stored immutably for at least 12 months"
            ]
          },
          {
            number: "9.2",
            title: "Anomaly Detection",
            content: [
              "Repeated failed logins (possible brute-force)",
              "Abnormal wallet transaction sizes/timing",
              "Access from blacklisted IPs/geolocations",
              "Atypical code/contract interactions",
              "Excessive API calls suggesting scraping/abuse",
              "Alerts triaged by the CISO team with severity ratings"
            ]
          },
          {
            number: "9.3",
            title: "Smart Contract Monitoring",
            content: [
              "Detection for reentrancy, overflows/underflows",
              "Unauthorized minting or transfers",
              "Function call abuse (e.g., price manipulation)",
              "Critical contracts include pause mechanisms to halt trading"
            ]
          },
          {
            number: "9.4",
            title: "Blockchain & Wallet Watchlists",
            content: [
              "Threat intel via Chainalysis, CipherTrace, etc.",
              "Suspicious wallets reported to Compliance and quarantined pending investigation"
            ]
          },
          {
            number: "9.5",
            title: "Physical Access Monitoring",
            content: [
              "If applicable, access logs and CCTV tracked to review physical security violations for on-prem assets"
            ]
          },
          {
            number: "9.6",
            title: "External Intelligence Feeds",
            content: [
              "Mauritius National CERT alerts",
              "Cybersecurity ISACs",
              "Global blockchain exploit trackers",
              "FSC and FATF guidance updates"
            ]
          }
        ]
      },

      /* -----------------------------------------
         10. Vendor & Third-Party Risk Management
      ------------------------------------------ */
      {
        title: "10. Vendor & Third-Party Risk Management",
        content: [
          "Strict risk management governs all third-party relationships to ensure service continuity, data protection, and aligned security standards."
        ],
        subSections: [
          {
            number: "10.1",
            title: "Vendor Selection & Due Diligence",
            content: [
              "Review ISO 27001/SOC 2 certifications and security history",
              "Assess security policies, IR procedures, and breaches",
              "Legal review of DPAs and SLAs",
              "Technical integration and API vulnerability assessment",
              "Vendors must meet or exceed policy standards"
            ]
          },
          {
            number: "10.2",
            title: "Approved Vendor List",
            content: [
              "Only vendors in the Approved Vendor Register may be used (KYC/KYB, cloud hosting, email, auditing, analytics)",
              "Register reviewed quarterly by Compliance and the CISO"
            ]
          },
          {
            number: "10.3",
            title: "Contractual Obligations",
            content: [
              "GDPR and local law-compliant data processing terms",
              "Breach notification within 48 hours",
              "Right to audit by Penthian or regulators",
              "Termination for failure to meet cybersecurity requirements"
            ]
          },
          {
            number: "10.4",
            title: "Ongoing Monitoring",
            content: [
              "Annual/bi-annual security reviews",
              "Penetration testing of exposed APIs/SDKs",
              "Uptime and service delivery audits",
              "Incident reporting drills and tabletop exercises"
            ]
          },
          {
            number: "10.5",
            title: "Third-Party Wallet & Token Risks",
            content: [
              "All contracts audited before deployment",
              "Least-privilege permissions enforced",
              "Real-time whitelist/blacklist updates",
              "ERC-20/1155 tokens scanned for malicious patterns"
            ]
          },
          {
            number: "10.6",
            title: "Termination & Offboarding",
            content: [
              "Immediate revocation of access",
              "Vendor-held data destroyed or returned per DPA",
              "Replacement vendors complete full due diligence prior to handover"
            ]
          }
        ]
      },

      /* -----------------------------------------
         11. Training, Awareness & Culture
      ------------------------------------------ */
      {
        title: "11. Training, Awareness & Culture",
        content: [
          "Security is cultural: education and awareness underpin responsibilities at all levels across Penthian and its partners."
        ],
        subSections: [
          {
            number: "11.1",
            title: "Onboarding Security Training",
            content: [
              "Mandatory within first 7 days for all hires",
              "Covers phishing, password hygiene, data protection, secure device use, and reporting procedures",
              "Developers receive training on secure coding and smart contract risks"
            ]
          },
          {
            number: "11.2",
            title: "Annual Refresher Training",
            content: [
              "All employees must pass an annual cybersecurity exam and simulation",
              "Content updated for new threats (e.g., deepfakes, wallet scams, AI risks)",
              "Passing score required for continued access to sensitive systems"
            ]
          },
          {
            number: "11.3",
            title: "Phishing Simulations",
            content: [
              "Periodic simulated phishing campaigns",
              "Employees who fail must retake targeted training",
              "Results anonymized and used for organizational learning"
            ]
          },
          {
            number: "11.4",
            title: "Developer & Technical Training",
            content: [
              "Smart contract security (reentrancy, overflows, gas attacks)",
              "Safe deployment pipelines and staging procedures",
              "Key management and signature verification",
              "Common Web3 vulnerabilities (front-running, flash loans)"
            ]
          },
          {
            number: "11.5",
            title: "Vendor Awareness",
            content: [
              "Vendors receive a Security Handbook",
              "Contractual requirement to follow platform-specific security guidelines, SDK/API best practices, and data access policies"
            ]
          },
          {
            number: "11.6",
            title: "Culture of Reporting",
            content: [
              "Immediate reporting encouraged without fear of reprisal",
              "Anonymous whistleblower mechanisms available",
              "Security wins are celebrated and communicated internally"
            ]
          },
          {
            number: "11.7",
            title: "Leadership & Tone from the Top",
            content: [
              "Executives champion security by joining training, reviewing reports, and allocating resources",
              "Leadership style infused with Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, and Self-Control to foster ethical technology use"
            ]
          }
        ]
      },

      /* -----------------------------------------
         12. Policy Governance & Review
      ------------------------------------------ */
      {
        title: "12. Policy Governance & Review",
        content: [
          "Governance structure and review procedures ensure continuous alignment with evolving threats, regulations, and business growth."
        ],
        subSections: [
          {
            number: "12.1",
            title: "Ownership & Accountability",
            content: [
              "CISO is the primary owner of this policy",
              "Board provides oversight and prioritizes cybersecurity as a business imperative",
              "Department heads enforce controls within their functions"
            ]
          },
          {
            number: "12.2",
            title: "Governance Committee",
            content: [
              "Cybersecurity & Risk Committee meets quarterly",
              "Members: CISO (Chair), Compliance Officer, Legal Counsel, CTO/Engineering Lead, and (if applicable) an independent advisor/auditor",
              "Reviews incidents, threat reports, audit outcomes, and policy updates"
            ]
          },
          {
            number: "12.3",
            title: "Policy Review Cycle",
            content: [
              "Reviewed and updated at least annually",
              "Earlier reviews triggered by significant incidents, new FSC/FATF guidance, material business/architecture changes, or new risks"
            ]
          },
          {
            number: "12.4",
            title: "Change Management",
            content: [
              "All updates documented, versioned, and approved by the Cybersecurity & Risk Committee",
              "Material updates communicated to staff and posted on the internal policy portal",
              "Critical system users must acknowledge policy changes"
            ]
          },
          {
            number: "12.5",
            title: "External Audits & Certification",
            content: [
              "Annual penetration tests and third-party audits conducted",
              "As the business scales, pursue ISO/IEC 27001, SOC 2 Type II, and FSC-accepted assurance reports",
              "Audit results and remediation shared with the Board and regulators as needed"
            ]
          },
          {
            number: "12.6",
            title: "Breach Reporting to Regulators",
            content: [
              "Confirmed cyber breaches affecting funds, tokens, wallets, or PII reported to FSC Mauritius within 72 hours, including mitigation and recovery plans",
              "Affected users notified transparently in line with local laws and platform commitments"
            ]
          }
        ]
      }
    ],

    // closingNote: [
    //   "Penthian’s Cybersecurity Policy ensures that every process—from smart contract deployment to investor onboarding—meets global standards for digital integrity and compliance.",
    //   "Through continuous improvement, training, monitoring, and transparent governance, we protect our community and the trust that underpins tokenized ownership."
    // ]
  }
};