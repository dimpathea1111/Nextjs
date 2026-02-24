

export default async function PhotoPage(
    {params}:{params:Promise<{id:string}>}
){
    // destruring 
    const {id}=await params;
    return(
            <div className="w-2/4 h-[200px] bg-gray-400">hello {id}</div>
    )
}