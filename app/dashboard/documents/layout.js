export default function DocumentsLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
}
