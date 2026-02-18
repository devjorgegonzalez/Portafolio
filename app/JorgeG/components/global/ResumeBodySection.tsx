export interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export default function ResumeBodySection({
  children,
  id,
}: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className="min-h-screen p-8 pt-20 border-b border-gray-200 bg-white"
    >
      {children}
    </section>
  );
}
