import React, { useEffect } from "react";
import { 
  ArrowRight, 
  FileText, 
  Bot, 
  CheckCircle, 
  Send,
  Slack,
  BookOpen,
  ArrowUpRight,
  Database,
  Globe,
  Lock
} from "lucide-react";

export function StorytellingFlow() {
  useEffect(() => {
    // Inject fonts non-blocking
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div 
      className="w-full min-h-screen pb-24"
      style={{ 
        backgroundColor: "#00263E", 
        color: "#F7F9FB",
        fontFamily: "'Inter', sans-serif" 
      }}
    >
      {/* Wrapper to constrain max width */}
      <div className="max-w-6xl mx-auto px-6 pt-20">
        
        {/* 1. Section Header */}
        <div className="mb-12">
          <p 
            className="uppercase tracking-widest text-sm mb-3 font-semibold"
            style={{ color: "#F5A623", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Automation Showcase
          </p>
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#F7F9FB" }}
          >
            AI Release Note Pipeline
          </h2>
        </div>

        {/* 2. Problem Statement */}
        <div 
          className="rounded-lg p-5 mb-16 flex items-start gap-4 border-l-4"
          style={{ 
            backgroundColor: "rgba(245, 166, 35, 0.1)", 
            borderColor: "#F5A623" 
          }}
        >
          <div 
            className="rounded-full p-1 mt-0.5"
            style={{ backgroundColor: "#F5A623", color: "#00263E" }}
          >
            <ArrowRight size={16} strokeWidth={3} />
          </div>
          <div>
            <h3 
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5A623" }}
            >
              The Problem
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              Writing release notes manually from PRDs is error-prone, inconsistent, and takes product managers away from core work. This pipeline automates the transformation of technical specs into audience-tailored communications.
            </p>
          </div>
        </div>

        {/* 3. Pipeline Visualization */}
        <div className="mb-16">
          <h3 
            className="text-2xl font-medium mb-10 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How it works
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative max-w-5xl mx-auto">
            {/* Desktop connecting line */}
            <div 
              className="hidden md:block absolute top-12 left-10 right-10 h-0.5 z-0" 
              style={{ backgroundColor: "rgba(247, 249, 251, 0.15)" }} 
            />

            {[
              {
                num: "01",
                icon: <FileText size={28} />,
                title: "Ingest",
                desc: "Raw PRD & Tech Specs"
              },
              {
                num: "02",
                icon: <Bot size={28} />,
                title: "Draft (Claude AI)",
                desc: "Transforms to tone"
              },
              {
                num: "03",
                icon: <CheckCircle size={28} />,
                title: "Review",
                desc: "Human-in-the-loop"
              },
              {
                num: "04",
                icon: <Send size={28} />,
                title: "Publish",
                desc: "Slack & Zendesk"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative z-10 w-48 mb-8 md:mb-0 group">
                <div 
                  className="text-4xl font-bold mb-4 opacity-20 transition-opacity group-hover:opacity-100 group-hover:text-[#F5A623]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.num}
                </div>
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: "#00263E", 
                    border: "2px solid #0077B6",
                    color: "#F7F9FB",
                    boxShadow: "0 0 20px rgba(0, 119, 182, 0.3)"
                  }}
                >
                  {step.icon}
                </div>
                <h4 
                  className="text-lg font-semibold mb-2 text-center"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-center text-gray-400">
                  {step.desc}
                </p>
                {i < 3 && (
                  <div className="md:hidden mt-6 mb-2 text-[#0077B6]">
                    <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. CTA Button */}
        <div className="flex justify-center mb-24">
          <button 
            className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
            style={{ 
              backgroundColor: "#F5A623", 
              color: "#00263E",
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 10px 25px -5px rgba(245, 166, 35, 0.4)"
            }}
          >
            Try the live prototype
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* 5. Outputs Section */}
        <div className="mb-24">
          <h3 
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Dual Outputs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Internal Note */}
            <div 
              className="rounded-xl overflow-hidden shadow-2xl flex flex-col"
              style={{ backgroundColor: "#F7F9FB", color: "#1A202C" }}
            >
              <div 
                className="px-6 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#4A154B] text-white p-2 rounded">
                    <Slack size={18} />
                  </div>
                  <span className="font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Internal Note</span>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">#product-releases</span>
              </div>
              <div className="p-8 flex-1">
                <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Generated Output</p>
                <h4 className="text-xl font-bold mb-4" style={{ color: "#00263E" }}>🚀 New: AI Release Note Pipeline</h4>
                
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <strong className="block text-gray-900 mb-1">TL;DR:</strong>
                    Automates PRD to release note translation using Claude AI, reducing drafting time by 85%.
                  </div>
                  <div>
                    <strong className="block text-gray-900 mb-1">How it works:</strong>
                    Users submit a PRD link, AI drafts internal and external notes based on our style guide, which are then reviewed before publishing.
                  </div>
                  <div>
                    <strong className="block text-gray-900 mb-1">Availability:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Currently in Beta</li>
                      <li>Available to all PMs starting next week</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* External Note */}
            <div 
              className="rounded-xl overflow-hidden shadow-2xl flex flex-col"
              style={{ backgroundColor: "#F7F9FB", color: "#1A202C" }}
            >
              <div 
                className="px-6 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#00263E] text-white p-2 rounded">
                    <BookOpen size={18} />
                  </div>
                  <span className="font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>External Note</span>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">kb.samsara.com</span>
              </div>
              <div className="p-8 flex-1">
                <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Generated Output</p>
                <h4 className="text-2xl font-bold mb-3" style={{ color: "#00263E", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Introducing Automated Documentation
                </h4>
                
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    We're excited to announce a new way our product team is delivering updates to you faster. 
                    Our new documentation pipeline ensures that you get clear, accurate information about new features the moment they are available.
                  </p>
                  <p>
                    <strong>What this means for you:</strong> You'll see more consistent updates in our knowledge base, with clear explanations of how new features work and the value they provide to your operations.
                  </p>
                  <p className="text-[#0077B6] font-medium flex items-center gap-1 mt-4">
                    Read the full guide <ArrowUpRight size={14} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Architecture Decisions Table */}
        <div>
          <h3 
            className="text-2xl font-bold mb-8 flex items-center gap-3 border-b pb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", borderColor: "rgba(247, 249, 251, 0.1)" }}
          >
            <Database size={24} style={{ color: "#F5A623" }} />
            Architecture Decisions
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(247, 249, 251, 0.1)" }}>
                  <th className="py-4 px-4 font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Component</th>
                  <th className="py-4 px-4 font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Choice</th>
                  <th className="py-4 px-4 font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Rationale</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-white/5 transition-colors" style={{ borderBottom: "1px solid rgba(247, 249, 251, 0.05)" }}>
                  <td className="py-4 px-4 font-medium flex items-center gap-2"><Lock size={16} className="text-[#0077B6]" /> Auth</td>
                  <td className="py-4 px-4">SAML SSO</td>
                  <td className="py-4 px-4 text-gray-400">Required for internal tool compliance; seamless for employees.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors" style={{ borderBottom: "1px solid rgba(247, 249, 251, 0.05)" }}>
                  <td className="py-4 px-4 font-medium flex items-center gap-2"><Bot size={16} className="text-[#0077B6]" /> AI Model</td>
                  <td className="py-4 px-4">Claude 3.5 Sonnet</td>
                  <td className="py-4 px-4 text-gray-400">Superior nuance in matching Samsara's brand voice vs GPT-4.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors" style={{ borderBottom: "1px solid rgba(247, 249, 251, 0.05)" }}>
                  <td className="py-4 px-4 font-medium flex items-center gap-2"><Globe size={16} className="text-[#0077B6]" /> Web Framework</td>
                  <td className="py-4 px-4">Next.js</td>
                  <td className="py-4 px-4 text-gray-400">Standardized stack; easy API route integration for the AI service.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
