import { Button } from "@/components/ui/button";
import {
   AlertCircle,
   ArrowRight,
   Bell,
   Calendar,
   Clock,
   DollarSign,
   PieChart,
   TrendingUp,
} from "lucide-react";
import Image from "next/image";
import stadis from "@/pics/stadis.svg";

const Finance = () => {
   return (
      <div className="p-6 space-y-6">
         <h1 className="text-2xl font-bold tracking-tight">Finance</h1>

         <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 md:p-8">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 space-y-6">
                     <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                           <Clock className="h-4 w-4" />
                           Coming Soon
                        </div>
                        <h2 className="text-3xl font-bold text-emerald-900">
                           New Financial Module
                        </h2>
                        <p className="mt-2 text-emerald-700">
                           Transform your business financial management with
                           advanced analysis and planning tools.
                        </p>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                           <TrendingUp className="h-6 w-6 text-emerald-600 mb-2" />
                           <h3 className="font-medium text-emerald-900">
                              Predictive Analysis
                           </h3>
                           <p className="text-sm text-gray-600 mt-1">
                              Anticipate trends and make informed decisions
                           </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                           <DollarSign className="h-6 w-6 text-emerald-600 mb-2" />
                           <h3 className="font-medium text-emerald-900">
                              Flow Management
                           </h3>
                           <p className="text-sm text-gray-600 mt-1">
                              Control and optimize your cash flow
                           </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                           <PieChart className="h-6 w-6 text-emerald-600 mb-2" />
                           <h3 className="font-medium text-emerald-900">
                              Visual Reports
                           </h3>
                           <p className="text-sm text-gray-600 mt-1">
                              Visualize complex data intuitively
                           </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                           <Calendar className="h-6 w-6 text-emerald-600 mb-2" />
                           <h3 className="font-medium text-emerald-900">
                              Planning
                           </h3>
                           <p className="text-sm text-gray-600 mt-1">
                              Create accurate budgets and forecasts
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="md:w-1/2 relative">
                     <div className="relative h-64 w-full">
                        <div className="absolute -right-4 -top-4 h-20 w-20 bg-emerald-100 rounded-full opacity-50"></div>
                        <div className="absolute -left-4 -bottom-4 h-16 w-16 bg-emerald-200 rounded-full opacity-50"></div>
                        <Image
                           src={stadis}
                           alt="Finanzas avanzadas"
                           fill
                           className="object-contain z-10 relative"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-emerald-700 text-white p-4 flex justify-between items-center">
               <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>Estimated launch: Q1 2025</span>
               </div>
               <div className="text-sm">
                  <span className="font-medium">Progress:</span> 25% Completed
               </div>
            </div>
         </div>

         {/* Contenido existente de la página de finanzas */}
      </div>
   );
};
export default Finance;
