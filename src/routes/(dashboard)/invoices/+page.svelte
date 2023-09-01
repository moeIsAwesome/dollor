<script lang="ts">
  import Search from '$lib/components/Search.svelte';

  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import { invoices, loadInvoices } from '$lib/stores/invoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './invoiceRow.svelte';
  import { sumInvoices, centsToDollors } from '$lib/utils/moneyHelper';
  import BlankState from './BlankState.svelte';
  import InvoiceRowHeader from './InvoiceRowHeader.svelte';
  import Button from '$lib/components/Button.svelte';
  import SlidePanel from '$lib/components/SlidePanel.svelte';
  import InvoiceForm from './InvoiceForm.svelte';

  let isInvoiceFormShowing: boolean = false;

  onMount(() => {
    loadInvoices();
    console.log($invoices);
  });
</script>

<svelte:head>
  <title>Invoices | The dollor</title>
</svelte:head>

<div
  class="flex justify-between mb-7 gap-y-6 md:gap-y-4 lg:mb-16 flex-col-reverse md:flex-row items-start md:items-center"
>
  {#if $invoices.length > 0}
    <Search />
  {:else}
    <div />
  {/if}

  <div>
    <Button
      label="+ Invoice"
      onClick={() => {
        isInvoiceFormShowing = true;
      }}
    />
  </div>
</div>

<div />

<!--Invoices -->

{#if invoices === null}
  Loading ...
{:else if $invoices.length <= 0}
  <BlankState />
{:else}
  <InvoiceRowHeader className="text-daisyBush" />
  <div class="flex flex-col-reverse">
    {#each $invoices as invoice}
      <InvoiceRow {invoice} />
    {/each}
  </div>
  <CircledAmount
    label="Total"
    amount={`$${centsToDollors(sumInvoices($invoices))}`}
  />
{/if}

{#if isInvoiceFormShowing}
  <SlidePanel
    on:closePanel={() => {
      isInvoiceFormShowing = false;
    }}><InvoiceForm /></SlidePanel
  >
{/if}
