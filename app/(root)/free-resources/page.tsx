import Filters from "@/components/component/Filters";
import ResourceCard from "@/components/component/ResourceCard";
import { SearchForm } from "@/components/component/SearchForm";
import { getResources } from "@/sanity/actions";

export default async function Home() {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1"
  })

  console.log(resources);
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            CodeHacker Academy
          </h1>
        </div>

        <SearchForm />

      </section>

      <Filters/>

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard />
            ))
          ) : (
            <p className="body-regultar text-white-400">
              No resources found
            </p>
          )}
        </div>
</section>
    </main>

  )
}