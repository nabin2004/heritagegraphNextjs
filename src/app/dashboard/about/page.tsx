import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="font-sans min-h-screen p-6 sm:p-12 pb-20">
      <main className="max-w-4xl  flex flex-col gap-10">
        <Image
          className="dark:invert mb-4"
          src="/cair-logo/fulllogo_nobuffer.png"
          alt="CAIR-Nepal logo"
          width={180}
          height={38}
          priority
        />

        <section className="text-sm sm:text-base leading-6">
          <h1 className="text-2xl font-bold mb-4">About CAIR-Nepal</h1>
          <p className="mb-4">
            CAIR-Nepal (Center for Applied AI Research – Nepal) is a research initiative focused on using AI to preserve, document, and share Nepal’s rich cultural heritage. We aim to bridge traditional knowledge with modern technology through meaningful, accessible digital tools.
          </p>

          <h2 className="text-xl font-semibold mb-2 mt-6">
            HeritageGraph: Illuminating Cultural Legacies Through Knowledge Graphs
          </h2>
          <p className="mb-4">
            Cultural heritage isn't just history—it's the foundation of identity. Our project, <strong>HeritageGraph</strong>, uses Knowledge Graphs (KGs) to digitally represent Nepalese cultural artifacts, relationships, and narratives in a machine-readable format. This enables preservation, advanced research, and public access to cultural data that would otherwise be scattered or at risk of being lost.
          </p>
          <p className="mb-4">
            KGs allow us to interlink diverse data sources and provide a structured, visual, and semantic way to explore heritage topics. They support interdisciplinary collaboration, promote cultural exchange, and offer new ways for people to reconnect with their roots.
          </p>

          <h2 className="text-xl font-semibold mb-2 mt-6">Project Contributors</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Dr. Tek Raj Chhetri</li>
            <li>Dr. Semih Yumusak</li>
            <li>Nabin Oli</li>
            <li>Niraj Karki</li>
          </ul>

          <p className="mt-6">
            Contact:{" "}
            <a className="underline" href="mailto:info@cair-nepal.org">
              info@cair-nepal.org
            </a>
          </p>
        </section>

        <div className="flex gap-4 flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github.svg"
              alt="GitHub icon"
              width={20}
              height={20}
            />
            View GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://your-docs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </div>
      </main>

      <footer className="mt-20 flex gap-6 flex-wrap items-center justify-center text-sm">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://zenodo.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Zenodo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/youtube.svg"
            alt="YouTube icon"
            width={16}
            height={16}
          />
          YouTube
        </a>
      </footer>
    </div>
  );
}
