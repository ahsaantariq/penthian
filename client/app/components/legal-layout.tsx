import Image from "next/image";
import React from "react";

// Type definitions
interface SubItem {
  title: string;
  points: string[];
}

interface SubSection {
  number?: string;
  title: string;
  content?: string | string[];
  subItems?: SubItem[];
}

interface Section {
  title: string;
  content?: string[];
  subSections?: SubSection[];
}

interface LegalData {
  title: string;
  subTitle?: string;
  description?: string[];
  sections?: Section[];
}

interface LegalLayoutProps {
  data: LegalData;
  heroSrc?: string;
  heroAlt?: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({
    data,
    heroSrc = "/assets/landingPage/about-hero.png",
    heroAlt,
}) => {
    const { title, subTitle, description = [], sections = [] } = data || {};

    return (
        <section className="text-pitchBlack py-20 pt-32 sm:pt-40">
            <div className="mx-auto w-full max-w-[1080px] flex flex-col items-center justify-center space-y-8 px-4 sm:px-7">
                {/* Title */}
                <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl text-center">
                    {title}
                </h1>

                {/* Hero Image */}
                <Image
                    src={heroSrc}
                    alt={heroAlt || `${title} hero image`}
                    width={1000}
                    height={500}
                    className="object-contain w-full h-full max-h-96"
                />

                {/* Subtitle */}
                {subTitle && (
                    <p className="text-xl xl:text-2xl 3xl:text-4xl text-center text-[#143560] font-bold">
                        {subTitle}
                    </p>
                )}

                {/* Description */}
                {description.length > 0 && (
                    <div className="space-y-4">
                        {description.map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-base xl:text-lg 3xl:text-2xl text-justify leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                {/* Sections */}
                {sections.length > 0 && (
                    <div className="w-full space-y-10 mt-10">
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-3">
                                {/* Section title */}
                                <h2 className="text-2xl xl:text-3xl font-semibold text-[#143560]">
                                    {section.title}
                                </h2>

                                {/* Section content */}
                                {section.content && section.content.length > 0 && (
                                    <div className="space-y-2">
                                        {section.content.map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-base xl:text-lg 3xl:text-2xl leading-relaxed"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                {/* Subsections */}
                                {section.subSections && section.subSections.length > 0 && (
                                    <div className="mt-4 space-y-5 pl-6">
                                        {section.subSections.map((sub, j) => (
                                            <div key={j} className="space-y-1">
                                                <h3 className="text-lg xl:text-xl font-semibold text-[#143560]">
                                                    {sub.number ? `${sub.number}. ` : ""}
                                                    {sub.title}
                                                </h3>

                                                {/* Subsection content */}
                                                {Array.isArray(sub.content) ? (
                                                    <ul className="list-disc ml-5 space-y-1">
                                                        {sub.content.map((c, k) => (
                                                            <li
                                                                key={k}
                                                                className="text-base xl:text-lg 3xl:text-xl leading-relaxed"
                                                            >
                                                                {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-base xl:text-lg 3xl:text-xl leading-relaxed">
                                                        {sub.content}
                                                    </p>
                                                )}

                                                {/* SubItems */}
                                                {sub.subItems && sub.subItems.length > 0 && (
                                                    <div className="pl-6 space-y-4">
                                                        {sub.subItems.map((subItem, i) => (
                                                            <div key={i}>
                                                                <h4 className="text-lg font-semibold text-[#143560] mb-1">
                                                                    {subItem.title}
                                                                </h4>
                                                                <ul className="list-disc pl-6 space-y-1">
                                                                    {subItem.points.map((point, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="text-base xl:text-lg 3xl:text-xl"
                                                                        >
                                                                            {point}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LegalLayout;
