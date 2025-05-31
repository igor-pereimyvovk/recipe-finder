export default function NotFound() {
  return (
    <main className="container mx-auto py-20 text-center space-y-4">
      <h1 className="text-4xl font-bold">Recipe not found</h1>
      <p className="text-muted-foreground">
        It may have been removed or the URL might be incorrect.
      </p>
    </main>
  );
}
