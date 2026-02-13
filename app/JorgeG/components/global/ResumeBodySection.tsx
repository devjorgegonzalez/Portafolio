export interface SectionProps {
  children: React.ReactNode;
}

export default function ResumeBodySection({
  children,
}: Readonly<SectionProps>) {
  return <section className="min-h-screen max-h-fit p-3">{children}</section>;
}
