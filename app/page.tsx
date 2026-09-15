"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

const cv = {
  name: "Mohamed Gamal",
  phone: "+20 1553194093",
  email: "mohamed987gamal2005@gmail.com",

  linkedin:
    "https://linkedin.com/in/mohamed-gamal-devops",

  github:
    "https://github.com/mohamedgamal-35",

  title: "Cloud & DevOps Engineer",

  secondaryTitle:
    "Cloud Infrastructure / DevOps Intern",

  objective:
    "IT-focused Computer Science student building skills in AWS Cloud and DevOps, with a focus on infrastructure, Linux, networking, and automation.",

  objectiveAr:
    "طالب علوم حاسب متخصص في IT، أطور مهاراتي في AWS وDevOps مع التركيز على الـInfrastructure وLinux والشبكات والأتمتة.",

  aboutMe:
    "I enjoy understanding how systems work behind the scenes and turning that understanding into reliable infrastructure. I am still growing professionally, but I take every project and training experience seriously and learn by building.",

  aboutMeAr:
    "بحب أفهم الأنظمة من جوه وأعرف إزاي الـInfrastructure بتخلي البرامج أكثر استقرارًا واعتمادية. لسه في بداية طريقي المهني، لكن بهتم جدًا بالتعلم من خلال التطبيق والمشروعات والتدريب العملي.",

  education: {
    school: "Menoufia University",
    degree: "Bachelor of Computer Science",
    specialization: "Information Technology",
    period:
      "Sep. 2023 – Expected July 2027",
    graduation:
      "Expected Graduation: July 2027",
    summary:
      "Academic background in Computer Science with an Information Technology specialization, alongside continuous practical development in Cloud and DevOps.",
  },

  educationAr: {
    school: "جامعة المنوفية",
    degree: "بكالوريوس علوم الحاسب",
    specialization:
      "تكنولوجيا المعلومات",
    period:
      "سبتمبر 2023 – متوقع التخرج يوليو 2027",
    graduation:
      "متوقع التخرج: يوليو 2027",
    summary:
      "دراسة أكاديمية في علوم الحاسب مع تخصص تكنولوجيا المعلومات، بالتوازي مع تطوير مهارات Cloud وDevOps بشكل عملي.",
  },

  languages: [
    "Arabic — Native",
    "English — Very Good",
  ],

  achievements: [
    {
      number: "11",
      title: "AWS Services",
      titleAr: "خدمات AWS",
      description:
        "Hands-on exposure across 11 AWS services used in cloud architecture and infrastructure training.",
      descriptionAr:
        "خبرة عملية في 11 خدمة من AWS تم استخدامها ضمن تدريبات Cloud Architecture والـInfrastructure.",
    },

    {
      number: "02",
      title: "Training Tracks",
      titleAr: "مسارات تدريبية",
      description:
        "Cloud computing training through NTI and ongoing DevOps development through DEPI.",
      descriptionAr:
        "تدريب عملي في Cloud Computing من خلال NTI، مع تطوير مستمر لمهارات DevOps من خلال DEPI.",
    },
  ],

  experience: [
    {
      role: "Cloud Computing Trainee (AWS)",
      roleAr:
        "متدرب Cloud Computing (AWS)",

      company:
        "National Telecommunication Institute (NTI)",

      logo:
        "https://commons.wikimedia.org/wiki/Special:FilePath/NTI%20Logo%20Tagline%20RGB.png",

      period: "Training",
      periodAr: "تدريب",

      focus: "AWS CLOUD ARCHITECTURE",
      focusAr: "AWS CLOUD ARCHITECTURE",

      challenge:
        "Needed to work with core AWS infrastructure components and understand how they fit together in scalable cloud environments.",

      challengeAr:
        "كان التحدي هو التعامل مع مكونات AWS الأساسية وفهم كيفية ربطها معًا لبناء بيئات Cloud قابلة للتوسع.",

      action:
        "Worked with EC2, S3, RDS, VPC, IAM, Lambda, SQS, CloudFormation, Elastic Beanstalk, Elastic Load Balancing, and Auto Scaling. Configured subnets, route tables, security groups, load balancing, serverless components, and infrastructure provisioning.",

      actionAr:
        "تعاملت مع EC2 وS3 وRDS وVPC وIAM وLambda وSQS وCloudFormation وElastic Beanstalk وElastic Load Balancing وAuto Scaling، مع إعداد Subnets وRoute Tables وSecurity Groups وLoad Balancing وServerless Components وInfrastructure Provisioning.",

      result:
        "Built a stronger understanding of cloud architecture, availability, scalability, networking, and Infrastructure as Code through hands-on AWS work.",

      resultAr:
        "كوّنت فهمًا عمليًا أقوى لـCloud Architecture وAvailability وScalability وNetworking وInfrastructure as Code من خلال التطبيق العملي على AWS.",

      bullets: [
        "Worked with 11 AWS services across compute, storage, databases, networking, serverless, and infrastructure management.",
        "Configured Elastic Load Balancing and Auto Scaling to support resilient cloud environments.",
        "Implemented event-driven components using Lambda and SQS for application decoupling.",
        "Configured VPC networking with public and private subnets, route tables, and security groups.",
        "Automated infrastructure provisioning using AWS CloudFormation.",
        "Deployed and managed relational databases using Amazon RDS.",
      ],

      bulletsAr: [
        "تعاملت مع 11 خدمة من AWS تشمل Compute وStorage وDatabases وNetworking وServerless وInfrastructure Management.",
        "قمت بإعداد Elastic Load Balancing وAuto Scaling لدعم بيئات Cloud أكثر استقرارًا.",
        "طبقت Event-Driven Components باستخدام Lambda وSQS لفصل مكونات التطبيقات.",
        "نفذت VPC Networking باستخدام Public وPrivate Subnets وRoute Tables وSecurity Groups.",
        "أتمت عملية إنشاء وإدارة البنية التحتية باستخدام AWS CloudFormation.",
        "نفذت وأدرت قواعد بيانات Relational باستخدام Amazon RDS.",
      ],
    },

    {
      role: "DevOps Track Trainee",
      roleAr:
        "متدرب في مسار DevOps",

      company:
        "Digital Egypt Pioneers Initiative (DEPI)",

      logo:
        "https://tse3.mm.bing.net/th/id/OIP.Hp_gIm0AmgMhb2Jx1C4f3QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",

      period: "2026 – Present",
      periodAr: "2026 – حتى الآن",

      focus: "DEVOPS ENGINEERING",
      focusAr: "DEVOPS ENGINEERING",

      challenge:
        "The next step was to connect existing cloud knowledge with real DevOps practices, automation, deployment, and delivery workflows.",

      challengeAr:
        "المرحلة التالية كانت ربط معرفة الـCloud الموجودة مع ممارسات DevOps الحقيقية مثل Automation وDeployment وDelivery Workflows.",

      action:
        "Developed practical skills across DevOps principles, Linux administration, CI/CD, infrastructure automation, deployment workflows, and cloud-based environments.",

      actionAr:
        "طورت مهارات عملية في مبادئ DevOps وLinux Administration وCI/CD وInfrastructure Automation وDeployment Workflows والبيئات السحابية.",

      result:
        "Expanded the technical track from cloud architecture toward practical DevOps workflows and infrastructure operations.",

      resultAr:
        "وسعت المسار التقني من Cloud Architecture إلى DevOps Workflows وInfrastructure Operations بشكل عملي.",

      bullets: [
        "Developed practical competencies across DevOps principles, cloud infrastructure, automation, CI/CD, Linux administration, and deployment workflows.",
        "Worked on connecting software delivery practices with infrastructure management and automation.",
      ],

      bulletsAr: [
        "طورت مهارات عملية في مبادئ DevOps وCloud Infrastructure والأتمتة وCI/CD وLinux Administration وعمليات الـDeployment.",
        "عملت على الربط بين Software Delivery وInfrastructure Management والأتمتة.",
      ],
    },
  ],

  project: {
    name:
      "AWS Enterprise Cloud Infrastructure",

    projectLabel:
      "Scalable & Secure Multi-AZ Architecture",

    projectLabelAr:
      "بنية Multi-AZ قابلة للتوسع وآمنة",

    description:
      "Architected and deployed a highly available, fault-tolerant AWS infrastructure built around a Multi-AZ 3-tier VPC design, scalable application delivery, secure network segmentation, global traffic management, protected data services, and layered security controls.",

    descriptionAr:
      "صممت ونشرت بنية AWS عالية التوافر ومقاومة للأعطال تعتمد على Multi-AZ 3-Tier VPC Architecture، مع قابلية عالية للتوسع وإدارة الـTraffic عالميًا وحماية البيانات وتطبيق طبقات متقدمة من الـSecurity.",

    challenge:
      "The infrastructure needed to support high availability, fault tolerance, dynamic traffic handling, secure network segmentation, protected data layers, and reliable access across multiple Availability Zones.",

    challengeAr:
      "كان المشروع يحتاج إلى تحقيق High Availability وFault Tolerance مع التعامل الديناميكي مع ضغط الـTraffic، وتقسيم الشبكة بشكل آمن، وحماية طبقات البيانات، وضمان استمرارية الوصول عبر أكثر من Availability Zone.",

    action:
      "Designed a Multi-AZ 3-tier VPC architecture using Public, Private, and Isolated Subnets. Implemented Application Load Balancers with Auto Scaling Groups for EC2 application and administrative workloads, integrated Route 53, CloudFront, WAF, and Shield for DNS, edge delivery, and protection, and configured Multi-AZ database clusters, EFS, AWS Backup, ACM, Secrets Manager, Security Groups, and NAT Gateways.",

    actionAr:
      "صممت Multi-AZ 3-Tier VPC Architecture باستخدام Public وPrivate وIsolated Subnets. طبقت Application Load Balancers مع Auto Scaling Groups لخوادم EC2 الخاصة بالتطبيق والإدارة، وربطت Route 53 وCloudFront وWAF وShield لإدارة الـDNS وتسريع الـContent Delivery والحماية، مع إعداد Multi-AZ Database Clusters وEFS وAWS Backup وACM وSecrets Manager وSecurity Groups وNAT Gateways.",

    result:
      "Created an enterprise-oriented cloud architecture focused on availability, scalability, fault tolerance, secure access, global content delivery, database resilience, shared storage, automated backup, and layered security.",

    resultAr:
      "تم بناء Cloud Architecture بمستوى Enterprise تركز على Availability وScalability وFault Tolerance وSecure Access وGlobal Content Delivery وDatabase Resilience وShared Storage وAutomated Backup وLayered Security.",

    image:
      "/2.jpeg",

    imageAlt:
      "AWS Enterprise Cloud Infrastructure architecture overview",

    imageAltAr:
      "صورة توضح بنية مشروع AWS Enterprise Cloud Infrastructure",

    points: [
      "Multi-AZ 3-tier VPC architecture across Public, Private, and Isolated Subnets",
      "Application Load Balancers with Auto Scaling Groups for traffic management and high availability",
      "Route 53, CloudFront, AWS WAF, and AWS Shield for DNS, edge delivery, and protection",
      "Multi-AZ database clusters with synchronous replication in isolated subnets",
      "Amazon EFS for shared file systems and AWS Backup for automated data protection",
      "HTTPS through AWS Certificate Manager with Secrets Manager for sensitive credentials",
      "Strict Security Groups and NAT Gateways for controlled access and secure outbound connectivity",
    ],

    pointsAr: [
      "تصميم Multi-AZ 3-Tier VPC Architecture باستخدام Public وPrivate وIsolated Subnets",
      "استخدام Application Load Balancers مع Auto Scaling Groups لإدارة الـTraffic وتحقيق High Availability",
      "دمج Route 53 وCloudFront وAWS WAF وAWS Shield لإدارة الـDNS وتسريع الـContent Delivery والحماية",
      "إعداد Multi-AZ Database Clusters مع Synchronous Replication داخل Isolated Subnets",
      "استخدام Amazon EFS للـShared File Systems وAWS Backup للحماية التلقائية للبيانات",
      "تطبيق HTTPS باستخدام AWS Certificate Manager مع Secrets Manager لإدارة الـCredentials الحساسة",
      "تطبيق Security Groups صارمة وNAT Gateways للتحكم في الوصول وتأمين الـOutbound Connectivity",
    ],

    stack: [
      "AWS",
      "VPC",
      "Multi-AZ",
      "EC2",
      "ALB",
      "Auto Scaling",
      "Route 53",
      "CloudFront",
      "AWS WAF",
      "AWS Shield",
      "RDS",
      "EFS",
      "AWS Backup",
      "ACM",
      "Secrets Manager",
      "NAT Gateway",
      "Security Groups",
      "Linux",
    ],
  },

  services: [
    {
      title: "Cloud Infrastructure",
      titleAr: "Cloud Infrastructure",
      description:
        "Designing and configuring AWS infrastructure across compute, storage, networking, and managed services.",
      descriptionAr:
        "تصميم وإعداد Cloud Infrastructure باستخدام AWS مع التركيز على Compute وStorage وNetworking والخدمات المُدارة.",
      icon: "cloud",
    },

    {
      title: "DevOps & CI/CD",
      titleAr: "DevOps & CI/CD",
      description:
        "Working with CI/CD concepts, automation, deployment workflows, and practical DevOps processes.",
      descriptionAr:
        "العمل على مفاهيم CI/CD والأتمتة وعمليات الـDeployment وممارسات DevOps بشكل عملي.",
      icon: "bolt",
    },

    {
      title: "Linux & Systems",
      titleAr: "Linux & Systems",
      description:
        "Working with Linux environments, server administration, troubleshooting, and infrastructure operations.",
      descriptionAr:
        "العمل مع بيئات Linux وإدارة الخوادم وحل مشاكل الأنظمة وتشغيل الـInfrastructure.",
      icon: "server",
    },

    {
      title: "Networking & Security",
      titleAr:
        "Networking & Security",
      description:
        "Configuring VPCs, subnets, route tables, security groups, and controlled cloud network access.",
      descriptionAr:
        "إعداد VPCs وSubnets وRoute Tables وSecurity Groups والتحكم في الوصول إلى الـCloud Network.",
      icon: "network",
    },
  ],

  testimonials: [
    {
      name: "Krishnakumar Kesavan",
      role:
        "AWS/GCP Cloud Architect",
      roleAr:
        "AWS/GCP Cloud Architect",

      quote:
        "Is a high score the best indicator of true understanding in complex areas like cloud computing?",

      quoteAr:
        "هل الدرجة العالية هي أفضل مؤشر على الفهم الحقيقي في مجالات معقدة مثل Cloud Computing؟",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },

    {
      name: "SHAHAB AHMAD",
      role:
        "Software Engineering & Technical Architect",
      roleAr:
        "Software Engineering & Technical Architect",

      quote:
        "The 90 hours of technical training seem thorough and beneficial.",

      quoteAr:
        "يبدو أن الـ90 ساعة من التدريب التقني كانت شاملة ومفيدة.",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },

    {
      name: "Youssef Yasser",
      role:
        "Fullstack Developer",
      roleAr:
        "Fullstack Developer",

      quote:
        "Congratulations 🎊",

      quoteAr:
        "مبروك 🎊",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },

    {
      name: "Ahmed Hossam",
      role:
        "Junior Backend .NET Developer",
      roleAr:
        "Junior Backend .NET Developer",

      quote:
        "Congratulations 🎊",

      quoteAr:
        "مبروك 🎊",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },

    {
      name: "Omar Saleh",
      role:
        "Data Analyst & ML",
      roleAr:
        "Data Analyst & ML",

      quote:
        "Congrats 👏",

      quoteAr:
        "مبروك 👏",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },

    {
      name: "Ahmed Maghrabi",
      role:
        "Data Analyst",
      roleAr:
        "Data Analyst",

      quote:
        "Congratulations 👏",

      quoteAr:
        "مبروك 👏",

      postUrl:
        "https://lnkd.in/p/dU7wAPXJ",

      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },
  ],

  certifications: [
    {
      name: "Red Hat System Administration",
      provider: "Red Hat",
      date: "",
      topics: [
        "Linux",
        "System Administration",
        "Red Hat",
      ],
      image:
        "/certificates/Screenshot 2026-09-14 203632.png",
    },

    {
      name:
        "Linux Red Hat Administration",
      provider: "Red Hat",
      date: "",
      topics: [
        "Linux",
        "Red Hat",
        "System Administration",
      ],
      image:
        "/certificates/Screenshot 2026-09-14 203713.png",
    },

    {
      name:
        "Cloud Services Management and Operation",
      provider: "",
      date: "",
      topics: [
        "Cloud Services",
        "Infrastructure Operations",
        "Cloud Management",
      ],
      image:
        "/certificates/Screenshot 2026-09-14 203745.png",
    },

    {
      name:
        "AWS Academy Graduate - Cloud Architecting",
      provider: "AWS Academy",
      date: "",
      topics: [
        "AWS",
        "Cloud Architecture",
        "Infrastructure Design",
      ],
      image:
        "/certificates/Screenshot 2026-09-14 203815.png",
    },

    {
      name:
        "AWS Academy Graduate - Cloud Foundations",
      provider: "AWS Academy",
      date: "",
      topics: [
        "AWS",
        "Cloud Fundamentals",
        "Core Cloud Concepts",
      ],
      image:
        "/certificates/Screenshot 2026-09-14 203847.png",
    },

    {
      name:
        "General Knowledge of Cloud Computing",
      provider: "Huawei ICT Academy",
      date: "2026-08-28",
      topics: [
        "Cloud Computing",
        "Cloud Fundamentals",
        "Core Cloud Concepts",
      ],
      image:
        "/certificates/Screenshot 2026-09-15 200419.png",
    },

    {
      name:
        "HCIA-Cloud Service V3.5 Course",
      provider: "Huawei ICT Academy",
      date: "2026-08-27",
      topics: [
        "Huawei Cloud",
        "Cloud Services",
        "Cloud Computing",
        "Cloud Architecture",
      ],
      image:
        "/certificates/Screenshot 2026-09-15 200432.png",
    },
  ],

  skills: {
    "Cloud & Architecture": [
      "AWS",
      "Huawei Cloud",
      "Cloud Architecture",
      "Serverless Architecture",
      "Event-Driven Architecture",
    ],

    "AWS Services": [
      "EC2",
      "S3",
      "RDS",
      "IAM",
      "Lambda",
      "SQS",
      "CloudFormation",
      "Elastic Load Balancing",
      "Auto Scaling",
    ],

    "DevOps & Automation": [
      "DevOps Fundamentals",
      "CI/CD",
      "Infrastructure as Code",
      "Automation",
      "Deployment Workflows",
    ],

    "Networking & Security": [
      "VPC",
      "Public / Private / Isolated Subnets",
      "Route Tables",
      "Security Groups",
      "Routing",
      "Network Architecture",
    ],

    "Systems & Technical": [
      "Linux",
      "SQL",
      "Amazon RDS",
      "System Design",
      "Troubleshooting",
      "Cloud Infrastructure",
    ],
  },

  softSkills: [
    {
      en: "Problem Solving",
      ar: "حل المشكلات",
    },
    {
      en: "Continuous Learning",
      ar: "التعلم المستمر",
    },
    {
      en: "Communication",
      ar: "التواصل",
    },
    {
      en: "Teamwork",
      ar: "العمل الجماعي",
    },
    {
      en: "Attention to Detail",
      ar: "الاهتمام بالتفاصيل",
    },
    {
      en: "Adaptability",
      ar: "القدرة على التكيف",
    },
    {
      en: "Responsibility",
      ar: "تحمل المسؤولية",
    },
    {
      en: "Time Management",
      ar: "إدارة الوقت",
    },
  ],
};

function Tech({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span
      dir="ltr"
      style={{
        display: "inline-block",
        unicodeBidi: "isolate",
      }}
    >
      {children}
    </span>
  );
}

function Icon({
  children,
  size = 19,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const i = {
  arrow: (
    <Icon>
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  ),

  contact: (
    <Icon>
      <path d="M20 11.2c0 4.5-3.6 8.1-8 8.1-1.1 0-2.2-.2-3.1-.6L4 20l1.3-3.7A8 8 0 1 1 20 11.2Z" />
      <path d="M8.2 11.2h.01" />
      <path d="M12 11.2h.01" />
      <path d="M15.8 11.2h.01" />
    </Icon>
  ),

  external: (
    <Icon>
      <path d="M14 5h5v5" />
      <path d="M19 5l-8 8" />
      <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Icon>
  ),

  email: (
    <Icon>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
      />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </Icon>
  ),

  github: (
    <Icon>
      <path d="M15.5 22v-4.2c2.5.4 4-1 4.5-2.7.5-1.3.2-2.6-.8-3.5.3-.8.4-1.7.2-2.6-.2-1-1-2-2.2-2.4.2-.8.1-1.7-.3-2.5-1 .1-2.2.6-3.2 1.3a11.7 11.7 0 0 0-3.4 0c-1-.7-2.2-1.2-3.2-1.3-.4.8-.5 1.7-.3 2.5-1.2.4-2 1.4-2.2 2.4-.2.9-.1 1.8.2 2.6-1 .9-1.3 2.2-.8 3.5.5 1.7 2 3.1 4.5 2.7V22" />
      <path d="M9 18c-3.5 1.2-4-1.5-5.5-1.5" />
    </Icon>
  ),

  linkedin: (
    <Icon>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="3"
      />
      <path d="M8 10.5v6" />
      <path d="M8 7.5v.01" />
      <path d="M12 16.5v-6" />
      <path d="M12 13.2a3 3 0 0 1 6 0v3.3" />
    </Icon>
  ),

  cloud: (
    <Icon>
      <path d="M7.2 18.5h9.6a4.2 4.2 0 0 0 .7-8.3 5.7 5.7 0 0 0-10.8 1.5A3.4 3.4 0 0 0 7.2 18.5Z" />
      <path d="M12 18.5v2.5" />
    </Icon>
  ),

  server: (
    <Icon>
      <rect
        x="3"
        y="3.5"
        width="18"
        height="6.5"
        rx="2"
      />
      <rect
        x="3"
        y="14"
        width="18"
        height="6.5"
        rx="2"
      />
      <path d="M7 6.75h.01" />
      <path d="M7 17.25h.01" />
      <path d="M11 6.75h7" />
      <path d="M11 17.25h7" />
    </Icon>
  ),

  network: (
    <Icon>
      <circle cx="5" cy="5" r="2.2" />
      <circle cx="19" cy="5" r="2.2" />
      <circle cx="12" cy="19" r="2.2" />
      <path d="M6.8 6.2 10.2 16.8" />
      <path d="M17.2 6.2 13.8 16.8" />
      <path d="M7.3 5h9.4" />
    </Icon>
  ),

  terminal: (
    <Icon>
      <path d="m5 7.5 4.5 4.5L5 16.5" />
      <path d="M12 16.5h7" />
    </Icon>
  ),

  git: (
    <Icon>
      <circle cx="6" cy="6" r="2.1" />
      <circle cx="18" cy="12" r="2.1" />
      <circle cx="6" cy="18" r="2.1" />
      <path d="m7.8 7.2 8.4 3.6" />
      <path d="m7.8 16.8 8.4-3.6" />
    </Icon>
  ),

  database: (
    <Icon>
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="2.8"
      />
      <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
    </Icon>
  ),

  shield: (
    <Icon>
      <path d="M12 3.2 19 6v4.8c0 4.2-2.5 8-7 10-4.5-2-7-5.8-7-10V6l7-2.8Z" />
      <path d="m9 12 2 2.2 4.2-4.4" />
    </Icon>
  ),

  bolt: (
    <Icon>
      <path d="M13.2 2.5 5.5 13.3h6.8l-1 8.2 7.7-10.8h-6.8l1-8.2Z" />
    </Icon>
  ),

  layers: (
    <Icon>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </Icon>
  ),

  education: (
    <Icon>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v5c2.7 2.1 7.3 2.1 10 0v-5" />
      <path d="M21 9v6" />
    </Icon>
  ),

  check: (
    <Icon size={14}>
      <path d="m5 12 4 4 10-10" />
    </Icon>
  ),

  quote: (
    <Icon>
      <path d="M9.8 10.8H5.7A2.7 2.7 0 0 0 3 13.5v1.8A2.7 2.7 0 0 0 5.7 18h1A3.1 3.1 0 0 0 9.8 15v-4.2Z" />
      <path d="M21 10.8h-4.1a2.7 2.7 0 0 0-2.7 2.7v1.8a2.7 2.7 0 0 0 2.7 2.7h1a3.1 3.1 0 0 0 3.1-3.1v-4.1Z" />
    </Icon>
  ),

  sun: (
    <Icon>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </Icon>
  ),

  light: (
    <Icon>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.6 14.6A6 6 0 1 1 15.4 15c-.8.7-1.4 1.6-1.4 2.6h-4c0-.8-.6-1.9-1.4-3Z" />
      <path d="M12 2v1" />
      <path d="m4.9 4.9.7.7" />
      <path d="M2 12h1" />
      <path d="m19.1 4.9-.7.7" />
      <path d="M21 12h1" />
    </Icon>
  ),

  people: (
    <Icon>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3.5 19c.6-3.1 2.4-5 5.5-5s4.9 1.9 5.5 5" />
      <path d="M14.2 14.5c2.7.1 4.5 1.6 5 4.1" />
    </Icon>
  ),
};

export default function Page() {
  const [active, setActive] =
    useState("home");

  const [menu, setMenu] =
    useState(false);

  const [profileError, setProfileError] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const [lightMode, setLightMode] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [language, setLanguage] =
    useState<"en" | "ar">("en");

  const [
    selectedCertificate,
    setSelectedCertificate,
  ] = useState<string | null>(null);

  const [
    selectedProjectImage,
    setSelectedProjectImage,
  ] = useState<string | null>(null);

  const isArabic = language === "ar";

  const t = {
    home: isArabic ? "الرئيسية" : "Home",

    about: isArabic ? "نبذة عني" : "About",

    education: isArabic
      ? "التعليم"
      : "Education",

    certification: isArabic
      ? "الشهادات"
      : "Certifications",

    skills: isArabic
      ? "المهارات"
      : "Skills",

    experience: isArabic
      ? "الخبرة"
      : "Experience",

    project: isArabic
      ? "المشروع"
      : "Project",

    services: isArabic
      ? "الخدمات"
      : "Services",

    achievements: isArabic
      ? "الإنجازات"
      : "Achievements",

    testimonials: isArabic
      ? "الآراء"
      : "Testimonials",

    contact: isArabic
      ? "تواصل"
      : "Contact",

    openToOpportunities:
      isArabic
        ? "متاح للفرص"
        : "Open to opportunities",

    letsConnect: isArabic
      ? "لنتواصل"
      : "Let's connect",

    cloudInfrastructureDevops:
      "Cloud Infrastructure / DevOps",

    exploreArchitecture:
      isArabic
        ? "استكشف الـArchitecture"
        : "Explore architecture",

    contactMe: isArabic
      ? "تواصل معي"
      : "Contact me",

    downloadCv: isArabic
      ? "تحميل CV"
      : "Download CV",

    viewLinkedin: "LinkedIn",

    viewGithub: "GitHub",

    cloudFirst: isArabic
      ? "Cloud أولًا."
      : "Cloud first.",

    systemsMinded:
      isArabic
        ? "بعقلية هندسية للأنظمة."
        : "Systems minded.",

    engineeringProfile:
      isArabic
        ? "الملف الهندسي"
        : "Engineering profile",

    profileHeading:
      isArabic
        ? "أحب أفهم الأنظمة من الداخل وأبني Infrastructure يعتمد عليها."
        : "I like understanding systems from the inside and building infrastructure people can rely on.",

    aboutMeLabel: isArabic
      ? "عن نفسي"
      : "A little about me",

    awsServicesApplied:
      isArabic
        ? "خدمات AWS مطبقة"
        : "AWS services applied",

    trainingTracks:
      isArabic
        ? "مسارات تدريبية"
        : "Training tracks",

    expectedGraduation:
      isArabic
        ? "التخرج المتوقع"
        : "Expected graduation",

    educationTitle:
      isArabic
        ? "بكالوريوس علوم الحاسب."
        : "Bachelor of Computer Science.",

    educationNote:
      isArabic
        ? "الخلفية الأكاديمية والتخصص الحالي مع توضيح موعد التخرج."
        : "Academic background, specialization, and current graduation timeline.",

    languages: isArabic
      ? "اللغات"
      : "Languages",

    academicFocus:
      isArabic
        ? "التخصص الأكاديمي"
        : "Academic specialization",

    certificationTitle:
      isArabic
        ? "تدريب وشهادات Cloud."
        : "Cloud certifications & training.",

    certificationNote:
      isArabic
        ? "الشهادات والتدريبات المرتبطة بالـCloud والـInfrastructure."
        : "Formal cloud and infrastructure training.",

    skillsTitle:
      isArabic
        ? "التقنيات خلف الـInfrastructure."
        : "The tools behind the infrastructure.",

    skillsNote:
      isArabic
        ? "المهارات الأساسية مرتبة بشكل أوضح بين Technical Skills وSoft Skills."
        : "Core capabilities organized across technical and soft skills.",

    capabilityMap:
      isArabic
        ? "خريطة المهارات"
        : "Capability map",

    capabilityNote:
      isArabic
        ? "مجموعة المهارات العملية المستخدمة في مسار Cloud وDevOps."
        : "A practical map of the capabilities behind my Cloud / DevOps path.",

    primaryFocus:
      isArabic
        ? "التركيز الأساسي"
        : "PRIMARY FOCUS",

    awsCloudInfrastructure:
      "AWS Cloud Infrastructure",

    technicalSkills:
      isArabic
        ? "المهارات التقنية"
        : "Technical skills",

    technicalSkillsNote:
      isArabic
        ? "الأدوات والتقنيات التي أبني بها الـCloud Infrastructure والـDevOps workflows."
        : "Tools and technologies used to build cloud infrastructure and DevOps workflows.",

    softSkills:
      isArabic
        ? "المهارات الشخصية"
        : "Soft skills",

    softSkillsNote:
      isArabic
        ? "مهارات تساعدني على التعلم والتعاون والتعامل مع مشاكل الـInfrastructure بشكل عملي."
        : "The working habits and interpersonal skills that support technical growth and teamwork.",

    practicalMindset:
      isArabic
        ? "Practical mindset"
        : "Practical mindset",

    practicalMindsetNote:
      isArabic
        ? "بناء، تجربة، حل المشكلة، ثم تحسين الحل."
        : "Build it, test it, solve the issue, then improve the solution.",

    experienceTitle:
      isArabic
        ? "خبرة مبنية على التطبيق."
        : "Experience built through practice.",

    experienceNote:
      isArabic
        ? "كل تجربة موضحة من التحدي إلى التنفيذ والنتيجة."
        : "Each experience is presented through challenge, action, and result.",

    challenge: isArabic
      ? "التحدي"
      : "Challenge",

    action: isArabic
      ? "التنفيذ"
      : "Action",

    result: isArabic
      ? "النتيجة"
      : "Result",

    record: isArabic
      ? "السجل"
      : "Record",

    position: isArabic
      ? "المنصب"
      : "Position",

    responsibilities:
      isArabic
        ? "المسؤوليات"
        : "Responsibilities",

    featuredProject:
      isArabic
        ? "المشروع المميز"
        : "Featured project",

    architectureStory:
      isArabic
        ? "Architecture واضحة."
        : "A clear architecture story.",

    projectNote:
      isArabic
        ? "مشروع Infrastructure معروض بشكل مختصر وواضح."
        : "A focused infrastructure case study.",

    scalableArchitecture:
      isArabic
        ? cv.project.projectLabelAr
        : cv.project.projectLabel,

    topology: isArabic
      ? "Cloud Topology"
      : "Cloud topology",

    actualProjectElements:
      isArabic
        ? "العناصر الأساسية للمشروع"
        : "Core architecture elements",

    cloudEnvironment:
      isArabic
        ? "AWS Environment"
        : "AWS environment",

    cloudBoundary:
      isArabic
        ? "حدود الـCloud Infrastructure"
        : "Cloud infrastructure boundary",

    applicationCompute:
      isArabic
        ? "Application Compute"
        : "Application compute",

    subnetsRouteTables:
      "Public + Private + Isolated Subnets",

    controlledAccess:
      isArabic
        ? "Controlled Access"
        : "Controlled access",

    cloudStorage:
      isArabic
        ? "Shared Storage & Data Layer"
        : "Shared storage & data layer",

    compute: isArabic
      ? "حوسبة"
      : "COMPUTE",

    network: isArabic
      ? "شبكة"
      : "NETWORK",

    storage: isArabic
      ? "تخزين"
      : "STORAGE",

    projectImage:
      isArabic
        ? "صورة المشروع"
        : "Project preview",

    projectImageNote:
      isArabic
        ? "لمحة بصرية سريعة عن الـCloud Architecture."
        : "A quick visual overview of the architecture.",

    viewProjectImage:
      isArabic
        ? "تكبير الصورة"
        : "Click to enlarge",

    servicesTitle:
      isArabic
        ? "مجالات الـInfrastructure التي أعمل عليها."
        : "Infrastructure I work with.",

    servicesNote:
      isArabic
        ? "AWS وDevOps وLinux والشبكات والأتمتة."
        : "AWS, DevOps, Linux, networking, automation, and deployment.",

    achievementsTitle:
      isArabic
        ? "محطات واضحة في المسار."
        : "Clear milestones in the path.",

    achievementsNote:
      isArabic
        ? "مؤشرات مبنية على الخبرة التدريبية والأكاديمية الحالية."
        : "Current academic and training milestones.",

    testimonialsTitle:
      isArabic
        ? "ماذا يقول الناس."
        : "What people say.",

    testimonialsNote:
      isArabic
        ? "تعليقات فعلية من LinkedIn مرتبطة بالمصدر."
        : "Real LinkedIn comments linked to the source.",

    viewPost:
      isArabic
        ? "عرض المنشور"
        : "View post",

    linkedinComment:
      isArabic
        ? "تعليق على LinkedIn"
        : "LinkedIn comment",

    contactTitle:
      isArabic
        ? "جاهز للخطوة التالية."
        : "Ready for the next step.",

    contactNote:
      isArabic
        ? "متاح لفرص Cloud وDevOps المرتبطة بالـAWS والـInfrastructure."
        : "Open to Cloud and DevOps opportunities around AWS and infrastructure.",

    openToOpportunitiesAgain:
      isArabic
        ? "متاح للفرص"
        : "Open to opportunities",

    letsBuild:
      isArabic
        ? "لنبنِ Infrastructure موثوقة."
        : "Let's build reliable infrastructure.",

    contactDescription:
      isArabic
        ? "للتدريب أو النقاشات التقنية أو الفرص المتعلقة بالـCloud Infrastructure وDevOps."
        : "For internships, technical conversations, or opportunities around cloud infrastructure and DevOps.",

    sendEmail:
      isArabic
        ? "إرسال Email"
        : "Send email",

    copyEmail:
      isArabic
        ? "نسخ Email"
        : "Copy email",

    copied:
      isArabic
        ? "تم النسخ"
        : "Copied",

    targetRole:
      isArabic
        ? "الدور المستهدف"
        : "Target role",

    coreFocus:
      isArabic
        ? "التركيز الأساسي"
        : "Core focus",

    langSwitch:
      isArabic ? "EN" : "AR",

    skillsTopics:
      isArabic
        ? "Skills / Topics"
        : "Skills / Topics",

    provider:
      isArabic ? "Provider" : "Provider",

    training:
      isArabic ? "Training" : "Training",

    footerStatus:
      isArabic
        ? "متاح لفرص Cloud وDevOps"
        : "Open to Cloud & DevOps opportunities",

    footerConnect:
      isArabic
        ? "لنبنِ شيئًا موثوقًا."
        : "Let's build something reliable.",

    footerExplore:
      isArabic
        ? "استكشف"
        : "Explore",

    footerContact:
      isArabic
        ? "تواصل"
        : "Contact",

    footerSocial:
      isArabic
        ? "روابط"
        : "Links",

    footerCopyright:
      isArabic
        ? "جميع الحقوق محفوظة."
        : "All rights reserved.",
  };

  const nav = useMemo(
    () => [
      ["home", t.home],
      ["about", t.about],
      ["education", t.education],
      ["certification", t.certification],
      ["skills", t.skills],
      ["experience", t.experience],
      ["project", t.project],
      ["services", t.services],
      ["achievements", t.achievements],
      ["testimonials", t.testimonials],
      ["contact", t.contact],
    ],
    [language]
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  useEffect(() => {
    const sectionIds =
      nav.map(([id]) => id);

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (
            visible[0]?.target?.id
          ) {
            setActive(
              visible[0].target.id
            );
          }
        },
        {
          rootMargin:
            "-96px 0px -58% 0px",
          threshold: [
            0.05,
            0.12,
            0.2,
            0.35,
            0.5,
          ],
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () =>
      observer.disconnect();
  }, [nav]);

  useEffect(() => {
    const onKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMenu(false);

        if (selectedCertificate) {
          setSelectedCertificate(null);
        }

        if (selectedProjectImage) {
          setSelectedProjectImage(null);
        }
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [
    selectedCertificate,
    selectedProjectImage,
  ]);

  useEffect(() => {
    document.body.style.overflow =
      menu ||
      selectedCertificate ||
      selectedProjectImage
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [
    menu,
    selectedCertificate,
    selectedProjectImage,
  ]);

  const go = (id: string) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const navOffset = 88;

    const top =
      element.getBoundingClientRect()
        .top +
      window.scrollY -
      navOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActive(id);
    setMenu(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        cv.email
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {}
  };

  return (
    <main
      className={`site ${
        lightMode ? "light" : "dark"
      } ${isArabic ? "rtl" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* =====================================================
          NAV
          ===================================================== */}

      <header
        className={`topbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="topbar-inner">
          <button
            className="brand"
            onClick={() =>
              go("home")
            }
            aria-label="Go to home"
          >
            <span className="brand-mark">
              {i.cloud}
            </span>

            <span className="brand-copy">
              <strong>
                {cv.name}
              </strong>

              <span>
                {cv.title}
              </span>
            </span>
          </button>

          <div className="nav-center">
            <nav
              className="nav-links"
              aria-label="Main navigation"
            >
              {nav.map(
                ([id, label]) => {
                  const isContact =
                    id === "contact";

                  return (
                    <button
                      key={id}
                      className={[
                        active === id
                          ? "active"
                          : "",
                        isContact
                          ? "nav-contact"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() =>
                        go(id)
                      }
                      aria-current={
                        active === id
                          ? "page"
                          : undefined
                      }
                    >
                      <span>
                        {label}
                      </span>

                      {isContact
                        ? (
                            <span className="nav-contact-icon">
                              {i.contact}
                            </span>
                          )
                        : null}
                    </button>
                  );
                }
              )}
            </nav>
          </div>

          <div className="nav-tools">
            <span className="availability">
              <span className="availability-dot" />
              {
                t.openToOpportunities
              }
            </span>

            <button
              className="language-button"
              onClick={() =>
                setLanguage(
                  (current) =>
                    current === "en"
                      ? "ar"
                      : "en"
                )
              }
              aria-label="Change language"
            >
              {t.langSwitch}
            </button>

            <button
              className="theme-button"
              onClick={() =>
                setLightMode(
                  (value) => !value
                )
              }
              aria-label={
                lightMode
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <span className="theme-glow" />

              <span className="theme-icon">
                {lightMode
                  ? i.sun
                  : i.light}
              </span>
            </button>

            <button
              className="menu-btn"
              onClick={() =>
                setMenu(
                  (value) => !value
                )
              }
              aria-label="Toggle navigation"
              aria-expanded={menu}
            >
              {menu ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      {menu && (
        <div
          className="mobile-menu"
          onClick={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setMenu(false);
            }
          }}
        >
          <div className="mobile-menu-inner">
            {nav.map(
              ([id, label]) => {
                const isContact =
                  id === "contact";

                return (
                  <button
                    key={id}
                    className={[
                      active === id
                        ? "active"
                        : "",
                      isContact
                        ? "nav-contact mobile-nav-contact"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() =>
                      go(id)
                    }
                  >
                    <span>
                      {label}
                    </span>

                    {isContact
                      ? (
                          <span className="nav-contact-icon">
                            {i.contact}
                          </span>
                        )
                      : null}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          00 / HOME
          ===================================================== */}

      <section
        id="home"
        className="container hero hero-compact"
      >
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {
              t.cloudInfrastructureDevops
            }
          </div>

          <h1>
            Mohamed
            <br />
            <span>Gamal.</span>
          </h1>

          <h3>{cv.title}</h3>

          <p className="hero-description">
            {isArabic
              ? cv.objectiveAr
              : cv.objective}
          </p>

          <div className="hero-actions">
            <button
              className="btn primary"
              onClick={() =>
                go("project")
              }
            >
              {
                t.exploreArchitecture
              }

              {i.arrow}
            </button>

            <a
              className="btn"
              href="/cv.pdf"
              download
            >
              {t.downloadCv}
              {i.external}
            </a>
          </div>
        </div>

        <div className="hero-art hero-art-compact">
          <div className="art-paper" />
          <div className="art-lines" />

          <div className="portrait-wrap">
            <span className="corner a" />
            <span className="corner b" />

            <div className="portrait">
              {!profileError ? (
                <img
                  src="/profile.jpg"
                  alt={`${cv.name} portrait`}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  onError={() =>
                    setProfileError(
                      true
                    )
                  }
                />
              ) : (
                <div className="portrait-placeholder">
                  <div>
                    <strong>
                      MOHAMED
                      <br />
                      GAMAL
                    </strong>

                    <span>
                      Add your portrait at
                      <br />
                      /public/profile.jpg
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hero-card aws-card">
            <img
              className="aws-logo"
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Web_Services_2025.svg"
              alt="AWS"
              loading="eager"
              decoding="async"
            />

            <strong>
              Cloud architecture
            </strong>

            <p dir="ltr">
              EC2 · S3 · VPC · RDS ·
              Lambda · SQS
            </p>
          </div>

          <div className="hero-card pipeline-card">
            <div className="card-row">
              <span className="card-label">
                DevOps workflow
              </span>

              <span className="status">
                <span className="status-dot" />
                Active track
              </span>
            </div>

            <div className="pipeline">
              <div className="pipe">
                <span className="pipe-icon">
                  {i.git}
                </span>

                <small>
                  Source
                </small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.bolt}
                </span>

                <small>
                  CI / CD
                </small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.cloud}
                </span>

                <small>
                  Cloud
                </small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.server}
                </span>

                <small>
                  Deploy
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          01 / ABOUT
          ===================================================== */}

      <section
        id="about"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                01 / {t.about}
              </div>

              <h2 className="section-title">
                {t.cloudFirst}
                <br />
                {t.systemsMinded}
              </h2>
            </div>
          </div>

          <div className="profile-grid">
            <div className="paper-card profile-main">
              <div>
                <div className="eyebrow">
                  {
                    t.engineeringProfile
                  }
                </div>

                <h3>
                  {
                    t.profileHeading
                  }
                </h3>

                <p>
                  {isArabic
                    ? cv.aboutMeAr
                    : cv.aboutMe}
                </p>

                <div className="about-me">
                  <div className="about-me-label">
                    <span className="eyebrow-dot" />
                    {t.aboutMeLabel}
                  </div>

                  <p>
                    {isArabic
                      ? "مهتم بالتعلم العملي وبناء الأنظمة، وبحاول دائمًا أربط بين الـCloud والـDevOps بشكل بسيط وفعلي."
                      : "I am especially interested in practical learning, system reliability, and connecting cloud infrastructure with real DevOps workflows."}
                  </p>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <strong>11</strong>

                  <span>
                    {
                      t.awsServicesApplied
                    }
                  </span>
                </div>

                <div className="stat">
                  <strong>02</strong>

                  <span>
                    {
                      t.trainingTracks
                    }
                  </span>
                </div>

                <div className="stat">
                  <strong>2027</strong>

                  <span>
                    {
                      t.expectedGraduation
                    }
                  </span>
                </div>
              </div>
            </div>

            <div className="paper-card profile-side">
              <div>
                <div className="label-row">
                  <span className="label-icon">
                    {i.layers}
                  </span>

                  How I think
                </div>

                <div className="university">
                  Cloud first.
                </div>

                <div className="degree">
                  {isArabic
                    ? "أميل لفهم الـInfrastructure كجزء أساسي من جودة أي Software System."
                    : "I see infrastructure as an essential part of building reliable software systems, not just as a deployment step."}
                </div>
              </div>

              <div>
                <div className="label-row">
                  <span className="label-icon">
                    {i.check}
                  </span>

                  Current direction
                </div>

                <div className="languages">
                  <span className="language">
                    AWS
                  </span>

                  <span className="language">
                    Linux
                  </span>

                  <span className="language">
                    DevOps
                  </span>

                  <span className="language">
                    Networking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 / EDUCATION
          ===================================================== */}

      <section
        id="education"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                02 / {t.education}
              </div>

              <h2 className="section-title">
                {t.educationTitle}
              </h2>
            </div>
          </div>

          <div className="education-grid">
            <article className="paper-card education-summary">
              <div className="education-header-row">
                <div>
                  <div className="label-row">
                    <span className="label-icon">
                      {i.education}
                    </span>

                    {t.education}
                  </div>

                  <h3>
                    {isArabic
                      ? cv.educationAr.degree
                      : cv.education.degree}
                  </h3>

                  <div className="university">
                    {isArabic
                      ? cv.educationAr.school
                      : cv.education.school}
                  </div>

                  <div className="degree">
                    {isArabic
                      ? cv.educationAr.specialization
                      : cv.education.specialization}
                  </div>
                </div>

                <div className="education-date">
                  <small>
                    Graduation
                  </small>

                  <strong dir="ltr">
                    {isArabic
                      ? cv.educationAr.graduation
                      : cv.education.graduation}
                  </strong>
                </div>
              </div>

              <p>
                {isArabic
                  ? cv.educationAr.summary
                  : cv.education.summary}
              </p>

              <div className="education-highlights">
                <div className="education-highlight">
                  <strong>
                    Information Technology
                  </strong>

                  <span>
                    {
                      t.academicFocus
                    }
                  </span>
                </div>

                <div className="education-highlight">
                  <strong dir="ltr">
                    2023 – 2027
                  </strong>

                  <span>
                    Academic timeline
                  </span>
                </div>

                <div className="education-highlight">
                  <strong>
                    Cloud + DevOps
                  </strong>

                  <span>
                    Practical track
                  </span>
                </div>
              </div>
            </article>

            <div className="paper-card profile-side">
              <div>
                <div className="label-row">
                  <span className="label-icon">
                    {i.terminal}
                  </span>

                  {t.languages}
                </div>

                <div className="languages">
                  {cv.languages.map(
                    (item) => (
                      <span
                        className="language"
                        key={item}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <div className="label-row">
                  <span className="label-icon">
                    {i.layers}
                  </span>

                  Current direction
                </div>

                <div className="degree">
                  {isArabic
                    ? "الدراسة الأكاديمية مستمرة بالتوازي مع تطوير Cloud وDevOps بشكل عملي."
                    : "Academic study continues alongside practical development in Cloud and DevOps."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 / CERTIFICATION
          ===================================================== */}

      <section
        id="certification"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                03 / {t.certification}
              </div>

              <h2 className="section-title">
                {
                  t.certificationTitle
                }
              </h2>
            </div>
          </div>

          <div className="credentials">
            {cv.certifications.map(
              (
                certificate,
                index
              ) => (
                <article
                  className="credential"
                  key={
                    certificate.name
                  }
                >
                  <button
                    type="button"
                    className="credential-image-button"
                    onClick={() =>
                      setSelectedCertificate(
                        certificate.image
                      )
                    }
                    aria-label={`Open ${certificate.name}`}
                  >
                    <div className="credential-image-wrap">
                      <img
                        className="credential-image"
                        src={
                          certificate.image
                        }
                        alt={
                          certificate.name
                        }
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="credential-zoom">
                        Click to enlarge
                      </span>
                    </div>
                  </button>

                  <div
                    className="credential-text"
                    dir="ltr"
                  >
                    <strong>
                      {
                        certificate.name
                      }
                    </strong>

                    <div className="credential-meta">
                      {certificate.provider ? (
                        <span>
                          <small>
                            {
                              t.provider
                            }
                          </small>

                          {
                            certificate.provider
                          }
                        </span>
                      ) : null}

                      {certificate.date ? (
                        <span>
                          <small>
                            Date
                          </small>

                          {
                            certificate.date
                          }
                        </span>
                      ) : null}

                      <span>
                        <small>
                          {t.training}
                        </small>

                        Cloud / Infrastructure
                      </span>
                    </div>

                    <div className="credential-skills">
                      <small>
                        {
                          t.skillsTopics
                        }
                      </small>

                      <div className="chips">
                        {certificate.topics.map(
                          (topic) => (
                            <span
                              className="chip"
                              key={topic}
                            >
                              {topic}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <span className="credential-index">
                      CREDENTIAL /{" "}
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 / SKILLS
          ===================================================== */}

      <section
        id="skills"
        className="section section-tight skills-section-improved"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                04 / {t.skills}
              </div>

              <h2 className="section-title">
                {t.skillsTitle}
              </h2>
            </div>
          </div>

          <div className="skills-dashboard">
            <div className="technical-skills-panel">
              <div className="skills-panel-header">
                <div>
                  <div className="panel-kicker">
                    TECH / 01
                  </div>

                  <h3>
                    {t.technicalSkills}
                  </h3>

                  <p>
                    {
                      t.technicalSkillsNote
                    }
                  </p>
                </div>

                <div className="skills-panel-icon">
                  {i.layers}
                </div>
              </div>

              <div className="technical-skills-grid">
                {Object.entries(
                  cv.skills
                ).map(
                  (
                    [category, items],
                    index
                  ) => {
                    const icon =
                      category.includes(
                        "Cloud"
                      )
                        ? i.cloud
                        : category.includes(
                            "AWS"
                          )
                          ? i.server
                          : category.includes(
                              "DevOps"
                            )
                            ? i.bolt
                            : category.includes(
                                "Networking"
                              )
                              ? i.network
                              : i.terminal;

                    const categoryDescription =
                      category.includes(
                        "Cloud"
                      )
                        ? isArabic
                          ? "Cloud platforms والـarchitecture الأساسية."
                          : "Cloud platforms and architecture fundamentals."
                        : category.includes(
                            "AWS"
                          )
                          ? isArabic
                            ? "خدمات AWS المستخدمة في الـcompute والـstorage والـmanagement."
                            : "AWS services across compute, storage, and cloud management."
                          : category.includes(
                              "DevOps"
                            )
                            ? isArabic
                              ? "Automation وCI/CD وInfrastructure delivery."
                              : "Automation, CI/CD, and infrastructure delivery."
                            : category.includes(
                                "Networking"
                              )
                              ? isArabic
                                ? "تصميم الشبكات وتأمين الـCloud connectivity."
                                : "Network design and controlled cloud connectivity."
                              : isArabic
                                ? "Linux والأنظمة وحل المشكلات التقنية."
                                : "Linux, systems thinking, and technical troubleshooting.";

                    return (
                      <article
                        className="skill-card-modern"
                        key={category}
                      >
                        <div className="skill-card-top">
                          <span className="skill-card-index">
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span className="skill-card-icon">
                            {icon}
                          </span>
                        </div>

                        <div className="skill-card-title-row">
                          <h4>
                            {category}
                          </h4>
                        </div>

                        <p className="skill-card-description">
                          {
                            categoryDescription
                          }
                        </p>

                        <div className="skill-card-divider" />

                        <div className="chips skill-chips-modern">
                          {items.map(
                            (
                              item,
                              itemIndex
                            ) => (
                              <span
                                key={item}
                                className={`chip ${
                                  itemIndex ===
                                  0
                                    ? "main"
                                    : ""
                                }`}
                                dir="ltr"
                              >
                                {item}
                              </span>
                            )
                          )}
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            </div>

            <aside className="skills-side-column">
              <div className="soft-skills-card">
                <div className="soft-skills-header">
                  <div>
                    <div className="panel-kicker">
                      PEOPLE / 02
                    </div>

                    <h3>
                      {t.softSkills}
                    </h3>
                  </div>

                  <span className="soft-skills-icon">
                    {i.people}
                  </span>
                </div>

                <p className="soft-skills-description">
                  {t.softSkillsNote}
                </p>

                <div className="soft-skills-list">
                  {cv.softSkills.map(
                    (
                      skill,
                      index
                    ) => (
                      <div
                        className="soft-skill-item"
                        key={skill.en}
                      >
                        <span className="soft-skill-number">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="soft-skill-name">
                          {isArabic
                            ? skill.ar
                            : skill.en}
                        </span>

                        <span className="soft-skill-check">
                          {i.check}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="skills-mindset-card">
                <div className="mindset-icon">
                  {i.bolt}
                </div>

                <div>
                  <span className="panel-kicker">
                    MINDSET / 03
                  </span>

                  <h4>
                    {t.practicalMindset}
                  </h4>

                  <p>
                    {
                      t.practicalMindsetNote
                    }
                  </p>
                </div>
              </div>

              <div className="skills-focus-card">
                <span className="panel-kicker">
                  PRIMARY FOCUS
                </span>

                <strong>
                  AWS Cloud Infrastructure
                </strong>

                <div className="focus-mini-tags">
                  <span>AWS</span>
                  <span>Linux</span>
                  <span>Networking</span>
                  <span>IaC</span>
                  <span>CI/CD</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 / EXPERIENCE
          ===================================================== */}

      <section
        id="experience"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                05 / {t.experience}
              </div>

              <h2 className="section-title">
                {
                  t.experienceTitle
                }
              </h2>
            </div>
          </div>

          <div className="experience">
            <div className="exp-head">
              <span>
                {t.record}
              </span>

              <span>
                {t.position}
              </span>

              <span>
                {
                  t.responsibilities
                }
              </span>
            </div>

            {cv.experience.map(
              (
                exp,
                index
              ) => (
                <article
                  className="exp-row"
                  key={
                    exp.role
                  }
                >
                  <div className="exp-id">
                    LOG /{" "}
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div>
                    <div className="exp-role">
                      {isArabic
                        ? exp.roleAr
                        : exp.role}
                    </div>

                    <div className="exp-company">
                      {exp.company}
                    </div>

                    <img
                      className="exp-logo"
                      src={
                        exp.logo
                      }
                      alt={`${exp.company} logo`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div>
                      <span className="exp-date">
                        {isArabic
                          ? exp.periodAr
                          : exp.period}
                      </span>
                    </div>

                    <span className="focus-tag">
                      {isArabic
                        ? exp.focusAr
                        : exp.focus}
                    </span>
                  </div>

                  <div className="experience-story">
                    <div className="story-block">
                      <small>
                        {t.challenge}
                      </small>

                      <p>
                        {isArabic
                          ? exp.challengeAr
                          : exp.challenge}
                      </p>
                    </div>

                    <div className="story-block">
                      <small>
                        {t.action}
                      </small>

                      <p>
                        {isArabic
                          ? exp.actionAr
                          : exp.action}
                      </p>
                    </div>

                    <div className="story-block">
                      <small>
                        {t.result}
                      </small>

                      <p>
                        {isArabic
                          ? exp.resultAr
                          : exp.result}
                      </p>
                    </div>

                    <ul className="exp-list">
                      {(isArabic
                        ? exp.bulletsAr
                        : exp.bullets
                      ).map(
                        (
                          bullet
                        ) => (
                          <li
                            key={
                              bullet
                            }
                          >
                            {
                              bullet
                            }
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 / PROJECT
          ===================================================== */}

      <section
        id="project"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                06 /{" "}
                {t.featuredProject}
              </div>

              <h2 className="section-title">
                {isArabic
                  ? "مشروع واحد."
                  : "One project."}

                <br />

                {
                  t.architectureStory
                }
              </h2>
            </div>
          </div>

          <article className="project">
            <div className="project-main">
              <div className="project-label">
                <span className="eyebrow-dot" />

                {
                  t.scalableArchitecture
                }
              </div>

              <h3 className="project-title-compact">
                {cv.project.name}
              </h3>

              <p>
                {isArabic
                  ? cv.project.descriptionAr
                  : cv.project.description}
              </p>

              <div className="project-story">
                <div className="story-block">
                  <small>
                    {t.challenge}
                  </small>

                  <p>
                    {isArabic
                      ? cv.project.challengeAr
                      : cv.project.challenge}
                  </p>
                </div>

                <div className="story-block">
                  <small>
                    {t.action}
                  </small>

                  <p>
                    {isArabic
                      ? cv.project.actionAr
                      : cv.project.action}
                  </p>
                </div>

                <div className="story-block">
                  <small>
                    {t.result}
                  </small>

                  <p>
                    {isArabic
                      ? cv.project.resultAr
                      : cv.project.result}
                  </p>
                </div>
              </div>

              <div className="project-points">
                {(isArabic
                  ? cv.project.pointsAr
                  : cv.project.points
                ).map(
                  (point) => (
                    <div
                      className="point"
                      key={point}
                    >
                      <span className="check">
                        {i.check}
                      </span>

                      <span>
                        {point}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="project-stack">
                {cv.project.stack.map(
                  (item) => (
                    <span
                      className="chip main"
                      key={item}
                      dir="ltr"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="topology">
              <div className="topology-content">
                <div className="project-image-card project-image-card-compact">
                  <div className="project-image-header">
                    <div>
                      <strong>
                        {
                          t.projectImage
                        }
                      </strong>

                      <span>
                        {
                          t.projectImageNote
                        }
                      </span>
                    </div>

                    <span className="project-image-id">
                      PROJECT / 001
                    </span>
                  </div>

                  <button
                    type="button"
                    className="project-image-button"
                    onClick={() =>
                      setSelectedProjectImage(
                        cv.project.image
                      )
                    }
                    aria-label={
                      t.viewProjectImage
                    }
                  >
                    <div className="project-image-frame">
                      <img
                        src={
                          cv.project.image
                        }
                        alt={
                          isArabic
                            ? cv.project.imageAltAr
                            : cv.project.imageAlt
                        }
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="project-image-zoom">
                        {
                          t.viewProjectImage
                        }
                      </span>
                    </div>
                  </button>
                </div>

                <div className="topology-head">
                  <div>
                    <h4>
                      {t.topology}
                    </h4>

                    <p>
                      {
                        t.actualProjectElements
                      }
                    </p>
                  </div>

                  <span className="topology-id">
                    AWS / 001
                  </span>
                </div>

                <div className="flow">
                  <div className="flow-row">
                    <span className="flow-icon">
                      {i.cloud}
                    </span>

                    <div className="flow-copy">
                      <strong>
                        {
                          t.cloudEnvironment
                        }
                      </strong>

                      <span>
                        {
                          t.cloudBoundary
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flow-line" />

                  <div className="flow-row">
                    <span className="flow-icon">
                      {i.server}
                    </span>

                    <div className="flow-copy">
                      <strong dir="ltr">
                        ALB + EC2 + Auto Scaling
                      </strong>

                      <span>
                        {
                          t.applicationCompute
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flow-line" />

                  <div className="flow-row">
                    <span className="flow-icon">
                      {i.network}
                    </span>

                    <div className="flow-copy">
                      <strong dir="ltr">
                        Multi-AZ VPC
                      </strong>

                      <span dir="ltr">
                        {
                          t.subnetsRouteTables
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flow-line" />

                  <div className="flow-row">
                    <span className="flow-icon">
                      {i.shield}
                    </span>

                    <div className="flow-copy">
                      <strong dir="ltr">
                        WAF + Shield + Security Groups
                      </strong>

                      <span>
                        {
                          t.controlledAccess
                        }
                      </span>
                    </div>
                  </div>

                  <div className="flow-line" />

                  <div className="flow-row">
                    <span className="flow-icon">
                      {i.database}
                    </span>

                    <div className="flow-copy">
                      <strong dir="ltr">
                        Multi-AZ Database + EFS
                      </strong>

                      <span>
                        {
                          t.cloudStorage
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="topology-footer">
                  <div className="topology-stat">
                    <strong dir="ltr">
                      EC2
                    </strong>

                    <span>
                      {t.compute}
                    </span>
                  </div>

                  <div className="topology-stat">
                    <strong dir="ltr">
                      VPC
                    </strong>

                    <span>
                      {t.network}
                    </span>
                  </div>

                  <div className="topology-stat">
                    <strong dir="ltr">
                      EFS / RDS
                    </strong>

                    <span>
                      {t.storage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          07 / SERVICES
          ===================================================== */}

      <section
        id="services"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                07 / {t.services}
              </div>

              <h2 className="section-title">
                {t.servicesTitle}
              </h2>
            </div>
          </div>

          <div className="services-grid">
            {cv.services.map(
              (
                service,
                index
              ) => (
                <article
                  className="service-card"
                  key={
                    service.title
                  }
                >
                  <div className="service-icon">
                    {service.icon ===
                    "cloud"
                      ? i.cloud
                      : service.icon ===
                          "bolt"
                        ? i.bolt
                        : service.icon ===
                            "server"
                          ? i.server
                          : i.network}
                  </div>

                  <div className="service-number">
                    SERVICE /{" "}
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <h3>
                    {isArabic
                      ? service.titleAr
                      : service.title}
                  </h3>

                  <p>
                    {isArabic
                      ? service.descriptionAr
                      : service.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 / ACHIEVEMENTS
          ===================================================== */}

      <section
        id="achievements"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                08 /{" "}
                {t.achievements}
              </div>

              <h2 className="section-title">
                {
                  t.achievementsTitle
                }
              </h2>
            </div>
          </div>

          <div className="achievements-grid">
            {cv.achievements.map(
              (
                achievement,
                index
              ) => (
                <article
                  className="achievement"
                  key={
                    achievement.title
                  }
                >
                  <div className="achievement-number">
                    {
                      achievement.number
                    }
                  </div>

                  <h3>
                    {isArabic
                      ? achievement.titleAr
                      : achievement.title}
                  </h3>

                  <p>
                    {isArabic
                      ? achievement.descriptionAr
                      : achievement.description}
                  </p>

                  <span className="credential-index">
                    MILESTONE /{" "}
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          09 / TESTIMONIALS
          ===================================================== */}

      <section
        id="testimonials"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head testimonial-section-head">
            <div>
              <div className="section-code">
                09 /{" "}
                {t.testimonials}
              </div>

              <h2 className="section-title">
                {
                  t.testimonialsTitle
                }
              </h2>
            </div>
          </div>

          <div className="testimonials-grid testimonials-grid-compact">
            {cv.testimonials.map(
              (
                testimonial,
                index
              ) => (
                <article
                  className="testimonial testimonial-compact"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="testimonial-top">
                    <span className="testimonial-quote-icon">
                      {i.quote}
                    </span>

                    <span className="testimonial-index">
                      COMMENT /{" "}
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  <p className="testimonial-quote">
                    {isArabic
                      ? testimonial.quoteAr
                      : testimonial.quote}
                  </p>

                  <div className="testimonial-author">
                    <strong dir="ltr">
                      {
                        testimonial.name
                      }
                    </strong>

                    <span>
                      {isArabic
                        ? testimonial.roleAr
                        : testimonial.role}
                    </span>
                  </div>

                  <div className="testimonial-source">
                    <span className="testimonial-source-label">
                      {
                        testimonial.source
                      }
                    </span>

                    <a
                      href={
                        testimonial.postUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="testimonial-post-link"
                      dir="ltr"
                    >
                      {t.viewPost}
                      {i.external}
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          10 / CONTACT
          ===================================================== */}

      <section
        id="contact"
        className="section section-tight contact-section"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                10 / {t.contact}
              </div>

              <h2 className="section-title">
                {t.contactTitle}
              </h2>
            </div>
          </div>

          <div className="contact contact-compact">
            <div className="contact-main contact-main-enhanced">
              <div className="eyebrow">
                <span className="eyebrow-dot" />

                {
                  t.openToOpportunitiesAgain
                }
              </div>

              <h3>
                {t.letsBuild}
              </h3>

              <p>
                {t.contactDescription}
              </p>

              <div className="contact-actions">
                <a
                  className="btn primary"
                  href={`mailto:${cv.email}`}
                >
                  {t.sendEmail}
                  {i.external}
                </a>

                <button
                  className="btn"
                  onClick={copyEmail}
                >
                  {copied
                    ? t.copied
                    : t.copyEmail}
                </button>

                <a
                  className="btn"
                  href="/cv.pdf"
                  download
                >
                  {t.downloadCv}
                  {i.external}
                </a>
              </div>
            </div>

            <div className="contact-side contact-side-enhanced">
              <div className="contact-item">
                <span className="contact-label">
                  Email
                </span>

                <a
                  className="contact-value"
                  href={`mailto:${cv.email}`}
                  dir="ltr"
                >
                  {cv.email}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">
                  LinkedIn
                </span>

                <a
                  className="contact-value"
                  href={
                    cv.linkedin
                  }
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                >
                  linkedin.com/in/mohamed-gamal-devops
                </a>
              </div>

              {cv.github ? (
                <div className="contact-item">
                  <span className="contact-label">
                    GitHub
                  </span>

                  <a
                    className="contact-value"
                    href={
                      cv.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    dir="ltr"
                  >
                    {
                      cv.github.replace(
                        /^https?:\/\//,
                        ""
                      )
                    }
                  </a>
                </div>
              ) : null}

              <div className="contact-item">
                <span className="contact-label">
                  Phone
                </span>

                <a
                  className="contact-value"
                  href={`tel:${cv.phone.replace(
                    /\s/g,
                    ""
                  )}`}
                  dir="ltr"
                >
                  {cv.phone}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">
                  {t.targetRole}
                </span>

                <span
                  className="contact-value"
                  dir="ltr"
                >
                  {
                    cv.secondaryTitle
                  }
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-label">
                  {t.coreFocus}
                </span>

                <span
                  className="contact-value"
                  dir="ltr"
                >
                  AWS · Linux · IaC · CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <button
                className="footer-brand-button"
                onClick={() =>
                  go("home")
                }
              >
                <span className="footer-brand-mark">
                  {i.cloud}
                </span>

                <span>
                  <strong>
                    {cv.name}
                  </strong>

                  <small>
                    {cv.title}
                  </small>
                </span>
              </button>

              <p>
                {t.footerConnect}
              </p>

              <div className="footer-status">
                <span className="availability-dot" />

                <span>
                  {t.footerStatus}
                </span>
              </div>
            </div>

            <div className="footer-column">
              <span className="footer-heading">
                {t.footerExplore}
              </span>

              <button
                onClick={() =>
                  go("about")
                }
              >
                {t.about}
              </button>

              <button
                onClick={() =>
                  go("skills")
                }
              >
                {t.skills}
              </button>

              <button
                onClick={() =>
                  go("experience")
                }
              >
                {t.experience}
              </button>

              <button
                onClick={() =>
                  go("project")
                }
              >
                {t.project}
              </button>
            </div>

            <div className="footer-column">
              <span className="footer-heading">
                {t.footerContact}
              </span>

              <a
                href={`mailto:${cv.email}`}
                dir="ltr"
              >
                {cv.email}
              </a>

              <a
                href={`tel:${cv.phone.replace(
                  /\s/g,
                  ""
                )}`}
                dir="ltr"
              >
                {cv.phone}
              </a>

              <button
                onClick={() =>
                  go("contact")
                }
              >
                {t.contact}
              </button>
            </div>

            <div className="footer-column">
              <span className="footer-heading">
                {t.footerSocial}
              </span>

              <a
                href={cv.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                <span>
                  {i.linkedin}
                </span>

                <span>
                  LinkedIn
                </span>
              </a>

              <a
                href={cv.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                <span>
                  {i.github}
                </span>

                <span>
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              ©{" "}
              {new Date().getFullYear()}{" "}
              {cv.name}.{" "}
              {t.footerCopyright}
            </span>

            <span
              dir="ltr"
              className="footer-stack"
            >
              Cloud & DevOps · AWS · Linux ·
              Networking · IaC
            </span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          CERTIFICATE LIGHTBOX
          ===================================================== */}

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() =>
            setSelectedCertificate(
              null
            )
          }
        >
          <button
            type="button"
            className="certificate-modal-close"
            onClick={() =>
              setSelectedCertificate(
                null
              )
            }
            aria-label="Close certificate preview"
          >
            ×
          </button>

          <div
            className="certificate-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
            style={{
              width:
                "min(94vw, 1500px)",
              height:
                "min(92vh, 1000px)",
              display: "flex",
              alignItems:
                "center",
              justifyContent:
                "center",
            }}
          >
            <img
              className="certificate-modal-image"
              src={
                selectedCertificate
              }
              alt="Certificate enlarged preview"
              style={{
                maxWidth:
                  "100%",
                maxHeight:
                  "100%",
                width: "auto",
                height: "auto",
                objectFit:
                  "contain",
              }}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          PROJECT IMAGE LIGHTBOX
          ===================================================== */}

      {selectedProjectImage && (
        <div
          className="certificate-modal project-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() =>
            setSelectedProjectImage(
              null
            )
          }
        >
          <button
            type="button"
            className="certificate-modal-close"
            onClick={() =>
              setSelectedProjectImage(
                null
              )
            }
            aria-label="Close project image preview"
          >
            ×
          </button>

          <div
            className="certificate-modal-content project-image-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={
                selectedProjectImage
              }
              alt={
                isArabic
                  ? cv.project.imageAltAr
                  : cv.project.imageAlt
              }
              className="project-image-modal-image"
            />
          </div>
        </div>
      )}


    </main>
  );
}