import FormComponent from "../_components/form";

export default async function Page() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <FormComponent action="create" />;
    </section>
  );
}
