type ErrorMessageProps = {
  children: React.ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-50 uppercase text-sm font-bold text-red-600 text-center">
      {children}
    </p>
  );
}
