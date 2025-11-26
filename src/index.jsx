import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Demo Content */}
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
            Unique Business Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for technology solutions and services in Bangladesh
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
