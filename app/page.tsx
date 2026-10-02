"use client";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

const cv = {
  name: "Mohamed Gamal",
  logo:
    "https://res.cloudinary.com/dcxgjpps8/image/upload/v1790780215/WhatsApp_Image_2026-09-30_at_5.53.55_PM-removebg-preview_yozeg9.png",
  phone: "+20 1553194093",
  email: "mohamed987gamal2005@gmail.com",
  linkedin:
    "https://linkedin.com/in/mohamed-gamal-devops",
  github:
    "https://github.com/mohamedgamal-35",
  location: "Egypt",
  locationAr: "مصر",
  freelanceLinks: [
    {
      name: "Khamsat",
      nameAr: "خمسات",
      url: "https://khamsat.com/user/mohamed_gamal35",
      logo:
        "https://www.google.com/s2/favicons?domain=khamsat.com&sz=128",
      mark: "5",
      description: "Freelance profile on Khamsat.",
      descriptionAr: "الملف الشخصي على خمسات.",
    },
    {
      name: "Mostaql",
      nameAr: "مستقل",
      url: "https://mostaql.com/u/Mohamedd_Gamal",
      logo:
        "https://www.google.com/s2/favicons?domain=mostaql.com&sz=128",
      mark: "M",
      description: "Mostaql freelance account.",
      descriptionAr: "حساب العمل الحر على مستقل.",
    },
    {
      name: "Nafezly",
      nameAr: "نفذلي",
      url: "https://nafezly.com/u/Mohamed_Gamal01",
      logo:
        "https://www.google.com/s2/favicons?domain=nafezly.com&sz=128",
      mark: "N",
      description: "Freelance profile on Nafezly.",
      descriptionAr: "الملف الشخصي على نفذلي.",
    },
    {
      name: "Kafiil",
      nameAr: "كفيل",
      url: "https://kafiil.com/u/Mohamedgamal013",
      logo:
        "https://www.google.com/s2/favicons?domain=kafiil.com&sz=128",
      mark: "K",
      description: "Freelance profile on Kafiil.",
      descriptionAr: "الملف الشخصي على كفيل.",
    },
    {
      name: "Freelanceyard",
      nameAr: "Freelanceyard",
      url: "https://freelanceyard.com/ar/freelancers/mohamed-gamal-87",
      logo: "https://freelanceyard.com/images/favicon.png",
      mark: "FY",
      description: "Freelance profile on Freelanceyard.",
      descriptionAr: "الملف الشخصي على Freelanceyard.",
    },
    {
      name: "Upwork",
      nameAr: "Upwork",
      url: "https://www.upwork.com/freelancers/~0118cb90c5c257edb1/modal-hourly-rate-set?pageTitle=Change%20hourly%20rate&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Change%20hourly%20rate%22,%22modalId%22%3A%221790708835711%22%7D%5D",
      logo:
        "https://www.google.com/s2/favicons?domain=upwork.com&sz=128",
      mark: "U",
      description: "Freelance profile on Upwork.",
      descriptionAr: "الملف الشخصي على Upwork.",
    },
  ],
  title: "Cloud & DevOps Engineer",
  secondaryTitle: "Cloud Infrastructure / DevOps Intern",
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
    period: "Sep. 2023 – Expected July 2027",
    graduation: "Expected Graduation: July 2027",
    summary:
      "Academic background in Computer Science with an Information Technology specialization, alongside continuous practical development in Cloud and DevOps.",
    universityLogo:
      "https://melc.menofia.edu.eg/student_activities_survey/assets/logo.png",
    universityLogoAlt: "Menoufia University logo",
    facultyLogo:
      "https://www.alrichd.com/wp-content/uploads/2024/03/1650197644tQmi1XCP3R.png",
    facultyLogoAlt:
      "Faculty of Computers & Information, Menoufia University logo",
    facultyUrl: "https://mu.menofia.edu.eg/FCI/Home/en",
  },
  educationAr: {
    school: "جامعة المنوفية",
    degree: "بكالوريوس علوم الحاسب",
    specialization: "تكنولوجيا المعلومات",
    period: "سبتمبر 2023 – متوقع التخرج يوليو 2027",
    graduation: "متوقع التخرج: يوليو 2027",
    summary:
      "دراسة أكاديمية في علوم الحاسب مع تخصص تكنولوجيا المعلومات، بالتوازي مع تطوير مهارات Cloud وDevOps بشكل عملي.",
  },
  languages: ["Arabic — Native", "English — Very Good"],
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
      roleAr: "متدرب Cloud Computing (AWS)",
      company: "National Telecommunication Institute (NTI)",
      logo: "https://commons.wikimedia.org/wiki/Special:FilePath/NTI%20Logo%20Tagline%20RGB.png",
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
      roleAr: "متدرب في مسار DevOps",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      logo: "https://tse3.mm.bing.net/th/id/OIP.Hp_gIm0AmgMhb2Jx1C4f3QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    name: "AWS Enterprise Cloud Infrastructure",
    projectLabel: "Scalable & Secure Multi-AZ Architecture",
    projectLabelAr: "بنية Multi-AZ قابلة للتوسع وآمنة",
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
    image: "/2.jpeg",
    imageAlt: "AWS Enterprise Cloud Infrastructure architecture overview",
    imageAltAr: "صورة توضح بنية مشروع AWS Enterprise Cloud Infrastructure",
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
      titleAr: "Networking & Security",
      description:
        "Configuring VPCs, subnets, route tables, security groups, and controlled cloud network access.",
      descriptionAr:
        "إعداد VPCs وSubnets وRoute Tables وSecurity Groups والتحكم في الوصول إلى الـCloud Network.",
      icon: "network",
    },
  ],
  testimonials: [
    {
      name: "Fatma Mohamed",
      role: "Teaching Assistant at BFCAI",
      roleAr: "Teaching Assistant at BFCAI",
      connection: "2nd-degree connection",
      connectionAr: "اتصال من الدرجة الثانية",
      date: "September 29, 2026",
      dateAr: "29 سبتمبر 2026",
      quote:
        "I had the pleasure of teaching Mohamed during the HCIA Cloud Computing V5 course at NTI. He was dedicated, attentive, and showed a strong interest in Cloud Computing throughout the training. I appreciated his commitment to learning and his active engagement during the course.\n\nI’m happy to recommend Mohamed and wish him all the best in his Cloud Computing career.",
      quoteAr:
        "I had the pleasure of teaching Mohamed during the HCIA Cloud Computing V5 course at NTI. He was dedicated, attentive, and showed a strong interest in Cloud Computing throughout the training. I appreciated his commitment to learning and his active engagement during the course.\n\nI’m happy to recommend Mohamed and wish him all the best in his Cloud Computing career.",
      profileUrl: "https://www.linkedin.com/in/fatma-mohamed-049405208/",
      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },
    {
      name: "Ahmed Abd Elhamid",
      role: "Cloud DevOps Accelerator | 2x AWS | 1x KCNA | 1x GHAS | NTI Cloud DevOps Accelerator Graduate |",
      roleAr:
        "Cloud DevOps Accelerator | 2x AWS | 1x KCNA | 1x GHAS | NTI Cloud DevOps Accelerator Graduate |",
      connection: "2nd-degree connection",
      connectionAr: "اتصال من الدرجة الثانية",
      date: "September 28, 2026",
      dateAr: "28 سبتمبر 2026",
      quote:
        "It is my pleasure to recommend Mohamed, whom I had the opportunity to teach during an AWS Cloud course. He demonstrated strong technical aptitude, a genuine passion for cloud technologies, and a great commitment to learning. His professionalism, positive attitude, and willingness to grow truly stood out. I highly recommend Mohamed and am confident he will excel in his cloud role. Wishing you all the best, Mohamed, and continued success in your journey!",
      quoteAr:
        "It is my pleasure to recommend Mohamed, whom I had the opportunity to teach during an AWS Cloud course. He demonstrated strong technical aptitude, a genuine passion for cloud technologies, and a great commitment to learning. His professionalism, positive attitude, and willingness to grow truly stood out. I highly recommend Mohamed and am confident he will excel in his cloud role. Wishing you all the best, Mohamed, and continued success in your journey!",
      profileUrl: "https://www.linkedin.com/in/a7md-3bdelhamid/",
      source: "LinkedIn",
      sourceAr: "LinkedIn",
    },
  ],
 certifications: [
  // =========================
  // NTI
  // =========================
  {
    name: "Cloud Services Management and Operation",
    provider: "NTI",
    date: "",
    topics: [
      "Cloud Services",
      "Infrastructure Operations",
      "Cloud Management",
    ],
    image: "/certificates/Screenshot 2026-09-14 203745.png",
  },
  {
    name: "Linux Red Hat Administration",
    provider: "NTI",
    date: "",
    topics: [
      "Linux",
      "Red Hat",
      "System Administration",
    ],
    image: "/certificates/Screenshot 2026-09-14 203713.png",
  },

  // =========================
  // AWS Academy
  // =========================
  {
    name: "AWS Academy Graduate - Cloud Architecting",
    provider: "AWS Academy",
    date: "",
    topics: [
      "AWS",
      "Cloud Architecture",
      "Infrastructure Design",
    ],
    image: "/certificates/Screenshot 2026-09-14 203815.png",
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations",
    provider: "AWS Academy",
    date: "",
    topics: [
      "AWS",
      "Cloud Fundamentals",
      "Core Cloud Concepts",
    ],
    image: "/certificates/Screenshot 2026-09-14 203847.png",
  },

  // =========================
  // Red Hat
  // =========================
  {
    name: "Red Hat System Administration II (RH134 - RHA) - Ver. 10",
    provider: "Red Hat",
    date: "2026-10-02",
    topics: [
      "Linux",
      "Red Hat",
      "System Administration",
      "RHEL",
    ],
    image: "/certificates/Screenshot 2026-10-02 160435.png",
  },
  {
    name: "Red Hat System Administration",
    provider: "Red Hat",
    date: "",
    topics: [
      "Linux",
      "System Administration",
      "Red Hat",
    ],
    image: "/certificates/Screenshot 2026-09-14 203632.png",
  },

  // =========================
  // Huawei ICT Academy
  // =========================
  {
    name: "HCIA-Cloud Computing V5.5 Course",
    provider: "Huawei ICT Academy",
    date: "2026-09-21",
    topics: [
      "Huawei Cloud",
      "Cloud Computing",
      "Cloud Architecture",
      "Cloud Services",
    ],
    image: "/certificates/Screenshot 2026-10-02 160450.png",
  },
  {
    name: "HCIA-Cloud Service V3.5 Course",
    provider: "Huawei ICT Academy",
    date: "2026-08-27",
    topics: [
      "Huawei Cloud",
      "Cloud Services",
      "Cloud Computing",
      "Cloud Architecture",
    ],
    image: "/certificates/Screenshot 2026-09-15 200432.png",
  },
  {
    name: "General Knowledge of Cloud Computing",
    provider: "Huawei ICT Academy",
    date: "2026-08-28",
    topics: [
      "Cloud Computing",
      "Cloud Fundamentals",
      "Core Cloud Concepts",
    ],
    image: "/certificates/Screenshot 2026-09-15 200419.png",
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
    { en: "Problem Solving", ar: "حل المشكلات" },
    { en: "Communication", ar: "التواصل" },
    { en: "Teamwork", ar: "العمل الجماعي" },
    { en: "Responsibility", ar: "تحمل المسؤولية" },
    { en: "Time Management", ar: "إدارة الوقت" },
  ],
};

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

function PlatformLogo({
  src,
  mark,
  name,
}: {
  src: string;
  mark: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="freelance-logo" aria-hidden="true">
      {!failed ? (
        <img
          src={src}
          alt=""
          width={22}
          height={22}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="freelance-logo-fallback">{mark}</span>
      )}
      <span className="sr-only">{name}</span>
    </span>
  );
}

const skillLogoSlugs: Record<string, string> = {
  AWS: "aws",
  "Huawei Cloud": "huaweicloud",
  "Serverless Architecture": "serverless",
  Linux: "linux",
  "Amazon RDS": "amazonrds",
  Terraform: "terraform",
  Ansible: "ansible",
  "GitHub Actions": "githubactions",
  GitLab: "gitlab",
  Docker: "docker",
};

function SkillLogo({ label, slug }: { label: string; slug?: string }) {
  const [failed, setFailed] = useState(false);

  const mark =
    label.trim().replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() ||
    "•";

  return (
    <span className="skill-logo-mini" aria-hidden="true">
      {slug && !failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{mark}</span>
      )}
    </span>
  );
}

function EducationLogo({
  src,
  alt,
  mark,
}: {
  src: string;
  alt: string;
  mark: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="education-logo" aria-hidden={failed}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={56}
          height={56}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="education-logo-fallback">{mark}</span>
      )}
    </span>
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

  phone: (
    <Icon>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  ),

  whatsapp: (
    <Icon>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
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
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
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
      <rect x="3" y="3.5" width="18" height="6.5" rx="2" />
      <rect x="3" y="14" width="18" height="6.5" rx="2" />
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
      <ellipse cx="12" cy="5" rx="7" ry="2.8" />
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
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [selectedCertificate, setSelectedCertificate] = useState<
    string | null
  >(null);
  const [selectedProjectImage, setSelectedProjectImage] = useState<
    string | null
  >(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingExit, setOnboardingExit] = useState(false);
  const [onboardingReady, setOnboardingReady] = useState(false);

  const isArabic = language === "ar";

  const t = {
    home: isArabic ? "الرئيسية" : "Home",
    about: isArabic ? "نبذة عني" : "About",
    education: isArabic ? "التعليم" : "Education",
    certification: isArabic ? "الشهادات" : "Certifications",
    skills: isArabic ? "المهارات" : "Skills",
    experience: isArabic ? "الخبرة" : "Experience",
    project: isArabic ? "المشروع" : "Project",
    services: isArabic ? "الخدمات" : "Services",
    achievements: isArabic ? "الإنجازات" : "Achievements",
    testimonials: isArabic ? "الآراء" : "Testimonials",
    contact: isArabic ? "تواصل" : "Contact",
    openToOpportunities: isArabic ? "متاح للفرص" : "Open to opportunities",
    letsConnect: isArabic ? "لنتواصل" : "Let's connect",
    whoAmI: isArabic ? "من أنا؟" : "Who am I?",
    cloudInfrastructureDevops: "Cloud Infrastructure / DevOps",
    exploreArchitecture: isArabic
      ? "استكشف الـArchitecture"
      : "Explore architecture",
    contactMe: isArabic ? "تواصل معي" : "Contact me",
    downloadCv: isArabic ? "تحميل CV" : "Download CV",
    viewLinkedin: "LinkedIn",
    viewGithub: "GitHub",
    cloudFirst: isArabic ? "Cloud أولًا." : "Cloud first.",
    systemsMinded: isArabic
      ? "بعقلية هندسية للأنظمة."
      : "Systems minded.",
    engineeringProfile: isArabic
      ? "الملف الهندسي"
      : "Engineering profile",
    profileHeading: isArabic
      ? "أحب أفهم الأنظمة من الداخل وأبني Infrastructure يعتمد عليها."
      : "I like understanding systems from the inside and building infrastructure people can rely on.",
    aboutMeLabel: isArabic ? "عن نفسي" : "A little about me",
    awsServicesApplied: isArabic ? "خدمات AWS مطبقة" : "AWS services applied",
    trainingTracks: isArabic ? "مسارات تدريبية" : "Training tracks",
    expectedGraduation: isArabic
      ? "التخرج المتوقع"
      : "Expected graduation",
    educationTitle: isArabic
      ? "بكالوريوس علوم الحاسب."
      : "Bachelor of Computer Science.",
    educationNote: isArabic
      ? "الخلفية الأكاديمية والتخصص الحالي مع توضيح موعد التخرج."
      : "Academic background, specialization, and current graduation timeline.",
    languages: isArabic ? "اللغات" : "Languages",
    academicFocus: isArabic ? "التخصص الأكاديمي" : "Academic specialization",
    certificationTitle: isArabic
      ? "تدريب وشهادات Cloud."
      : "Cloud certifications & training.",
    certificationNote: isArabic
      ? "الشهادات والتدريبات المرتبطة بالـCloud والـInfrastructure."
      : "Formal cloud and infrastructure training.",
    skillsTitle: isArabic
      ? "التقنيات خلف الـInfrastructure."
      : "The tools behind the infrastructure.",
    skillsNote: isArabic
      ? "المهارات الأساسية مرتبة بشكل أوضح بين Technical Skills وSoft Skills."
      : "Core capabilities organized across technical and soft skills.",
    capabilityMap: isArabic ? "خريطة المهارات" : "Capability map",
    capabilityNote: isArabic
      ? "مجموعة المهارات العملية المستخدمة في مسار Cloud وDevOps."
      : "A practical map of the capabilities behind my Cloud / DevOps path.",
    primaryFocus: isArabic ? "التركيز الأساسي" : "PRIMARY FOCUS",
    awsCloudInfrastructure: "AWS Cloud Infrastructure",
    technicalSkills: isArabic ? "المهارات التقنية" : "Technical skills",
    technicalSkillsNote: isArabic
      ? "الأدوات والتقنيات التي أبني بها الـCloud Infrastructure والـDevOps workflows."
      : "Tools and technologies used to build cloud infrastructure and DevOps workflows.",
    softSkills: isArabic ? "المهارات الشخصية" : "Soft skills",
    softSkillsNote: isArabic
      ? "مهارات تساعدني على التعلم والتعاون والتعامل مع مشاكل الـInfrastructure بشكل عملي."
      : "The working habits and interpersonal skills that support technical growth and teamwork.",
    practicalMindset: isArabic ? "Practical mindset" : "Practical mindset",
    practicalMindsetNote: isArabic
      ? "بناء، تجربة، حل المشكلة، ثم تحسين الحل."
      : "Build it, test it, solve the issue, then improve the solution.",
    experienceTitle: isArabic
      ? "خبرة مبنية على التطبيق."
      : "Experience built through practice.",
    experienceNote: isArabic
      ? "كل تجربة موضحة من التحدي إلى التنفيذ والنتيجة."
      : "Each experience is presented through challenge, action, and result.",
    challenge: isArabic ? "التحدي" : "Challenge",
    action: isArabic ? "التنفيذ" : "Action",
    result: isArabic ? "النتيجة" : "Result",
    record: isArabic ? "السجل" : "Record",
    position: isArabic ? "المنصب" : "Position",
    responsibilities: isArabic ? "المسؤوليات" : "Responsibilities",
    featuredProject: isArabic ? "المشروع المميز" : "Featured project",
    architectureStory: isArabic
      ? "Architecture واضحة."
      : "A clear architecture story.",
    projectNote: isArabic
      ? "مشروع Infrastructure معروض بشكل مختصر وواضح."
      : "A focused infrastructure case study.",
    scalableArchitecture: isArabic
      ? cv.project.projectLabelAr
      : cv.project.projectLabel,
    topology: isArabic ? "Cloud Topology" : "Cloud topology",
    actualProjectElements: isArabic
      ? "العناصر الأساسية للمشروع"
      : "Core architecture elements",
    cloudEnvironment: isArabic ? "AWS Environment" : "AWS environment",
    cloudBoundary: isArabic
      ? "حدود الـCloud Infrastructure"
      : "Cloud infrastructure boundary",
    applicationCompute: isArabic
      ? "Application Compute"
      : "Application compute",
    subnetsRouteTables: "Public + Private + Isolated Subnets",
    controlledAccess: isArabic
      ? "Controlled Access"
      : "Controlled access",
    cloudStorage: isArabic
      ? "Shared Storage & Data Layer"
      : "Shared storage & data layer",
    compute: isArabic ? "حوسبة" : "COMPUTE",
    network: isArabic ? "شبكة" : "NETWORK",
    storage: isArabic ? "تخزين" : "STORAGE",
    projectImage: isArabic ? "صورة المشروع" : "Project preview",
    projectImageNote: isArabic
      ? "لمحة بصرية سريعة عن الـCloud Architecture."
      : "A quick visual overview of the architecture.",
    viewProjectImage: isArabic ? "تكبير الصورة" : "Click to enlarge",
    servicesTitle: isArabic
      ? "مجالات الـInfrastructure التي أعمل عليها."
      : "Infrastructure I work with.",
    servicesNote: isArabic
      ? "AWS وDevOps وLinux والشبكات والأتمتة."
      : "AWS, DevOps, Linux, networking, automation, and deployment.",
    achievementsTitle: isArabic
      ? "محطات واضحة في المسار."
      : "Clear milestones in the path.",
    achievementsNote: isArabic
      ? "مؤشرات مبنية على الخبرة التدريبية والأكاديمية الحالية."
      : "Current academic and training milestones.",
    testimonialsTitle: isArabic
      ? "توصيات مهنية حقيقية."
      : "Professional recommendations.",
    testimonialsNote: isArabic
      ? "توصيات LinkedIn من أشخاص قاموا بتدريس Mohamed خلال تدريبات Cloud."
      : "LinkedIn recommendations from instructors who taught Mohamed during Cloud training.",
    viewRecommendation: isArabic ? "عرض الملف" : "View profile",
    recommendationLabel: isArabic ? "توصية /" : "RECOMMENDATION /",
    contactTitle: isArabic ? "جاهز للخطوة التالية." : "Ready for the next step.",
    contactNote: isArabic
      ? "متاح لفرص Cloud وDevOps المرتبطة بالـAWS والـInfrastructure."
      : "Open to Cloud and DevOps opportunities around AWS and infrastructure.",
    openToOpportunitiesAgain: isArabic
      ? "متاح للفرص"
      : "Open to opportunities",
    letsBuild: isArabic
      ? "لنبنِ Infrastructure موثوقة."
      : "Let's build reliable infrastructure.",
    contactDescription: isArabic
      ? "للتدريب أو النقاشات التقنية أو الفرص المتعلقة بالـCloud Infrastructure وDevOps."
      : "For internships, technical conversations, or opportunities around cloud infrastructure and DevOps.",
    sendEmail: isArabic ? "إرسال Email" : "Send email",
    copyEmail: isArabic ? "نسخ Email" : "Copy email",
    freelancePlatforms: isArabic
      ? "منصات العمل الحر"
      : "Freelance platforms",
    freelancePlatformsNote: isArabic
      ? "كل روابط العمل الحر في مكان واحد، مع الوصول المباشر لكل ملف."
      : "All freelance profiles in one place, with direct access to each profile.",
    visitProfile: isArabic ? "زيارة الملف" : "Visit profile",
    copied: isArabic ? "تم النسخ" : "Copied",
    targetRole: isArabic ? "الدور المستهدف" : "Target role",
    coreFocus: isArabic ? "التركيز الأساسي" : "Core focus",
    langSwitch: isArabic ? "EN" : "AR",
    skillsTopics: isArabic ? "Skills / Topics" : "Skills / Topics",
    provider: isArabic ? "Provider" : "Provider",
    training: isArabic ? "Training" : "Training",
    footerStatus: isArabic
      ? "متاح لفرص Cloud وDevOps"
      : "Open to Cloud & DevOps opportunities",
    footerConnect: isArabic
      ? "أنا دايمًا منفتح للنقاش حول فرص Cloud وDevOps، والعمل الحر، والتعاون في مشاريع Infrastructure."
      : "I'm always open to discussing Cloud & DevOps opportunities, freelance work, and collaborations on infrastructure projects.",
    footerAbout: isArabic ? (
      <>
        أنا <strong>Mohamed Gamal</strong>، Cloud &amp; DevOps Engineer أركز على
        تحويل الـDeployments اليدوية إلى Pipelines مؤتمتة وموثوقة باستخدام AWS
        وLinux والـInfrastructure as Code.
      </>
    ) : (
      <>
        I&apos;m <strong>Mohamed Gamal</strong>, a Cloud &amp; DevOps Engineer
        focused on turning manual deployments into automated, reliable
        pipelines using AWS, Linux, and Infrastructure as Code.
      </>
    ),
    footerExplore: isArabic ? "استكشف" : "Explore",
    footerContact: isArabic ? "تواصل" : "Contact",
    footerSocial: isArabic ? "روابط" : "Links",
    footerCopyright: isArabic ? "جميع الحقوق محفوظة." : "All rights reserved.",
    footerBuiltWith: isArabic
      ? "مبني بـ Next.js وTypeScript"
      : "Built with Next.js & TypeScript",
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
    const storageKey = "mohamed-gamal-portfolio-onboarding-v1";
    let seen = false;

    try {
      seen = window.sessionStorage.getItem(storageKey) === "seen";
    } catch {}

    if (seen) return;

    setShowOnboarding(true);

    const startTimer = window.setTimeout(
      () => setOnboardingReady(true),
      80
    );

    const exitTimer = window.setTimeout(
      () => setOnboardingExit(true),
      2900
    );

    const finishTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(storageKey, "seen");
      } catch {}

      setShowOnboarding(false);
      setOnboardingExit(false);
      setOnboardingReady(false);
    }, 3650);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = nav.map(([id]) => id);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -58% 0px",
        threshold: [0.05, 0.12, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [nav]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
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

    window.addEventListener("keydown", onKeyDown);

    return () =>
      window.removeEventListener("keydown", onKeyDown);
  }, [selectedCertificate, selectedProjectImage]);

  useEffect(() => {
    document.body.style.overflow =
      menu ||
      selectedCertificate ||
      selectedProjectImage ||
      showOnboarding
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    menu,
    selectedCertificate,
    selectedProjectImage,
    showOnboarding,
  ]);

  const go = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navOffset = 100;
    const top =
      element.getBoundingClientRect().top +
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
      await navigator.clipboard.writeText(cv.email);

      setCopied(true);

      window.setTimeout(
        () => setCopied(false),
        1600
      );
    } catch {}
  };

  return (
    <main
      className={`site ${
        lightMode ? "light" : "dark"
      } ${isArabic ? "rtl" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {showOnboarding && (
        <div
          className={`onboarding-overlay ${
            onboardingReady ? "is-ready" : ""
          } ${
            onboardingExit ? "is-exiting" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mohamed Gamal portfolio introduction"
        >
          <div className="onboarding-backdrop" />
          <div className="onboarding-grid-glow" />

          <section className="onboarding-content">
            <div className="onboarding-logo-wrap">
              <div className="onboarding-logo-ring" />

              <img
                src={cv.logo}
                alt=""
                className="onboarding-logo"
                width={360}
                height={112}
                decoding="async"
              />
            </div>

            <div
              className="onboarding-name"
              aria-label={cv.name}
            >
              <span>MOHAMED</span>
              <span>GAMAL</span>
            </div>

            <div className="onboarding-divider">
              <span />
            </div>

            <p
              className="onboarding-title"
              dir="ltr"
            >
              CLOUD &amp; DEVOPS ENGINEER
            </p>

            <p
              className="onboarding-focus"
              dir="ltr"
            >
              Cloud Infrastructure · Automation · Reliability
            </p>

            <div
              className="onboarding-progress"
              aria-hidden="true"
            >
              <span />
            </div>
          </section>
        </div>
      )}

      {/* NAV */}
    <header
  className={`topbar ${scrolled ? "is-scrolled" : ""}`}
>
        <div className="topbar-inner">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go to home"
          >
            <span className="brand-logo-shell">
              <img
                src={cv.logo}
                alt=""
                className="brand-logo-image"
                width={240}
                height={72}
                decoding="async"
                fetchPriority="high"
              />
            </span>

            <span className="sr-only">
              {cv.name} — {cv.title}
            </span>
          </button>

          <div className="nav-center">
            <nav
              className="nav-links"
              aria-label="Main navigation"
            >
              {nav.map(([id, label]) => {
                const isContact = id === "contact";

                return (
                  <button
                    key={id}
                    className={[
                      active === id ? "active" : "",
                      isContact ? "nav-contact" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => go(id)}
                    aria-current={
                      active === id
                        ? "page"
                        : undefined
                    }
                  >
                    <span>{label}</span>

                    {isContact ? (
                      <span className="nav-contact-icon">
                        {i.contact}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="nav-tools">
            <span className="availability">
              <span className="availability-dot" />
              {t.openToOpportunities}
            </span>

            <button
              className="language-button"
              onClick={() =>
                setLanguage((c) =>
                  c === "en" ? "ar" : "en"
                )
              }
              aria-label="Change language"
            >
              {t.langSwitch}
            </button>

            <button
              className="theme-button"
              onClick={() =>
                setLightMode((v) => !v)
              }
              aria-label={
                lightMode
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <span className="theme-glow" />

              <span className="theme-icon">
                {lightMode ? i.sun : i.light}
              </span>
            </button>

            <button
              className="menu-btn"
              onClick={() =>
                setMenu((v) => !v)
              }
              aria-label="Toggle navigation"
              aria-expanded={menu}
            >
              {menu ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menu && (
        <div
          className="mobile-menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMenu(false);
            }
          }}
        >
          <div className="mobile-menu-inner">
            {nav.map(([id, label]) => {
              const isContact = id === "contact";

              return (
                <button
                  key={id}
                  className={[
                    active === id ? "active" : "",
                    isContact
                      ? "nav-contact mobile-nav-contact"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => go(id)}
                >
                  <span>{label}</span>

                  {isContact ? (
                    <span className="nav-contact-icon">
                      {i.contact}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* HOME — REDESIGNED HERO */}
      <section
        id="home"
        className="container hero hero-compact"
      >
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {t.cloudInfrastructureDevops}
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
              onClick={() => go("project")}
            >
              {t.exploreArchitecture}
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

        <div className="hero-art">
          <div
            className="hero-portrait-stage"
            style={{
              width: "min(340px, 78vw)",
              aspectRatio: "1 / 1",
              position: "relative",
            }}
          >
            <div className="hero-portrait-glow" />
            <div className="hero-portrait-ring" />

            <div
              className="portrait"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                overflow: "hidden",
                clipPath:
                  "circle(50% at 50% 50%)",
                WebkitClipPath:
                  "circle(50% at 50% 50%)",
              }}
            >
              {!profileError ? (
                <img
                  src="/profile.jpg"
                  alt={`${cv.name} portrait`}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    borderRadius: "50%",
                    clipPath:
                      "circle(50% at 50% 50%)",
                    WebkitClipPath:
                      "circle(50% at 50% 50%)",
                  }}
                  onError={() =>
                    setProfileError(true)
                  }
                />
              ) : (
                <div
                  className="portrait-placeholder"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
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

            <strong>Cloud architecture</strong>

            <p dir="ltr">
              EC2 · S3 · VPC · RDS · Lambda · SQS
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
                <small>Source</small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.bolt}
                </span>
                <small>CI / CD</small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.cloud}
                </span>
                <small>Cloud</small>
              </div>

              <div className="pipe">
                <span className="pipe-icon">
                  {i.server}
                </span>
                <small>Deploy</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
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
                  {t.engineeringProfile}
                </div>

                <h3>{t.profileHeading}</h3>

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
                    {t.awsServicesApplied}
                  </span>
                </div>

                <div className="stat">
                  <strong>02</strong>
                  <span>{t.trainingTracks}</span>
                </div>

                <div className="stat">
                  <strong>2027</strong>
                  <span>
                    {t.expectedGraduation}
                  </span>
                </div>
              </div>
            </div>

            <div className="paper-card profile-side compact-side">
              <div className="side-block">
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

              <div className="side-block">
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

      {/* EDUCATION */}
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
                <div className="education-main-info">
                  <div className="education-institution-logos">
                    <a
                      href="https://www.menofia.edu.eg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-logo-link"
                      aria-label="Menoufia University"
                      title="Menoufia University"
                    >
                      <EducationLogo
                        src={
                          cv.education
                            .universityLogo
                        }
                        alt={
                          cv.education
                            .universityLogoAlt
                        }
                        mark="MU"
                      />
                    </a>

                    <span
                      className="education-logo-divider"
                      aria-hidden="true"
                    />

                    <a
                      href={
                        cv.education.facultyUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-logo-link"
                      aria-label="Faculty of Computers & Information"
                      title="Faculty of Computers & Information"
                    >
                      <EducationLogo
                        src={
                          cv.education
                            .facultyLogo
                        }
                        alt={
                          cv.education
                            .facultyLogoAlt
                        }
                        mark="FCI"
                      />
                    </a>
                  </div>

                  <div className="label-row education-label-row">
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
                      : cv.education
                          .specialization}
                  </div>
                </div>

                <div className="education-date">
                  <small>Graduation</small>

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
                    {t.academicFocus}
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

            <div className="paper-card profile-side compact-side">
              <div className="side-block">
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

              <div className="side-block">
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

      {/* CERTIFICATIONS */}
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
                {t.certificationTitle}
              </h2>
            </div>
          </div>

          <div className="credentials">
            {cv.certifications.map(
              (certificate, index) => (
                <article
                  className="credential"
                  key={certificate.name}
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
                        src={certificate.image}
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
                      {certificate.name}
                    </strong>

                    <div className="credential-meta">
                      {certificate.provider ? (
                        <span>
                          <small>
                            {t.provider}
                          </small>
                          {certificate.provider}
                        </span>
                      ) : null}

                      {certificate.date ? (
                        <span>
                          <small>
                            Date
                          </small>
                          {certificate.date}
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
                        {t.skillsTopics}
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
                      {String(index + 1).padStart(
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

      {/* SKILLS */}
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
                    {t.technicalSkillsNote}
                  </p>
                </div>

                <div className="skills-panel-icon">
                  {i.layers}
                </div>
              </div>

              <div className="technical-skills-grid">
                {Object.entries(cv.skills).map(
                  (
                    [category, items],
                    index
                  ) => {
                    const icon =
                      category.includes("Cloud")
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
                          {categoryDescription}
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
                                className={`chip skill-chip ${
                                  itemIndex === 0
                                    ? "main"
                                    : ""
                                }`}
                                dir="ltr"
                              >
                                <SkillLogo
                                  label={
                                    item
                                  }
                                  slug={
                                    skillLogoSlugs[
                                      item
                                    ]
                                  }
                                />

                                <span className="skill-chip-label">
                                  {item}
                                </span>
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

                    <h3>{t.softSkills}</h3>
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
                    (skill, index) => (
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
                          <SkillLogo
                            label={
                              skill.en
                            }
                          />

                          <span>
                            {isArabic
                              ? skill.ar
                              : skill.en}
                          </span>
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
                    {t.practicalMindsetNote}
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

      {/* EXPERIENCE */}
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
                {t.experienceTitle}
              </h2>
            </div>
          </div>

          <div className="experience">
            <div className="exp-head">
              <span>{t.record}</span>
              <span>{t.position}</span>
              <span>
                {t.responsibilities}
              </span>
            </div>

            {cv.experience.map(
              (exp, index) => (
                <article
                  className="exp-row"
                  key={exp.role}
                >
                  <div className="exp-id">
                    LOG /{" "}
                    {String(
                      index + 1
                    ).padStart(2, "0")}
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
                      src={exp.logo}
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
                      ).map((bullet) => (
                        <li key={bullet}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section
        id="project"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                06 / {t.featuredProject}
              </div>

              <h2 className="section-title">
                {isArabic
                  ? "مشروع واحد."
                  : "One project."}
                <br />
                {t.architectureStory}
              </h2>
            </div>
          </div>

          <article className="project">
            <div className="project-main">
              <div className="project-label">
                <span className="eyebrow-dot" />
                {t.scalableArchitecture}
              </div>

              <h3 className="project-title-compact">
                {cv.project.name}
              </h3>

              <p>
                {isArabic
                  ? cv.project
                      .descriptionAr
                  : cv.project.description}
              </p>

              <div className="project-story">
                <div className="story-block">
                  <small>
                    {t.challenge}
                  </small>

                  <p>
                    {isArabic
                      ? cv.project
                          .challengeAr
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
                ).map((point) => (
                  <div
                    className="point"
                    key={point}
                  >
                    <span className="check">
                      {i.check}
                    </span>

                    <span>{point}</span>
                  </div>
                ))}
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
                        {t.projectImage}
                      </strong>

                      <span>
                        {t.projectImageNote}
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
                        src={cv.project.image}
                        alt={
                          isArabic
                            ? cv.project
                                .imageAltAr
                            : cv.project
                                .imageAlt
                        }
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="project-image-zoom">
                        {t.viewProjectImage}
                      </span>
                    </div>
                  </button>
                </div>

                <div className="topology-head">
                  <div>
                    <h4>{t.topology}</h4>
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
                        {t.cloudBoundary}
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
                        {t.subnetsRouteTables}
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
                        {t.controlledAccess}
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
                        {t.cloudStorage}
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

      {/* SERVICES */}
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
              (service, index) => (
                <article
                  className="service-card"
                  key={service.title}
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
                    ).padStart(2, "0")}
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

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-code">
                08 / {t.achievements}
              </div>

              <h2 className="section-title">
                {t.achievementsTitle}
              </h2>
            </div>
          </div>

          <div className="achievements-grid">
            {cv.achievements.map(
              (achievement, index) => (
                <article
                  className="achievement"
                  key={achievement.title}
                >
                  <div className="achievement-number">
                    {achievement.number}
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
                    ).padStart(2, "0")}
                  </span>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="section section-tight"
      >
        <div className="container">
          <div className="section-head testimonial-section-head">
            <div>
              <div className="section-code">
                09 / {t.testimonials}
              </div>

              <h2 className="section-title">
                {t.testimonialsTitle}
              </h2>
            </div>
          </div>

          <div className="testimonials-grid testimonials-grid-compact recommendation-grid">
            {cv.testimonials.map(
              (testimonial, index) => (
                <article
                  className="testimonial testimonial-compact recommendation-card"
                  key={`${testimonial.name}-${index}`}
                >
                  <div className="testimonial-top recommendation-top">
                    <span className="testimonial-quote-icon">
                      {i.quote}
                    </span>

                    <span className="testimonial-index">
                      {t.recommendationLabel}{" "}
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="recommendation-author-block">
                    <strong dir="ltr">
                      {testimonial.name}
                    </strong>

                    <span
                      className="recommendation-role"
                      dir="ltr"
                    >
                      {isArabic
                        ? testimonial.roleAr
                        : testimonial.role}
                    </span>

                    <span
                      className="recommendation-meta"
                      dir="ltr"
                    >
                      {isArabic
                        ? testimonial.connectionAr
                        : testimonial.connection}

                      <span>•</span>

                      {isArabic
                        ? testimonial.dateAr
                        : testimonial.date}
                    </span>
                  </div>

                  <div className="testimonial-quote recommendation-quote">
                    {(isArabic
                      ? testimonial.quoteAr
                      : testimonial.quote
                    )
                      .split("\n\n")
                      .map(
                        (
                          paragraph,
                          paragraphIndex
                        ) => (
                          <p
                            key={
                              paragraphIndex
                            }
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                  </div>

                  <div className="testimonial-source recommendation-source">
                    <span className="testimonial-source-label">
                      {
                        testimonial.source
                      }
                    </span>

                    <a
                      href={
                        testimonial.profileUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="testimonial-post-link"
                      dir="ltr"
                    >
                      {
                        t.viewRecommendation
                      }
                      {i.external}
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
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

              <h3>{t.letsBuild}</h3>

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
              <a
                className="contact-item-card"
                href={`mailto:${cv.email}`}
                dir="ltr"
              >
                <div className="contact-icon-box">
                  {i.email}
                </div>

                <div className="contact-text-stack">
                  <span className="contact-label">
                    Email
                  </span>

                  <span className="contact-value">
                    {cv.email}
                  </span>
                </div>
              </a>

              <a
                className="contact-item-card"
                href={cv.linkedin}
                target="_blank"
                rel="noreferrer"
                dir="ltr"
              >
                <div className="contact-icon-box">
                  {i.linkedin}
                </div>

                <div className="contact-text-stack">
                  <span className="contact-label">
                    LinkedIn
                  </span>

                  <span className="contact-value">
                    linkedin.com/in/mohamed-gamal-devops
                  </span>
                </div>
              </a>

              {cv.github && (
                <a
                  className="contact-item-card"
                  href={cv.github}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                >
                  <div className="contact-icon-box">
                    {i.github}
                  </div>

                  <div className="contact-text-stack">
                    <span className="contact-label">
                      GitHub
                    </span>

                    <span className="contact-value">
                      {cv.github.replace(
                        /^https?:\/\//,
                        ""
                      )}
                    </span>
                  </div>
                </a>
              )}

              <a
                className="contact-item-card"
                href={`tel:${cv.phone.replace(
                  /\s/g,
                  ""
                )}`}
                dir="ltr"
              >
                <div className="contact-icon-box">
                  {i.phone}
                </div>

                <div className="contact-text-stack">
                  <span className="contact-label">
                    Phone
                  </span>

                  <span className="contact-value">
                    {cv.phone}
                  </span>
                </div>
              </a>

              <div
                className="contact-item-card"
                dir="ltr"
              >
                <div className="contact-icon-box">
                  {i.cloud}
                </div>

                <div className="contact-text-stack">
                  <span className="contact-label">
                    {t.coreFocus}
                  </span>

                  <span className="contact-value">
                    AWS · Linux · IaC · CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .onboarding-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 520ms cubic-bezier(.22,1,.36,1),
            visibility 520ms ease;
        }

        .onboarding-overlay.is-ready {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .onboarding-overlay.is-exiting {
          opacity: 0;
          pointer-events: none;
        }

        .onboarding-backdrop {
          position: absolute;
          inset: 0;
          background: ${lightMode
            ? "rgba(248,250,252,.965)"
            : "rgba(7,8,16,.985)"};
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .onboarding-grid-glow {
          position: absolute;
          width: min(62vw, 760px);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(167,131,255,.16) 0%,
              rgba(167,131,255,.05) 34%,
              transparent 70%
            );
          filter: blur(7px);
          transform: scale(.72);
          opacity: 0;
          transition:
            transform 1200ms cubic-bezier(.16,1,.3,1),
            opacity 900ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-grid-glow {
          transform: scale(1);
          opacity: 1;
        }

        .onboarding-content {
          position: relative;
          z-index: 2;
          width: min(92vw, 760px);
          padding: 44px 28px 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transform: translateY(24px) scale(.94);
          opacity: 0;
          filter: blur(7px);
          transition:
            transform 900ms cubic-bezier(.16,1,.3,1),
            opacity 720ms ease,
            filter 720ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-content {
          transform: none;
          opacity: 1;
          filter: none;
        }

        .onboarding-overlay.is-exiting
          .onboarding-content {
          transform:
            translateY(-16px)
            scale(1.045);
          opacity: 0;
          filter: blur(6px);
          transition-duration: 470ms;
        }

        .onboarding-logo-wrap {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 108px;
          margin-bottom: 24px;
          transform:
            translateY(12px)
            scale(.8);
          opacity: 0;
          transition:
            transform 900ms 70ms cubic-bezier(.16,1,.3,1),
            opacity 600ms 70ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-logo-wrap {
          transform: none;
          opacity: 1;
        }

        .onboarding-logo-ring {
          position: absolute;
          width: 150px;
          height: 150px;
          border: 1px solid
            ${lightMode
              ? "rgba(167,131,255,.18)"
              : "rgba(167,131,255,.21)"};
          border-radius: 50%;
          box-shadow:
            0 0 0 10px rgba(167,131,255,.025),
            0 0 54px rgba(167,131,255,.17);
          animation:
            onboarding-pulse 2.2s ease-in-out
            infinite;
        }

        .onboarding-logo {
          position: relative;
          z-index: 1;
          display: block;
          width: min(420px, 82vw);
          max-height: 132px;
          height: auto;
          object-fit: contain;
          filter:
            drop-shadow(
              0 14px 38px
              rgba(167,131,255,.17)
            );
        }

        .onboarding-name {
          display: flex;
          flex-direction: column;
          font-size:
            clamp(36px, 6.1vw, 74px);
          line-height: .96;
          font-weight: 900;
          letter-spacing: .16em;
          text-indent: .16em;
          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};
          overflow: hidden;
        }

        .onboarding-name span {
          display: block;
          transform: translateY(100%);
          opacity: 0;
          transition:
            transform 820ms cubic-bezier(.16,1,.3,1),
            opacity 560ms ease;
        }

        .onboarding-name
          span:first-child {
          transition-delay: 220ms;
        }

        .onboarding-name
          span:last-child {
          transition-delay: 310ms;
        }

        .onboarding-overlay.is-ready
          .onboarding-name span {
          transform: none;
          opacity: 1;
        }

        .onboarding-divider {
          width: min(280px, 52vw);
          height: 1px;
          margin: 22px 0 17px;
          overflow: hidden;
          background:
            ${lightMode
              ? "rgba(17,19,27,.10)"
              : "rgba(255,255,255,.10)"};
        }

        .onboarding-divider span {
          display: block;
          width: 100%;
          height: 100%;
          transform: translateX(-105%);
          background:
            linear-gradient(
              90deg,
              transparent,
              #A783FF,
              transparent
            );
          transition:
            transform 900ms 410ms cubic-bezier(.16,1,.3,1);
        }

        .onboarding-overlay.is-ready
          .onboarding-divider span {
          transform: translateX(105%);
        }

        .onboarding-title {
          margin: 0;
          font-size:
            clamp(12px, 1.8vw, 16px);
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: .24em;
          text-indent: .24em;
          color: #A783FF;
          transform: translateY(10px);
          opacity: 0;
          transition:
            transform 650ms 470ms cubic-bezier(.16,1,.3,1),
            opacity 520ms 470ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-title {
          transform: none;
          opacity: 1;
        }

        .onboarding-focus {
          margin: 11px 0 0;
          max-width: 520px;
          font-size: 10px;
          line-height: 1.45;
          letter-spacing: .13em;
          text-transform: uppercase;
          color:
            ${lightMode
              ? "rgba(17,19,27,.48)"
              : "rgba(255,255,255,.46)"};
          transform: translateY(8px);
          opacity: 0;
          transition:
            transform 650ms 560ms cubic-bezier(.16,1,.3,1),
            opacity 520ms 560ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-focus {
          transform: none;
          opacity: 1;
        }

        .onboarding-progress {
          position: relative;
          width: min(320px, 60vw);
          height: 2px;
          margin-top: 28px;
          border-radius: 999px;
          overflow: hidden;
          background:
            ${lightMode
              ? "rgba(17,19,27,.08)"
              : "rgba(255,255,255,.08)"};
          transform: scaleX(.35);
          opacity: 0;
          transition:
            transform 900ms 680ms cubic-bezier(.16,1,.3,1),
            opacity 520ms 680ms ease;
        }

        .onboarding-overlay.is-ready
          .onboarding-progress {
          transform: scaleX(1);
          opacity: 1;
        }

        .onboarding-progress span {
          display: block;
          width: 32%;
          height: 100%;
          border-radius: inherit;
          background:
            linear-gradient(
              90deg,
              transparent,
              #A783FF,
              #C1AAFF,
              transparent
            );
          animation:
            onboarding-scan 1.5s
            ease-in-out infinite;
        }

        /* =====================================================
           NAV — FIXED SIZE / NO SHRINK ON SCROLL
           ===================================================== */

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 120;

          /* ثابت — لا يتغير أثناء الـscroll */
          padding: 14px 18px;

          /* لا يوجد transition على أبعاد الـnavbar */
          transition: none;
        }

        .topbar-inner {
          position: relative;
          width: min(1900px, 100%);
          min-height: 74px;
          margin: 0 auto;
          padding: 0 12px 0 18px;

          display: grid;
          grid-template-columns:
            auto minmax(0, 1fr) auto;

          align-items: center;
          gap: 14px;

          border: 1px solid
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(255,255,255,.08)"};

          border-radius: 20px;

          background:
            ${lightMode
              ? "rgba(255,255,255,.84)"
              : "rgba(9,10,20,.70)"};

          box-shadow:
            0 16px 44px
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(0,0,0,.24)"};

          backdrop-filter:
            blur(20px) saturate(150%);

          -webkit-backdrop-filter:
            blur(20px) saturate(150%);

          overflow: visible;
        }

        /*
          مهم جدًا:
          الـscrolled هنا يغير اللون فقط.
          لا يغير padding
          ولا min-height
          ولا width
          وبالتالي الـnav لا يصغر أثناء النزول.
        */
        .topbar.scrolled .topbar-inner {
          border-color:
            ${lightMode
              ? "rgba(15,23,42,.11)"
              : "rgba(255,255,255,.11)"};

          background:
            ${lightMode
              ? "rgba(255,255,255,.92)"
              : "rgba(9,10,20,.88)"};
        }

        .brand {
          position: relative;
          min-width: 0;
          display: inline-flex;
          align-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          flex: 0 0 auto;
        }

        .brand-logo-shell {
          position: relative;
          display: inline-flex;
          align-items: center;

          width:
            clamp(170px, 13.5vw, 235px);

          height: 60px;

          overflow: hidden;
          border-radius: 12px;
          flex: 0 0 auto;
        }

        .brand-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: left center;
          transform: scale(1.12);
          transform-origin: left center;
          transition:
            transform 220ms ease,
            filter 220ms ease;
        }

        .brand:hover .brand-logo-image {
          transform:
            translateY(-1px)
            scale(1.135);

          filter:
            drop-shadow(
              0 7px 18px
              rgba(167,131,255,.20)
            );
        }

        .brand:focus-visible {
          outline:
            2px solid
            ${lightMode
              ? "rgba(167,131,255,.40)"
              : "rgba(167,131,255,.55)"};

          outline-offset: 5px;
          border-radius: 10px;
        }

        .nav-center {
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .nav-links {
          width: 100%;
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 1px;
          overflow: visible;

          scrollbar-width: none;
        }

        .nav-links::-webkit-scrollbar {
          display: none;
        }

        .nav-links button {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          min-height: 44px;
          min-width: 0;

          flex: 1 1 auto;

          padding:
            10px clamp(3px, .42vw, 8px);

          border: 0;
          border-radius: 11px;

          background: transparent;

          color:
            ${lightMode
              ? "rgba(15,23,42,.66)"
              : "rgba(255,255,255,.68)"};

          font: inherit;

          font-size:
            clamp(
              11.5px,
              .78vw,
              14px
            );

          font-weight: 750;

          letter-spacing: -.018em;

          line-height: 1.15;

          white-space: nowrap;
          cursor: pointer;

          transition:
            color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .nav-links button span:first-child {
          min-width: 0;
        }

        .nav-links button::after {
          content: "";

          position: absolute;

          left: 10px;
          right: 10px;
          bottom: 4px;

          height: 1px;

          border-radius: 999px;

          background: #A783FF;

          transform: scaleX(0);

          transition:
            transform 180ms ease;
        }

        .nav-links button:hover {
          color:
            ${lightMode
              ? "#11131b"
              : "#f6f3ff"};

          background:
            rgba(167,131,255,.08);

          transform:
            translateY(-1px);
        }

        .nav-links button.active {
          color: #A783FF;
          background:
            rgba(167,131,255,.10);
        }

        .nav-links button.active::after {
          transform: scaleX(1);
        }

        .nav-contact {
          color: #A783FF !important;
        }

        .nav-contact-icon {
          display: inline-flex;
          flex: 0 0 auto;
          opacity: .86;
        }

        .nav-tools {
          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 7px;
          min-width: max-content;
        }

        .availability {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          min-height: 40px;

          padding: 8px 12px;

          border-radius: 999px;

          color:
            ${lightMode
              ? "rgba(15,23,42,.62)"
              : "rgba(255,255,255,.62)"};

          background:
            ${lightMode
              ? "rgba(15,23,42,.035)"
              : "rgba(255,255,255,.045)"};

          border: 1px solid
            ${lightMode
              ? "rgba(15,23,42,.07)"
              : "rgba(255,255,255,.08)"};

          font-size:
            clamp(9px, .61vw, 11px);

          font-weight: 760;

          letter-spacing: .055em;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .availability-dot {
          width: 6px;
          height: 6px;

          flex: 0 0 6px;

          border-radius: 50%;

          background: #A783FF;

          box-shadow:
            0 0 0 4px
              rgba(167,131,255,.09),
            0 0 16px
              rgba(167,131,255,.28);

          animation:
            availability-pulse
            2.2s ease-in-out
            infinite;
        }

        .language-button,
        .theme-button,
        .menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 42px;
          height: 42px;

          padding: 0 10px;

          flex: 0 0 auto;

          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.09)"
              : "rgba(255,255,255,.10)"};

          border-radius: 10px;

          background:
            ${lightMode
              ? "rgba(255,255,255,.50)"
              : "rgba(255,255,255,.035)"};

          color:
            ${lightMode
              ? "rgba(15,23,42,.68)"
              : "rgba(255,255,255,.72)"};

          font: inherit;
          font-size: 12px;
          font-weight: 760;

          cursor: pointer;

          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .language-button:hover,
        .theme-button:hover,
        .menu-btn:hover {
          transform:
            translateY(-1px);

          border-color:
            rgba(167,131,255,.34);

          background:
            rgba(167,131,255,.08);

          color: #A783FF;
        }

        .theme-button {
          position: relative;
          overflow: hidden;
        }

        .theme-glow {
          position: absolute;
          inset: 4px;
          border-radius: 8px;

          background:
            radial-gradient(
              circle at center,
              rgba(167,131,255,.12),
              transparent 68%
            );

          pointer-events: none;
        }

        .theme-icon {
          position: relative;
          z-index: 1;

          display: inline-flex;
        }

        .menu-btn {
          display: none;
          font-size: 18px;
          line-height: 1;
        }

        .mobile-menu {
          position: fixed;
          inset: 94px 18px auto;

          z-index: 119;

          max-height:
            calc(100vh - 110px);

          overflow: auto;

          padding: 12px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.09)"
              : "rgba(255,255,255,.09)"};

          border-radius: 18px;

          background:
            ${lightMode
              ? "rgba(255,255,255,.95)"
              : "rgba(9,10,20,.96)"};

          box-shadow:
            0 24px 70px
            ${lightMode
              ? "rgba(15,23,42,.15)"
              : "rgba(0,0,0,.34)"};

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-menu-inner button {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          min-height: 48px;

          padding: 11px 13px;

          border: 0;
          border-radius: 11px;

          background: transparent;

          color:
            ${lightMode
              ? "rgba(15,23,42,.72)"
              : "rgba(255,255,255,.70)"};

          font: inherit;
          font-size: 15px;
          font-weight: 720;

          text-align: start;
          cursor: pointer;
        }

        .mobile-menu-inner button:hover,
        .mobile-menu-inner button.active {
          color: #A783FF;
          background:
            rgba(167,131,255,.09);
        }

        @media (min-width: 1501px) {
          .topbar-inner {
            gap: 16px;
          }

          .brand-logo-shell {
            width: 220px;
          }

          .nav-links {
            gap: 2px;
          }

          .nav-links button {
            font-size: 14px;
            padding-inline: 6px;
          }

          .availability {
            padding-inline: 14px;
            font-size: 10.5px;
          }
        }

        @media (max-width: 1500px) and (min-width: 1221px) {
          .topbar-inner {
            gap: 10px;
            padding-inline: 10px;
          }

          .brand-logo-shell {
            width: 190px;
          }

          .nav-links {
            gap: 0;
          }

          .nav-links button {
            font-size: 12px;
            padding-inline: 4px;
          }

          .nav-contact-icon {
            display: none;
          }

          .availability {
            min-height: 38px;
            padding-inline: 9px;
            font-size: 9px;
          }

          .nav-tools {
            gap: 5px;
          }
        }

        @media (max-width: 1220px) {
          .topbar-inner {
            grid-template-columns:
              auto minmax(0, 1fr) auto;

            min-height: 70px;
          }

          .nav-center {
            display: none;
          }

          .menu-btn {
            display: inline-flex;
          }

          .topbar-inner {
            padding-left: 16px;
          }

          .brand-logo-shell {
            width: 190px;
          }

          .availability {
            display: none;
          }
        }

        @media (max-width: 620px) {
          .topbar {
            padding-inline: 10px;
          }

          .topbar-inner {
            min-height: 60px;
            padding: 0 9px 0 12px;
            border-radius: 15px;
            gap: 8px;
          }

          .brand-logo-shell {
            width: 150px;
            height: 46px;
          }

          .language-button {
            min-width: 36px;
            padding-inline: 8px;
            font-size: 11px;
          }

          .theme-button {
            display: inline-flex;
            min-width: 36px;
            width: 36px;
            height: 36px;
            padding: 0;
          }

          .mobile-menu {
            inset-inline: 10px;
            top: 82px;
          }

          .mobile-menu-inner button {
            min-height: 46px;
            font-size: 14px;
          }

          .onboarding-content {
            padding-inline: 18px;
          }

          .onboarding-logo {
            width: min(300px, 80vw);
          }
        }

        @media (max-width: 420px) {
          .topbar {
            padding-inline: 7px;
          }

          .topbar-inner {
            min-height: 58px;
            padding: 0 7px 0 9px;
            gap: 6px;
          }

          .brand-logo-shell {
            width: 132px;
            height: 42px;
          }

          .nav-tools {
            gap: 5px;
          }

          .language-button,
          .theme-button {
            min-width: 34px;
            width: 34px;
            height: 34px;
            padding: 0;
          }

          .theme-icon svg {
            width: 18px;
            height: 18px;
          }

          .menu-btn {
            min-width: 34px;
            width: 34px;
            height: 34px;
            padding: 0;
          }
        }

        @keyframes onboarding-pulse {
          0%,
          100% {
            transform: scale(.96);
            opacity: .7;
          }

          50% {
            transform: scale(1.03);
            opacity: 1;
          }
        }

        @keyframes onboarding-scan {
          0% {
            transform: translateX(-340%);
          }

          100% {
            transform: translateX(420%);
          }
        }

        @keyframes availability-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: .85;
          }

          50% {
            transform: scale(1.22);
            opacity: 1;
          }
        }

        @keyframes portrait-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: .55;
            transform: scale(1);
          }

          50% {
            opacity: .85;
            transform: scale(1.06);
          }
        }

        :global(.sr-only) {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        :global(.hero-art) {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 520px;
          padding: 40px 20px;
        }

        :global(.hero-portrait-stage) {
          position: relative;
          width: min(340px, 78vw);
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
        }

        :global(.hero-portrait-glow) {
          position: absolute;
          inset: -18%;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at center,
              rgba(167,131,255,.28) 0%,
              rgba(167,131,255,.10) 40%,
              transparent 70%
            );
          filter: blur(24px);
          z-index: 0;
          animation:
            glow-pulse
            5s ease-in-out
            infinite;
          pointer-events: none;
        }

        :global(.hero-portrait-ring) {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border:
            1px solid
            ${lightMode
              ? "rgba(167,131,255,.32)"
              : "rgba(167,131,255,.28)"};
          z-index: 0;
          pointer-events: none;
        }

        :global(.hero-art .portrait) {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          aspect-ratio: 1 / 1;
          display: block;
          overflow: hidden;
          border-radius: 50%;
          clip-path:
            circle(50% at 50% 50%);
          -webkit-clip-path:
            circle(50% at 50% 50%);
          background:
            ${lightMode
              ? "#f3f4f8"
              : "#0d0e1a"};
          border:
            3px solid
            ${lightMode
              ? "rgba(255,255,255,.86)"
              : "rgba(255,255,255,.11)"};
          box-shadow:
            0 22px 60px
              rgba(167,131,255,.22),
            0 8px 24px
              ${lightMode
                ? "rgba(15,23,42,.12)"
                : "rgba(0,0,0,.42)"};
        }

        :global(.hero-art .portrait img) {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 20%;
          border-radius: 50%;
          background:
            ${lightMode
              ? "#f3f4f8"
              : "#0d0e1a"};
          filter: none;
        }

        :global(.hero-art .portrait-placeholder) {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 18px;
          font-size: 11px;
          line-height: 1.45;
          color:
            ${lightMode
              ? "rgba(15,23,42,.55)"
              : "rgba(255,255,255,.55)"};
          background:
            ${lightMode
              ? "#f3f4f8"
              : "#0d0e1a"};
          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(255,255,255,.08)"};
        }

        :global(.hero-art .portrait-placeholder strong) {
          display: block;
          font-size: 14px;
          letter-spacing: .14em;
          margin-bottom: 8px;
          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};
        }

        :global(.hero-art .aws-card) {
          position: absolute;
          top: 8%;
          inset-inline-end: 0;
          z-index: 3;

          display: flex;
          flex-direction: column;
          gap: 6px;

          padding: 16px 18px;
          border-radius: 16px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(255,255,255,.10)"};

          background:
            ${lightMode
              ? "rgba(255,255,255,.92)"
              : "rgba(13,14,26,.90)"};

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          box-shadow:
            0 18px 44px
            ${lightMode
              ? "rgba(15,23,42,.10)"
              : "rgba(0,0,0,.40)"};

          width: 240px;
        }

        :global(.hero-art .aws-logo) {
          width: 62px;
          height: auto;
          display: block;
          margin-bottom: 2px;
        }

        :global(.hero-art .aws-card strong) {
          font-size: 14px;
          letter-spacing: -.01em;
          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};
        }

        :global(.hero-art .aws-card p) {
          margin: 0;
          font-size: 10.5px;
          letter-spacing: .02em;
          line-height: 1.5;
          color:
            ${lightMode
              ? "rgba(15,23,42,.55)"
              : "rgba(255,255,255,.55)"};
        }

        :global(.hero-art .pipeline-card) {
          position: absolute;
          bottom: 6%;
          inset-inline-start: 0;
          z-index: 3;

          padding: 16px 18px;
          border-radius: 16px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(255,255,255,.10)"};

          background:
            ${lightMode
              ? "rgba(255,255,255,.92)"
              : "rgba(13,14,26,.90)"};

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          box-shadow:
            0 18px 44px
            ${lightMode
              ? "rgba(15,23,42,.10)"
              : "rgba(0,0,0,.40)"};

          width: 240px;
        }

        :global(.hero-art .pipeline-card .card-row) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }

        :global(.hero-art .pipeline-card .card-label) {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .10em;
          text-transform: uppercase;
          color:
            ${lightMode
              ? "rgba(15,23,42,.55)"
              : "rgba(255,255,255,.55)"};
        }

        :global(.hero-art .pipeline-card .status) {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          font-size: 9px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;

          color: #A783FF;
        }

        :global(.hero-art .pipeline-card .status-dot) {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #A783FF;

          box-shadow:
            0 0 0 3px
            rgba(167,131,255,.16);
        }

        :global(.hero-art .pipeline-card .pipeline) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        :global(.hero-art .pipeline-card .pipe) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          flex: 1;
        }

        :global(.hero-art .pipeline-card .pipe-icon) {
          width: 28px;
          height: 28px;

          display: grid;
          place-items: center;

          border-radius: 8px;

          background:
            ${lightMode
              ? "rgba(167,131,255,.10)"
              : "rgba(167,131,255,.14)"};

          color: #A783FF;

          border:
            1px solid
            ${lightMode
              ? "rgba(167,131,255,.22)"
              : "rgba(167,131,255,.26)"};
        }

        :global(.hero-art .pipeline-card .pipe small) {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .04em;
          color:
            ${lightMode
              ? "rgba(15,23,42,.55)"
              : "rgba(255,255,255,.55)"};
        }

        @media (max-width: 900px) {
          :global(.hero-art) {
            min-height: 460px;
            padding: 30px 10px 60px;
          }

          :global(.hero-art .aws-card) {
            top: 0;
            inset-inline-end: 0;
            width: min(210px, 55vw);
            padding: 12px 14px;
          }

          :global(.hero-art .aws-logo) {
            width: 52px;
          }

          :global(.hero-art .aws-card strong) {
            font-size: 12.5px;
          }

          :global(.hero-art .aws-card p) {
            font-size: 9.5px;
          }

          :global(.hero-art .pipeline-card) {
            bottom: 0;
            inset-inline-start: 0;
            width: min(210px, 55vw);
            padding: 12px 14px;
          }

          :global(.hero-art .pipeline-card .pipe-icon) {
            width: 24px;
            height: 24px;
          }

          :global(.hero-art .pipeline-card .pipe small) {
            font-size: 8px;
          }
        }

        @media (max-width: 560px) {
          :global(.hero-art) {
            min-height: 420px;
            padding: 20px 6px 70px;
          }

          :global(.hero-portrait-stage) {
            width: min(240px, 72vw);
          }

          :global(.hero-art .aws-card) {
            top: -6px;
            width: 46vw;
            padding: 10px 12px;
            border-radius: 12px;
          }

          :global(.hero-art .aws-logo) {
            width: 44px;
          }

          :global(.hero-art .pipeline-card) {
            bottom: -6px;
            width: 46vw;
            padding: 10px 12px;
            border-radius: 12px;
          }

          :global(.hero-art .pipeline-card .pipe-icon) {
            width: 20px;
            height: 20px;
          }

          :global(.hero-art .pipeline-card .pipe small) {
            display: none;
          }
        }

        :global(.profile-grid),
        :global(.education-grid) {
          align-items: start;
        }

        :global(.compact-side) {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px 24px;
          align-self: start;
        }

        :global(.compact-side .side-block) {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        :global(.compact-side .label-row) {
          margin: 0 0 2px;
        }

        :global(.compact-side .university) {
          font-size: 17px;
          line-height: 1.25;
          margin: 0;
        }

        :global(.compact-side .degree) {
          font-size: 12.5px;
          line-height: 1.5;
          margin: 0;
        }

        :global(.compact-side .languages) {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 2px;
        }

        :global(.compact-side .language) {
          padding: 5px 10px;
          font-size: 11px;
          border-radius: 8px;
        }

        .education-main-info {
          min-width: 0;
        }

        .education-institution-logos {
          display: inline-flex;
          align-items: center;
          gap: 14px;

          margin-bottom: 18px;
          padding: 8px 10px;

          border: 1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255, 255, 255, 0.09)"};

          border-radius: 14px;

          background:
            ${lightMode
              ? "rgba(255,255,255,0.72)"
              : "rgba(255,255,255,0.025)"};

          width: fit-content;
        }

        .education-logo-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 11px;
        }

        .education-logo {
          width: 56px;
          height: 56px;

          display: grid;
          place-items: center;

          flex: 0 0 56px;
          overflow: hidden;

          border-radius: 11px;

          background:
            ${lightMode
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0.06)"};

          border: 1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255,255,255,0.08)"};
        }

        .education-logo img {
          width: 46px;
          height: 46px;
          display: block;
          object-fit: contain;
        }

        .education-logo-fallback {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.02em;
          opacity: 0.72;
        }

        .education-logo-divider {
          width: 1px;
          height: 34px;

          background:
            ${lightMode
              ? "rgba(15, 23, 42, 0.12)"
              : "rgba(255,255,255,0.12)"};
        }

        .education-label-row {
          margin-top: 2px;
        }

        .education-logo-link:hover
          .education-logo,
        .education-logo-link:focus-visible
          .education-logo {
          transform: translateY(-1px);

          border-color:
            ${lightMode
              ? "rgba(15, 23, 42, 0.18)"
              : "rgba(255,255,255,0.18)"};
        }

        @media (max-width: 700px) {
          .education-institution-logos {
            gap: 10px;
            margin-bottom: 15px;
            padding: 7px 8px;
          }

          .education-logo {
            width: 50px;
            height: 50px;
            flex-basis: 50px;
          }

          .education-logo img {
            width: 40px;
            height: 40px;
          }

          .education-logo-divider {
            height: 30px;
          }
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .skill-chip-label {
          min-width: 0;
        }

        .skill-logo-mini {
          width: 16px;
          height: 16px;

          display: inline-grid;
          place-items: center;

          flex: 0 0 16px;

          border-radius: 5px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.10)"
              : "rgba(255, 255, 255, 0.11)"};

          background:
            ${lightMode
              ? "rgba(15, 23, 42, 0.035)"
              : "rgba(255,255,255,0.04)"};

          overflow: hidden;
        }

        .skill-logo-mini img {
          width: 11px;
          height: 11px;
          display: block;
          object-fit: contain;
        }

        .skill-logo-mini span {
          font-size: 7px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.02em;
          opacity: 0.72;
        }

        .soft-skill-name {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .recommendation-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .recommendation-top {
          margin-bottom: 18px;
        }

        .recommendation-author-block {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 16px;
        }

        .recommendation-author-block strong {
          font-size: 17px;
          line-height: 1.15;
        }

        .recommendation-role {
          font-size: 12px;
          line-height: 1.45;
          opacity: 0.68;
        }

        .recommendation-meta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
          font-size: 11px;
          opacity: 0.52;
        }

        .recommendation-quote {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .recommendation-quote p {
          margin: 0;
        }

        .recommendation-source {
          margin-top: 20px;
        }

        @media (max-width: 900px) {
          .recommendation-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-side-enhanced {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-top: 12px;
        }

        .contact-item-card {
          display: flex;
          align-items: center;
          gap: 16px;

          padding: 18px 20px;

          border-radius: 14px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15,23,42,.08)"
              : "rgba(255,255,255,.08)"};

          background:
            ${lightMode
              ? "rgba(255,255,255,.72)"
              : "rgba(255,255,255,.03)"};

          text-decoration: none;
          color: inherit;

          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .contact-item-card:hover {
          transform:
            translateY(-2px);

          border-color:
            ${lightMode
              ? "rgba(15,23,42,.15)"
              : "rgba(255,255,255,.15)"};

          background:
            ${lightMode
              ? "#fff"
              : "rgba(255,255,255,.05)"};

          box-shadow:
            0 8px 24px
            ${lightMode
              ? "rgba(15,23,42,.06)"
              : "rgba(0,0,0,.2)"};
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          flex: 0 0 44px;

          display: grid;
          place-items: center;

          border-radius: 12px;

          background:
            ${lightMode
              ? "rgba(167,131,255,.1)"
              : "rgba(167,131,255,.15)"};

          color: #A783FF;

          border: 1px solid
            ${lightMode
              ? "rgba(167,131,255,.2)"
              : "rgba(167,131,255,.25)"};
        }

        .contact-text-stack {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .contact-text-stack
          .contact-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .05em;

          color:
            ${lightMode
              ? "rgba(15,23,42,.5)"
              : "rgba(255,255,255,.45)"};
        }

        .contact-text-stack
          .contact-value {
          font-size: 13px;
          font-weight: 500;

          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .contact-side-enhanced {
            padding-top: 4px;
          }
        }

        @media (max-width: 600px) {
          .contact-text-stack
            .contact-value {
            font-size: 12px;
          }

          .contact-icon-box {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
          }

          .contact-item-card {
            padding: 14px 16px;
            gap: 14px;
          }
        }

        .site-footer {
          position: relative;
          margin-top: 80px;
          padding: 0;

          border-top:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255, 255, 255, 0.08)"};

          background:
            ${lightMode
              ? "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(245,246,250,0.9))"
              : "linear-gradient(180deg, rgba(9,10,20,0.55), rgba(6,7,14,0.9))"};
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .footer-top {
          display: grid;
          grid-template-columns:
            1fr minmax(320px, 400px) 1fr;
          gap: 0;
          padding: 64px 0;
          align-items: stretch;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          padding: 0 44px;
          min-width: 0;
        }

        .footer-col:first-child {
          padding-inline-start: 0;
        }

        .footer-col:last-child {
          padding-inline-end: 0;
        }

        .footer-center-col {
          padding: 0 44px;

          border-left:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255, 255, 255, 0.08)"};

          border-right:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255, 255, 255, 0.08)"};

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          min-width: 0;
        }

        .footer-heading-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-heading-line {
          width: 26px;
          height: 2px;
          background: #A783FF;
          border-radius: 999px;
          flex: 0 0 auto;
        }

        .footer-heading {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A783FF;
        }

        .footer-connect-text {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;

          color:
            ${lightMode
              ? "rgba(15,23,42,.72)"
              : "rgba(240,238,255,.72)"};

          max-width: 380px;
        }

        .footer-connect-text strong,
        .footer-who-text strong {
          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};

          font-weight: 700;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 26px;
          flex-wrap: wrap;
        }

        .footer-socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 44px;
          height: 44px;

          border-radius: 12px;

          border:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.10)"
              : "rgba(255, 255, 255, 0.10)"};

          background:
            ${lightMode
              ? "rgba(255,255,255,.7)"
              : "rgba(255,255,255,.035)"};

          color:
            ${lightMode
              ? "rgba(15,23,42,.72)"
              : "rgba(240,238,255,.75)"};

          text-decoration: none;

          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease,
            box-shadow 180ms ease;
        }

        .footer-socials a:hover {
          transform: translateY(-2px);
          border-color:
            rgba(167, 131, 255, 0.4);

          background:
            rgba(167, 131, 255, 0.08);

          color: #A783FF;

          box-shadow:
            0 8px 22px
            rgba(167, 131, 255, 0.14);
        }

        .footer-center-mark {
          display: inline-grid;
          place-items: center;

          width: 60px;
          height: 60px;

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              #A783FF 0%,
              #6366f1 100%
            );

          color: #ffffff;

          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.02em;

          box-shadow:
            0 14px 32px
            rgba(167, 131, 255, 0.32);

          margin-bottom: 18px;
        }

        .footer-center-name {
          display: block;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.01em;

          color:
            ${lightMode
              ? "#11131b"
              : "#f7f4ff"};

          margin-bottom: 4px;
        }

        .footer-center-title {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #A783FF;
          margin-bottom: 2px;
        }

        .footer-center-location {
          display: block;
          font-size: 12px;
          font-weight: 500;

          color:
            ${lightMode
              ? "rgba(15,23,42,.5)"
              : "rgba(255,255,255,.45)"};
        }

        .footer-brand-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;

          width: min(210px, 100%);
          height: 64px;

          margin-top: 14px;

          overflow: hidden;
          border-radius: 12px;
        }

        .footer-brand-logo {
          display: block;
          width: 100%;
          height: 100%;

          object-fit: contain;
          object-position: center;

          transform: scale(1.08);

          transition:
            transform 220ms ease,
            filter 220ms ease;
        }

        .footer-brand-logo-wrap:hover
          .footer-brand-logo {
          transform: scale(1.12);

          filter:
            drop-shadow(
              0 8px 20px
              rgba(167,131,255,.16)
            );
        }

        .footer-freelance-grid {
          display: flex;
          flex-wrap: wrap;

          justify-content: center;

          gap: 10px;

          margin-top: 26px;

          max-width: 340px;
        }

        .footer-freelance-link {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 46px;
          height: 46px;

          padding: 0;

          border:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.10)"
              : "rgba(255, 255, 255, 0.10)"};

          border-radius: 12px;

          text-decoration: none;
          color: inherit;

          background:
            ${lightMode
              ? "rgba(255,255,255,.72)"
              : "rgba(255,255,255,.04)"};

          box-shadow:
            0 3px 10px
            ${lightMode
              ? "rgba(15, 23, 42, 0.05)"
              : "rgba(0, 0, 0, 0.14)"};

          transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease,
            box-shadow 160ms ease;
        }

        .footer-freelance-link:hover {
          transform: translateY(-2px);

          border-color:
            rgba(167, 131, 255, 0.4);

          background:
            rgba(167, 131, 255, 0.08);

          box-shadow:
            0 8px 20px
            rgba(167, 131, 255, 0.18);
        }

        .footer-freelance-link:focus-visible {
          outline:
            2px solid
            rgba(167, 131, 255, 0.5);

          outline-offset: 3px;
        }

        .footer-freelance-link
          .freelance-logo {
          position: relative;
          z-index: 1;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 28px;
          height: 28px;

          border: 0;
          border-radius: 7px;

          background: transparent;
        }

        .footer-freelance-link
          .freelance-logo img {
          display: block;

          width: 26px;
          height: 26px;

          object-fit: contain;
        }

        .footer-freelance-link
          .freelance-logo-fallback {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 26px;
          height: 26px;

          border-radius: 7px;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .footer-freelance-name,
        .footer-freelance-arrow {
          position: absolute;

          width: 1px;
          height: 1px;

          padding: 0;
          margin: -1px;

          overflow: hidden;
          clip: rect(0, 0, 0, 0);

          white-space: nowrap;
          border: 0;
        }

        .footer-who-text {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;

          color:
            ${lightMode
              ? "rgba(15,23,42,.72)"
              : "rgba(240,238,255,.72)"};

          max-width: 380px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 16px;

          flex-wrap: wrap;

          padding: 24px 0 32px;

          border-top:
            1px solid
            ${lightMode
              ? "rgba(15, 23, 42, 0.08)"
              : "rgba(255, 255, 255, 0.08)"};

          font-size: 12px;

          color:
            ${lightMode
              ? "rgba(15,23,42,.55)"
              : "rgba(255,255,255,.5)"};
        }

        .footer-bottom
          .footer-stack {
          font-size: 11px;
          letter-spacing: 0.06em;
          opacity: 0.75;
        }

        .rtl .footer-top {
          direction: rtl;
        }

        .rtl .footer-heading-row {
          flex-direction: row-reverse;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 56px 0;
          }

          .footer-center-col {
            grid-column: 1 / -1;
            grid-row: 1;

            padding: 0 0 40px;

            border-left: 0;
            border-right: 0;

            border-bottom:
              1px solid
              ${lightMode
                ? "rgba(15, 23, 42, 0.08)"
                : "rgba(255, 255, 255, 0.08)"};
          }

          .footer-col {
            padding: 0;
          }
        }

        @media (max-width: 700px) {
          .footer-inner {
            padding: 0 22px;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 0;
          }

          .footer-center-col {
            padding-bottom: 32px;
            margin-bottom: 4px;
          }

          .footer-connect-text,
          .footer-who-text {
            max-width: none;
          }

          .footer-freelance-grid {
            max-width: none;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            text-align: start;

            padding: 20px 0 28px;
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .footer-inner {
            padding: 0 18px;
          }

          .footer-socials a {
            width: 40px;
            height: 40px;
          }

          .footer-freelance-link {
            width: 42px;
            height: 42px;
            border-radius: 11px;
          }

          .footer-freelance-link
            .freelance-logo,
          .footer-freelance-link
            .freelance-logo img,
          .footer-freelance-link
            .freelance-logo-fallback {
            width: 24px;
            height: 24px;
          }

          .footer-center-mark {
            width: 54px;
            height: 54px;
            font-size: 18px;
          }

          .footer-brand-logo-wrap {
            width: min(190px, 100%);
            height: 58px;
          }
/* =====================================================
   NAVBAR — KEEP EXACT SAME SIZE ON SCROLL
   ===================================================== */

/*
  IMPORTANT:
  .scrolled is no longer used by the header.
  Only .is-scrolled is used for visual changes.

  This means:
  - width stays exactly the same
  - height stays exactly the same
  - padding stays exactly the same
  - logo size stays exactly the same
  - nav text spacing stays exactly the same
  - buttons do not shrink
*/

.site .topbar.is-scrolled {
  /*
    Visual changes only.
    No width / height / padding changes here.
  */
  background: color-mix(
    in srgb,
    var(--bg) 90%,
    transparent
  );

  box-shadow:
    0 10px 32px
      color-mix(
        in srgb,
        #000 9%,
        transparent
      );
}

/*
  Explicitly prevent any old .scrolled rules
  from affecting the navbar if they exist elsewhere.
*/
.site .topbar.is-scrolled .topbar-inner {
  width: inherit;
  min-height: inherit;
}

/*
  Keep navigation buttons from changing size.
*/
.site .topbar.is-scrolled .nav-links button {
  transform: none;
}

/*
  Keep the nav layout stable.
*/
.site .topbar.is-scrolled .nav-links {
  width: 100%;
}

/*
  Mobile:
  the existing responsive sizes remain untouched.
*/
@media (max-width: 1100px) {
  .site .topbar.is-scrolled .nav-center {
    display: none;
  }

  .site .topbar.is-scrolled .menu-btn {
    display: inline-grid;
    place-items: center;
  }
}

/*
  Extra safety for very small screens.
  Nothing gets resized during scroll.
*/
@media (max-width: 700px) {
  .site .topbar.is-scrolled .topbar-inner {
    width: inherit;
    min-height: inherit;
    padding: inherit;
    border-radius: inherit;
  }

  .site .topbar.is-scrolled .language-button,
  .site .topbar.is-scrolled .theme-button,
  .site .topbar.is-scrolled .menu-btn {
    transform: none;
  }
}
          
        }
      `}</style>

      {/* FOOTER — REDESIGNED */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            {/* LEFT — LET'S CONNECT */}
            <div className="footer-col">
              <div className="footer-heading-row">
                <span className="footer-heading-line" />
                <span className="footer-heading">
                  {t.letsConnect}
                </span>
              </div>

              <p className="footer-connect-text">
                {t.footerConnect}
              </p>

              <div className="footer-socials">
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  {i.github}
                </a>

                <a
                  href={cv.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  {i.linkedin}
                </a>

                <a
                  href={`mailto:${cv.email}`}
                  aria-label="Email"
                >
                  {i.email}
                </a>
              </div>
            </div>

            {/* CENTER — BRAND + FREELANCE */}
            <div className="footer-center-col">
              <div
                className="footer-brand-logo-wrap"
                aria-hidden="true"
              >
                <img
                  src={cv.logo}
                  alt=""
                  className="footer-brand-logo"
                  width={210}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <strong className="footer-center-name">
                {cv.name}
              </strong>

              <span className="footer-center-title">
                {cv.title}
              </span>

              <span className="footer-center-location">
                {isArabic
                  ? cv.locationAr
                  : cv.location}
              </span>

              <div className="footer-freelance-grid">
                {cv.freelanceLinks.map(
                  (platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-freelance-link"
                      dir="ltr"
                      aria-label={`${platform.name} profile`}
                      title={
                        isArabic
                          ? platform.nameAr
                          : platform.name
                      }
                    >
                      <PlatformLogo
                        src={platform.logo}
                        mark={platform.mark}
                        name={
                          platform.name
                        }
                      />

                      <span className="footer-freelance-name">
                        {isArabic
                          ? platform.nameAr
                          : platform.name}
                      </span>

                      <span
                        className="footer-freelance-arrow"
                        aria-hidden="true"
                      >
                        {i.external}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* RIGHT — WHO AM I */}
            <div className="footer-col">
              <div className="footer-heading-row">
                <span className="footer-heading-line" />

                <span className="footer-heading">
                  {t.whoAmI}
                </span>
              </div>

              <p className="footer-who-text">
                {t.footerAbout}
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()}{" "}
              {cv.name}. {t.footerCopyright} ·{" "}
              {t.footerBuiltWith}
            </span>

            <span
              dir="ltr"
              className="footer-stack"
            >
              Cloud &amp; DevOps · AWS · Linux ·
              Networking · IaC
            </span>
          </div>
        </div>
      </footer>

      {/* CERTIFICATE LIGHTBOX */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >
          <button
            type="button"
            className="certificate-modal-close"
            onClick={() =>
              setSelectedCertificate(null)
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
              width: "min(94vw, 1500px)",
              height: "min(92vh, 1000px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="certificate-modal-image"
              src={selectedCertificate}
              alt="Certificate enlarged preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}

      {/* PROJECT IMAGE LIGHTBOX */}
      {selectedProjectImage && (
        <div
          className="certificate-modal project-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() =>
            setSelectedProjectImage(null)
          }
        >
          <button
            type="button"
            className="certificate-modal-close"
            onClick={() =>
              setSelectedProjectImage(null)
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
              src={selectedProjectImage}
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
