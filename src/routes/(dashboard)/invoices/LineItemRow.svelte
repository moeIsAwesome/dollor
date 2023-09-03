<script lang="ts">
  import Trash from '$lib/components/Icon/Trash.svelte';
  import { twoDecilams, dollarsToCents } from '$lib/utils/moneyHelper';
  import { createEventDispatcher } from 'svelte';
  export let lineItem: LineItem;
  export let canDelete: boolean = false;
  let unitPrice: string = twoDecilams(lineItem.amount / lineItem.quantity);
  let amount: string = twoDecilams(lineItem.amount);

  $: {
    amount = twoDecilams(Number(unitPrice) * Number(lineItem.quantity));
    lineItem.amount = dollarsToCents(Number(amount));
  }

  const dispatch = createEventDispatcher();
</script>

<div class="invoice-line-item border-b-2 border-fog py-2">
  <div>
    <input
      class="line-item"
      type="text"
      name="description"
      bind:value={lineItem.description}
    />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="unitPrice"
      step="0.01"
      min="0"
      bind:value={unitPrice}
      on:blur={() => {
        unitPrice = twoDecilams(Number(unitPrice));
      }}
    />
  </div>

  <div>
    <input
      class="line-item text-center"
      type="number"
      name="quantity"
      min="0"
      bind:value={lineItem.quantity}
    />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="amount"
      step="0.01"
      min="0"
      disabled
      bind:value={amount}
    />
  </div>

  {#if canDelete}
    <div>
      <button
        on:click|preventDefault={() => {
          dispatch('removeLineItem', lineItem.id);
        }}
        class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo"
        ><Trash /></button
      >
    </div>
  {/if}
</div>

<style lang="postcss">
  input[type='text'],
  input[type='number'] {
    @apply h-10 w-full border-b-2 border-dashed border-stone-300;
  }

  input[type='text'] {
    @apply font-sansSerif text-xl font-bold;
  }

  input[type='number'] {
    @apply font-mono text-base;
  }

  input[type='text']:focus,
  input[type='number']:focus {
    @apply border-solid border-lavenderIndigo outline-none;
  }

  input[type='text']:disabled,
  input[type='number']:disabled {
    @apply border-b-0 bg-transparent px-0;
  }
</style>
