import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Spartronics,
    Primus,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    chris,
    andrew,
    iwata,
    ADO,
    Csharp,
    dotNet,
    Python,
    SQL,
    woodgrain,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Modernization",
      icon: web,
    },
    {
      title: "Delivery & Automation",
      icon: mobile,
    },
    {
      title: "Systems Thinking",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "ADO",
      icon: ADO,
    },
    {
      name: "C#",
      icon: Csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "dotNet",
      icon: dotNet,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQL",
      icon: SQL,
    },
  ];
  
  const experiences = [
    {
      title: "ERP Analyst 3",
      company_name: "Woodgrain",
      icon: woodgrain,
      iconBg: "#e5e7eb", // lighter background for Woodgrain badge
      date: "April 2024 – Present",
      points: [
        "Led the technical integration and onboarding of an acquired company, overseeing all aspects from network hardware and Azure cloud migration to end-user computer reimaging, ensuring zero business disruption.",
        "Championed the data modernization and application readiness effort, including database migration, legacy app updates, and comprehensive UAT, while onboarding new support partners for the ERP ecosystem.",
        "Integrated Tricentis Tosca into SAP S4, designing automated test strategies and embedding them within a modern DevOps pipeline to boost quality and accelerate delivery."
      ],
    },
    {
      title: "IT Director of ERP Business Processes",
      company_name: "Spartronics",
      icon: Spartronics,
      iconBg: "#383E56",
      date: "January 2021 – February 2024",
      points: [
        "Architected, executed, documented, and conducted training for change control systems, skillfully integrating RapidValue, Azure DevOps, and Microsoft Dynamics 365 Finance and Supply Chain in close partnership with the Chief Information Officer (CIO).",
        "Collaborated extensively with Columbus and To-Increase to validate the seamless end-to-end functionality of the RSAT regression testing process.",
        "Successfully directed the design review process, securing approvals for the majority of Functional Design Documents (FDDs) during the inaugural phase of the Microsoft Dynamics 365 Finance and Supply Chain project.",
        "Orchestrated and coordinated groups of subject matter experts (SMEs) to lead requirement refinement, secure design approvals, oversee testing, and deliver comprehensive training on solutions for several critical gaps identified in phase one.",
        "Actively contributed to the blueprint of the phase two Microsoft Dynamics 365 Finance and Supply Chain project, enriching it with insights from diverse site processes and leveraging value from prior project solutions.",
        "Elevated the performance of Macola and custom applications through astute support and strategic enhancements, all while operating with a 66% leaner team over the past two years.",
        "Personally addressed high-priority requests, delivering solutions for material, inventory, cycle time, and line of balance reports, as well as ad-hoc queries.",
        "Demonstrated commitment to professional growth by achieving Microsoft certifications MB-300 and MB-500. This achievement was driven by self-directed learning, often undertaken concurrently with existing responsibilities or during personal off-hours."
      ],
    },
    {
      title: "Director of Supply Chain & Programming",
      company_name: "PRIMUS Technologies",
      icon: Primus,
      iconBg: "#E6DEDD",
      date: "December 2019 – January 2021",
      points: [
        "Developed new tools utilized within the supply chain, resulting in notable time savings by optimizing data entry processes.",
        "Achieved a substantial cost reduction of $500K by executing a comprehensive mass re-categorization to reclaim excess inventory.",
        "Managed cycle time data and revamped planning lead time to align with historical averages, ensuring optimal operational efficiency.",
        "Assumed a pivotal leadership role during the weekly implementation of risk reviews, fostering a culture of proactive risk management.",
        "Successfully curtailed material short orders from 34M to 13M within a one-year timeframe, optimizing supply chain operations.",
        "Achieved a remarkable increase in KIT On-Time Delivery (OTD) metrics, elevating rates from 25% to an impressive 65%.",
        "Bolstered team morale by embodying the role of a servant leader, fostering a positive and collaborative working environment."
      ],
    },
    {
      title: "IT Manager of Software",
      company_name: "PRIMUS Technologies",
      icon: Primus,
      iconBg: "#383E56",
      date: "January 2015 – December 2019",
      points: [
        "Spearheaded the implementation of SCRUM agile techniques to efficiently manage a dynamic team of developers.",
        "Developed the SUA JP Morgan project on-time, projecting an estimated annual rebate of 300K.",
        "Orchestrated Kaizen events as a team leader and Key Process Owner (KPO), fostering continuous improvement.",
        "Demonstrated expertise in developing and enhancing numerous custom reports, contributing to operational optimization.",
        "Led a proficient team comprising SMT programmers to successfully implement 3D AOI and SPI machines.",
        "Eliminated a bottleneck workcenter through the implementation of a conformal coat one-piece-flow system."
      ],
    },
    {
      title: "Senior Programmer Analyst",
      company_name: "PRIMUS Technologies",
      icon: Primus,
      iconBg: "#E6DEDD",
      date: "August 2010 – January 2015",
      points: [
        "Crafted Windows applications in C# and VB 6.0, harnessing SQL Server databases to drive seamless functionality.",
        "Devised a sophisticated box build application, enabling test and serial number tracking.",
        "Innovatively designed a Humidity Monitoring System using Omega iServers, bolstering precision in environmental controls.",
        "Engineered an Inventory Tracking solution with API integration into Macola ERP system, streamlining inventory management.",
        "Skillfully managed and maintained an extensive portfolio of legacy applications, ensuring continued operational efficiency."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Phenomenal!, Superman.",
      name: "Chris Sullivan",
      designation: "CEO and President",
      company: "PRIMUS Technologies",
      image: chris,
    },
    {
      testimonial:
        "Mike you are a man of action.",
      name: "Takeshi Iwata",
      designation: "President / CEO",
      company: "Shingijutsu Global",
      image: iwata,
    },
    {
      testimonial:
        "Michael Bender is the best boss I've ever had.",
      name: "Andrew Schlachter",
      designation: "Senior Programmer Analyst",
      company: "Spartronics",
      image: andrew,
    },
  ];
  
  const projects = [
    {
      name: "Legacy Modernization with Azure DevOps",
      description:
        "This repository documents a real-world legacy application modernization effort focused on reducing deployment risk through automation, CI/CD, and pragmatic AI assistance.  The goal was not a full rewrite, but to safely introduce source control, repeatable builds, and auditable deployments into a high-risk legacy environment.",
      tags: [
        {
          name: "CI/CD",
          color: "blue-text-gradient",
        },
        {
          name: "legacy",
          color: "green-text-gradient",
        },
        {
          name: "Git",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mikethemerchant/legacy-modernization-azure-devops/tree/master",
    },
    {
      name: "Roadmap example",
      description:
        "Roadmap (coming soon)",
      tags: [
        {
          name: "risk management",
          color: "blue-text-gradient",
        },
        {
          name: "architecture planning",
          color: "green-text-gradient",
        },
        {
          name: "business strategy",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Agent developer",
      description:
        "AI agent worked next to me to help with various tasks.",
      tags: [
        {
          name: "ADO",
          color: "blue-text-gradient",
        },
        {
          name: ".Net",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };