import { getPostById } from "@/actions/posts";
import FormComponent from "../../_components/form";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const data = await getPostById(params.id);

  if (!data) {
    return (
      <div className="grid place-items-center py-12">
        <p className="text-2xl font-bold">Record not found.</p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <FormComponent action="edit" item={data} />
    </section>
  );
}
