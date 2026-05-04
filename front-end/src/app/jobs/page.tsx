"use client";

import Link from "next/link";
import { Search, Briefcase, MapPin } from "lucide-react";
import JobCard from "@/components/JobCard";

// Sample job data - replace with actual API call
const MOCK_JOBS = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time" as const,
    salary: "$120k - $150k",
    description:
      "We're looking for an experienced frontend developer to lead our React migration project. Must have 5+ years experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Creative Studio",
    location: "New York, NY",
    type: "Full-time" as const,
    salary: "$90k - $120k",
    description:
      "Join our design team to create beautiful and intuitive user interfaces for web and mobile applications.",
    tags: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataStream Systems",
    location: "San Francisco, CA",
    type: "Full-time" as const,
    salary: "$130k - $160k",
    description:
      "Build scalable backend systems with Node.js and PostgreSQL. Experience with microservices required.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "4",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Hybrid",
    type: "Full-time" as const,
    salary: "$100k - $140k",
    description:
      "Lead product strategy and development for our SaaS platform serving enterprise customers.",
    tags: ["Product Strategy", "Agile", "Analytics"],
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "BrandMax",
    location: "Chicago, IL",
    type: "Full-time" as const,
    salary: "$85k - $110k",
    description:
      "Develop and execute marketing campaigns for B2B SaaS products targeting enterprise clients.",
    tags: ["Digital Marketing", "SEO", "Content"],
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudNine",
    location: "Remote",
    type: "Full-time" as const,
    salary: "$125k - $155k",
    description:
      "Manage infrastructure and deployment pipelines. Experience with AWS, Kubernetes, and CI/CD required.",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time" as const,
    salary: "$110k - $145k",
    description:
      "Build machine learning models and data pipelines to drive business insights and optimization.",
    tags: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: "8",
    title: "Junior Developer",
    company: "Learning Labs",
    location: "Remote",
    type: "Full-time" as const,
    salary: "$60k - $80k",
    description:
      "Great opportunity for early-career developers. We provide mentorship and training while you build real projects.",
    tags: ["JavaScript", "React", "CSS"],
  },
  {
    id: "9",
    title: "Mobile Developer",
    company: "App Innovations",
    location: "Austin, TX",
    type: "Full-time" as const,
    salary: "$105k - $135k",
    description:
      "Develop iOS and Android applications using React Native. Portfolio of published apps required.",
    tags: ["React Native", "Mobile", "TypeScript"],
  },
  {
    id: "10",
    title: "QA Automation Engineer",
    company: "QualityFirst",
    location: "Hybrid",
    type: "Full-time" as const,
    salary: "$95k - $125k",
    description:
      "Create automated test suites and ensure product quality across all platforms and browsers.",
    tags: ["Selenium", "Testing", "Python"],
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold tracking-tight">HireLink</h1>

        <div className="space-x-6 hidden md:flex">
          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/about">About</Link>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-xl">
          <Link href="/register">Sign Up</Link>
        </button>
      </nav>

      {/* Header */}
      <section className="px-8 py-12">
        <h2 className="text-4xl font-bold mb-3">Job Opportunities</h2>
        <p className="text-gray-500 mb-8">
          Browse our latest job postings across all industries.
        </p>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl w-full">
            <Briefcase size={18} className="text-gray-600" />
            <input
              placeholder="Job title or keyword"
              className="outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl w-full">
            <MapPin size={18} className="text-gray-600" />
            <input placeholder="Location" className="outline-none w-full" />
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap hover:bg-gray-800 transition">
            <Search size={18} />
            Search
          </button>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {MOCK_JOBS.length} Job Openings
          </h3>
          <select className="border border-gray-200 rounded-lg px-4 py-2 bg-white">
            <option>Most Recent</option>
            <option>Most Relevant</option>
            <option>Salary: High to Low</option>
            <option>Salary: Low to High</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_JOBS.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="px-8 py-12 text-center">
        <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-xl hover:bg-gray-50 transition">
          Load More Jobs
        </button>
      </section>
    </div>
  );
}
