const DefinitionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Want to understand <span className="text-primary">Data-Centric AI</span> better?
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              <strong>Data-Centric AI</strong> is the process of building and testing AI systems by focusing on data-centric operations (i.e. cleaning, cleansing, pre-processing, balancing, augmentation) rather than model-centric operations (i.e. hyper-parameters selection, architectural changes).
            </p>
            
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground">
                The term is coined by <strong>Andrew Ng</strong>. The definition is provided by <strong>Marco Postiglione</strong> and chosen by the community itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;