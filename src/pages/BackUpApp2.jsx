<div className="relative min-h-screen bg-slate-950">
  {/* 🌑 GLOBAL GRID BACKGROUND */}
  <div
    className="
          pointer-events-none
          absolute inset-0
          [background-size:40px_40px]
          [background-image:
            linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)
          ]
        "
  />

  {/* 🌟 CONTENT LAYER */}
  <div className="relative z-10 flex flex-col min-h-screen">
    <FloatingDockAce />

    <VortexAce>
      <NavLinkHeaderLeft />
    </VortexAce>

    <main className="flex flex-col flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/myresumedynamic" element={<MyResumeDynamic />} />
        <Route path="/CaseStudyRetail" element={<CaseStudyRetail />} />
      </Routes>
    </main>

    <Footer />
  </div>
</div>;
