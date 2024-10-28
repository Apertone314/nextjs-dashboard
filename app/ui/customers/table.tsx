import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
  Client,
} from '@/app/lib/definitions';

export default async function CustomersTable({
  customers,
}: {
  customers: Client[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Clients
      </h1>
      <Search placeholder="Recherche client..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.pkey}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                          <p>{customer.first_name}</p>
                            <p>{customer.last_name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.town}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Type</p>
                        <p className="font-medium">{customer.type_entity}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Téléphone</p>
                        <p className="font-medium">{customer.phone_nb}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p><a href={customer.solar_edge_link}>Solar Edge Designer</a></p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Prénom
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nom
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                     Code Postal
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Ville
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Télephone
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.pkey} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                        
                          <p>{customer.first_name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.last_name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.zip_code}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.town}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.phone_nb}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
