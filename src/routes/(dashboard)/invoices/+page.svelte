<script>
  import Search from '$lib/components/Search.svelte';

  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import { invoices, loadInvoices } from '$lib/stores/invoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './invoiceRow.svelte';

  onMount(() => {
    loadInvoices();
    console.log($invoices);
  });
</script>

Invoices

<svelte:head>
  <title>Invoices | The dollor</title>
</svelte:head>

<div
  class="flex justify-between mb-7 gap-y-6 md:gap-y-4 lg:mb-16 flex-col-reverse md:flex-row items-start md:items-center"
>
  <Search />

  <div>
    <button
      class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo lg:px-10 lg:py-3 font-sansSerif lg:text-xl text-base py-2 px-5 font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
      >+ Invoice</button
    >
  </div>
</div>

<div>
  <!-- Header -->
  <div class=" text-daisyBush invoice-table table-header hidden lg-grid">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div />
    <div />
  </div>
</div>

<!--Invoices -->
{#each $invoices as invoice}
  <InvoiceRow {invoice} />
{/each}

<CircledAmount label="Total" amount="$504.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black text-daisyBush;
  }
</style>
