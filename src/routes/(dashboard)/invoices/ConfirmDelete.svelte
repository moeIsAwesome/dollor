<script lang="ts">
  import Modal from '$lib/components/Modal.svelte';
  import Button from '$lib/components/Button.svelte';
  import { deleteInvoice } from '$lib/stores/InvoiceStore';
  import { centsToDollars, sumLineItems } from '$lib/utils/moneyHelpers';
  export let invoice: Invoice;
  export let isModalShowing = false;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<Modal isVisible={isModalShowing} on:close>
  <div
    class="flex flex-col justify-between items-center gap-6 h-full min-h-[175px]"
  >
    <div class="text-center text-xl font-bold text-daisyBush">
      Are you sure that wou want to delete this invoice to <span
        class="text-scarlet"
      >
        {invoice.client.name}</span
      >
      for
      <span class="text-scarlet"
        >{centsToDollars(sumLineItems(invoice.lineItems))}</span
      >?
    </div>
    <div class="flex gap-4">
      <Button
        label="Cancel"
        onClick={() => {
          dispatch('close');
        }}
        isAnimated={false}
        style="primary"
      />
      <Button
        label="Yes, Delete it"
        onClick={() => {
          deleteInvoice(invoice);
          dispatch('close');
        }}
        isAnimated={false}
        style="destructive"
      />
    </div>
  </div>
</Modal>
