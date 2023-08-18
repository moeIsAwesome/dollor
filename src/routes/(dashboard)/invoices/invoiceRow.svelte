<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';
  import ThreeDots from '$lib/components/Icon/ThreeDots.svelte';
  import View from '$lib/components/Icon/View.svelte';
  export let invoice: Invoice;
</script>

<div
  class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
>
  <div class="status">
    <Tag className="ml-auto lg:ml-0" label={invoice.invoiceStatus} />
  </div>
  <div class="text-sm lg:text-lg dueDate">{invoice.dueDate}</div>
  <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
  <div class="lg:text-xl font-bold clientName text-base">
    {invoice.client.name}
  </div>
  <div class="text-sm lg:text-lg font-bold font-mono amount text-right">
    $504.00
  </div>
  <div class="text-sm lg:text-lg viewButton hidden lg:block">
    <a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
  </div>
  <div class="text-lg center moreButton hidden lg:block">
    <button class=" text-pastelPurple hover:text-daisyBush"
      ><ThreeDots /></button
    >
  </div>
  <div />
</div>

<style lang="postcss">
  .invoice-row {
    grid-template-areas:
      'invoiceNumber invoiceNumber'
      'clientName amount'
      'dueDate status';
  }

  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }

  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .dueDate {
    grid-area: dueDate;
  }

  .invoice-row .invoiceNumber {
    grid-area: invoiceNumber;
  }

  .invoice-row .clientName {
    grid-area: clientName;
  }

  .invoice-row .amount {
    grid-area: amount;
  }

  .invoice-row .viewButton {
    grid-area: viewButton;
  }

  .invoice-row .moreButton {
    grid-area: moreButton;
  }
</style>
