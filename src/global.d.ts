interface Invoice {
  client: Client;
  createdAt: string;
  dueDate: string;
  id: string;
  invoiceNumber: string;
  invoiceStatus: invoiceStatus;
  issuedDate: string;
  lineItems?: LineItem[];
  notes?: string;
  subject?: string;
  terms?: string;
}
interface LineItem {
  amount: number;
  description: string;
  id: string;
  quantity: number;
}
interface Client {
  clientState: clientStatues;
  city: string;
  email: string;
  id: string;
  name: string;
  state: string;
  street: string;
  zip: string;
}
