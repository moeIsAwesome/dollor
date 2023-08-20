<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';
  import ThreeDots from '$lib/components/Icon/ThreeDots.svelte';
  import View from '$lib/components/Icon/View.svelte';
  import { centsToDollors, sumLineItems } from '$lib/utils/moneyHelper';
  import { convertDate, isLate } from '$lib/utils/dateHelpers';
  import AdditionalOptions from '$lib/components/AdditionalOptions.svelte';
  import Send from '$lib/components/Icon/Send.svelte';
  import Edit from '$lib/components/Icon/Edit.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';

  export let invoice: Invoice;

  let isAdditionalMenuShowing = false;
  let isOptionDisabled = false;
  const handleDelete = () => {
    console.log('delete');
  };
  const handleEdit = () => {
    console.log('edited');
  };
  const handleSendInvoice = () => {
    console.log('Send invoice');
  };

  const getInvoiceLable = () => {
    if (invoice.invoiceStatus === 'draft') {
      return 'draft';
    } else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
      isOptionDisabled = true;
      return 'sent';
    } else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
      isOptionDisabled = true;
      return 'late';
    } else if (invoice.invoiceStatus === 'paid') {
      isOptionDisabled = true;
      return 'paid';
    }
  };
</script>

<div
  class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
>
  <div class="status">
    <Tag className="ml-auto lg:ml-0" label={getInvoiceLable()} />
  </div>
  <div class="text-sm lg:text-lg dueDate">{convertDate(invoice.dueDate)}</div>
  <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
  <div class="lg:text-xl font-bold clientName text-base">
    {invoice.client.name}
  </div>
  <div class="text-sm lg:text-lg font-bold font-mono amount text-right">
    ${centsToDollors(sumLineItems(invoice.lineItems))}
  </div>
  <div class="text-sm lg:text-lg viewButton hidden lg:flex">
    <a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
  </div>
  <div class="text-lg center moreButton hidden lg:flex relative">
    <button
      class=" text-pastelPurple hover:text-daisyBush
    "
      on:click={() => {
        isAdditionalMenuShowing = !isAdditionalMenuShowing;
      }}><ThreeDots /></button
    >
    {#if isAdditionalMenuShowing}
      <AdditionalOptions
        options={[
          {
            label: 'Send',
            icon: Send,
            disabled: isOptionDisabled,
            onClick: handleSendInvoice,
          },
          {
            label: 'Edit',
            icon: Edit,
            disabled: isOptionDisabled,
            onClick: handleEdit,
          },
          {
            label: 'Delete',
            icon: Trash,
            disabled: false,
            onClick: handleDelete,
          },
        ]}
      />
    {/if}
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
