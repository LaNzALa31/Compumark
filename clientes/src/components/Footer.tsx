export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
          <span className="font-semibold">Clientes</span>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Clientes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
