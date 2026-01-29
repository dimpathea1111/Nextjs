import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function UserCard({
    email="pp12.dom@gmail.com",
    name="pendim",
    avatar="https://opcionesadministrativas.com/shop/manufacturer-site?&transition=top22183902132570",
    role="user",
     creationAt="now"
    

}) {
  return (
      <Card className="mx-auto w-full max-col-sm p-6 shadow-sm border rounded-3xl">
      <div className="flex items-start gap-5">
        <div className="relative h-24 w-24 flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="h-full w-full rounded-full object-cover border"
          />
        </div>

        <div className="flex flex-col gap-1">
          <CardTitle className="text-2xl line-clamp-1">{name}</CardTitle>
          <CardTitle className="line-clamp-1">{email}</CardTitle>
          <CardTitle className="text-gray-400">{creationAt}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 font-normal text-blue-600 border-blue-200"
            >
              {role}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}
