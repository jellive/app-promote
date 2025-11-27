/**
 * Skeleton component for ProjectDetail page loading state
 * Matches the layout of ProjectDetailPage to prevent CLS
 */

export function ProjectDetailSkeleton() {
  return (
    <main
      data-testid="project-detail-skeleton"
      className="min-h-screen py-8 md:py-16 animate-pulse"
    >
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="h-5 w-48 bg-muted rounded mb-8" />

        {/* Hero Section */}
        <header className="mb-12">
          {/* Title with emoji */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-muted rounded" />
            <div className="h-10 w-64 bg-muted rounded" />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="h-7 w-32 bg-muted rounded-full" />
            <div className="h-7 w-24 bg-muted rounded-full" />
          </div>

          {/* Short description */}
          <div className="h-6 w-3/4 bg-muted rounded mb-4" />

          {/* Period and role */}
          <div className="flex flex-wrap gap-4">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="h-5 w-28 bg-muted rounded" />
          </div>
        </header>

        {/* Description */}
        <section className="mb-12">
          <div className="space-y-2">
            <div className="h-5 w-full bg-muted rounded" />
            <div className="h-5 w-full bg-muted rounded" />
            <div className="h-5 w-2/3 bg-muted rounded" />
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Tech Stack Section */}
          <section className="space-y-4">
            <div className="h-7 w-32 bg-muted rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border">
                  <div className="h-5 w-24 bg-muted rounded mb-3" />
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-16 bg-muted rounded-md" />
                    <div className="h-6 w-20 bg-muted rounded-md" />
                    <div className="h-6 w-14 bg-muted rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="space-y-4">
            <div className="h-7 w-32 bg-muted rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border">
                  <div className="h-5 w-40 bg-muted rounded mb-2" />
                  <div className="h-4 w-full bg-muted rounded" />
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section className="space-y-4">
            <div className="h-7 w-24 bg-muted rounded" />
            <div className="flex flex-wrap gap-3">
              <div className="h-10 w-28 bg-muted rounded-md" />
              <div className="h-10 w-28 bg-muted rounded-md" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
