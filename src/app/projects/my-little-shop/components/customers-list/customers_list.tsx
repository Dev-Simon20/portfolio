import { Button } from "@/components/ui/button"
import { CircleUser, Edit, Eye, Trash } from "lucide-react"
import { Customer } from "../../(app)/(protected)/dashboard/customers/page"

const Customerslist = ({customers}:{customers:Customer[],}) => {
  return (
    <section className=" flex-1 flex flex-col items-start gap-2 ">
          {customers.map((c) => (
            <div
              key={c.id}
              className="rounded-md p-2 bg-gray-100 w-full flex items-center justify-between "
            >
              <section className="flex gap-4 items-center ">
                <CircleUser />{" "}
                <div className="flex items-center gap-2 text-sm">
                  <p >
                    Name:
                  </p>
                  <p className="font-medium">{c.name}</p>
                </div>
              </section>
              <section className="flex gap-2">
                <Button variant='outline' size='icon' className="text-green-500 hover:text-green-600">
                  <Eye />
                </Button>
                <Button variant='outline' size='icon' className="text-orange-500 hover:text-orange-600">
                  <Edit />
                </Button>

                <Button variant='outline' size='icon' className="text-red-500 hover:text-red-600">
                  <Trash />
                </Button>
              </section>
            </div>
          ))}
        </section>
  )
}
export default Customerslist