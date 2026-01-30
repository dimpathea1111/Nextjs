import { SkeletonCard } from "@/component/i-skeleton/skeleton-card";

export default function ProductLoading(){
    return(

        // <h2>Product Loading .....</h2>
        // <SkeletonCard/>
        <main className="container mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {
                    [...Array(15)].map((_,index)=>
                        <SkeletonCard key={index}/>
                    )
                }
                {/* <SkeletonCard /> */}
            </section>
        </main>
    )
}