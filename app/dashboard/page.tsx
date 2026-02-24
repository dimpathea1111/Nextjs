import Link from "next/link"
export default function DashboardPage(){
  return(
    <div>
      <h1>Dashboard Page</h1>
      <Link href={"/photos/1"}>Go to photos</Link>
    </div>
  )
}
