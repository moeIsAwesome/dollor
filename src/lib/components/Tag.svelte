<script lang="ts">
  export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' = 'draft';
</script>

<div
  class="text-md rounded-full w-20 text-center font-bold capitalize text-pastelPurple border-pastelPurple border-1"
  class:inverted={label === 'draft'}
  class:success={label === 'sent' || label === 'current'}
  class:alert={label === 'late'}
  class:archive={label === 'paid'}
>
  {label}
</div>

<style lang="postcss">
  .inverted {
    @apply border-pastelPurple text-pastelPurple;
  }
  .success {
    @apply border-robinEggBlue text-blueGem bg-robinEggBlue;
  }
  .alert {
    @apply border-scarlet bg-scarlet text-goldenFizz;
  }
  .archive {
    @apply border-pastelPurple bg-pastelPurple text-white;
  }
</style>
