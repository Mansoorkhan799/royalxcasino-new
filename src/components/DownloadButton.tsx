interface DownloadButtonProps {
  label?: string;
  className?: string;
}

export default function DownloadButton({ label = 'DOWNLOAD NOW', className = '' }: DownloadButtonProps) {
  return (
    <a
      href="https://royalxcasinopakistan.pk"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9] ${className}`}
    >
      <span className="text-lg">{label}</span>
      <div className="download-icon ml-3 bg-[#f97316] rounded-full p-2 flex-shrink-0">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );
}
