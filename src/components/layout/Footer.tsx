export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-muted-foreground bg-card mt-auto border-t">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Myrrhe Assist. Tous droits réservés.</p>
        <p className="mt-2 text-sm">
          <a href="mailto:contact@myrrhe-assist.com" className="hover:text-primary transition-colors">mioraassdga@gmail.com</a>
          {' | '}
          <a href="tel:+33123456789" className="hover:text-primary transition-colors">+261 34 45 634 12 </a>
        </p>
      </div>
    </footer>
  );
}
