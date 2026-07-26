import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Database, FileText, CheckCircle, ArrowUpRight } from 'lucide-react';

export function SplitNarrative() {
  return (
    <div className="w-full min-h-screen bg-[#F7F9FB] flex flex-col font-sans" style={{ fontFamily: '"Inter", sans-serif' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap');
        
        .font-barlow { font-family: 'Barlow Condensed', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}} />

      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex flex-col gap-8">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          
          {/* Left Column: Why & What */}
          <div className="p-8 lg:p-12 xl:p-16 flex flex-col bg-white">
            <div className="mb-8">
              <span className="text-[#F5A623] font-space text-sm tracking-wider uppercase font-semibold mb-3 block">Product Operations</span>
              <h2 className="font-barlow text-5xl md:text-6xl font-bold text-[#00263E] leading-tight mb-6">
                AI Release Note Pipeline
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-lg">
                Writing release notes manually is a slow, error-prone process that pulls PMs away from core product work. This pipeline automatically turns a raw PRD into polished internal and external release documentation, maintaining a single source of truth.
              </p>
            </div>

            <div className="flex-grow mb-12">
              <h3 className="font-space text-[#00263E] text-lg font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0077B6]" /> What it produces
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Internal Note Card */}
                <div className="bg-[#F7F9FB] border border-[#0077B6]/20 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#0077B6]/10 pb-3">
                    <MessageSquare className="w-4 h-4 text-[#0077B6]" />
                    <span className="font-space font-semibold text-sm text-[#00263E]">Internal Release Note</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-[#0077B6]/10 text-[#0077B6] px-2 py-1 rounded font-medium">#product-releases</span>
                    </div>
                  </div>
                </div>

                {/* External Note Card */}
                <div className="bg-[#F7F9FB] border border-[#0077B6]/20 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#0077B6]/10 pb-3">
                    <Database className="w-4 h-4 text-[#0077B6]" />
                    <span className="font-space font-semibold text-sm text-[#00263E]">External KB Article</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="flex gap-2 mt-4">
                      <span className="text-xs bg-[#0077B6]/10 text-[#0077B6] px-2 py-1 rounded font-medium">kb.samsara.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="inline-flex items-center gap-1.5 bg-[#F5A623]/10 text-[#00263E] border border-[#F5A623]/30 px-3 py-1.5 rounded-full text-xs font-semibold font-space">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623]" /> Working prototype
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0077B6]/10 text-[#00263E] border border-[#0077B6]/30 px-3 py-1.5 rounded-full text-xs font-semibold font-space">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0077B6]" /> Production architecture drafted
              </span>
            </div>
          </div>

          {/* Right Column: How */}
          <div className="bg-[#00263E] p-8 lg:p-12 xl:p-16 flex flex-col text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6] rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-space text-[#F5A623] text-xl font-semibold mb-8">How it works</h3>
            
            <div className="relative pl-6 mb-12 flex-grow">
              {/* Vertical connecting line */}
              <div className="absolute top-4 bottom-4 left-[11px] w-0.5 bg-[#0077B6]/30"></div>

              <div className="space-y-8 relative">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-[#00263E] border-2 border-[#0077B6] flex items-center justify-center font-space text-xs font-bold text-[#0077B6]">1</div>
                  <div className="pl-4">
                    <h4 className="font-space font-semibold text-lg text-white mb-1">Ingest</h4>
                    <p className="font-inter text-blue-100/70 text-sm">PM submits raw PRD via simple form.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-[#00263E] border-2 border-[#0077B6] flex items-center justify-center font-space text-xs font-bold text-[#0077B6]">2</div>
                  <div className="pl-4">
                    <h4 className="font-space font-semibold text-lg text-white mb-1">Draft</h4>
                    <p className="font-inter text-blue-100/70 text-sm">Claude AI generates tailored internal & external drafts.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-[#00263E] border-2 border-[#0077B6] flex items-center justify-center font-space text-xs font-bold text-[#0077B6]">3</div>
                  <div className="pl-4">
                    <h4 className="font-space font-semibold text-lg text-white mb-1">Review</h4>
                    <p className="font-inter text-blue-100/70 text-sm">Human-in-the-loop approval and final edits.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center font-space text-xs font-bold text-[#00263E]">4</div>
                  <div className="pl-4">
                    <h4 className="font-space font-semibold text-lg text-[#F5A623] mb-1">Publish</h4>
                    <p className="font-inter text-blue-100/70 text-sm">Auto-posts to Slack (#product-releases) and Zendesk KB.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute -inset-1 bg-[#F5A623] rounded-2xl opacity-30 blur-md"></div>
              <button className="group relative w-full bg-[#F5A623] hover:bg-[#fbb82d] text-[#00263E] font-space font-bold py-5 px-6 rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-1 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                <span className="flex items-center gap-2 text-xl">
                  Try the live prototype
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[#00263E]/60 font-inter font-normal text-xs tracking-wide">Paste a PRD → get internal + external notes in seconds</span>
              </button>
            </div>

            <div className="bg-[#001b2c] rounded-xl p-5 border border-[#0077B6]/20">
              <h4 className="font-space text-xs text-blue-200/50 uppercase tracking-wider mb-3">Architecture Decisions</h4>
              <div className="space-y-3 font-inter text-sm">
                <div className="flex justify-between items-start gap-4 pb-2 border-b border-white/5">
                  <span className="text-blue-100">Slack</span>
                  <span className="text-white/60 text-right">Bot token integration</span>
                </div>
                <div className="flex justify-between items-start gap-4 pb-2 border-b border-white/5">
                  <span className="text-blue-100">Approval gate</span>
                  <span className="text-white/60 text-right">Required for external</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-blue-100">Zendesk</span>
                  <span className="text-white/60 text-right">Draft → Live on approval</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Philosophy Callout */}
        <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-l-[#F5A623] shadow-sm flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-[#F7F9FB] p-3 rounded-full shrink-0">
            <CheckCircle className="w-6 h-6 text-[#F5A623]" />
          </div>
          <div>
            <h4 className="font-space font-bold text-[#00263E] text-lg mb-2">My Thinking</h4>
            <p className="font-inter text-gray-600 leading-relaxed text-sm">
              Automation should reduce toil, not eliminate oversight. By keeping a human-in-the-loop review gate before external publication, we ensure high quality standards while still saving PMs hours of repetitive documentation work per release. The two distinct outputs serve two very different audiences from a single source of truth.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
