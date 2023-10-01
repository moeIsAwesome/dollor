import { getClientById } from '$lib/stores/ClientStore';

export function load({ params }) {
  const id = params?.id;
  const client = getClientById(id);
  return { client };
}
