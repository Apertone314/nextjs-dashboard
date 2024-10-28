import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
//import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import { fetchClients} from '@/app/lib/data';


export default async function Page() {
  const clients = await fetchClients();
    return (    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Tableau de board
      </h1>

        { <CustomersTable customers={clients} /> }

    </main>);
  }