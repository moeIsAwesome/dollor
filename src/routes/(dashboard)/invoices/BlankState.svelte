<script>
  import BlankRow from '$lib/components/BlankRow.svelte';
  import InvoiceRowHeader from './InvoiceRowHeader.svelte';
</script>

<div>
  <div class="lg:-mt-14 -mt-8 md:-mt-6">
    <h2
      class="md:bg-arrowRightUP bg-left bg-arrowLeftUp pt-14 pl-24 md:pr-28 md:pl-0 text-left md:text-right mb-10 bg-no-repeat md:bg-right font-handwriting md:text-4xl font-bold text-2xl text-caribbeanGreen"
    >
      Add your first invoice
    </h2>
  </div>

  <InvoiceRowHeader className="text-fog" />

  <BlankRow />
  <BlankRow />
  <BlankRow />
  <!-- Inoice header -->

  <!-- blank rows -->
</div>
